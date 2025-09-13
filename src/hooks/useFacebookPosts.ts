import { useState, useEffect } from 'react';

interface FacebookPost {
  id: string;
  message?: string;
  created_time: string;
  permalink_url: string;
  story?: string;
}

interface FacebookAPIResponse {
  data: FacebookPost[];
}

export const useFacebookPosts = () => {
  const [posts, setPosts] = useState<FacebookPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchFacebookPosts = async () => {
      try {
        setLoading(true);
        
        // Facebook Graph API endpoint
        const pageId = 'officialdccschool'; // Your Facebook page username/ID
        const accessToken = process.env.REACT_APP_FACEBOOK_ACCESS_TOKEN;
        
        if (!accessToken) {
          throw new Error('Facebook access token not configured');
        }

        const fields = 'id,message,created_time,permalink_url,story';
        const limit = 6; // Number of posts to fetch
        
        const url = `https://graph.facebook.com/v18.0/${pageId}/posts?fields=${fields}&limit=${limit}&access_token=${accessToken}`;
        
        const response = await fetch(url);
        
        if (!response.ok) {
          throw new Error(`Facebook API error: ${response.status}`);
        }
        
        const data: FacebookAPIResponse = await response.json();
        setPosts(data.data || []);
        setError(null);
      } catch (err) {
        console.error('Error fetching Facebook posts:', err);
        setError(err instanceof Error ? err.message : 'Failed to fetch posts');
        
        // Fallback to static posts if API fails
        setPosts([
          {
            id: 'fallback-1',
            message: 'Open Day 2024 - Join us for our Open Day! Meet our teachers, tour the campus, and discover what makes DCCS special.',
            created_time: '2024-06-01T10:00:00Z',
            permalink_url: 'https://www.facebook.com/officialdccschool/',
          },
          {
            id: 'fallback-2',
            message: 'New Educational Programs - We are excited to announce new educational programs and initiatives to enhance our students\' learning experience.',
            created_time: '2024-05-15T14:30:00Z',
            permalink_url: 'https://www.facebook.com/officialdccschool/',
          },
          {
            id: 'fallback-3',
            message: 'Term 2 Newsletter - Read our latest newsletter for updates on student achievements, upcoming events, and community highlights.',
            created_time: '2024-04-20T09:15:00Z',
            permalink_url: 'https://www.facebook.com/officialdccschool/',
          }
        ]);
      } finally {
        setLoading(false);
      }
    };

    fetchFacebookPosts();
  }, []);

  return { posts, loading, error };
};