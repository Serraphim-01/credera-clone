'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { partnerships } from '@/data/partnerships';
import { 
  FaAws,
  FaMicrosoft
} from 'react-icons/fa';
import { 
  SiGooglecloud,
  SiHuawei,
  SiDell
} from 'react-icons/si';

interface PartnerItem {
  id: string;
  name: string;
  logo: string;
  href: string;
}

interface PartnersSectionProps {
  title?: string;
  subtitle?: string;
  partners?: PartnerItem[];
}

const PartnersSection: React.FC<PartnersSectionProps> = ({
  title = "Our Partners",
  subtitle = "Trusted technology partners powering our solutions",
  partners
}) => {
  const partnerItems: PartnerItem[] = partnerships.map(partnership => ({
    id: partnership.id,
    name: partnership.name,
    logo: partnership.logo,
    href: `/partnerships/${partnership.id}`
  }));

  // Create duplicated items for infinite scroll effect
  const duplicatedPartners = [...partnerItems, ...partnerItems];

  return (
    <section className="bg-gradient-to-br from-gray-50 to-gray-100 py-20 px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-credera-dark mb-4">
            {title}
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-6">
            {subtitle}
          </p>
          <div className="w-24 h-1 bg-credera-red mx-auto"></div>
        </div>

        {/* Partners Infinite Scroll */}
        <div className="relative overflow-hidden">
          <div className="flex animate-scroll space-x-16 mb-12">
            {duplicatedPartners.map((partner, index) => (
              <Link
                key={`${partner.id}-${index}`}
                href={partner.href}
                className="group flex flex-col items-center cursor-pointer relative flex-shrink-0"
              >
                <div className="w-24 h-24 relative mb-4 transition-all duration-300 group-hover:scale-110">
                  <Image
                    src={partner.logo}
                    alt={partner.name}
                    fill
                    className="object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300"
                    sizes="96px"
                  />
                </div>
                
                {/* Hover tooltip */}
                <div className="absolute -top-16 left-1/2 transform -translate-x-1/2 bg-credera-dark text-white px-3 py-1 rounded-md text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap pointer-events-none z-10">
                  {partner.name}
                  <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-credera-dark"></div>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* View All Partners Link */}
        <div className="text-center">
          <Link
            href="/partnerships"
            className="inline-flex items-center text-credera-red hover:text-opacity-80 font-medium transition-colors duration-200"
          >
            View All Partners
            <svg
              className="ml-2 w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
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

      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        
        .animate-scroll {
          animation: scroll 60s linear infinite;
        }
        
        .animate-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
};

export default PartnersSection;