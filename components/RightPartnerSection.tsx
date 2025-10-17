"use client";

import React, { useRef, useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { RightPartnerSectionProps, PartnerCard } from '@/types';

const RightPartnerSection: React.FC<RightPartnerSectionProps> = ({
  staticCard,
  partnerCards,
}) => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isHovering, setIsHovering] = useState(false);
  const autoScrollRef = useRef<NodeJS.Timeout | null>(null);
  const userScrollTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  // --- Update scroll progress for indicator (optional)
  const updateScrollProgress = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
      const maxScroll = scrollWidth - clientWidth;
      const progress = maxScroll > 0 ? (scrollLeft / maxScroll) * 100 : 0;
      setScrollProgress(progress);
    }
  };

  // --- Active index tracking
  const updateActiveIndex = useCallback(() => {
    if (!scrollContainerRef.current) return;
    const container = scrollContainerRef.current;
    const isDesktop = window.innerWidth >= 768;
    const cardWidth = isDesktop ? 550 + 32 : 300 + 16;
    const scrollLeft = container.scrollLeft;
    const newIndex = Math.max(0, Math.round(scrollLeft / cardWidth));
    setActiveIndex(Math.min(newIndex, partnerCards.length - 1));
  }, [partnerCards.length]);

  // --- Scroll to a specific card
  const scrollToCard = (index: number) => {
    if (!scrollContainerRef.current) return;
    const container = scrollContainerRef.current;
    const isDesktop = window.innerWidth >= 768;
    const cardWidth = isDesktop ? 550 + 32 : 300 + 16;
    const scrollLeft = index * cardWidth;

    container.scrollTo({ left: scrollLeft, behavior: 'smooth' });
  };

  // --- Auto scroll logic (looping)
  const startAutoScroll = useCallback(() => {
    if (autoScrollRef.current) return;
    autoScrollRef.current = setInterval(() => {
      setActiveIndex(prev => {
        const next = (prev + 1) % partnerCards.length;
        scrollToCard(next);
        return next;
      });
    }, 4000);
  }, [partnerCards.length]);

  const stopAutoScroll = () => {
    if (autoScrollRef.current) {
      clearInterval(autoScrollRef.current);
      autoScrollRef.current = null;
    }
  };

  // --- Pause on manual scroll
  const handleUserScroll = () => {
    stopAutoScroll();
    updateScrollProgress();
    updateActiveIndex();
    if (userScrollTimeoutRef.current) clearTimeout(userScrollTimeoutRef.current);
    userScrollTimeoutRef.current = setTimeout(startAutoScroll, 5000);
  };

  // --- Setup scroll listeners
  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;
    container.addEventListener('scroll', updateScrollProgress);
    container.addEventListener('scroll', handleUserScroll);

    const initTimeout = setTimeout(() => {
      updateScrollProgress();
      updateActiveIndex();
      setActiveIndex(0);
      scrollToCard(0);
      startAutoScroll();
    }, 200);

    return () => {
      container.removeEventListener('scroll', updateScrollProgress);
      container.removeEventListener('scroll', handleUserScroll);
      clearTimeout(initTimeout);
      stopAutoScroll();
      if (userScrollTimeoutRef.current) clearTimeout(userScrollTimeoutRef.current);
    };
  }, [partnerCards.length, startAutoScroll, updateActiveIndex]);

  // --- ScrollCard UI (synced animations)
  const ScrollCard = ({ card, index }: { card: PartnerCard; index: number }) => {
    const isActive = index === activeIndex;

    return (
      <Link
        href={card.linkUrl}
        className={`group block w-[300px] h-[250px] md:w-[550px] md:h-[500px] flex-shrink-0 relative overflow-hidden rounded-lg transition-all duration-500 ease-out 
          ${isActive ? 'scale-100 opacity-100' : 'scale-90 opacity-80'}
          hover:scale-100 hover:opacity-100`}
        aria-label={`Read more about ${card.title}`}
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
      >
        <article className="h-full relative overflow-hidden rounded-lg shadow-md">
          <div className="relative w-full h-full overflow-hidden">
            <Image
              src={card.imageUrl}
              alt={card.title}
              fill
              className={`object-cover transition-all duration-500 ${isActive ? 'scale-110' : ''} group-hover:scale-110`}
              sizes="(max-width: 768px) 300px, 550px"
            />

            {/* Gradient Overlay */}
            <div className={`absolute inset-0 bg-gradient-to-t from-credera-navy/80 via-credera-navy/40 to-transparent transition-opacity duration-500 ${isActive ? 'opacity-0' : ''} group-hover:opacity-0`} />

            {/* Navy Slide-up Overlay */}
            <div className={`absolute inset-0 bg-[color:var(--color-foreground)] transition-all duration-500 transform ${isActive ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'} group-hover:translate-y-0 group-hover:opacity-100`} />

            {/* Content */}
            <div className="absolute bottom-0 left-0 right-0 p-4 md:p-8 text-white z-10 transition-all duration-500 h-[140px] md:h-[200px]">
              <h3 className={`text-base md:text-xl font-bold mb-2 transition-all duration-300 ${isActive ? 'translate-y-[-12px]' : ''} group-hover:translate-y-[-12px]`}>
                {card.title}
              </h3>
              <p className={`text-xs md:text-sm text-[color:var(--color-background)]/90 leading-relaxed mb-2 transition-all duration-300 ${isActive ? 'translate-y-[-12px]' : ''} group-hover:translate-y-[-12px]`}>
                {card.description}
              </p>

              <div className={`flex items-center text-[color:var(--color-yellow)] font-bold text-xs md:text-sm transition-all duration-300 delay-200 ${isActive ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'} group-hover:opacity-100 group-hover:translate-y-0`}>
                <span>Learn More</span>
                <svg
                  className="ml-2 w-3 h-3 md:w-4 md:h-4 transition-transform duration-200 group-hover:translate-x-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
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
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-12 xl:px-16 2xl:px-20">
        <div className="hidden md:block relative">
          {/* Static Card Left */}
          <div className="absolute left-0 top-1/2 transform -translate-y-1/2 z-20 w-[550px] h-[600px] bg-gray-50 rounded-lg shadow-lg overflow-hidden">
            <div className="relative h-full p-12 flex flex-col justify-center space-y-6">
              <div>
                <h3 className="text-2xl font-bold text-credera-dark mb-2">{staticCard.title}</h3>
                <p className="text-lg text-credera-red font-semibold">{staticCard.subtitle}</p>
              </div>
              <p className="text-credera-gray-600 leading-relaxed">{staticCard.description}</p>
              <div className="flex items-center text-credera-red font-semibold text-lg space-x-2">
                <span>View All</span>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </div>
          </div>

          {/* Scrollable Partner Cards */}
          <div
            ref={scrollContainerRef}
            className="ml-[550px] overflow-x-auto pb-6 scrollbar-hide"
            style={{ scrollBehavior: 'smooth' }}
          >
            <div className="flex min-w-max pr-8 space-x-8">
              {partnerCards.map((card, index) => (
                <ScrollCard key={card.id} card={card} index={index} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RightPartnerSection;