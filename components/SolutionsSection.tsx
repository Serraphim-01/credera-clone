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
  const [, setScrollProgress] = useState(0);
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
      const scrollAmount = window.innerWidth < 640 ? 320 : 1090; // Mobile: 320px (300px + 20px margin), Desktop: 1090px
      scrollContainerRef.current.scrollBy({
        left: -scrollAmount,
        behavior: scrollBehavior
      });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      const scrollAmount = window.innerWidth < 640 ? 320 : 1090; // Mobile: 320px (300px + 20px margin), Desktop: 1090px
      scrollContainerRef.current.scrollBy({
        left: scrollAmount,
        behavior: scrollBehavior
      });
    }
  };

  // Card component with responsive layout
  const SolutionCard = ({ solution }: { solution: SolutionsSectionProps['solutions'][0] }) => (
    <div className="flex-shrink-0 w-[calc(100vw-32px)] h-auto max-w-[320px] md:max-w-none md:w-[1090px] md:h-[580px] overflow-hidden mx-4">
      {/* Desktop Layout */}
      <div className="hidden md:grid grid-cols-2 h-full gap-20">
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

      {/* Mobile Layout - Stacked layout with image above text */}
      <div className="md:hidden h-full flex flex-col bg-white rounded-lg overflow-hidden shadow-sm">
        {/* Image Section - Top */}
        <div className="relative w-full h-[160px] flex-shrink-0">
          <Image
            src={solution.imageUrl}
            alt={solution.title}
            fill
            className="object-cover"
            sizes="300px"
          />
        </div>

        {/* Text Section - Bottom */}
        <div className="flex-1 p-4 flex flex-col">
          <h3 className="text-lg font-bold text-credera-dark mb-3">
            {solution.title}
          </h3>

          <p className="text-sm text-credera-gray-600 leading-relaxed mb-4 flex-1">
            {solution.description}
          </p>

          <Link
            href={solution.linkUrl}
            className="inline-flex items-center text-credera-red hover:text-credera-dark font-semibold transition-colors duration-200 space-x-2 mt-auto"
          >
            <span>Learn More</span>
            <svg
              className="w-4 h-4"
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
            className="
    flex min-w-max
    px-[calc(50%-400px)]
    sm:px-[calc(50%-150px)]
  "
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
          <div className="flex space-x-2.5">
            <button
              onClick={scrollLeft}
              disabled={!canScrollLeft}
              className={`w-12 h-12 rounded-full border-2 flex items-center justify-center transition-all duration-200 ${canScrollLeft
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
              className={`w-12 h-12 rounded-full border-2 flex items-center justify-center transition-all duration-200 ${canScrollRight
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