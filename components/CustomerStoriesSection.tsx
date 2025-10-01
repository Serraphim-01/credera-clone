'use client';

import React, { useState, useMemo } from 'react';
import { ChevronLeftIcon, ChevronRightIcon, ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/24/outline';
import Image from 'next/image';
import { solutionsData } from '@/data/solutions';
import { CustomerStory } from '@/types';

interface CustomerStoriesSectionProps {
  customerStories?: CustomerStory[];
}

// Extended CustomerStory interface with category for internal use
interface ExtendedCustomerStory extends CustomerStory {
  category: string;
}

const CustomerStoriesSection: React.FC<CustomerStoriesSectionProps> = ({ customerStories }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isMinimized, setIsMinimized] = useState(false);

  // Use provided customer stories or consolidate all customer stories from solutions as fallback
  const allCustomerStories = useMemo(() => {
    if (customerStories && customerStories.length > 0) {
      return customerStories.map(story => ({ ...story, category: story.client || 'General' }));
    }

    const stories: ExtendedCustomerStory[] = [];
    solutionsData.forEach(solution => {
      if (solution.customerStories) {
        solution.customerStories.forEach(story => {
          stories.push({
            ...story,
            category: solution.title
          });
        });
      }
    });

    return stories;
  }, [customerStories]);

  // Group stories into slides of 2
  const slides = [];
  for (let i = 0; i < allCustomerStories.length; i += 2) {
    slides.push(allCustomerStories.slice(i, i + 2));
  }

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  if (allCustomerStories.length === 0) {
    return null;
  }

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Header with Toggle */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Customer Success Stories
            </h2>
          </div>
          <button
            onClick={() => setIsMinimized(!isMinimized)}
            className="flex items-center space-x-2 px-4 py-2 bg-white rounded-lg shadow-sm border border-gray-200 hover:bg-gray-50 transition-colors duration-200"
            aria-label={isMinimized ? 'Expand customer stories' : 'Minimize customer stories'}
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
        </div>

        {/* Slideshow Container */}
        {!isMinimized && allCustomerStories.length > 0 && (
          <div className="relative">
            {/* Navigation Buttons */}
            {slides.length > 1 && (
              <>
                <button
                  onClick={prevSlide}
                  className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 bg-white rounded-full p-2 shadow-lg border border-gray-200 hover:bg-gray-50 transition-colors duration-200"
                  aria-label="Previous slide"
                >
                  <ChevronLeftIcon className="w-6 h-6 text-gray-600" />
                </button>
                <button
                  onClick={nextSlide}
                  className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 bg-white rounded-full p-2 shadow-lg border border-gray-200 hover:bg-gray-50 transition-colors duration-200"
                  aria-label="Next slide"
                >
                  <ChevronRightIcon className="w-6 h-6 text-gray-600" />
                </button>
              </>
            )}

            {/* Stories Grid */}
            <div className="overflow-hidden">
              <div 
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
              >
                {slides.map((slide, slideIndex) => (
                  <div key={slideIndex} className="w-full flex-shrink-0">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                      {slide.map((story) => (
                        <div
                          key={story.id}
                          className="bg-gray-50 rounded-lg overflow-hidden shadow-sm border border-gray-200 hover:shadow-md transition-shadow duration-200"
                        >
                          {/* Story Image */}
                          <div className="relative h-48">
                            <Image
                              src={story.imageUrl}
                              alt={story.title}
                              fill
                              className="object-cover"
                              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
                            />
                            <div className="absolute top-4 left-4 space-x-2">
                            </div>
                          </div>

                          {/* Story Content */}
                          <div className="p-6">
                            <h3 className="text-xl font-bold text-gray-900 mb-2">
                              {story.title}
                            </h3>
                            <p className="text-sm text-gray-600 mb-4">
                              <span className="font-medium">Client:</span> {story.client}
                            </p>

                            {/* Testimonial */}
                            {story.testimonial && (
                              <div className="pt-4">
                                <blockquote className="text-gray-700 text-sm italic mb-3">
                                  &quot;{story.testimonial.quote}&quot;
                                </blockquote>
                                <div className="text-right">
                                  <div className="font-semibold text-gray-900 text-sm">
                                    {story.testimonial.author}
                                  </div>
                                  <div className="text-gray-600 text-xs">
                                    {story.testimonial.title}
                                  </div>
                                </div>
                              </div>
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Slide Indicators */}
            {slides.length > 1 && (
              <div className="flex justify-center mt-8 space-x-2">
                {slides.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`w-3 h-3 rounded-full transition-colors duration-200 ${
                      currentSlide === index
                        ? 'bg-orange-500'
                        : 'bg-gray-300 hover:bg-gray-400'
                    }`}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>
            )}
          </div>
        )}

        {/* No Results Message */}
        {!isMinimized && allCustomerStories.length === 0 && (
          <div className="text-center py-8">
            <p className="text-gray-500">
              No customer stories available.
            </p>
          </div>
        )}

        {/* Minimized State */}
        {isMinimized && (
          <div className="text-center py-8">
            <p className="text-gray-500">
              {allCustomerStories.length} customer stor{allCustomerStories.length !== 1 ? 'ies' : 'y'} available
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export { CustomerStoriesSection };
export default CustomerStoriesSection;