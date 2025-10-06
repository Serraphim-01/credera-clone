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
    <section className="py-16 sm:py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header with Title and Link */}
        <div className="flex justify-between items-center mb-8 md:mb-12 animate-fadeInUp">
          <h2 className="text-3xl sm:text-4xl font-bold text-black">
            {title}
          </h2>
          <Link
            href={viewAllLink}
            className="inline-flex items-center text-yellow hover:text-opacity-80 font-semibold transition-colors duration-200 space-x-2 group"
          >
            <span className="text-sm sm:text-base">View All Insights</span>
            <svg
              className="w-4 h-4 sm:w-5 sm:h-5 transition-transform duration-200 group-hover:translate-x-1"
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
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
          
          {/* Left Column - Main Card with Image */}
          <div className="bg-white rounded-lg p-6 shadow-md hover-lift hover-shadow transition-all duration-300 animate-fadeInUp">
            {/* Image */}
            <div className="relative w-full aspect-[16/9] mb-6 rounded-lg overflow-hidden">
              <Image
                src="/TaskImages/insights.jpg"
                alt="Featured Insight"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>

            {/* Icon, Category and Date */}
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-8 h-8 bg-yellow rounded-full flex items-center justify-center flex-shrink-0">
                <svg className="w-4 h-4 text-black" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                </svg>
              </div>
              <div className="flex items-center space-x-3 text-xs sm:text-sm text-dark-gray">
                <span className="font-semibold text-yellow">Technology</span>
                <span>•</span>
                <span>Dec 15, 2024</span>
              </div>
            </div>

            {/* Title */}
            <h3 className="text-xl sm:text-2xl font-bold text-black mb-4">
              The Future of AI in Enterprise Solutions
            </h3>

            {/* Description */}
            <p className="text-base sm:text-lg text-dark-gray leading-relaxed mb-6">
              Exploring how artificial intelligence is transforming business operations and creating new opportunities for innovation across industries.
            </p>

            {/* Author Profile */}
            <div className="flex items-center space-x-3">
              <div className="relative w-10 h-10 rounded-full overflow-hidden">
                <Image
                  src="/TaskImages/john-doe.png"
                  alt="John Doe"
                  fill
                  className="object-cover"
                />
              </div>
              <span className="text-sm font-semibold text-black">By John Doe</span>
            </div>
          </div>

          {/* Right Column - Two Stacked Cards */}
          <div className="space-y-6 md:space-y-8">
            
            {/* Top Card */}
            <div className="bg-white rounded-lg p-6 shadow-md hover-lift hover-shadow transition-all duration-300 animate-fadeInUp" style={{ animationDelay: '150ms' }}>
              {/* Icon, Category and Date */}
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-8 h-8 bg-yellow rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-4 h-4 text-black" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4z" clipRule="evenodd" />
                  </svg>
                </div>
                <div className="flex items-center space-x-3 text-xs sm:text-sm text-dark-gray">
                  <span className="font-semibold text-yellow">Case Study</span>
                  <span>•</span>
                  <span>Dec 12, 2024</span>
                </div>
              </div>

              {/* Title */}
              <h3 className="text-lg sm:text-xl font-bold text-black mb-3">
                Digital Transformation in Financial Services
              </h3>

              {/* Description */}
              <p className="text-sm sm:text-base text-dark-gray leading-relaxed mb-4 line-clamp-3">
                How we helped a leading bank modernize their legacy systems and improve customer experience through innovative digital solutions.
              </p>

              {/* Author Profile */}
              <div className="flex items-center space-x-3">
                <div className="relative w-8 h-8 rounded-full overflow-hidden">
                  <Image
                    src="/TaskImages/john-doe.png"
                    alt="Sarah Smith"
                    fill
                    className="object-cover"
                  />
                </div>
                <span className="text-sm font-semibold text-black">By Sarah Smith</span>
              </div>
            </div>

            {/* Bottom Card */}
            <div className="bg-white rounded-lg p-6 shadow-md hover-lift hover-shadow transition-all duration-300 animate-fadeInUp" style={{ animationDelay: '300ms' }}>
              {/* Icon, Category and Date */}
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-8 h-8 bg-yellow rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-4 h-4 text-black" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                    <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <div className="flex items-center space-x-3 text-xs sm:text-sm text-dark-gray">
                  <span className="font-semibold text-yellow">Industry Insights</span>
                  <span>•</span>
                  <span>Dec 10, 2024</span>
                </div>
              </div>

              {/* Title */}
              <h3 className="text-lg sm:text-xl font-bold text-black mb-3">
                Cloud Migration Best Practices for 2024
              </h3>

              {/* Description */}
              <p className="text-sm sm:text-base text-dark-gray leading-relaxed mb-4 line-clamp-3">
                Key strategies and considerations for successful cloud migration projects based on our experience with enterprise clients.
              </p>

              {/* Author Profile */}
              <div className="flex items-center space-x-3">
                <div className="relative w-8 h-8 rounded-full overflow-hidden">
                  <Image
                    src="/TaskImages/john-doe.png"
                    alt="Mike Johnson"
                    fill
                    className="object-cover"
                  />
                </div>
                <span className="text-sm font-semibold text-black">By Mike Johnson</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedInsightsSection;