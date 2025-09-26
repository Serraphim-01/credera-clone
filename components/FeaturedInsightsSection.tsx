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
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-8">
        {/* Section Header with Title and Link */}
        <div className="flex justify-between items-center mb-12">
          <h2 className="text-4xl font-bold text-credera-dark">
            {title}
          </h2>
          <Link
            href={viewAllLink}
            className="inline-flex items-center text-credera-red hover:text-credera-dark font-semibold transition-colors duration-200 space-x-2"
          >
            <span>View All Insights</span>
            <svg
              className="w-5 h-5"
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
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          {/* Left Column - Main Card with Image */}
          <div className="bg-white rounded-lg">
            {/* Image */}
            <div className="relative h-64 mb-6 rounded-lg overflow-hidden">
              <Image
                src="/TaskImages/insights.jpg"
                alt="Featured Insight"
                fill
                className="object-cover"
              />
            </div>

            {/* Icon, Category and Date */}
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-8 h-8 bg-credera-red rounded-full flex items-center justify-center">
                <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                </svg>
              </div>
              <div className="flex items-center space-x-4 text-sm text-credera-gray-600">
                <span className="font-semibold text-credera-red">Technology</span>
                <span>•</span>
                <span>Dec 15, 2024</span>
              </div>
            </div>

            {/* Title */}
            <h3 className="text-2xl font-bold text-credera-dark mb-4">
              The Future of AI in Enterprise Solutions
            </h3>

            {/* Description */}
            <p className="text-lg text-credera-gray-600 leading-relaxed mb-6">
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
              <span className="text-sm font-semibold text-credera-dark">By John Doe</span>
            </div>
          </div>

          {/* Right Column - Two Stacked Cards */}
          <div className="space-y-8">
            
            {/* Top Card */}
            <div className="bg-white rounded-lg">
              {/* Icon, Category and Date */}
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-8 h-8 bg-credera-red rounded-full flex items-center justify-center">
                  <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4z" clipRule="evenodd" />
                  </svg>
                </div>
                <div className="flex items-center space-x-4 text-sm text-credera-gray-600">
                  <span className="font-semibold text-credera-red">Case Study</span>
                  <span>•</span>
                  <span>Dec 12, 2024</span>
                </div>
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold text-credera-dark mb-3">
                Digital Transformation in Financial Services
              </h3>

              {/* Description */}
              <p className="text-credera-gray-600 leading-relaxed mb-4">
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
                <span className="text-sm font-semibold text-credera-dark">By Sarah Smith</span>
              </div>
            </div>

            {/* Bottom Card */}
            <div className="bg-white rounded-lg">
              {/* Icon, Category and Date */}
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-8 h-8 bg-credera-red rounded-full flex items-center justify-center">
                  <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                    <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <div className="flex items-center space-x-4 text-sm text-credera-gray-600">
                  <span className="font-semibold text-credera-red">Industry Insights</span>
                  <span>•</span>
                  <span>Dec 10, 2024</span>
                </div>
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold text-credera-dark mb-3">
                Cloud Migration Best Practices for 2024
              </h3>

              {/* Description */}
              <p className="text-credera-gray-600 leading-relaxed mb-4">
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
                <span className="text-sm font-semibold text-credera-dark">By Mike Johnson</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedInsightsSection;