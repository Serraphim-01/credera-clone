'use client';

import React, { useRef, useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { RightPartnerSectionProps, PartnerCard } from '@/types';

const RightPartnerSection: React.FC<RightPartnerSectionProps> = ({
  staticCard,
  partnerCards,
}) => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [, setIsVisible] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isHovering, setIsHovering] = useState(false);
  const autoScrollRef = useRef<NodeJS.Timeout | null>(null);

  // Check if container is in viewport for animations
  const updateVisibility = () => {
    if (scrollContainerRef.current) {
      const rect = scrollContainerRef.current.getBoundingClientRect();
      const isInViewport = rect.top < window.innerHeight && rect.bottom > 0;
      setIsVisible(isInViewport);
    }
  };

  const updateActiveIndex = useCallback(() => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      const { scrollLeft, clientWidth, scrollWidth } = container;

      const cardElement = container.querySelector('.flex-shrink-0') as HTMLElement;
      if (!cardElement) return;

      const cardWidth = cardElement.offsetWidth;
      const gap = window.innerWidth < 768 ? 16 : 32; // space-x-4 on mobile, space-x-8 on desktop
      const totalCardWidth = cardWidth + gap;

      // ✅ Clamp: if you're at the end, force last card
      const maxScroll = scrollWidth - clientWidth;
      if (scrollLeft >= maxScroll - cardWidth / 2) {
        setActiveIndex(partnerCards.length - 1);
        return;
      }

      // Otherwise, normal center-based calculation
      const centerPosition = scrollLeft + clientWidth / 2;
      const newIndex = Math.min(
        Math.round(centerPosition / totalCardWidth - 0.5),
        partnerCards.length - 1
      );

      setActiveIndex(newIndex);
    }
  }, [partnerCards.length]);

  const scrollToCard = (index: number) => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      const cardElement = container.querySelector('.flex-shrink-0') as HTMLElement;
      if (!cardElement) return;

      const cardWidth = cardElement.offsetWidth;
      const gap = window.innerWidth < 768 ? 16 : 32;
      const totalCardWidth = cardWidth + gap;
      const containerWidth = container.clientWidth;

      // Calculate scroll position to center the card
      const scrollPosition = index * totalCardWidth - (containerWidth - cardWidth) / 2;

      container.scrollTo({
        left: Math.max(0, scrollPosition),
        behavior: 'smooth'
      });
    }
  };

  // Auto-scroll functionality with improved loop
  const startAutoScroll = useCallback(() => {
    if (autoScrollRef.current) {
      clearInterval(autoScrollRef.current);
    }

    autoScrollRef.current = setInterval(() => {
      if (!isHovering && scrollContainerRef.current) {
        let nextIndex = activeIndex + 1;

        // If we're at the last card, loop back to first
        if (nextIndex >= partnerCards.length) {
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
  }, [activeIndex, isHovering, partnerCards.length]);

  const stopAutoScroll = () => {
    if (autoScrollRef.current) {
      clearInterval(autoScrollRef.current);
      autoScrollRef.current = null;
    }
  };

  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;
    if (scrollContainer) {
      scrollContainer.addEventListener('scroll', updateActiveIndex);

      // Initial calculation
      updateActiveIndex();

      // Start auto-scroll after a brief delay
      const startDelay = setTimeout(() => {
        startAutoScroll();
      }, 1000);

      return () => {
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

  // Check visibility for animations
  useEffect(() => {
    window.addEventListener('scroll', updateVisibility);
    window.addEventListener('resize', updateVisibility);
    // Initial calculation
    updateVisibility();

    return () => {
      window.removeEventListener('scroll', updateVisibility);
      window.removeEventListener('resize', updateVisibility);
    };
  }, []);

  // Card Type 1: Full image with gradient overlay (all cards use this type)
  const ScrollCard = ({ card, index }: { card: PartnerCard; index: number }) => {
    const isActive = activeIndex === index;
    const showHover = isActive && !isHovering;

    return (
      <Link
        href={card.linkUrl}
        className={`group block w-[300px] h-[250px] md:w-[550px] md:h-[500px] flex-shrink-0 relative overflow-hidden rounded-lg transition-all duration-700 ease-out ${
          isActive ? 'scale-100' : 'scale-90 opacity-80'
        }`}
        aria-label={`Read more about ${card.title}`}
        onClick={() => handleCardClick(index)}
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
        onTouchStart={() => setIsHovering(true)}
        onTouchEnd={() => setIsHovering(false)}
      >
        <article className="h-full relative overflow-hidden rounded-lg">
          {/* Full Image Container */}
          <div className="relative w-full h-full bg-credera-gray-100 overflow-hidden">
            <Image
              src={card.imageUrl}
              alt={card.title}
              fill
              className="object-cover transition-all duration-1000 ease-out group-hover:scale-110"
              sizes="(max-width: 768px) 300px, 550px"
            />

            {/* Gradient Overlay */}
            <div className={`absolute inset-0 bg-gradient-to-t from-credera-navy/80 via-credera-navy/40 to-transparent transition-opacity duration-700 ease-out ${
              showHover ? 'opacity-0' : 'opacity-100'
            }`} />

            {/* Navy Blue Slide-up Overlay */}
            <div className={`absolute inset-0 bg-[color:var(--color-foreground)] transition-all duration-700 ease-out transform ${
              showHover ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'
            }`} />

            {/* Content Overlay */}
            <div className="absolute bottom-0 left-0 right-0 p-2 md:p-8 text-white z-10 transition-all duration-700 ease-out h-[150px] md:h-[220px]">
              <h3 className="text-base md:text-xl font-bold mb-2 md:mb-3 transition-all duration-500 ease-out group-hover:translate-y-[-12px] md:group-hover:translate-y-[-8px]">
                {card.title}
              </h3>
              <p className="text-white/90 leading-relaxed text-xs md:text-base mb-2 md:mb-4 transition-all duration-500 ease-out group-hover:translate-y-[-12px] md:group-hover:translate-y-[-8px] line-clamp-2">
                {card.description}
              </p>

              {/* Learn More Link - Hidden by default, shows on hover/active */}
              <div className={`flex items-center text-credera-red font-medium text-xs md:text-sm transition-all duration-500 ease-out delay-100 ${
                showHover ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}>
                <span>Learn More</span>
                <svg
                  className="ml-1 md:ml-2 w-3 h-3 md:w-4 md:h-4 transition-transform duration-300 ease-out group-hover:translate-x-1"
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
          </div>
        </article>
      </Link>
    );
  };

  return (
    <section className="py-12 md:py-20 bg-white">
      {/* Updated container with max-w-8xl and responsive padding */}
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-12 xl:px-16 2xl:px-20">
        {/* Desktop Layout */}
        <div className="hidden md:block relative">
          {/* Static Card - Fixed on left side - 550x600 */}
          <div className="absolute left-0 top-1/2 transform -translate-y-1/2 z-20 w-[550px] h-[600px] bg-gray-50 rounded-lg shadow-lg overflow-hidden">
            <div className="relative h-full p-12 flex flex-col justify-center">
              <div className="space-y-6">
                <div>
                  <h3 className="text-2xl font-bold text-credera-dark mb-2">
                    {staticCard.title}
                  </h3>
                  <p className="text-lg text-credera-red font-semibold">
                    {staticCard.subtitle}
                  </p>
                </div>
                
                <p className="text-credera-gray-600 leading-relaxed">
                  {staticCard.description}
                </p>
                
                {/* View All - Not a link, just text */}
                <div className="flex items-center text-credera-red font-semibold text-lg space-x-2">
                  <span>View All</span>
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>

          {/* Scrollable Cards Container */}
          <div 
            ref={scrollContainerRef}
            className="ml-[550px] overflow-x-auto pb-6 scrollbar-hide snap-x snap-mandatory"
            style={{ 
              scrollBehavior: 'smooth',
            }}
          >
            <div className="flex min-w-max pr-8 space-x-8">
              {partnerCards.map((card, index) => (
                <div key={card.id} className="flex items-center snap-center">
                  <ScrollCard card={card} index={index} />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Mobile Layout */}
        <div className="md:hidden">
          {/* Static Card - Mobile responsive */}
          <div className="w-full bg-gray-50 rounded-lg shadow-lg overflow-hidden mb-6 p-4">
            <div className="space-y-3">
              <div>
                <h3 className="text-lg font-bold text-credera-dark mb-1">
                  {staticCard.title}
                </h3>
                <p className="text-sm text-credera-red font-semibold">
                  {staticCard.subtitle}
                </p>
              </div>
              
              <p className="text-credera-gray-600 leading-relaxed text-xs">
                {staticCard.description}
              </p>
              
              {/* View All - Not a link, just text */}
              <div className="flex items-center text-credera-red font-semibold text-sm space-x-1">
                <span>View All</span>
                <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </div>
            </div>
          </div>

          {/* Mobile Scrollable Cards */}
          <div 
            ref={scrollContainerRef}
            className="overflow-x-auto pb-4 scrollbar-hide snap-x snap-mandatory"
            style={{ 
              scrollBehavior: 'smooth',
            }}
          >
            <div className="flex min-w-max space-x-4">
              {partnerCards.map((card, index) => (
                <div key={card.id} className="flex items-center snap-center">
                  <ScrollCard card={card} index={index} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        
        /* Custom max-width for very large screens */
        .max-w-8xl {
          max-width: 1920px; /* Adjust this value as needed */
        }
        
        /* Optional: Add media queries for even larger screens */
        @media (min-width: 2000px) {
          .max-w-8xl {
            max-width: 2200px;
          }
        }

        /* Line clamp utility for description text */
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </section>
  );
};

export default RightPartnerSection;