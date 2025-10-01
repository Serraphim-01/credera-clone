'use client';

import React, { useState } from 'react';
import { NewsFilterProps } from '@/types';
import { FiSearch, FiCalendar, FiUser, FiFilter } from 'react-icons/fi';

const NewsFilter: React.FC<NewsFilterProps> = ({
  searchTerm,
  onSearchChange,
  selectedCategories,
  onCategoriesChange,
  selectedAuthor,
  onAuthorChange,
  dateRange,
  onDateRangeChange
}) => {
  const [showCategoryDropdown, setShowCategoryDropdown] = useState(false);
  
  const categories = [
    { value: 'blog', label: 'Blog' },
    { value: 'article', label: 'Article' },
    { value: 'news', label: 'News' },
    { value: 'event', label: 'Event' }
  ];

  const handleCategoryChange = (categoryValue: string) => {
    if (selectedCategories.includes(categoryValue)) {
      onCategoriesChange(selectedCategories.filter(cat => cat !== categoryValue));
    } else {
      onCategoriesChange([...selectedCategories, categoryValue]);
    }
  };

  const clearAllFilters = () => {
    onSearchChange('');
    onCategoriesChange(['blog', 'article', 'news', 'event']);
    onAuthorChange('');
    onDateRangeChange({ start: '', end: '' });
  };

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
      <div className="flex flex-col lg:flex-row gap-6 items-start lg:items-end">
        {/* Search */}
        <div className="flex-1">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Search Articles
          </label>
          <div className="relative">
            <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => onSearchChange(e.target.value)}
              placeholder="Search by title or description..."
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-credera-red focus:border-transparent outline-none transition-all duration-200"
            />
          </div>
        </div>

        {/* Category Filter */}
        <div className="relative">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Category
          </label>
          <button
            onClick={() => setShowCategoryDropdown(!showCategoryDropdown)}
            className="flex items-center justify-between min-w-[150px] px-4 py-2 border border-gray-300 rounded-md hover:border-gray-400 focus:ring-2 focus:ring-credera-red focus:border-transparent outline-none transition-all duration-200"
          >
            <span className="flex items-center">
              <FiFilter className="w-4 h-4 mr-2 text-gray-400" />
              {selectedCategories.length === 4 ? 'All Categories' : `${selectedCategories.length} Selected`}
            </span>
            <svg
              className={`w-4 h-4 transition-transform duration-200 ${showCategoryDropdown ? 'rotate-180' : ''}`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
          
          {showCategoryDropdown && (
            <div className="absolute top-full left-0 right-0 mt-1 bg-white border border-gray-200 rounded-md shadow-lg z-10">
              <div className="p-2">
                {categories.map((category) => (
                  <label
                    key={category.value}
                    className="flex items-center p-2 hover:bg-gray-50 rounded cursor-pointer"
                  >
                    <input
                      type="checkbox"
                      checked={selectedCategories.includes(category.value)}
                      onChange={() => handleCategoryChange(category.value)}
                      className="w-4 h-4 text-credera-red border-gray-300 rounded focus:ring-2 focus:ring-credera-red"
                    />
                    <span className="ml-2 text-sm text-gray-700">{category.label}</span>
                  </label>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Date Range */}
        <div className="flex flex-col sm:flex-row gap-2">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              From Date
            </label>
            <div className="relative">
              <FiCalendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <input
                type="date"
                value={dateRange.start}
                onChange={(e) => onDateRangeChange({ ...dateRange, start: e.target.value })}
                className="pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-credera-red focus:border-transparent outline-none transition-all duration-200"
              />
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              To Date
            </label>
            <div className="relative">
              <FiCalendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <input
                type="date"
                value={dateRange.end}
                onChange={(e) => onDateRangeChange({ ...dateRange, end: e.target.value })}
                className="pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-credera-red focus:border-transparent outline-none transition-all duration-200"
              />
            </div>
          </div>
        </div>

        {/* Author Filter */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Author
          </label>
          <div className="relative">
            <FiUser className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
            <input
              type="text"
              value={selectedAuthor}
              onChange={(e) => onAuthorChange(e.target.value)}
              placeholder="Search by author..."
              className="pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-credera-red focus:border-transparent outline-none transition-all duration-200 min-w-[150px]"
            />
          </div>
        </div>

        {/* Clear Filters */}
        <div>
          <button
            onClick={clearAllFilters}
            className="px-4 py-2 text-sm text-gray-600 hover:text-credera-red border border-gray-300 rounded-md hover:border-credera-red transition-colors duration-200 whitespace-nowrap"
          >
            Clear All
          </button>
        </div>
      </div>
    </div>
  );
};

export default NewsFilter;