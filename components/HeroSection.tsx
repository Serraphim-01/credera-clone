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
    <section className="relative min-h-[600px] md:min-h-[700px] lg:min-h-[800px] py-20 px-4 sm:px-6 lg:px-8 flex items-center overflow-hidden">

      <Image
        src={illustrationSrc}
        alt="Background illustration"
        fill
        priority
        className="object-cover object-center -z-10"
      />

      {/* Overlay (optional for readability) */}
      <div className="absolute inset-0 bg-black/50 -z-10"></div>

      <div className="relative max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-20 items-center">
          {/* Hero Content */}
          <div className="max-w-xl text-center lg:text-left">
            <h1 className="text-hero text-white font-bold mb-6">
              Unlock{' '}
              <span className="text-yellow">
                extraordinary
              </span>{' '}
              opportunities.
            </h1>

            <p className="text-lg md:text-xl italic text-light-gray mb-8 leading-relaxed">
              {description}
            </p>

            {/* Top Solutions Images */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 md:gap-6 mb-8">
              {/* Solution 1 */}
              <div className="flex flex-col items-center group cursor-pointer">
                <div className="relative w-28 h-28 md:w-32 md:h-32 rounded-lg overflow-hidden shadow-md border border-gray-200 transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg">
                  <Image
                    src="https://images.pexels.com/photos/4164418/pexels-photo-4164418.jpeg?auto=compress&cs=tinysrgb&w=400"
                    alt="Cloud Transformation"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-2">
                    <span className="text-xs md:text-sm font-medium text-white text-center block">Cloud Transformation</span>
                  </div>
                </div>
              </div>

              {/* Solution 2 */}
              <div className="flex flex-col items-center group cursor-pointer">
                <div className="relative w-28 h-28 md:w-32 md:h-32 rounded-lg overflow-hidden shadow-md border border-gray-200 transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg">
                  <Image
                    src="https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=400"
                    alt="Data & Analytics"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-2">
                    <span className="text-xs md:text-sm font-medium text-white text-center block">Data & Analytics</span>
                  </div>
                </div>
              </div>

              {/* Solution 3 */}
              <div className="flex flex-col items-center group cursor-pointer">
                <div className="relative w-28 h-28 md:w-32 md:h-32 rounded-lg overflow-hidden shadow-md border border-gray-200 transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg">
                  <Image
                    src="https://images.pexels.com/photos/607812/pexels-photo-607812.jpeg?auto=compress&cs=tinysrgb&w=400"
                    alt="Digital Experience"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-2">
                    <span className="text-xs md:text-sm font-medium text-white text-center block">Digital Experience</span>
                  </div>
                </div>
              </div>

              {/* Solution 4 */}
              <div className="flex flex-col items-center group cursor-pointer">
                <div className="relative w-28 h-28 md:w-32 md:h-32 rounded-lg overflow-hidden shadow-md border border-gray-200 transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg">
                  <Image
                    src="https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg?auto=compress&cs=tinysrgb&w=400"
                    alt="Cybersecurity"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-2">
                    <span className="text-xs md:text-sm font-medium text-white text-center block">Cybersecurity</span>
                  </div>
                </div>
              </div>
            </div>

            <Link
              href={ctaLink}
              className="inline-flex items-center px-8 py-4 bg-yellow text-black font-semibold text-sm tracking-wide hover:bg-opacity-80 transition-all duration-200 hover-lift focus-visible rounded-md"
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