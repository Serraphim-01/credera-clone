'use client';

import React from 'react';
import Image from 'next/image';

interface CaseStudy {
  title: string;
  client: string;
  result: string;
  imageUrl: string;
}

interface CaseStudiesSectionProps {
  caseStudies: CaseStudy[];
}

const CaseStudiesSection: React.FC<CaseStudiesSectionProps> = ({ caseStudies }) => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Success Stories
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            See how we've helped organizations like yours achieve their goals with our proven solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {caseStudies.map((study, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-200"
            >
              {/* Case Study Image */}
              <div className="relative h-48 bg-gradient-to-r from-blue-500 to-blue-600">
                <Image
                  src={study.imageUrl}
                  alt={study.title}
                  fill
                  className="object-cover"
                  onError={(e) => {
                    // Fallback to gradient background if image fails
                    (e.target as HTMLElement).style.display = 'none';
                  }}
                />
                <div className="absolute inset-0 bg-blue-600/20"></div>
              </div>

              {/* Case Study Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {study.title}
                </h3>
                
                <div className="mb-4">
                  <span className="text-sm font-semibold text-blue-600 uppercase tracking-wide">
                    Client
                  </span>
                  <p className="text-gray-700 mt-1">
                    {study.client}
                  </p>
                </div>

                <div>
                  <span className="text-sm font-semibold text-green-600 uppercase tracking-wide">
                    Result
                  </span>
                  <p className="text-gray-700 mt-1 leading-relaxed">
                    {study.result}
                  </p>
                </div>

                {/* Read More Link */}
                <div className="mt-6 pt-4 border-t border-gray-200">
                  <button className="text-blue-600 font-semibold hover:text-blue-700 transition-colors duration-200 text-sm">
                    Read Full Case Study →
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Case Studies */}
        <div className="text-center mt-12">
          <button className="bg-blue-600 text-white font-semibold px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors duration-200">
            View All Case Studies
          </button>
        </div>
      </div>
    </section>
  );
};

export default CaseStudiesSection;