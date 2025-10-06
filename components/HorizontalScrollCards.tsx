"use client";

import React, { useRef, useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { HorizontalScrollCardsProps } from '@/types';

const HorizontalScrollCards: React.FC<HorizontalScrollCardsProps> = ({
  cards,
  scrollBehavior = 'smooth'
}) => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  const updateScrollProgress = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
      const maxScroll = scrollWidth - clientWidth;
      const progress = maxScroll > 0 ? (scrollLeft / maxScroll) * 100 : 0;
      setScrollProgress(progress);
    }
  };

  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;
    if (scrollContainer) {
      scrollContainer.addEventListener('scroll', updateScrollProgress);
      // Initial calculation
      updateScrollProgress();

      return () => {
        scrollContainer.removeEventListener('scroll', updateScrollProgress);
      };
    }
  }, []);

  // Card Type 1: Full image with gradient overlay, navy blue slide-up on hover
  const CardType1 = ({ card }: { card: any }) => (
    <Link
      href={card.linkUrl}
      className="group block w-[80vw] h-[480px] sm:w-[350px] sm:h-[420px] md:w-[500px] md:h-[600px] lg:w-[628px] lg:h-[670px] flex-shrink-0 relative overflow-hidden"
      aria-label={`Read more about ${card.title}`}
    >
      <article className="bg-white rounded-lg overflow-hidden shadow-md hover-lift hover-shadow h-full relative">
        {/* Card Image Container - Full height */}
        <div className="relative w-full h-full bg-credera-gray-100 overflow-hidden">
          <Image
            src={card.imageUrl}
            alt={card.title}
            fill
            className="object-cover transition-all duration-500 group-hover:scale-110"
            sizes="(max-width: 640px) 80vw, (max-width: 768px) 350px, (max-width: 1024px) 500px, 628px"
          />

          {/* Gradient Overlay - dark blue at bottom, transparent at top */}
          <div className="absolute inset-0 bg-gradient-to-t from-credera-navy/80 via-credera-navy/40 to-transparent opacity-100 group-hover:opacity-0 transition-opacity duration-500" />

          {/* Navy Blue Slide-up Overlay */}
          <div className="absolute inset-0 bg-[color:var(--color-foreground)] opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-full group-hover:translate-y-0" />

          {/* Category Badge */}
          {card.category && (
            <div className="absolute top-4 left-4 sm:top-8 sm:left-8 z-10">
              <span className="inline-block px-2 py-1 text-xs sm:px-3 font-medium text-[color:var(--color-yellow)] bg-[color:var(--color-foreground)] rounded-full">
                {card.category}
              </span>
            </div>
          )}
        </div>

        {/* Card Content - Fixed at bottom with responsive padding */}
        <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-8 z-10 text-white transition-all duration-500 group-hover:pb-8 h-auto">
          <h3 className="text-lg sm:text-card-title text-[color:var(--color-background)] font-medium mb-2 sm:mb-3 transition-all duration-300 group-hover:translate-y-[-15px]">
            {card.title}
          </h3>
          <p className="text-sm sm:text-base text-[color:var(--color-background)]/90 leading-relaxed mb-2 sm:mb-4 transition-all duration-300 group-hover:translate-y-[-15px]">
            {card.description}
          </p>

          {/* Learn More Link - Hidden by default, shows on hover */}
          <div className="flex items-center text-[color:var(--color-yellow)] font-bold text-xs sm:text-sm opacity-0 group-hover:opacity-100 transform translate-y-8 group-hover:translate-y-0 transition-all duration-300 delay-200">
            <span>Learn More</span>
            <svg
              className="ml-2 w-3 h-3 sm:w-4 sm:h-4 transition-transform duration-200 group-hover:translate-x-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </div>
        </div>
      </article>
    </Link>
  );

  // Card Type 2: Full image with bottom text overlay, white to navy blue on hover
  const CardType2 = ({ card }: { card: any }) => (
    <Link
      href={card.linkUrl}
      className="group block w-[80vw] h-[480px] sm:w-[350px] sm:h-[420px] md:w-[500px] md:h-[600px] lg:w-[628px] lg:h-[670px] flex-shrink-0 relative overflow-hidden"
      aria-label={`Read more about ${card.title}`}
    >
      <article className="bg-white rounded-lg overflow-hidden shadow-md hover-lift hover-shadow h-full relative">
        {/* Card Image Container - Image takes full card height */}
        <div className="relative w-full h-full bg-credera-gray-100 overflow-hidden">
          <Image
            src={card.imageUrl}
            alt={card.title}
            fill
            className="object-cover transition-all duration-500 group-hover:scale-110"
            sizes="(max-width: 640px) 80vw, (max-width: 768px) 350px, (max-width: 1024px) 500px, 628px"
          />

          {/* Category Badge */}
          {card.category && (
            <div className="absolute top-4 left-4 sm:top-8 sm:left-8 z-10">
              <span className="inline-block px-2 py-1 text-xs sm:px-3 font-medium text-white bg-credera-red rounded-full">
                {card.category}
              </span>
            </div>
          )}
        </div>

        {/* Text Overlay at Bottom - Fixed height with responsive sizing */}
        <div className="absolute bottom-0 left-0 right-0 h-auto p-4 sm:p-6 md:p-8 bg-white text-credera-dark transition-all duration-500 group-hover:bg-[color:var(--color-background)] group-hover:text-[color:var(--color-foreground)]">
          <h3 className="text-lg sm:text-card-title font-medium mb-2 sm:mb-3 transition-all duration-300 group-hover:translate-y-[-8px]">
            {card.title}
          </h3>
          <p className="text-sm sm:text-base text-credera-gray-600 leading-relaxed mb-2 transition-all duration-300 group-hover:text-[color:var(--color-foreground)]/90 group-hover:translate-y-[-8px] group-hover:mb-4">
            {card.description}
          </p>

          {/* Learn More Link - Hidden by default, shows on hover */}
          <div className="flex items-center text-font-medium text-xs sm:text-sm opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 delay-200">
            <span>Learn More</span>
            <svg
              className="ml-2 w-3 h-3 sm:w-4 sm:h-4 transition-transform duration-200 group-hover:translate-x-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </div>
        </div>
      </article>
    </Link>
  );

  return (
    <section className="py-12 md:py-20 bg-white">
      {/* Scroll Indicator Container - Centered with max-width */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
        <div className="scroll-indicator-container">
          {/* Outer line */}
          <div className="w-full h-1 bg-credera-gray-100 rounded-full overflow-hidden">
            {/* Inner line that moves with scroll */}
            <div
              className="h-full bg-[color:var(--color-yellow)] rounded-full transition-all duration-150"
              style={{ width: `${scrollProgress}%` }}
            />
          </div>
        </div>
      </div>

      {/* Full width scroll container */}
      <div className="w-full overflow-hidden">
        {/* Scroll container aligned to start where the indicator starts */}
        <div
          ref={scrollContainerRef}
          className="scroll-container overflow-x-auto pb-4"
          style={{ scrollBehavior }}
        >
          <div
            className="flex items-center space-x-4 md:space-x-6 min-w-max px-4 sm:px-6 lg:px-0 lg:pl-[calc(50vw-314px)] lg:pr-[calc(50vw-314px)]"
          >
            {cards.map((card, index) =>
              index % 2 === 0 ? (
                <CardType1 key={card.id} card={card} />
              ) : (
                <CardType2 key={card.id} card={card} />
              )
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HorizontalScrollCards;