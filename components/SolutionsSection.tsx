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
      const scrollAmount = window.innerWidth < 640 ? 350 : 1090; // Mobile: 350px, Desktop: 1090px
      scrollContainerRef.current.scrollBy({
        left: -scrollAmount,
        behavior: scrollBehavior
      });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      const scrollAmount = window.innerWidth < 640 ? 350 : 1090; // Mobile: 350px, Desktop: 1090px
      scrollContainerRef.current.scrollBy({
        left: scrollAmount,
        behavior: scrollBehavior
      });
    }
  };

  // Card component with unified responsive layout
  const SolutionCard = ({ solution }: { solution: any }) => (
    <div className="flex-shrink-0 w-[85vw] sm:w-[400px] md:w-[700px] lg:w-[1090px] aspect-video md:aspect-[16/9] lg:aspect-[1.8/1] overflow-hidden mx-2 sm:mx-4 md:mx-6">
      <div className="bg-white h-full flex flex-col md:flex-row rounded-lg overflow-hidden shadow-lg">
        {/* Image Section - Takes full background on mobile, half on desktop */}
        <div className="relative w-full h-1/2 md:h-full md:w-1/2 order-1 md:order-2">
          <Image
            src={solution.imageUrl}
            alt={solution.title}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 85vw, (max-width: 1024px) 350px, 545px"
          />
        </div>

        {/* Text Section - Overlay on mobile, separate on desktop */}
        <div className="relative w-full h-1/2 md:h-full md:w-1/2 p-6 md:p-8 lg:p-12 flex flex-col justify-center order-2 md:order-1">
          <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-credera-dark mb-3 md:mb-4">
            {solution.title}
          </h3>

          <p className="text-sm md:text-base lg:text-lg text-credera-gray-600 leading-relaxed mb-4 md:mb-8 line-clamp-3 md:line-clamp-none">
            {solution.description}
          </p>

          <Link
            href={solution.linkUrl}
            className="inline-flex items-center text-credera-red hover:text-credera-dark font-semibold transition-colors duration-200 space-x-2 group"
          >
            <span>Learn More</span>
            <svg
              className="w-4 h-4 md:w-5 md:h-5 transition-transform duration-200 group-hover:translate-x-1"
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
    <section className="py-16 md:py-20 bg-credera-gray-100">
      {/* Full width scroll container */}
      <div className="w-full overflow-hidden">
        <div
          ref={scrollContainerRef}
          className="scroll-container overflow-x-auto pb-4"
          style={{ scrollBehavior }}
        >
          <div className="flex min-w-max px-4 sm:px-6 lg:px-0 lg:pl-[calc(50vw-545px)] lg:pr-[calc(50vw-545px)]">
            {solutions.map((solution) => (
              <SolutionCard key={solution.id} solution={solution} />
            ))}
          </div>
        </div>
      </div>

      {/* Navigation Buttons - Bottom Right */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8">
        <div className="flex justify-end">
          <div className="flex space-x-2.5"> {/* 10px gap = 2.5 = 10px */}
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