'use client';

import React, { useState, useMemo, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import { FunnelIcon, XMarkIcon } from '@heroicons/react/24/outline';
import { newsArticles } from '@/data/newsroom';
import NewsCard from '@/components/NewsCard';
import FooterSection from '@/components/FooterSection';
import StandardHeroSection from '@/components/StandardHeroSection';

const NewsRoomPage: React.FC = () => {
  const searchParams = useSearchParams();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategories, setSelectedCategories] = useState<string[]>(['blog', 'article', 'news', 'event']);
  const [selectedAuthor, setSelectedAuthor] = useState('');
  const [dateRange, setDateRange] = useState<{ start: string; end: string }>({
    start: '',
    end: ''
  });
  const [isFilterVisible, setIsFilterVisible] = useState(false);

  // Handle URL parameter filtering
  useEffect(() => {
    const categoryParam = searchParams.get('category');
    if (categoryParam) {
      // If a specific category is provided via URL, filter to just that category
      setSelectedCategories([categoryParam]);
    }
  }, [searchParams]);

  // Filter articles based on search and filters
  const filteredArticles = useMemo(() => {
    return newsArticles.filter(article => {
      // Search term filter
      const matchesSearch = searchTerm === '' || 
        article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        article.description.toLowerCase().includes(searchTerm.toLowerCase());

      // Category filter
      const matchesCategory = selectedCategories.includes(article.category);

      // Author filter
      const matchesAuthor = selectedAuthor === '' || 
        article.author.name.toLowerCase().includes(selectedAuthor.toLowerCase());

      // Date range filter
      const articleDate = new Date(article.publishedAt);
      const startDate = dateRange.start ? new Date(dateRange.start) : null;
      const endDate = dateRange.end ? new Date(dateRange.end) : null;
      
      const matchesDateRange = (!startDate || articleDate >= startDate) && 
                              (!endDate || articleDate <= endDate);

      return matchesSearch && matchesCategory && matchesAuthor && matchesDateRange;
    });
  }, [searchTerm, selectedCategories, selectedAuthor, dateRange]);

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <StandardHeroSection
        title="Newsroom"
        subtitle="Insights and Analysis"
        description="Stay ahead of industry trends with our expert insights, research, and analysis. Access comprehensive resources covering emerging technologies, best practices, and strategic guidance."
        backgroundImage="/TaskImages/insights.jpg"
        maxContentWidth="max-w-4xl"
      />

      {/* Articles Grid */}
      <div className="py-4 sm:py-8 md:py-12 lg:py-16">
        <div className="max-w-[2000px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-4 sm:mb-6 md:mb-8">
            <h2 className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold text-credera-dark mb-1 sm:mb-2">
              Latest Articles & Insights
            </h2>
            <p className="text-xs sm:text-sm text-gray-600">
              Showing {filteredArticles.length} articles
            </p>
          </div>

          {/* Updated grid for mobile: 2 cards per row */}
          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 sm:gap-4 md:gap-6 lg:gap-8">
            {filteredArticles.map((article) => (
              <NewsCard key={article.id} {...article} />
            ))}
          </div>

          {filteredArticles.length === 0 && (
            <div className="text-center py-8 sm:py-12 md:py-16">
              <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-500 mb-2 sm:mb-3 md:mb-4">No articles found</p>
              <p className="text-xs sm:text-sm text-gray-400">Try adjusting your search terms or filters</p>
            </div>
          )}
        </div>
      </div>
      
      {/* Footer */}
      <FooterSection />
    </div>
  );
};

export default NewsRoomPage;