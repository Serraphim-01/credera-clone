"use client";

import React, { useRef, useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { HorizontalScrollCardsProps, ContentCard } from '@/types';

const HorizontalScrollCards: React.FC<HorizontalScrollCardsProps> = ({
  cards,
  scrollBehavior = 'smooth'
}) => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isHovering, setIsHovering] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const autoScrollIntervalRef = useRef<NodeJS.Timeout | null>(null);
  const userScrollTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const updateScrollProgress = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
      const maxScroll = scrollWidth - clientWidth;
      const progress = maxScroll > 0 ? (scrollLeft / maxScroll) * 100 : 0;
      setScrollProgress(progress);
    }
  };

  const updateActiveIndex = () => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      const isDesktop = window.innerWidth >= 768;
      const cardWidth = isDesktop ? 500 + 24 : 240 + 16; // card width + gap
      const initialOffset = isDesktop ? container.clientWidth * 0.33 : container.clientWidth * 0.25;
      const scrollLeft = container.scrollLeft - initialOffset;
      const newActiveIndex = Math.max(0, Math.round(scrollLeft / cardWidth));
      setActiveIndex(Math.min(newActiveIndex, cards.length - 1));
    }
  };

  const startAutoScroll = () => {
    if (autoScrollIntervalRef.current) return;
    autoScrollIntervalRef.current = setInterval(() => {
      setActiveIndex((prevIndex) => {
        const nextIndex = (prevIndex + 1) % cards.length;
        scrollToCard(nextIndex);
        return nextIndex;
      });
    }, 4000);
  };

  const stopAutoScroll = () => {
    if (autoScrollIntervalRef.current) {
      clearInterval(autoScrollIntervalRef.current);
      autoScrollIntervalRef.current = null;
    }
  };

  const scrollToCard = (index: number) => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      const isDesktop = window.innerWidth >= 768;
      const cardWidth = isDesktop ? 500 + 24 : 240 + 16; // card width + gap
      const initialOffset = isDesktop ? container.clientWidth * 0.33 : container.clientWidth * 0.25; // Center the first card
      const scrollLeft = initialOffset + (index * cardWidth);
      container.scrollTo({
        left: scrollLeft,
        behavior: 'smooth'
      });
    }
  };

  const handleUserScroll = () => {
    stopAutoScroll();
    updateActiveIndex();
    if (userScrollTimeoutRef.current) {
      clearTimeout(userScrollTimeoutRef.current);
    }
    userScrollTimeoutRef.current = setTimeout(() => {
      startAutoScroll();
    }, 5000); // Resume auto-scroll after 5 seconds of inactivity
  };

  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;
    if (scrollContainer) {
      scrollContainer.addEventListener('scroll', updateScrollProgress);
      scrollContainer.addEventListener('scroll', handleUserScroll);

      // Initial calculations
      const initTimeout = setTimeout(() => {
        updateScrollProgress();
        updateActiveIndex();
        // Start from the middle card on desktop
        const isDesktop = window.innerWidth >= 768;
        const startIndex = isDesktop ? Math.floor(cards.length / 2) : 0;
        setActiveIndex(startIndex);
        scrollToCard(startIndex);
        startAutoScroll();
      }, 100);

      return () => {
        scrollContainer.removeEventListener('scroll', updateScrollProgress);
        scrollContainer.removeEventListener('scroll', handleUserScroll);
        clearTimeout(initTimeout);
        stopAutoScroll();
        if (userScrollTimeoutRef.current) {
          clearTimeout(userScrollTimeoutRef.current);
        }
      };
    }
  }, [cards.length]);

  // Card Type 1: Full image with gradient overlay, navy blue slide-up on hover
  const CardType1 = ({ card, index }: { card: ContentCard; index: number }) => {
    const isActive = index === activeIndex;
    return (
      <Link
        href={card.linkUrl}
        className={`group block w-[240px] h-[280px] md:w-[500px] md:h-[550px] flex-shrink-0 relative overflow-hidden transition-all duration-500 ${isActive ? 'scale-100 opacity-100' : 'scale-90 opacity-80'} hover:scale-100 hover:opacity-100`}
        aria-label={`Read more about ${card.title}`}
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
        onTouchStart={() => setIsHovering(true)}
        onTouchEnd={() => setIsHovering(false)}
      >
        <article className={`bg-white rounded-lg overflow-hidden shadow-md hover-lift hover-shadow h-full relative ${isActive ? 'shadow-lg' : ''}`}>
          {/* Card Image Container - Full height */}
          <div className="relative w-full h-full bg-credera-gray-100 overflow-hidden">
            <Image
              src={card.imageUrl}
              alt={card.title}
              fill
              className={`object-cover transition-all duration-500 ${isActive ? 'scale-110' : ''} group-hover:scale-110`}
              sizes="(max-width: 768px) 240px, 500px"
            />

            {/* Gradient Overlay - dark blue at bottom, transparent at top */}
            <div className={`absolute inset-0 bg-gradient-to-t from-credera-navy/80 via-credera-navy/40 to-transparent transition-opacity duration-500 ${isActive ? 'opacity-0' : ''} group-hover:opacity-0`} />

            {/* Navy Blue Slide-up Overlay */}
            <div className={`absolute inset-0 bg-[color:var(--color-foreground)] transition-all duration-500 transform ${isActive ? 'translate-y-0 opacity-100' : 'translate-y-full'} group-hover:translate-y-0 group-hover:opacity-100`} />

            {/* Category Badge */}
            {card.category && (
              <div className="absolute top-2 left-2 md:top-6 md:left-6 z-10">
                <span className="inline-block px-2 py-1 md:px-3 md:py-1 text-xs font-medium text-[color:var(--color-yellow)] bg-[color:var(--color-foreground)] rounded-full">
                  {card.category}
                </span>
              </div>
            )}
          </div>

          {/* Card Content - Fixed at bottom with responsive padding */}
          <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6 z-10 text-white transition-all duration-500 h-[120px] md:h-[180px]">
            <h3 className={`text-sm md:text-lg font-medium mb-2 transition-all duration-300 ${isActive ? 'translate-y-[-12px]' : ''} group-hover:translate-y-[-12px]`}>
              {card.title}
            </h3>
            <p className={`text-xs md:text-sm text-[color:var(--color-background)]/90 leading-relaxed mb-2 transition-all duration-300 ${isActive ? 'translate-y-[-12px]' : ''} group-hover:translate-y-[-12px]`}>
              {card.description}
            </p>

            {/* Learn More Link - Hidden by default, shows on hover */}
            <div className={`flex items-center text-[color:var(--color-yellow)] font-bold text-xs md:text-sm transition-all duration-300 delay-200 ${isActive ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'} group-hover:opacity-100 group-hover:translate-y-0`}>
              <span>Learn More</span>
              <svg
                className={`ml-2 w-3 h-3 md:w-4 md:h-4 transition-transform duration-200 ${isActive ? 'translate-x-1' : ''} group-hover:translate-x-1`}
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
  };

  // Card Type 2: Full image with bottom text overlay, white to navy blue on hover
  const CardType2 = ({ card, index }: { card: ContentCard; index: number }) => {
    const isActive = index === activeIndex;
    return (
      <Link
        href={card.linkUrl}
        className={`group block w-[240px] h-[280px] md:w-[500px] md:h-[550px] flex-shrink-0 relative overflow-hidden transition-all duration-500 ${isActive ? 'scale-100 opacity-100' : 'scale-90 opacity-80'} hover:scale-100 hover:opacity-100`}
        aria-label={`Read more about ${card.title}`}
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
        onTouchStart={() => setIsHovering(true)}
        onTouchEnd={() => setIsHovering(false)}
      >
        <article className={`bg-white rounded-lg overflow-hidden shadow-md hover-lift hover-shadow h-full relative ${isActive ? 'shadow-lg' : ''}`}>
          {/* Card Image Container - Image takes full card height */}
          <div className="relative w-full h-full bg-credera-gray-100 overflow-hidden">
            <Image
              src={card.imageUrl}
              alt={card.title}
              fill
              className={`object-cover transition-all duration-500 ${isActive ? 'scale-110' : ''} group-hover:scale-110`}
              sizes="(max-width: 768px) 240px, 500px"
            />

            {/* Category Badge */}
            {card.category && (
              <div className="absolute top-4 left-4 md:top-6 md:left-6 z-10">
                <span className="inline-block px-2 py-1 md:px-3 md:py-1 text-xs font-medium text-[color:var(--color-yellow)] bg-[color:var(--color-foreground)] rounded-full">
                  {card.category}
                </span>
              </div>
            )}
          </div>

          {/* Text Overlay at Bottom - Fixed height with responsive sizing */}
          <div
            className={`absolute bottom-0 left-0 right-0 h-[120px] md:h-[180px] p-4 md:p-6 
    transition-all duration-500 
    text-credera-dark 
    ${isActive
                ? 'bg-[var(--color-foreground)] text-[var(--color-background)]'
                : 'bg-white text-[var(--color-foreground)]'
              } 
    group-hover:bg-[var(--color-foreground)] group-hover:text-[var(--color-background)]`}
          >
            <h3
              className={`text-sm md:text-lg font-medium mb-2 transition-all duration-300 
      ${isActive ? 'translate-y-[-8px]' : ''} 
      group-hover:translate-y-[-8px]`}
            >
              {card.title}
            </h3>

            <p
              className={`text-xs md:text-sm leading-relaxed mb-0 transition-all duration-300 
      ${isActive
                  ? 'translate-y-[-8px] mb-2 text-[var(--color-background)]/90'
                  : 'text-[var(--color-foreground)]/90'
                } 
      group-hover:translate-y-[-8px] group-hover:mb-2 group-hover:text-[var(--color-background)]/90`}
            >
              {card.description}
            </p>

            {/* Learn More Link */}
            <div
              className={`flex items-center font-medium mt-2 ml-0 text-xs md:text-sm 
      transition-all duration-300 delay-200 
      ${isActive
                  ? 'opacity-100 translate-y-0 text-[var(--color-yellow)]'
                  : 'opacity-0 translate-y-4'
                } 
      group-hover:opacity-100 group-hover:translate-y-0 group-hover:text-[var(--color-yellow)]`}
            >
              <span>Learn More</span>
              <svg
                className={`ml-2 w-3 h-3 md:w-4 md:h-4 transition-transform duration-200 
        ${isActive ? 'translate-x-1' : ''} 
        group-hover:translate-x-1`}
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
  };

  return (
    <section className="py-12 md:py-20 bg-white">
      {/* Scroll Indicator Container - Centered with max-width */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 mb-6 md:mb-8">
        <div className="scroll-indicator-container">
          {/* Outer line */}
          <div className="w-full h-1 md:h-2 bg-credera-gray-100 rounded-full overflow-hidden">
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
        {/* Scroll container with snap behavior */}
        <div
          ref={scrollContainerRef}
          className="scroll-container overflow-x-auto pb-4 snap-x snap-mandatory"
          style={{ scrollBehavior }}
        >
          <div className="flex space-x-4 md:space-x-6 min-w-max px-4 md:px-8">
            {/* Add left padding to center the first card */}
            <div className="flex-shrink-0 w-1/4 md:w-1/3" aria-hidden="true" />

            {cards.map((card, index) =>
              index % 2 === 0 ? (
                <CardType1 key={card.id} card={card} index={index} />
              ) : (
                <CardType2 key={card.id} card={card} index={index} />
              )
            )}

            {/* Add right padding for better scrolling experience */}
            <div className="flex-shrink-0 w-1/4 md:w-1/3" aria-hidden="true" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HorizontalScrollCards;