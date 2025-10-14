"use client";

import React, { useRef, useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { HorizontalScrollCardsProps, ContentCard } from '@/types';

const HorizontalScrollCards: React.FC<HorizontalScrollCardsProps> = ({
  cards,
  scrollBehavior = 'smooth'
}) => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isHovering, setIsHovering] = useState(false);
  const autoScrollRef = useRef<NodeJS.Timeout | null>(null);

  const updateScrollProgress = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
      const maxScroll = scrollWidth - clientWidth;
      const progress = maxScroll > 0 ? (scrollLeft / maxScroll) * 100 : 0;
      setScrollProgress(progress);
    }
  };

  const updateActiveIndex = useCallback(() => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      const { scrollLeft, clientWidth, scrollWidth } = container;

      const cardElement = container.querySelector('.flex-shrink-0') as HTMLElement;
      if (!cardElement) return;

      const cardWidth = cardElement.offsetWidth;
      const gap = 16;
      const totalCardWidth = cardWidth + gap;

      // ✅ Clamp: if you're at the end, force last card
      const maxScroll = scrollWidth - clientWidth;
      if (scrollLeft >= maxScroll - cardWidth / 2) {
        setActiveIndex(cards.length - 1);
        return;
      }

      // Otherwise, normal center-based calculation
      const centerPosition = scrollLeft + clientWidth / 2;
      const newIndex = Math.min(
        Math.round(centerPosition / totalCardWidth - 0.5),
        cards.length - 1
      );

      setActiveIndex(newIndex);
    }
  }, [cards.length]);


  const scrollToCard = useCallback((index: number) => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      const cardElement = container.querySelector('.flex-shrink-0') as HTMLElement;
      if (!cardElement) return;

      const cardWidth = cardElement.offsetWidth;
      const gap = 16; // space-x-4 = 16px
      const totalCardWidth = cardWidth + gap;
      const containerWidth = container.clientWidth;

      // Calculate scroll position to center the card
      const scrollPosition = index * totalCardWidth - (containerWidth - cardWidth) / 2;

      container.scrollTo({
        left: Math.max(0, scrollPosition),
        behavior: scrollBehavior
      });
    }
  }, [scrollBehavior]);

  // Auto-scroll functionality with improved loop
  const startAutoScroll = useCallback(() => {
    if (autoScrollRef.current) {
      clearInterval(autoScrollRef.current);
    }

    autoScrollRef.current = setInterval(() => {
      if (!isHovering && scrollContainerRef.current) {
        let nextIndex = activeIndex + 1;

        // If we're at the last card, loop back to first
        if (nextIndex >= cards.length) {
          nextIndex = 0;
          // Scroll instantly to start for seamless loop
          scrollContainerRef.current.scrollTo({
            left: 0,
            behavior: 'auto'
          });
          setActiveIndex(0);
        } else {
          scrollToCard(nextIndex);
        }
      }
    }, 3000); // Change card every 3 seconds
  }, [activeIndex, cards.length, isHovering, scrollToCard]);

  const stopAutoScroll = () => {
    if (autoScrollRef.current) {
      clearInterval(autoScrollRef.current);
      autoScrollRef.current = null;
    }
  };

  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;
    if (scrollContainer) {
      scrollContainer.addEventListener('scroll', updateScrollProgress);
      scrollContainer.addEventListener('scroll', updateActiveIndex);

      // Initial calculations
      updateScrollProgress();
      updateActiveIndex();

      // Start auto-scroll after a brief delay
      const startDelay = setTimeout(() => {
        startAutoScroll();
      }, 1000);

      return () => {
        scrollContainer.removeEventListener('scroll', updateScrollProgress);
        scrollContainer.removeEventListener('scroll', updateActiveIndex);
        stopAutoScroll();
        clearTimeout(startDelay);
      };
    }
  }, [startAutoScroll, updateActiveIndex]);

  // Restart auto-scroll when active index changes
  useEffect(() => {
    if (!isHovering) {
      stopAutoScroll();
      startAutoScroll();
    }
  }, [activeIndex, isHovering, startAutoScroll]);

  // Handle manual card click
  const handleCardClick = (index: number) => {
    stopAutoScroll();
    scrollToCard(index);
    // Restart auto-scroll after delay
    setTimeout(() => {
      if (!isHovering) {
        startAutoScroll();
      }
    }, 5000);
  };

  // Improved loop detection
  useEffect(() => {
    // When we reach the last card, wait then loop back to start
    if (activeIndex === cards.length - 1 && !isHovering) {
      const loopTimeout = setTimeout(() => {
        if (activeIndex === cards.length - 1 && !isHovering) {
          scrollContainerRef.current?.scrollTo({
            left: 0,
            behavior: 'smooth'
          });
          setActiveIndex(0);
        }
      }, 3000);

      return () => clearTimeout(loopTimeout);
    }
  }, [activeIndex, isHovering, cards.length]);

  // Card Type 1: Full image with gradient overlay, navy blue slide-up on hover
  const CardType1 = ({ card, index }: { card: ContentCard; index: number }) => {
    const isActive = activeIndex === index;
    const showHover = isActive && !isHovering;

    return (
      <Link
        href={card.linkUrl}
        className={`group block w-[280px] h-[320px] md:w-[628px] md:h-[670px] flex-shrink-0 relative overflow-hidden transition-all duration-500 ${isActive ? 'scale-100' : 'scale-90 opacity-80'
          }`}
        aria-label={`Read more about ${card.title}`}
        onClick={() => handleCardClick(index)}
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
        onTouchStart={() => setIsHovering(true)}
        onTouchEnd={() => setIsHovering(false)}
      >
        <article className="bg-white rounded-lg overflow-hidden shadow-md hover-lift hover-shadow h-full relative">
          {/* Card Image Container - Full height */}
          <div className="relative w-full h-full bg-credera-gray-100 overflow-hidden">
            <Image
              src={card.imageUrl}
              alt={card.title}
              fill
              className="object-cover transition-all duration-500 group-hover:scale-110"
              sizes="(max-width: 768px) 280px, 628px"
            />

            {/* Gradient Overlay - dark blue at bottom, transparent at top */}
            <div className={`absolute inset-0 bg-gradient-to-t from-credera-navy/80 via-credera-navy/40 to-transparent transition-opacity duration-500 ${showHover ? 'opacity-0' : 'opacity-100'
              }`} />

            {/* Navy Blue Slide-up Overlay */}
            <div className={`absolute inset-0 bg-[color:var(--color-foreground)] transition-all duration-500 transform ${showHover ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'
              }`} />

            {/* Category Badge */}
            {card.category && (
              <div className="absolute top-2 left-2 md:top-8 md:left-8 z-10">
                <span className="inline-block px-2 py-1 md:px-3 md:py-1 text-xs font-medium text-[color:var(--color-yellow)] bg-[color:var(--color-foreground)] rounded-full">
                  {card.category}
                </span>
              </div>
            )}
          </div>

          {/* Card Content - Fixed at bottom with responsive padding */}
          <div className="absolute bottom-0 left-0 right-0 p-4 md:p-8 z-10 text-white transition-all duration-500 h-[150px] md:h-[220px]">
            <h3 className="text-sm md:text-card-title font-medium mb-2 md:mb-3 transition-all duration-300 md:group-hover:translate-y-[-15px]">
              {card.title}
            </h3>
            <p className="text-xs md:text-base text-[color:var(--color-background)]/90 leading-relaxed mb-2 md:mb-4 transition-all duration-300 md:group-hover:translate-y-[-15px]">
              {card.description}
            </p>

            {/* Learn More Link - Hidden by default, shows on hover/active */}
            <div className={`flex items-center text-[color:var(--color-yellow)] font-bold text-xs md:text-sm transition-all duration-300 delay-200 ${showHover ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}>
              <span>Learn More</span>
              <svg
                className="ml-2 w-3 h-3 md:w-4 md:h-4 transition-transform duration-200 group-hover:translate-x-1"
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
    const isActive = activeIndex === index;
    const showHover = isActive && !isHovering;

    return (
      <Link
        href={card.linkUrl}
        className={`group block w-[280px] h-[320px] md:w-[628px] md:h-[670px] flex-shrink-0 relative overflow-hidden transition-all duration-500 ${isActive ? 'scale-100' : 'scale-90 opacity-80'
          }`}
        aria-label={`Read more about ${card.title}`}
        onClick={() => handleCardClick(index)}
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
        onTouchStart={() => setIsHovering(true)}
        onTouchEnd={() => setIsHovering(false)}
      >
        <article className="bg-white rounded-lg overflow-hidden shadow-md hover-lift hover-shadow h-full relative">
          {/* Card Image Container - Image takes full card height */}
          <div className="relative w-full h-full bg-credera-gray-100 overflow-hidden">
            <Image
              src={card.imageUrl}
              alt={card.title}
              fill
              className="object-cover transition-all duration-500 group-hover:scale-110"
              sizes="(max-width: 768px) 280px, 628px"
            />

            {/* Category Badge */}
            {card.category && (
              <div className="absolute top-4 left-4 md:top-8 md:left-8 z-10">
                <span className="inline-block px-2 py-1 md:px-3 md:py-1 text-xs font-medium text-[color:var(--color-yellow)] bg-[color:var(--color-foreground)] rounded-full">
                  {card.category}
                </span>
              </div>
            )}
          </div>

          {/* Text Overlay at Bottom - Fixed height with responsive sizing */}
          <div className={`absolute bottom-0 left-0 right-0 h-[150px] md:h-[220px] p-4 md:p-8 transition-all duration-500 ${showHover
            ? 'bg-[color:var(--color-foreground)] text-[color:var(--color-background)]'
            : 'bg-white text-credera-dark'
            }`}>
            <h3 className="text-sm md:text-card-title font-medium mb-2 md:mb-3 transition-all duration-300 md:group-hover:translate-y-[-8px]">
              {card.title}
            </h3>
            <p className={`text-xs md:text-base leading-relaxed mb-0 md:mb-2 transition-all duration-300 md:group-hover:translate-y-[-8px] md:group-hover:mb-4 ${showHover ? 'text-[color:var(--color-background)]/90' : 'text-credera-gray-600'
              }`}>
              {card.description}
            </p>

            {/* Learn More Link - Hidden by default, shows on hover/active */}
            <div className={`flex items-center font-medium mt-2 ml-0 text-xs md:text-sm transition-all duration-300 delay-200 ${showHover ? 'opacity-100 translate-y-0 text-[color:var(--color-yellow)]' : 'opacity-0 translate-y-4 text-font-medium'
              }`}>
              <span>Learn More</span>
              <svg
                className="ml-2 w-3 h-3 md:w-4 md:h-4 transition-transform duration-200 group-hover:translate-x-1"
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
            {cards.map((card, index) =>
              index % 2 === 0 ? (
                <CardType1 key={card.id} card={card} index={index} />
              ) : (
                <CardType2 key={card.id} card={card} index={index} />
              )
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HorizontalScrollCards;