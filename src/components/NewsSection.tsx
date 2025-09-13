import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, ExternalLink, Loader2 } from "lucide-react";
import { useFacebookPosts } from "@/hooks/useFacebookPosts";

const NewsSection = () => {
  const { posts, loading, error } = useFacebookPosts();

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-GB', { 
      day: 'numeric', 
      month: 'short', 
      year: 'numeric' 
    });
  };

  const getPostCategory = (message?: string, story?: string) => {
    const content = (message || story || '').toLowerCase();
    if (content.includes('open day') || content.includes('event')) return 'Event';
    if (content.includes('newsletter')) return 'Newsletter';
    if (content.includes('award') || content.includes('achievement')) return 'Achievement';
    if (content.includes('new') || content.includes('launch')) return 'Announcement';
    return 'Update';
  };

  const getCategoryColor = (category: string) => {
    const colors = {
      "Event": "bg-dccs-blue text-white",
      "Announcement": "bg-dccs-red text-white",
      "Newsletter": "bg-dccs-yellow text-gray-800",
      "Achievement": "bg-green-500 text-white",
      "Update": "bg-purple-500 text-white"
    };
    return colors[category as keyof typeof colors] || "bg-gray-500 text-white";
  };

  const truncateMessage = (message: string, maxLength: number = 150) => {
    if (message.length <= maxLength) return message;
    return message.substring(0, maxLength).trim() + '...';
  };

  return (
    <section id="news" className="space-y-8">
      <div className="glass-card rounded-2xl p-8 text-center animate-fade-in">
        <h2 className="text-4xl font-bold mb-6 text-white drop-shadow-lg">
          Latest News
        </h2>
        <p className="text-lg text-white/90 leading-relaxed">
          Stay updated with the latest happenings at DCCS - from exciting events to important announcements.
        </p>
      </div>

      {loading && (
        <div className="flex justify-center items-center py-12">
          <Loader2 className="h-8 w-8 animate-spin text-white" />
          <span className="ml-2 text-white">Loading Facebook posts...</span>
        </div>
      )}

      {error && (
        <div className="glass-card rounded-2xl p-6 text-center">
          <p className="text-white/80">
            {error.includes('access token') 
              ? 'Facebook integration not configured yet. Showing sample posts.' 
              : 'Unable to load Facebook posts. Showing fallback content.'
            }
          </p>
        </div>
      )}

      {!loading && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((post, index) => {
            const message = post.message || post.story || 'No content available';
            const category = getPostCategory(post.message, post.story);
            const isFirstTwo = index < 2;
            
            return (
              <Card 
                key={post.id}
                className={`glass-card border-0 hover:scale-105 transition-all duration-300 hover:shadow-2xl animate-slide-up ${
                  isFirstTwo ? 'md:col-span-2 lg:col-span-1' : ''
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader className="pb-4">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center space-x-2 text-white/70">
                      <Calendar className="h-4 w-4" />
                      <time dateTime={post.created_time} className="text-sm font-medium">
                        {formatDate(post.created_time)}
                      </time>
                    </div>
                    <Badge className={getCategoryColor(category)}>
                      {category}
                    </Badge>
                  </div>
                  
                  <CardTitle className="text-xl font-bold text-white hover:text-dccs-yellow transition-colors">
                    {category}: Latest Update
                  </CardTitle>
                </CardHeader>
                
                <CardContent>
                  <p className="text-white/80 leading-relaxed mb-4">
                    {truncateMessage(message)}
                  </p>
                  
                  <a 
                    href={post.permalink_url}
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center text-dccs-blue-light hover:text-dccs-blue transition-colors"
                  >
                    <span className="text-sm font-medium mr-2">Read more on Facebook</span>
                    <ExternalLink className="h-4 w-4" />
                  </a>
                </CardContent>
              </Card>
            );
          })}
        </div>
      )}
    </section>
  );
};

export default NewsSection;