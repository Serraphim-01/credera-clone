'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { MeetJoinSectionProps } from '@/types';

const MeetJoinSection: React.FC<MeetJoinSectionProps> = ({
  meetSection,
  joinSection
}) => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-8 space-y-20"> {/* Vertical spacing between sections */}
        
        {/* Meet Section - Text on Left, Image on Right */}
        <div className="w-full h-[580px] md:h-[580px] sm:h-auto overflow-hidden">
          <div className="grid grid-cols-2 md:grid-cols-2 sm:grid-cols-1 h-full gap-20 sm:gap-8">
            {/* Text Section - Left */}
            <div className="flex flex-col justify-center">
              <h2 className="text-3xl sm:text-2xl font-bold text-credera-dark mb-4">
                {meetSection.title}
              </h2>
              
              <p className="text-lg sm:text-base text-credera-gray-600 leading-relaxed mb-8 sm:mb-6">
                {meetSection.description}
              </p>
              
              <Link
                href="/company#leadership"
                className="inline-flex items-center text-credera-red hover:text-credera-dark font-semibold transition-colors duration-200 space-x-2"
              >
                <span>Meet Our Team</span>
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

            {/* Image Section - Right - Hidden on mobile */}
            <div className="relative w-full hidden md:block">
              <Image
                src={meetSection.imageUrl}
                alt={meetSection.title}
                fill
                className="object-cover"
                sizes="545px"
              />
            </div>
          </div>
        </div>

        {/* Join Section - Image on Left, Text on Right (Reversed) */}
        <div className="w-full h-[580px] md:h-[580px] sm:h-auto overflow-hidden">
          <div className="grid grid-cols-2 md:grid-cols-2 sm:grid-cols-1 h-full gap-20 sm:gap-8">
            {/* Image Section - Left - Hidden on mobile */}
            <div className="relative w-full hidden md:block">
              <Image
                src={joinSection.imageUrl}
                alt={joinSection.title}
                fill
                className="object-cover"
                sizes="545px"
              />
            </div>

            {/* Text Section - Right */}
            <div className="flex flex-col justify-center">
              <h2 className="text-3xl sm:text-2xl font-bold text-credera-dark mb-4">
                {joinSection.title}
              </h2>
              
              <p className="text-lg sm:text-base text-credera-gray-600 leading-relaxed mb-8 sm:mb-6">
                {joinSection.description}
              </p>
              
              <Link
                href={joinSection.viewAllLink}
                className="inline-flex items-center text-credera-red hover:text-credera-dark font-semibold transition-colors duration-200 space-x-2"
              >
                <span>View All Openings</span>
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
          </div>
        </div>

      </div>
    </section>
  );
};

export default MeetJoinSection;