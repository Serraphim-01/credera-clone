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
    <section className="py-16 md:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16 md:space-y-20">
        
        {/* Meet Section - Text on Left, Image on Right */}
        <div className="w-full">
          <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8 md:gap-12 lg:gap-20">
            {/* Text Section */}
            <div className="flex flex-col justify-center text-center md:text-left">
              <h2 className="text-3xl md:text-4xl font-bold text-credera-dark mb-4">
                {meetSection.title}
              </h2>
              
              <p className="text-base md:text-lg text-credera-gray-600 leading-relaxed mb-6 md:mb-8">
                {meetSection.description}
              </p>
              
              <Link
                href="/company#leadership"
                className="inline-flex items-center justify-center md:justify-start text-credera-red hover:text-credera-dark font-semibold transition-colors duration-200 space-x-2 group"
              >
                <span>Meet Our Team</span>
                <svg
                  className="w-5 h-5 transition-transform duration-200 group-hover:translate-x-1"
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

            {/* Image Section */}
            <div className="relative w-full aspect-[4/3] rounded-lg overflow-hidden">
              <Image
                src={meetSection.imageUrl}
                alt={meetSection.title}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>

        {/* Join Section - Image on Left, Text on Right */}
        <div className="w-full">
          <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8 md:gap-12 lg:gap-20">
            {/* Image Section */}
            <div className="relative w-full aspect-[4/3] rounded-lg overflow-hidden order-1 md:order-none">
              <Image
                src={joinSection.imageUrl}
                alt={joinSection.title}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>

            {/* Text Section */}
            <div className="flex flex-col justify-center text-center md:text-left order-2 md:order-none">
              <h2 className="text-3xl md:text-4xl font-bold text-credera-dark mb-4">
                {joinSection.title}
              </h2>
              
              <p className="text-base md:text-lg text-credera-gray-600 leading-relaxed mb-6 md:mb-8">
                {joinSection.description}
              </p>
              
              <Link
                href={joinSection.viewAllLink}
                className="inline-flex items-center justify-center md:justify-start text-credera-red hover:text-credera-dark font-semibold transition-colors duration-200 space-x-2 group"
              >
                <span>View All Openings</span>
                <svg
                  className="w-5 h-5 transition-transform duration-200 group-hover:translate-x-1"
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