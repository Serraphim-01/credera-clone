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
<section className="py-20 bg-light-gray">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12 animate-fadeInUp">
          <h2 className="text-3xl font-bold text-black mb-4">
            Success Stories
          </h2>
          <p className="text-lg text-dark-gray max-w-3xl mx-auto">
            See how we've helped organizations like yours achieve their goals with our proven solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {caseStudies.map((study, index) => (
            <div
              key={index}
              className="bg-white rounded-lg overflow-hidden shadow-lg hover-lift hover-shadow transition-all duration-300 animate-fadeInUp"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              {/* Case Study Image */}
              <div className="relative h-48">
                <Image
                  src={study.imageUrl}
                  alt={study.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-black/20"></div>
              </div>

              {/* Case Study Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-black mb-3">
                  {study.title}
                </h3>
                
                <div className="mb-4">
                  <span className="text-sm font-semibold text-yellow uppercase tracking-wide">
                    Client
                  </span>
                  <p className="text-dark-gray mt-1">
                    {study.client}
                  </p>
                </div>

                <div>
                  <span className="text-sm font-semibold text-yellow uppercase tracking-wide">
                    Result
                  </span>
                  <p className="text-dark-gray mt-1 leading-relaxed">
                    {study.result}
                  </p>
                </div>

                {/* Read More Link */}
                <div className="mt-6 pt-4 border-t border-light-gray">
                  <button className="text-yellow font-semibold hover:text-opacity-80 transition-colors duration-200 text-sm">
                    Read Full Case Study →
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Case Studies */}
        <div className="text-center mt-12">
          <button className="bg-yellow text-black font-semibold px-8 py-3 rounded-lg hover:bg-opacity-80 transition-colors duration-200">
            View All Case Studies
          </button>
        </div>
      </div>
    </section>
  );
};

export default CaseStudiesSection;