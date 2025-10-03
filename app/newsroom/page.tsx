'use client';

import React, { useState, useMemo, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import { FunnelIcon, XMarkIcon } from '@heroicons/react/24/outline';
import { newsArticles } from '@/data/newsroom';
import NewsCard from '@/components/NewsCard';
import NewsFilter from '@/components/NewsFilter';
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

      {/* Filters Section */}
      <div className="bg-gray-50 py-4">
        <div className="max-w-[2000px] mx-auto px-8">
          <div className="flex justify-end">
            <button
              onClick={() => setIsFilterVisible(!isFilterVisible)}
              className="flex items-center gap-2 px-4 py-2 rounded-md bg-white border border-gray-300 text-sm font-medium hover:bg-gray-100"
            >
              {isFilterVisible ? (
                <>
                  <XMarkIcon className="w-5 h-5" />
                  <span>Hide Filters</span>
                </>
              ) : (
                <>
                  <FunnelIcon className="w-5 h-5" />
                  <span>Show Filters</span>
                </>
              )}
            </button>
          </div>
          {isFilterVisible && (
            <div className="mt-4">
              <NewsFilter
                searchTerm={searchTerm}
                onSearchChange={setSearchTerm}
                selectedCategories={selectedCategories}
                onCategoriesChange={setSelectedCategories}
                selectedAuthor={selectedAuthor}
                onAuthorChange={setSelectedAuthor}
                dateRange={dateRange}
                onDateRangeChange={setDateRange}
              />
            </div>
          )}
        </div>
      </div>

      {/* Articles Grid */}
      <div className="py-16">
        <div className="max-w-[2000px] mx-auto px-8">
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-credera-dark mb-2">
              Latest Articles & Insights
            </h2>
            <p className="text-gray-600">
              Showing {filteredArticles.length} articles
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {filteredArticles.map((article) => (
              <NewsCard key={article.id} {...article} />
            ))}
          </div>

          {filteredArticles.length === 0 && (
            <div className="text-center py-16">
              <p className="text-xl text-gray-500 mb-4">No articles found</p>
              <p className="text-gray-400">Try adjusting your search terms or filters</p>
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