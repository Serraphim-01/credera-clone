'use client';

import React, { useState } from 'react';
import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/24/outline';
import Image from 'next/image';

interface Certification {
  id: string;
  name: string;
  issuer: string;
  imageUrl: string;
  level?: string;
  validUntil?: string;
}

interface SolutionCertificationsSectionProps {
  certifications: Certification[];
  solutionTitle?: string;
}

const SolutionCertificationsSection: React.FC<SolutionCertificationsSectionProps> = ({ 
  certifications, 
  solutionTitle = "Solution" 
}) => {
  const [isMinimized, setIsMinimized] = useState(false);

  // Show only top 5 certifications for solution pages
  const displayedCertifications = certifications.slice(0, 5);

  return (
    <section className="py-8 bg-gray-50 sm:py-16">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Header with Toggle */}
        <div className="flex items-center justify-between mb-6 sm:mb-8">
          <div>
            <h2 className="text-xl font-bold text-gray-900 mb-3 sm:text-3xl sm:mb-4">
              {solutionTitle} Certifications
            </h2>
            <p className="text-xs text-gray-600 max-w-3xl sm:text-lg">
              Our team holds specialized certifications relevant to {solutionTitle.toLowerCase()}, 
              ensuring expert-level implementation and support.
            </p>
          </div>
          <button
            onClick={() => setIsMinimized(!isMinimized)}
            className="flex items-center space-x-2 px-3 py-1 bg-white rounded-lg shadow-sm border border-gray-200 hover:bg-gray-50 transition-colors duration-200 sm:px-4 sm:py-2"
            aria-label={isMinimized ? 'Expand certifications' : 'Minimize certifications'}
          >
            {isMinimized ? (
              <ChevronDownIcon className="w-4 h-4 text-gray-600" />
            ) : (
              <ChevronUpIcon className="w-4 h-4 text-gray-600" />
            )}
          </button>
        </div>

        {/* Certifications Grid */}
        {!isMinimized && displayedCertifications.length > 0 && (
          <div className="grid grid-cols-2 gap-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 sm:gap-6">
            {displayedCertifications.map((certification) => (
              <div
                key={certification.id}
                className="relative bg-white rounded-lg overflow-hidden shadow-sm border border-gray-200 hover:shadow-md transition-shadow duration-200"
              >
                {/* Certification Image */}
                <div className="relative h-40 sm:h-64">
                  <Image
                    src={certification.imageUrl}
                    alt={certification.name}
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 50vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 20vw"
                  />
                  {/* Text Overlay at Bottom */}
                  <div className="absolute bottom-0 left-0 right-0 text-white p-1 bg-[color:var(--color-foreground)]/70 sm:p-4">
                    <h3 className="font-semibold text-xs mb-1 leading-tight sm:text-sm">
                      {certification.name}
                    </h3>
                    <p className="text-xs text-gray-200 mb-1">
                      {certification.issuer}
                    </p>
                    <div className="flex items-center justify-between">
                      <div className="space-x-2">
                        {certification.level && (
                          <span className="text-xs text-[color:var(--color-background)] px-1">
                            {certification.level}
                          </span>
                        )}
                      </div>
                      {certification.validUntil && (
                        <span className="text-xs text-[color:var(--color-yellow)]">
                          Valid until {new Date(certification.validUntil).getFullYear()}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* No Results Message */}
        {!isMinimized && displayedCertifications.length === 0 && (
          <div className="text-center py-6 sm:py-8">
            <p className="text-xs text-gray-500 sm:text-base">
              No certifications available for this solution.
            </p>
          </div>
        )}

        {/* Minimized State */}
        {isMinimized && (
          <div className="text-center py-6 sm:py-8">
            <p className="text-xs text-gray-500 sm:text-base">
              {displayedCertifications.length} certification{displayedCertifications.length !== 1 ? 's' : ''} available
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export { SolutionCertificationsSection };
export default SolutionCertificationsSection;