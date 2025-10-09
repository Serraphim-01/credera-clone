'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FeaturedInsightsSectionProps } from '@/types';

const FeaturedInsightsSection: React.FC<FeaturedInsightsSectionProps> = ({
  title = "Featured Insights",
  viewAllLink = "/insights"
}) => {
  return (
    <section className="py-20 sm:py-12">
      <div className="max-w-7xl mx-auto px-2 sm:px-4">
        {/* Section Header with Title and Link */}
        <div className="flex justify-between items-center mb-12 sm:mb-8 animate-fadeInUp">
          <h2 className="text-4xl sm:text-2xl font-bold text-black">
            {title}
          </h2>
          <Link
            href={viewAllLink}
            className="inline-flex items-center text-yellow hover:text-opacity-80 font-semibold transition-colors duration-200 space-x-2"
          >
            <span className="sm:text-sm">View All Insights</span>
            <svg
              className="w-5 h-5 sm:w-4 sm:h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </Link>
        </div>

        {/* Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 sm:gap-6">
          
          {/* Left Column - Main Card with Image */}
          <div className="bg-white rounded-lg p-2 sm:p-4 hover-lift hover-shadow transition-all duration-300 animate-fadeInUp">
            {/* Image */}
            <div className="relative h-64 sm:h-48 mb-6 sm:mb-4 rounded-lg overflow-hidden">
              <Image
                src="/TaskImages/insights.jpg"
                alt="Featured Insight"
                fill
                className="object-cover"
              />
            </div>

            {/* Icon, Category and Date */}
            <div className="flex items-center space-x-3 sm:space-x-2 mb-4 sm:mb-3">
              <div className="w-8 h-8 sm:w-6 sm:h-6 bg-yellow rounded-full flex items-center justify-center">
                <svg className="w-4 h-4 sm:w-3 sm:h-3 text-black" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                </svg>
              </div>
              <div className="flex items-center space-x-4 sm:space-x-2 text-sm sm:text-xs text-dark-gray">
                <span className="font-semibold text-yellow">Technology</span>
                <span>•</span>
                <span>Dec 15, 2024</span>
              </div>
            </div>

            {/* Title */}
            <h3 className="text-2xl sm:text-lg font-bold text-black mb-4 sm:mb-3">
              The Future of AI in Enterprise Solutions
            </h3>

            {/* Description */}
            <p className="text-lg sm:text-sm text-dark-gray leading-relaxed mb-6 sm:mb-4">
              Exploring how artificial intelligence is transforming business operations and creating new opportunities for innovation across industries.
            </p>

            {/* Author Profile */}
            <div className="flex items-center space-x-3 sm:space-x-2">
              <div className="relative w-10 h-10 sm:w-8 sm:h-8 rounded-full overflow-hidden">
                <Image
                  src="/TaskImages/john-doe.png"
                  alt="John Doe"
                  fill
                  className="object-cover"
                />
              </div>
              <span className="text-sm sm:text-xs font-semibold text-black">By John Doe</span>
            </div>
          </div>

          {/* Right Column - Two Stacked Cards */}
          <div className="space-y-8 sm:space-y-4">
            
            {/* Top Card */}
            <div className="bg-white rounded-lg p-2 sm:p-4 hover-lift hover-shadow transition-all duration-300 animate-fadeInUp" style={{ animationDelay: '150ms' }}>
              {/* Icon, Category and Date */}
              <div className="flex items-center space-x-3 sm:space-x-2 mb-4 sm:mb-3">
                <div className="w-8 h-8 sm:w-6 sm:h-6 bg-yellow rounded-full flex items-center justify-center">
                  <svg className="w-4 h-4 sm:w-3 sm:h-3 text-black" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4z" clipRule="evenodd" />
                  </svg>
                </div>
                <div className="flex items-center space-x-4 sm:space-x-2 text-sm sm:text-xs text-dark-gray">
                  <span className="font-semibold text-yellow">Case Study</span>
                  <span>•</span>
                  <span>Dec 12, 2024</span>
                </div>
              </div>

              {/* Title */}
              <h3 className="text-xl sm:text-base font-bold text-black mb-3 sm:mb-2">
                Digital Transformation in Financial Services
              </h3>

              {/* Description */}
              <p className="text-dark-gray sm:text-sm leading-relaxed mb-4 sm:mb-3">
                How we helped a leading bank modernize their legacy systems and improve customer experience through innovative digital solutions.
              </p>

              {/* Author Profile */}
              <div className="flex items-center space-x-3 sm:space-x-2">
                <div className="relative w-8 h-8 sm:w-6 sm:h-6 rounded-full overflow-hidden">
                  <Image
                    src="/TaskImages/john-doe.png"
                    alt="Sarah Smith"
                    fill
                    className="object-cover"
                  />
                </div>
                <span className="text-sm sm:text-xs font-semibold text-black">By Sarah Smith</span>
              </div>
            </div>

            {/* Bottom Card */}
            <div className="bg-white rounded-lg p-2 sm:p-4 hover-lift hover-shadow transition-all duration-300 animate-fadeInUp" style={{ animationDelay: '300ms' }}>
              {/* Icon, Category and Date */}
              <div className="flex items-center space-x-3 sm:space-x-2 mb-4 sm:mb-3">
                <div className="w-8 h-8 sm:w-6 sm:h-6 bg-yellow rounded-full flex items-center justify-center">
                  <svg className="w-4 h-4 sm:w-3 sm:h-3 text-black" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                    <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <div className="flex items-center space-x-4 sm:space-x-2 text-sm sm:text-xs text-dark-gray">
                  <span className="font-semibold text-yellow">Industry Insights</span>
                  <span>•</span>
                  <span>Dec 10, 2024</span>
                </div>
              </div>

              {/* Title */}
              <h3 className="text-xl sm:text-base font-bold text-black mb-3 sm:mb-2">
                Cloud Migration Best Practices for 2024
              </h3>

              {/* Description */}
              <p className="text-dark-gray sm:text-sm leading-relaxed mb-4 sm:mb-3">
                Key strategies and considerations for successful cloud migration projects based on our experience with enterprise clients.
              </p>

              {/* Author Profile */}
              <div className="flex items-center space-x-3 sm:space-x-2">
                <div className="relative w-8 h-8 sm:w-6 sm:h-6 rounded-full overflow-hidden">
                  <Image
                    src="/TaskImages/john-doe.png"
                    alt="Mike Johnson"
                    fill
                    className="object-cover"
                  />
                </div>
                <span className="text-sm sm:text-xs font-semibold text-black">By Mike Johnson</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedInsightsSection;