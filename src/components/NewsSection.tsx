import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, ExternalLink } from "lucide-react";

const NewsSection = () => {
  const newsItems = [
    {
      date: "2024-06-01",
      title: "Open Day 2024",
      description: "Join us for our Open Day! Meet our teachers, tour the campus, and discover what makes DCCS special. Experience our vibrant learning community firsthand.",
      category: "Event",
      featured: true
    },
    {
      date: "2024-05-15",
      title: "New Online High School Launch",
      description: "We are excited to announce our new Online High School for Grades 8–12. Quality education with flexibility and Christian values.",
      category: "Announcement",
      featured: true
    },
    {
      date: "2024-04-20",
      title: "Term 2 Newsletter",
      description: "Read our latest newsletter for updates on student achievements, upcoming events, and community highlights.",
      category: "Newsletter",
      featured: false
    },
    {
      date: "2024-03-15",
      title: "Sports Day Success",
      description: "Our annual sports day was a tremendous success with students showcasing their athletic talents and team spirit.",
      category: "Event",
      featured: false
    },
    {
      date: "2024-02-28",
      title: "Academic Excellence Awards",
      description: "Celebrating our students' outstanding academic achievements in the first term. Congratulations to all our award recipients!",
      category: "Achievement",
      featured: false
    },
    {
      date: "2024-02-10",
      title: "New Learning Resources",
      description: "We've invested in new educational technology and resources to enhance our students' learning experience.",
      category: "Update",
      featured: false
    }
  ];

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-GB', { 
      day: 'numeric', 
      month: 'short', 
      year: 'numeric' 
    });
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

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {newsItems.map((item, index) => (
          <Card 
            key={`${item.date}-${item.title}`}
            className={`glass-card border-0 hover:scale-105 transition-all duration-300 hover:shadow-2xl animate-slide-up ${
              item.featured ? 'md:col-span-2 lg:col-span-1' : ''
            }`}
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <CardHeader className="pb-4">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center space-x-2 text-white/70">
                  <Calendar className="h-4 w-4" />
                  <time dateTime={item.date} className="text-sm font-medium">
                    {formatDate(item.date)}
                  </time>
                </div>
                <Badge className={getCategoryColor(item.category)}>
                  {item.category}
                </Badge>
              </div>
              
              <CardTitle className="text-xl font-bold text-white hover:text-dccs-yellow transition-colors">
                {item.title}
              </CardTitle>
            </CardHeader>
            
            <CardContent>
              <p className="text-white/80 leading-relaxed mb-4">
                {item.description}
              </p>
              
              <div className="flex items-center text-dccs-blue-light hover:text-dccs-blue cursor-pointer transition-colors">
                <span className="text-sm font-medium mr-2">Read more</span>
                <ExternalLink className="h-4 w-4" />
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default NewsSection;