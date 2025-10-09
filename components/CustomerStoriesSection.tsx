'use client';

import React, { useState, useMemo } from 'react';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';
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
    <section className="py-8 bg-white sm:py-16">
      <div className="max-w-7xl mx-auto px-4">
        {/* Slideshow Container */}
        {allCustomerStories.length > 0 && (
          <div className="relative">
            {/* Navigation Buttons */}
            {slides.length > 1 && (
              <>
                <button
                  onClick={prevSlide}
                  className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 bg-white rounded-full p-2 shadow-lg border border-gray-200 hover:bg-gray-50 transition-colors duration-200"
                  aria-label="Previous slide"
                >
                  <ChevronLeftIcon className="w-5 h-5 text-gray-600 sm:w-6 sm:h-6" />
                </button>
                <button
                  onClick={nextSlide}
                  className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 bg-white rounded-full p-2 shadow-lg border border-gray-200 hover:bg-gray-50 transition-colors duration-200"
                  aria-label="Next slide"
                >
                  <ChevronRightIcon className="w-5 h-5 text-gray-600 sm:w-6 sm:h-6" />
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
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
                      {slide.map((story) => (
                        <div
                          key={story.id}
                          className="bg-gray-50 rounded-lg overflow-hidden shadow-sm border border-gray-200 hover:shadow-md transition-shadow duration-200"
                        >
                          {/* Story Image */}
                          <div className="relative h-40 sm:h-48">
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
                          <div className="p-4 sm:p-6">
                            <h3 className="text-lg font-bold text-gray-900 mb-2 sm:text-xl">
                              {story.title}
                            </h3>
                            <p className="text-xs text-gray-600 mb-3 sm:text-sm">
                              <span className="font-medium">Client:</span> {story.client}
                            </p>

                            {/* Testimonial */}
                            {story.testimonial && (
                              <div className="pt-3 sm:pt-4">
                                <blockquote className="text-gray-700 text-xs italic mb-2 sm:text-sm sm:mb-3">
                                  &quot;{story.testimonial.quote}&quot;
                                </blockquote>
                                <div className="text-right">
                                  <div className="font-semibold text-gray-900 text-xs sm:text-sm">
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
              <div className="flex justify-center mt-6 space-x-2 sm:mt-8">
                {slides.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`w-2 h-2 rounded-full transition-colors duration-200 sm:w-3 sm:h-3 ${
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
        {allCustomerStories.length === 0 && (
          <div className="text-center py-6 sm:py-8">
            <p className="text-xs text-gray-500 sm:text-base">
              No customer stories available.
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export { CustomerStoriesSection };
export default CustomerStoriesSection;