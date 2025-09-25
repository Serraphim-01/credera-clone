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
      className="group block w-[628px] h-[670px] flex-shrink-0 relative overflow-hidden"
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
            sizes="628px"
          />

          {/* Gradient Overlay - dark blue at bottom, transparent at top */}
          <div className="absolute inset-0 bg-gradient-to-t from-credera-navy/80 via-credera-navy/40 to-transparent opacity-100 group-hover:opacity-0 transition-opacity duration-500" />

          {/* Navy Blue Slide-up Overlay */}
          <div className="absolute inset-0 bg-credera-navy opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-full group-hover:translate-y-0" />

          {/* Category Badge */}
          {card.category && (
            <div className="absolute top-8 left-8 z-10">
              <span className="inline-block px-3 py-1 text-xs font-medium text-white bg-credera-red rounded-full">
                {card.category}
              </span>
            </div>
          )}
        </div>

        {/* Card Content - Fixed at bottom with 32px padding */}
        <div className="absolute bottom-0 left-0 right-0 p-8 z-10 text-white transition-all duration-500 group-hover:pb-8 h-[200px]">
          <h3 className="text-card-title font-medium mb-3 transition-all duration-300 group-hover:translate-y-[-8px]">
            {card.title}
          </h3>
          <p className="text-white/90 leading-relaxed mb-4 transition-all duration-300 group-hover:translate-y-[-8px]">
            {card.description}
          </p>

          {/* Learn More Link - Hidden by default, shows on hover */}
          <div className="flex items-center text-credera-red font-medium text-sm opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 delay-200">
            <span>Learn More</span>
            <svg
              className="ml-2 w-4 h-4 transition-transform duration-200 group-hover:translate-x-1"
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
      className="group block w-[628px] h-[670px] flex-shrink-0 relative overflow-hidden"
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
            sizes="628px"
          />

          {/* Category Badge */}
          {card.category && (
            <div className="absolute top-8 left-8 z-10">
              <span className="inline-block px-3 py-1 text-xs font-medium text-white bg-credera-red rounded-full">
                {card.category}
              </span>
            </div>
          )}
        </div>

        {/* Text Overlay at Bottom - Fixed height of 200px with 32px padding */}
        <div className="absolute bottom-0 left-0 right-0 h-[200px] p-8 bg-white text-credera-dark transition-all duration-500 group-hover:bg-credera-navy group-hover:text-white">
          <h3 className="text-card-title font-medium mb-3 transition-all duration-300 group-hover:translate-y-[-8px]">
            {card.title}
          </h3>
          <p className="text-credera-gray-600 leading-relaxed mb-0 transition-all duration-300 group-hover:text-white/90 group-hover:translate-y-[-8px] group-hover:mb-4">
            {card.description}
          </p>

          {/* Learn More Link - Hidden by default, shows on hover */}
          <div className="flex items-center text-credera-red font-medium text-sm opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 delay-200">
            <span>Learn More</span>
            <svg
              className="ml-2 w-4 h-4 transition-transform duration-200 group-hover:translate-x-1"
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
    <section className="py-20 bg-white">
      {/* Scroll Indicator Container - Centered with max-width */}
      <div className="max-w-7xl mx-auto px-8 mb-8">
        <div className="scroll-indicator-container">
          {/* Outer line */}
          <div className="w-full h-2 bg-credera-gray-100 rounded-full overflow-hidden">
            {/* Inner line that moves with scroll */}
            <div
              className="h-full bg-credera-red rounded-full transition-all duration-150"
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
          <div className="flex space-x-6 min-w-max pl-8"
            style={{
              marginLeft: 'calc(50% - 314px)', // Half of 628px
              paddingRight: 'calc(50% - 314px)' // Half of 628px
            }}>
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