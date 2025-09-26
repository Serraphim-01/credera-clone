'use client';

import React, { useRef, useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { SolutionsSectionProps } from '@/types';

const SolutionsSection: React.FC<SolutionsSectionProps> = ({
  solutions,
  scrollBehavior = 'smooth'
}) => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const updateScrollProgress = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
      const maxScroll = scrollWidth - clientWidth;
      const progress = maxScroll > 0 ? (scrollLeft / maxScroll) * 100 : 0;
      setScrollProgress(progress);
      
      // Update button states
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
    }
  };

  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;
    if (scrollContainer) {
      scrollContainer.addEventListener('scroll', updateScrollProgress);
      updateScrollProgress();

      return () => {
        scrollContainer.removeEventListener('scroll', updateScrollProgress);
      };
    }
  }, []);

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: -1090, // Scroll by one card width
        behavior: scrollBehavior
      });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: 1090, // Scroll by one card width
        behavior: scrollBehavior
      });
    }
  };

  // Card component with text on left and image on right
  const SolutionCard = ({ solution }: { solution: any }) => (
    <div className="flex-shrink-0 w-[1090px] h-[580px] overflow-hidden mx-[40px]">
      <div className="grid grid-cols-2 h-full gap-20"> {/* 80px gap = 5rem = 80px */}
        {/* Text Section - Left */}
        <div className="flex flex-col justify-center">
          <h3 className="text-3xl font-bold text-credera-dark mb-4">
            {solution.title}
          </h3>
          
          <p className="text-lg text-credera-gray-600 leading-relaxed mb-8">
            {solution.description}
          </p>
          
          <Link
            href={solution.linkUrl}
            className="inline-flex items-center text-credera-red hover:text-credera-dark font-semibold transition-colors duration-200 space-x-2"
          >
            <span>Learn More</span>
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

        {/* Image Section - Right - Full width of its container */}
        <div className="relative w-full">
          <Image
            src={solution.imageUrl}
            alt={solution.title}
            fill
            className="object-cover"
            sizes="545px"
          />
        </div>
      </div>
    </div>
  );

  return (
    <section className="py-20 bg-credera-gray-100">
      {/* Full width scroll container */}
      <div className="w-full overflow-hidden">
        <div
          ref={scrollContainerRef}
          className="scroll-container overflow-x-auto pb-4"
          style={{ scrollBehavior }}
        >
          <div 
            className="flex min-w-max pl-8"
            style={{
              marginLeft: 'calc(50% - 545px)', // Half of 1090px
              paddingRight: 'calc(50% - 545px)' // Half of 1090px
            }}
          >
            {solutions.map((solution) => (
              <SolutionCard key={solution.id} solution={solution} />
            ))}
          </div>
        </div>
      </div>

      {/* Navigation Buttons - Bottom Right */}
      <div className="max-w-7xl mx-auto px-8 mt-8">
        <div className="flex justify-end">
          <div className="flex space-x-2.5"> {/* 10px gap = 2.5 = 10px */}
            <button
              onClick={scrollLeft}
              disabled={!canScrollLeft}
              className={`w-12 h-12 rounded-full border-2 flex items-center justify-center transition-all duration-200 ${
                canScrollLeft
                  ? 'border-credera-red text-credera-red hover:bg-credera-red hover:text-white'
                  : 'border-gray-300 text-gray-300 cursor-not-allowed'
              }`}
              aria-label="Previous solution"
            >
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
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>
            
            <button
              onClick={scrollRight}
              disabled={!canScrollRight}
              className={`w-12 h-12 rounded-full border-2 flex items-center justify-center transition-all duration-200 ${
                canScrollRight
                  ? 'border-credera-red text-credera-red hover:bg-credera-red hover:text-white'
                  : 'border-gray-300 text-gray-300 cursor-not-allowed'
              }`}
              aria-label="Next solution"
            >
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
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionsSection;