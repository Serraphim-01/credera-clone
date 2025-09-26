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
      className="group block w-[550px] h-[500px] flex-shrink-0 relative overflow-hidden rounded-lg"
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
            sizes="550px"
          />

          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-credera-navy/80 via-credera-navy/40 to-transparent opacity-100 group-hover:opacity-0 transition-opacity duration-500" />

          {/* Navy Blue Slide-up Overlay */}
          <div className="absolute inset-0 bg-credera-navy opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-full group-hover:translate-y-0" />

          {/* Content Overlay */}
          <div className="absolute bottom-0 left-0 right-0 p-8 text-white z-10 transition-all duration-500 group-hover:pb-8">
            <h3 className="text-xl font-bold mb-3 transition-all duration-300 group-hover:translate-y-[-8px]">
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
        </div>
      </article>
    </Link>
  );

  return (
    <section className="py-20 bg-white">
      {/* Updated container with max-w-8xl and responsive padding */}
      <div className="max-w-8xl mx-auto px-4 sm:px-8 lg:px-12 xl:px-16 2xl:px-20">
        <div className="relative">
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
            className="ml-[550px] overflow-x-auto pb-6 scrollbar-hide"
            style={{ 
              scrollBehavior: 'smooth',
            }}
          >
            <div className="flex min-w-max pr-8 space-x-8">
              {partnerCards.map((card) => (
                <div key={card.id} className="flex items-center">
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
          max-width: 1920px; /* Adjust this value as needed */
        }
        
        /* Optional: Add media queries for even larger screens */
        @media (min-width: 2000px) {
          .max-w-8xl {
            max-width: 2200px;
          }
        }
      `}</style>
    </section>
  );
};

export default RightPartnerSection;