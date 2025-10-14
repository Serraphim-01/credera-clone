'use client';

import React, { useState } from 'react';
import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/24/outline';
import { TechStackSectionProps } from '@/types';

const TechStackSection: React.FC<TechStackSectionProps> = ({
  techStacks,
  minimizable = true,
}) => {
  const [isMinimized, setIsMinimized] = useState(false);
  const allTechnologies = techStacks.flatMap(stack => stack.technologies);

  if (!allTechnologies || allTechnologies.length === 0) {
    return null;
  }

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Header with Optional Toggle */}
        <div className="flex items-center justify-between mb-12">
          <div className="text-center flex-1">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Technology Stack
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We leverage cutting-edge technologies and proven frameworks to deliver robust, scalable solutions.
            </p>
          </div>
          {minimizable && (
            <button
              onClick={() => setIsMinimized(!isMinimized)}
              className="flex items-center space-x-2 px-4 py-2 bg-gray-50 rounded-lg border border-gray-200 hover:bg-gray-100 transition-colors duration-200 ml-8"
              aria-label={isMinimized ? 'Expand technology stack' : 'Minimize technology stack'}
            >
              <span className="text-sm font-medium text-gray-700">
                {isMinimized ? 'Show' : 'Hide'}
              </span>
              {isMinimized ? (
                <ChevronDownIcon className="w-4 h-4 text-gray-600" />
              ) : (
                <ChevronUpIcon className="w-4 h-4 text-gray-600" />
              )}
            </button>
          )}
        </div>

        {/* Technology Icons Grid */}
        {!isMinimized && (
          <div className="flex flex-wrap justify-center gap-8">
            {allTechnologies.map((tech, index) => (
              <div
                key={index}
                className="flex flex-col items-center group"
              >
                {/* Icon */}
                <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-lg flex items-center justify-center mb-3 group-hover:shadow-lg transition-shadow duration-200 group-hover:scale-105 transform">
                  <span className="text-white font-bold text-xl">
                    {tech.charAt(0).toUpperCase()}
                  </span>
                </div>
                {/* Name */}
                <span className="text-sm font-medium text-gray-700 text-center max-w-20 leading-tight">
                  {tech}
                </span>
              </div>
            ))}
          </div>
        )}

        {/* Minimized State */}
        {isMinimized && (
          <div className="text-center py-8">
            <p className="text-gray-500">
              {allTechnologies.length} technolog{allTechnologies.length !== 1 ? 'ies' : 'y'} in our stack
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export { TechStackSection };
export default TechStackSection;