'use client';

import React, { useRef, useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { RightPartnerSectionProps, PartnerCard } from '@/types';

const RightPartnerSection: React.FC<RightPartnerSectionProps> = ({
  staticCard,
  partnerCards,
}) => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  // Check if container is in viewport for animations
  const updateVisibility = () => {
    if (scrollContainerRef.current) {
      const rect = scrollContainerRef.current.getBoundingClientRect();
      const isInViewport = rect.top < window.innerHeight && rect.bottom > 0;
      setIsVisible(isInViewport);
    }
  };

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
  const ScrollCard = ({ card }: { card: PartnerCard }) => (
    <Link
      href={card.linkUrl}
      className="group block w-[80vw] sm:w-[320px] md:w-[400px] lg:w-[550px] aspect-[11/10] flex-shrink-0 relative overflow-hidden rounded-lg"
      aria-label={`Read more about ${card.title}`}
    >
      <article className="h-full relative overflow-hidden rounded-lg">
        {/* Full Image Container */}
        <div className="relative w-full h-full bg-credera-gray-100 overflow-hidden">
          <Image
            src={card.imageUrl}
            alt={card.title}
            fill
            className="object-cover transition-all duration-500 group-hover:scale-110"
            sizes="(max-width: 640px) 80vw, (max-width: 768px) 320px, (max-width: 1024px) 400px, 550px"
          />

          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-100 transition-opacity duration-500" />

          {/* Navy Blue Slide-up Overlay */}
          <div className="absolute inset-0 bg-[color:var(--color-foreground)] opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-full group-hover:translate-y-0" />

          {/* Content Overlay */}
          <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6 lg:p-8 text-white z-10 transition-all duration-500">
            <h3 className="text-lg md:text-xl font-bold mb-2 transition-all duration-300 group-hover:translate-y-[-8px]">
              {card.title}
            </h3>
            <p className="text-sm md:text-base text-white/90 leading-relaxed mb-3 transition-all duration-300 group-hover:translate-y-[-8px]">
              {card.description}
            </p>

            {/* Learn More Link - Hidden by default, shows on hover */}
            <div className="flex items-center text-credera-red font-medium text-xs md:text-sm opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 delay-200">
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
        </div>
      </article>
    </Link>
  );

  return (
    <section className="py-16 md:py-20 bg-white overflow-hidden">
      {/* Unified container with responsive layout and padding */}
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:items-center lg:gap-8">

          {/* Static Card - Responsive */}
          <div className="w-full lg:w-1/3 lg:max-w-md xl:max-w-lg bg-gray-50 rounded-lg shadow-lg overflow-hidden mb-8 lg:mb-0 lg:flex-shrink-0">
            <div className="p-8 md:p-10 lg:p-12">
              <div className="space-y-4 md:space-y-6">
                <div>
                  <h3 className="text-2xl md:text-3xl font-bold text-credera-dark mb-2">
                    {staticCard.title}
                  </h3>
                  <p className="text-base md:text-lg text-credera-red font-semibold">
                    {staticCard.subtitle}
                  </p>
                </div>
                
                <p className="text-base text-credera-gray-600 leading-relaxed">
                  {staticCard.description}
                </p>
                
                <a href={staticCard.ctaLink} className="inline-flex items-center text-credera-red font-semibold text-base md:text-lg space-x-2 group">
                  <span>{staticCard.ctaText}</span>
                  <svg className="w-4 h-4 md:w-5 md:h-5 transition-transform duration-200 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Scrollable Cards Container - Takes remaining width on desktop */}
          <div 
            ref={scrollContainerRef}
            className="w-full lg:flex-1 overflow-x-auto pb-6 scrollbar-hide"
            style={{ scrollBehavior: 'smooth' }}
          >
            <div className="flex min-w-max space-x-4 md:space-x-6 lg:space-x-8">
              {partnerCards.map((card) => (
                <div key={card.id}>
                  <ScrollCard card={card} />
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
          max-width: 1800px;
        }
      `}</style>
    </section>
  );
};

export default RightPartnerSection;