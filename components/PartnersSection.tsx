'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { partnerships } from '@/data/partnerships';
import PartnersModal from './PartnersModal';
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
  const [isModalOpen, setIsModalOpen] = useState(false);

  const partnerItems: PartnerItem[] = partnerships.map(partnership => ({
    id: partnership.id,
    name: partnership.name,
    logo: partnership.logo,
    href: `/partnerships/${partnership.id}`
  }));

  // Create duplicated items for infinite scroll effect
  const duplicatedPartners = [...partnerItems, ...partnerItems];

  return (
    <>
      <section className="bg-white py-16 md:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12 md:mb-16 animate-fadeInUp">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-black mb-4">
              {title}
            </h2>
            <p className="text-base md:text-lg text-dark-gray max-w-3xl mx-auto mb-6">
              {subtitle}
            </p>
            <div className="w-20 h-1 bg-yellow mx-auto"></div>
          </div>

          {/* Partners Infinite Scroll */}
          <div className="relative overflow-hidden group">
            <div className="flex animate-scroll group-hover:pause space-x-12 sm:space-x-16 mb-12">
              {duplicatedPartners.map((partner, index) => (
                <Link
                  key={`${partner.id}-${index}`}
                  href={partner.href}
                  className="group/partner flex flex-col items-center cursor-pointer relative flex-shrink-0 subtle-lift"
                >
                  <div className="w-20 h-20 sm:w-24 sm:h-24 relative mb-4 transition-all duration-300 group-hover/partner:scale-110">
                    <Image
                      src={partner.logo}
                      alt={partner.name}
                      fill
                      className="object-contain filter grayscale group-hover/partner:grayscale-0 transition-all duration-300"
                      sizes="(max-width: 640px) 80px, 96px"
                    />
                  </div>

                  {/* Hover tooltip */}
                  <div className="absolute -top-14 left-1/2 transform -translate-x-1/2 bg-black text-white px-3 py-1 rounded-md text-sm font-medium opacity-0 group-hover/partner:opacity-100 transition-opacity duration-300 whitespace-nowrap pointer-events-none z-10">
                    {partner.name}
                    <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-black"></div>
                  </div>
                </Link>
              ))}
            </div>
            <div className="absolute inset-0 bg-gradient-to-r from-white via-transparent to-white pointer-events-none"></div>
          </div>

          {/* View All Partners Button */}
          <div className="text-center">
            <button
              onClick={() => setIsModalOpen(true)}
              className="inline-flex items-center text-yellow hover:text-opacity-80 font-medium transition-colors duration-200 group"
            >
              <span>View All Partners</span>
              <svg
                className="ml-2 w-4 h-4 transition-transform duration-200 group-hover:translate-x-1"
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
            </button>
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
            animation: scroll 45s linear infinite;
          }

          .group:hover .animate-scroll {
            animation-play-state: paused;
          }
        `}</style>
      </section>
      <PartnersModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
};

export default PartnersSection;