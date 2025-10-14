'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { WhatWeDoSectionProps } from '@/types';

const WhatWeDoSection: React.FC<WhatWeDoSectionProps> = ({
  title,
  subtitle,
  description
}) => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-8">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <h2 className="text-4xl font-bold text-credera-dark mb-4">
            {title}
          </h2>
          <p className="text-xl text-credera-red font-semibold mb-6">
            {subtitle}
          </p>
          <p className="text-lg text-credera-gray-600 max-w-3xl mx-auto">
            {description}
          </p>
        </div>

        {/* Two Equal Containers */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Container 1 */}
          <div className="overflow-hidden">
            {/* Image */}
            <div className="relative h-64">
              <Image
                src="/TaskImages/solutions.jpg"
                alt="Technology Solutions"
                fill
                className="object-cover"
              />
            </div>
            
            {/* Content */}
            <div className="">
              <h3 className="text-2xl font-bold text-credera-dark mb-4">
                Technology Solutions
              </h3>
              <p className="text-credera-gray-600 mb-6 leading-relaxed">
                We combine deep technical expertise with innovative thinking to deliver 
                solutions that transform businesses and drive measurable results across 
                various industries and technologies.
              </p>
              
              <Link
                href="/services/technology"
                className="inline-flex items-center text-credera-red font-semibold hover:text-credera-dark transition-colors duration-200"
              >
                <span>See all technology services</span>
                <svg
                  className="w-5 h-5 ml-2"
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

          {/* Container 2 */}
          <div className= "overflow-hidden">
            {/* Image */}
            <div className="relative h-64">
              <Image
                src="/TaskImages/data.jpg"
                alt="Industry Expertise"
                fill
                className="object-cover"
              />
            </div>
            
            {/* Content */}
            <div className="">
              <h3 className="text-2xl font-bold text-credera-dark mb-4">
                Industry Expertise
              </h3>
              <p className="text-credera-gray-600 mb-6 leading-relaxed">
                Our team brings specialized knowledge across multiple sectors, delivering 
                tailored solutions that address unique industry challenges and drive 
                sustainable growth for your business.
              </p>
              
              <Link
                href="/industries"
                className="inline-flex items-center text-credera-red font-semibold hover:text-credera-dark transition-colors duration-200"
              >
                <span>See all industries</span>
                <svg
                  className="w-5 h-5 ml-2"
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

export default WhatWeDoSection;