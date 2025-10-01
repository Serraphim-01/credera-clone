export interface NewsArticle {
  id: string;
  title: string;
  description: string;
  category: 'blog' | 'article' | 'news' | 'event';
  author: {
    name: string;
    profileImage: string;
  };
  publishedAt: string;
  imageUrl: string;
  readTime: number;
  tags: string[];
  content?: string;
}

export const newsArticles: NewsArticle[] = [
  {
    id: 'cloud-transformation-guide',
    title: 'Complete Guide to Cloud Transformation Strategy',
    description: 'Discover the essential steps, challenges, and best practices for successfully transforming your business infrastructure to the cloud.',
    category: 'blog',
    author: {
      name: 'Sarah Mitchell',
      profileImage: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop'
    },
    publishedAt: '2024-01-15T10:00:00Z',
    imageUrl: 'https://images.pexels.com/photos/844124/pexels-photo-844124.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
    readTime: 8,
    tags: ['Cloud Computing', 'Digital Transformation', 'Strategy'],
    content: 'Full cloud transformation guide content...'
  },
  {
    id: 'ai-enterprise-adoption',
    title: 'AI in Enterprise: Adoption Strategies That Work',
    description: 'Learn how leading enterprises are successfully integrating AI technologies to drive innovation and competitive advantage.',
    category: 'article',
    author: {
      name: 'Dr. Michael Chen',
      profileImage: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop'
    },
    publishedAt: '2024-01-12T14:30:00Z',
    imageUrl: 'https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
    readTime: 12,
    tags: ['Artificial Intelligence', 'Enterprise', 'Innovation'],
    content: 'AI enterprise adoption content...'
  },
  {
    id: 'cybersecurity-trends-2024',
    title: 'Cybersecurity Trends to Watch in 2024',
    description: 'Stay ahead of emerging cyber threats with our comprehensive analysis of the latest cybersecurity trends and technologies.',
    category: 'news',
    author: {
      name: 'Alex Rodriguez',
      profileImage: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop'
    },
    publishedAt: '2024-01-10T09:15:00Z',
    imageUrl: 'https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
    readTime: 6,
    tags: ['Cybersecurity', 'Trends', 'Technology'],
    content: 'Cybersecurity trends content...'
  },
  {
    id: 'digital-transformation-summit',
    title: 'Digital Transformation Summit 2024',
    description: 'Join industry leaders and experts for insights on the latest digital transformation strategies and technologies.',
    category: 'event',
    author: {
      name: 'Emma Thompson',
      profileImage: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop'
    },
    publishedAt: '2025-03-15T10:00:00Z',
    imageUrl: 'https://images.pexels.com/photos/1181396/pexels-photo-1181396.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
    readTime: 3,
    tags: ['Event', 'Digital Transformation', 'Summit'],
    content: 'Event details content...'
  },
  {
    id: 'data-analytics-best-practices',
    title: 'Data Analytics Best Practices for Modern Enterprises',
    description: 'Master the art of data analytics with proven strategies and tools that deliver actionable business insights.',
    category: 'blog',
    author: {
      name: 'David Kumar',
      profileImage: 'https://images.pexels.com/photos/1040880/pexels-photo-1040880.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop'
    },
    publishedAt: '2024-01-05T11:45:00Z',
    imageUrl: 'https://images.pexels.com/photos/669610/pexels-photo-669610.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
    readTime: 10,
    tags: ['Data Analytics', 'Business Intelligence', 'Enterprise'],
    content: 'Data analytics best practices content...'
  },
  {
    id: 'remote-work-security',
    title: 'Securing Remote Work Environments',
    description: 'Essential security measures and best practices for protecting your organization in a remote work world.',
    category: 'article',
    author: {
      name: 'Lisa Park',
      profileImage: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop'
    },
    publishedAt: '2024-01-03T13:20:00Z',
    imageUrl: 'https://images.pexels.com/photos/4492129/pexels-photo-4492129.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
    readTime: 7,
    tags: ['Remote Work', 'Security', 'Best Practices'],
    content: 'Remote work security content...'
  },
  {
    id: 'partnership-aws-announcement',
    title: 'New Strategic Partnership with AWS Announced',
    description: 'We are excited to announce our expanded partnership with Amazon Web Services to deliver enhanced cloud solutions.',
    category: 'news',
    author: {
      name: 'Robert Johnson',
      profileImage: 'https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop'
    },
    publishedAt: '2024-01-01T12:00:00Z',
    imageUrl: 'https://images.pexels.com/photos/1181248/pexels-photo-1181248.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
    readTime: 4,
    tags: ['Partnership', 'AWS', 'Cloud Services'],
    content: 'Partnership announcement content...'
  },
  {
    id: 'tech-innovation-webinar',
    title: 'Technology Innovation Webinar Series',
    description: 'Monthly webinar series featuring cutting-edge technology trends and their practical business applications.',
    category: 'event',
    author: {
      name: 'Jennifer Lee',
      profileImage: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop'
    },
    publishedAt: '2025-02-20T09:00:00Z',
    imageUrl: 'https://images.pexels.com/photos/356043/pexels-photo-356043.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
    readTime: 2,
    tags: ['Webinar', 'Technology', 'Innovation'],
    content: 'Webinar series content...'
  },
  {
    id: 'blockchain-enterprise-guide',
    title: 'Blockchain Implementation Guide for Enterprises',
    description: 'Comprehensive guide to understanding and implementing blockchain technology in enterprise environments.',
    category: 'blog',
    author: {
      name: 'Mark Williams',
      profileImage: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop'
    },
    publishedAt: '2023-12-25T10:30:00Z',
    imageUrl: 'https://images.pexels.com/photos/844124/pexels-photo-844124.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
    readTime: 15,
    tags: ['Blockchain', 'Enterprise', 'Implementation'],
    content: 'Blockchain implementation content...'
  },
  {
    id: 'sustainability-tech-solutions',
    title: 'Sustainable Technology Solutions for Modern Business',
    description: 'Explore how technology can drive sustainability initiatives and create positive environmental impact.',
    category: 'article',
    author: {
      name: 'Rachel Green',
      profileImage: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop'
    },
    publishedAt: '2023-12-22T14:15:00Z',
    imageUrl: 'https://images.pexels.com/photos/1181396/pexels-photo-1181396.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
    readTime: 9,
    tags: ['Sustainability', 'Technology', 'Environment'],
    content: 'Sustainable technology content...'
  },
  {
    id: 'award-recognition-2023',
    title: 'Company Receives Industry Excellence Award 2023',
    description: 'We are honored to receive the Industry Excellence Award for our outstanding contributions to digital transformation.',
    category: 'news',
    author: {
      name: 'CEO Office',
      profileImage: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop'
    },
    publishedAt: '2023-12-20T16:45:00Z',
    imageUrl: 'https://images.pexels.com/photos/1181248/pexels-photo-1181248.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
    readTime: 3,
    tags: ['Award', 'Recognition', 'Excellence'],
    content: 'Award recognition content...'
  },
  {
    id: 'future-work-conference',
    title: 'Future of Work Conference 2024',
    description: 'Annual conference exploring the evolution of work, technology trends, and their impact on business operations.',
    category: 'event',
    author: {
      name: 'Conference Team',
      profileImage: 'https://images.pexels.com/photos/1040880/pexels-photo-1040880.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop'
    },
    publishedAt: '2025-04-10T14:00:00Z',
    imageUrl: 'https://images.pexels.com/photos/356043/pexels-photo-356043.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
    readTime: 5,
    tags: ['Conference', 'Future of Work', 'Technology'],
    content: 'Conference details content...'
  }
];

export const getArticleById = (id: string): NewsArticle | undefined => {
  return newsArticles.find(article => article.id === id);
};

export const getArticlesByCategory = (category: NewsArticle['category']): NewsArticle[] => {
  return newsArticles.filter(article => article.category === category);
};

export const getAllCategories = (): NewsArticle['category'][] => {
  return ['blog', 'article', 'news', 'event'];
};

export const getAllAuthors = (): string[] => {
  const authors = [...new Set(newsArticles.map(article => article.author.name))];
  return authors.sort();
};