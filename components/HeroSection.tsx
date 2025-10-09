import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { HeroSectionProps } from '@/types';

const HeroSection: React.FC<HeroSectionProps> = ({
  headline,
  description,
  ctaText,
  ctaLink,
  illustrationSrc
}) => {
  return (
    <section className="relative min-h-[800px] py-16 md:py-20 px-4 md:px-8 overflow-hidden">

      <Image
        src={illustrationSrc}
        alt="Background illustration"
        fill
        priority
        className="object-cover object-center -z-10"
      />

      {/* Overlay (optional for readability) */}
      <div className="absolute inset-0 bg-black/50 -z-10"></div>

      <div className="relative max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-16 md:gap-20 items-center">
          {/* Hero Content */}
          <div className="max-w-xl pt-8 md:pt-0">
            <h1 className="text-4xl md:text-hero text-white font-bold mb-6">
              Unlock{' '}
              <span className="text-yellow">
                extraordinary
              </span>{' '}
              opportunities.
            </h1>

            <p className="text-lg md:text-xl italic text-light-gray mb-8 leading-relaxed">
              {description}
            </p>

            {/* Top Solutions Images - Now 3 instead of 4 */}
            <div className="flex items-center justify-start gap-4 md:gap-8 mb-8">
              <div className="flex flex-col items-center group cursor-pointer">
                <div className="relative w-20 h-20 md:w-32 md:h-32 rounded-lg overflow-hidden shadow-md border border-gray-200 transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg">
                  <Image
                    src="https://images.pexels.com/photos/4164418/pexels-photo-4164418.jpeg?auto=compress&cs=tinysrgb&w=400"
                    alt="Cloud Transformation"
                    fill
                    className="object-cover"
                  />
                  {/* Text overlay positioned at bottom */}
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-1 md:p-2">
                    <span className="text-xs md:text-sm font-medium text-white text-center block">Cloud Transformation</span>
                  </div>
                </div>
              </div>

              <div className="flex flex-col items-center group cursor-pointer">
                <div className="relative w-20 h-20 md:w-32 md:h-32 rounded-lg overflow-hidden shadow-md border border-gray-200 transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg">
                  <Image
                    src="https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=400"
                    alt="Data & Analytics"
                    fill
                    className="object-cover"
                  />
                  {/* Text overlay positioned at bottom */}
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-1 md:p-2">
                    <span className="text-xs md:text-sm font-medium text-white text-center block">Data & Analytics</span>
                  </div>
                </div>
              </div>

              <div className="flex flex-col items-center group cursor-pointer">
                <div className="relative w-20 h-20 md:w-32 md:h-32 rounded-lg overflow-hidden shadow-md border border-gray-200 transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg">
                  <Image
                    src="https://images.pexels.com/photos/607812/pexels-photo-607812.jpeg?auto=compress&cs=tinysrgb&w=400"
                    alt="Digital Experience"
                    fill
                    className="object-cover"
                  />
                  {/* Text overlay positioned at bottom */}
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-1 md:p-2">
                    <span className="text-xs md:text-sm font-medium text-white text-center block">Digital Experience</span>
                  </div>
                </div>
              </div>
            </div>

            <Link
              href={ctaLink}
              className="inline-flex items-center px-6 py-3 md:px-8 md:py-4 bg-yellow text-black font-semibold text-sm tracking-wide hover:bg-opacity-80 transition-all duration-200 hover-lift focus-visible rounded-md"
              aria-label={ctaText}
            >
              {ctaText}
              <svg
                className="ml-2 w-4 h-4"
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
            </Link>
          </div>        
        </div>
      </div>
    </section>
  );
};

export default HeroSection;