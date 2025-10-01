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
    <section className="min-h-[600px] bg-gradient-to-br from-credera-blue-50 to-credera-blue-100 py-20 px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          {/* Hero Content */}
          <div className="max-w-xl">
            <h1 className="text-hero text-credera-dark mb-6">
              Unlock{' '}
              <span className="red-underline">
                extraordinary
              </span>{' '}
              opportunities.
            </h1>

            <p className="text-lg text-credera-gray-600 mb-8 leading-relaxed">
              {description}
            </p>

            {/* Top Solutions Images */}
            <div className="flex items-center justify-start gap-8 mb-8">
              <div className="flex flex-col items-center group cursor-pointer">
                <div className="relative w-32 h-32 rounded-lg overflow-hidden shadow-md border border-gray-200 transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg">
                  <Image
                    src="https://images.pexels.com/photos/4164418/pexels-photo-4164418.jpeg?auto=compress&cs=tinysrgb&w=400"
                    alt="Cloud Transformation"
                    fill
                    className="object-cover"
                  />
                  {/* Text overlay positioned at bottom */}
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-2">
                    <span className="text-sm font-medium text-white text-center block">Cloud Transformation</span>
                  </div>
                </div>
              </div>

              <div className="flex flex-col items-center group cursor-pointer">
                <div className="relative w-32 h-32 rounded-lg overflow-hidden shadow-md border border-gray-200 transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg">
                  <Image
                    src="https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=400"
                    alt="Data & Analytics"
                    fill
                    className="object-cover"
                  />
                  {/* Text overlay positioned at bottom */}
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-2">
                    <span className="text-sm font-medium text-white text-center block">Data & Analytics</span>
                  </div>
                </div>
              </div>

              <div className="flex flex-col items-center group cursor-pointer">
                <div className="relative w-32 h-32 rounded-lg overflow-hidden shadow-md border border-gray-200 transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg">
                  <Image
                    src="https://images.pexels.com/photos/607812/pexels-photo-607812.jpeg?auto=compress&cs=tinysrgb&w=400"
                    alt="Digital Experience"
                    fill
                    className="object-cover"
                  />
                  {/* Text overlay positioned at bottom */}
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-2">
                    <span className="text-sm font-medium text-white text-center block">Digital Experience</span>
                  </div>
                </div>
              </div>

              <div className="flex flex-col items-center group cursor-pointer">
                <div className="relative w-32 h-32 rounded-lg overflow-hidden shadow-md border border-gray-200 transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg">
                  <Image
                    src="https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg?auto=compress&cs=tinysrgb&w=400"
                    alt="Cybersecurity"
                    fill
                    className="object-cover"
                  />
                  {/* Text overlay positioned at bottom */}
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-2">
                    <span className="text-sm font-medium text-white text-center block">Cybersecurity</span>
                  </div>
                </div>
              </div>
            </div>

            <Link
              href={ctaLink}
              className="inline-flex items-center px-8 py-4 bg-credera-red text-white font-medium text-sm tracking-wide hover:bg-opacity-90 transition-all duration-200 hover-lift focus-visible rounded-md"
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

          {/* Hero Illustration */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative w-full max-w-md h-80">
              <Image
                src={illustrationSrc}
                alt="Credera consulting illustration"
                fill
                className="object-contain"
                priority
              />

              {/* Background decorative elements */}
              <div className="absolute -top-4 -left-4 w-20 h-20 bg-credera-red opacity-10 rounded-full animate-pulse"></div>
              <div className="absolute top-1/2 -right-6 w-12 h-12 bg-blue-400 opacity-20 rounded-full animate-pulse delay-1000"></div>
              <div className="absolute -bottom-6 left-1/3 w-16 h-16 bg-yellow-400 opacity-15 rounded-full animate-pulse delay-500"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;