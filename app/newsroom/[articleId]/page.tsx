import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { getArticleById, newsArticles } from '@/data/newsroom';
import { NewsArticle } from '@/types';
import CountdownTimer from '@/components/CountdownTimer';

interface NewsArticlePageProps {
  params: Promise<{ articleId: string }>;
}

export async function generateStaticParams() {
  return newsArticles.map((article) => ({
    articleId: article.id,
  }));
}

const NewsArticlePage: React.FC<NewsArticlePageProps> = async ({ params }) => {
  const { articleId } = await params;
  const article = getArticleById(articleId);

  if (!article) {
    notFound();
  }

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const formatTime = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleTimeString('en-US', {
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  const getCategoryColor = (cat: string) => {
    switch (cat) {
      case 'blog': return 'bg-blue-500';
      case 'article': return 'bg-green-500';
      case 'news': return 'bg-red-500';
      case 'event': return 'bg-purple-500';
      default: return 'bg-gray-500';
    }
  };

  // Generate article content based on the description and category
  const generateArticleContent = (article: NewsArticle): string => {
    const paragraphs = [
      article.description,
      "This comprehensive analysis delves deep into the current trends and emerging patterns that are shaping our industry. Our research team has conducted extensive studies to bring you the most accurate and actionable insights.",
      "Through collaboration with industry leaders and subject matter experts, we have identified key challenges and opportunities that organizations face in today's rapidly evolving landscape. These findings provide valuable guidance for strategic decision-making.",
      "The implications of these developments extend far beyond immediate business operations. They represent fundamental shifts in how we approach technology, processes, and human capital management in the digital age.",
      "Our methodology combines quantitative data analysis with qualitative insights from field experts. This dual approach ensures that our recommendations are both data-driven and practically applicable in real-world scenarios.",
      "Looking ahead, organizations that proactively adapt to these changes will be better positioned to thrive in an increasingly competitive market. The key is to balance innovation with operational stability while maintaining focus on customer value creation."
    ];
    
    return paragraphs.join('\n\n');
  };

  const content = article.content || generateArticleContent(article);

  return (
    <div className="min-h-screen bg-white">
      {/* Breadcrumb */}
      <div className="bg-gray-50 py-4">
        <div className="max-w-4xl mx-auto px-8">
          <nav className="flex items-center space-x-2 text-sm text-gray-600">
            <Link href="/" className="hover:text-credera-red transition-colors">Home</Link>
            <span>/</span>
            <Link href="/newsroom" className="hover:text-credera-red transition-colors">NewsRoom</Link>
            <span>/</span>
            <span className="text-gray-900">{article.title}</span>
          </nav>
        </div>
      </div>

      {/* Article Header */}
      <div className="relative py-16">
        <div className="max-w-4xl mx-auto px-8">
          <div className="mb-8">
            <div className="flex items-center space-x-4 mb-6">
              <span className={`px-3 py-1 rounded-full text-white text-sm font-semibold uppercase tracking-wide ${getCategoryColor(article.category)}`}>
                {article.category}
              </span>
              <span className="text-gray-500">•</span>
              <span className="text-gray-600">{formatDate(article.publishedAt)} at {formatTime(article.publishedAt)}</span>
              <span className="text-gray-500">•</span>
              <span className="text-gray-600">{article.readTime} min read</span>
              {article.category === 'event' && (
                <>
                  <span className="text-gray-500">•</span>
                  <CountdownTimer eventDate={article.publishedAt} />
                </>
              )}
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold text-credera-dark mb-6 leading-tight">
              {article.title}
            </h1>
            
            <p className="text-xl text-gray-600 leading-relaxed mb-8">
              {article.description}
            </p>
            
            {/* Author Info */}
            <div className="flex items-center space-x-4">
              <div className="relative w-12 h-12 rounded-full overflow-hidden">
                <Image
                  src={article.author.profileImage}
                  alt={article.author.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <p className="font-semibold text-credera-dark">{article.author.name}</p>
                <p className="text-sm text-gray-600">Author</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Featured Image */}
      <div className="mb-12">
        <div className="max-w-6xl mx-auto px-8">
          <div className="relative w-full h-96 md:h-[500px] rounded-lg overflow-hidden shadow-xl">
            <Image
              src={article.imageUrl}
              alt={article.title}
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>

      {/* Article Content */}
      <div className="pb-16">
        <div className="max-w-4xl mx-auto px-8">
          <div className="prose prose-lg max-w-none">
            {content.split('\n\n').map((paragraph, index) => (
              <p key={index} className="text-gray-700 leading-relaxed mb-6">
                {paragraph}
              </p>
            ))}
          </div>

          {/* Tags */}
          {article.tags.length > 0 && (
            <div className="mt-12 pt-8 border-t border-gray-200">
              <h3 className="text-lg font-semibold text-credera-dark mb-4">Tags</h3>
              <div className="flex flex-wrap gap-2">
                {article.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm hover:bg-gray-200 transition-colors"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Back to NewsRoom */}
          <div className="mt-12 pt-8 border-t border-gray-200">
            <Link
              href="/newsroom"
              className="inline-flex items-center text-credera-red hover:text-red-600 font-semibold transition-colors"
            >
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              Back to NewsRoom
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsArticlePage;