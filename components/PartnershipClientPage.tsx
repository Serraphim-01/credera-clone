'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Partnership } from '@/types';
import FooterSection from '@/components/FooterSection';
import PartnersModal from '@/components/PartnersModal';

interface PartnershipClientPageProps {
  partnership: Partnership;
}

const PartnershipClientPage: React.FC<PartnershipClientPageProps> = ({ partnership }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  if (!partnership) {
    return null; // Or a loading/error state
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-screen max-h-[500px] sm:max-h-[600px] overflow-hidden">
        <Image
          src={partnership.heroImage}
          alt={`${partnership.name} office building`}
          fill
          className="object-cover absolute inset-0 z-0"
          priority
          sizes="100vw"
        />
        <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-8 z-20">
          <div className="absolute bottom-0 left-4 sm:left-8 w-[60%] max-w-lg">
            <div className="bg-white p-4 sm:p-6 md:p-8 shadow-xl">
              <div className="w-32 h-12 relative mb-3 sm:w-40 sm:h-16 sm:mb-4">
                <Image
                  src={partnership.logo}
                  alt={`${partnership.name} logo`}
                  fill
                  className="object-contain"
                />
              </div>
              <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2 sm:mb-4 text-black">
                {partnership.name}
              </h1>
              <div className="flex flex-wrap gap-3 sm:gap-4">
                <a
                  href={partnership.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative inline-flex items-center text-[color:var(--color-foreground)] py-1 sm:py-2 font-semibold text-xs sm:text-base transition-colors duration-200 hover:text-[color:var(--color-yellow)]"
                >
                  <span>Visit Website</span>

                  {/* Arrow */}
                  <span
                    className="ml-1 sm:ml-2 opacity-0 translate-x-[-4px] transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0"
                  >
                    →
                  </span>

                  {/* Underline */}
                  <span
                    className="absolute left-0 bottom-0 h-[2px] w-0 bg-[color:var(--color-yellow)] transition-all duration-300 group-hover:w-full"
                  ></span>
                </a>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* Content Sections */}
      <div className="py-8 sm:py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 sm:gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8 sm:space-y-12">
              <section>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-black mb-4 sm:mb-6 border-b-2 border-yellow pb-3 sm:pb-4">
                  Partner Description
                </h2>
                <div className="prose prose-sm sm:prose-lg text-dark-gray max-w-none">
                  <p className="leading-relaxed text-xs sm:text-base">{partnership.description}</p>
                </div>
              </section>
              <section>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-black mb-4 sm:mb-6 border-b-2 border-yellow pb-3 sm:pb-4">
                  What We Do Together
                </h2>
                <div className="prose prose-sm sm:prose-lg text-dark-gray max-w-none">
                  <p className="leading-relaxed text-xs sm:text-base">{partnership.whatWeDo}</p>
                </div>
              </section>
              <section>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-black mb-4 sm:mb-6 border-b-2 border-yellow pb-3 sm:pb-4">
                  Our Partnership Story
                </h2>
                <div className="prose prose-sm sm:prose-lg text-dark-gray max-w-none">
                  <p className="leading-relaxed text-xs sm:text-base">{partnership.partnerStory}</p>
                </div>
              </section>
              <section>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-black mb-4 sm:mb-6 border-b-2 border-yellow pb-3 sm:pb-4">
                  Specializations
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4">
                  {partnership.specializations.map((spec, index) => (
                    <div
                      key={index}
                      className="bg-[color:var(--color-background)] border border-gray-200 rounded-lg p-3 sm:p-4 hover:border-yellow transition-colors duration-300"
                    >
                      <div className="flex items-center gap-2 sm:gap-3">
                        <div className="w-6 h-6 sm:w-8 sm:h-8 bg-yellow rounded-full flex items-center justify-center">
                          <svg className="w-3 h-3 sm:w-4 sm:h-4 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <span className="font-semibold text-black text-xs sm:text-sm">{spec}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            </div>

            {/* Sidebar */}
            <div className="space-y-6 sm:space-y-8">
              <div className="bg-[color:var(--color-background)] rounded-lg p-4 sm:p-6">
                <h3 className="text-lg sm:text-xl font-bold text-black mb-3 sm:mb-4">Partnership Level</h3>
                <div className="bg-yellow text-black py-2 rounded-lg text-center font-semibold text-xs sm:text-sm">
                  {partnership.partnershipLevel}
                </div>
              </div>
              <div className="bg-[color:var(--color-background)] rounded-lg p-4 sm:p-6">
                <h3 className="text-lg sm:text-xl font-bold text-black mb-3 sm:mb-4">Our Certifications</h3>
                <div className="space-y-2 sm:space-y-3">
                  {partnership.certifications.map((cert, index) => (
                    <div
                      key={index}
                      className="bg-white border border-gray-200 rounded-lg p-2 sm:p-3 hover:border-yellow transition-colors duration-300"
                    >
                      <div className="flex items-center gap-2 sm:gap-3">
                        <div className="w-5 h-5 sm:w-6 sm:h-6 bg-yellow/20 rounded-full flex items-center justify-center">
                          <svg className="w-2 h-2 sm:w-3 sm:h-3 text-yellow" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <span className="text-xs font-medium text-dark-gray sm:text-sm">{cert}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="bg-[color:var(--color-background)] rounded-lg p-4 sm:p-6">
                <h3 className="text-lg sm:text-xl font-bold text-black mb-3 sm:mb-4">Quick Links</h3>
                <div className="space-y-2 sm:space-y-3">
                  <a
                    href={partnership.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block bg-white border border-gray-200 rounded-lg p-2 sm:p-3 hover:border-yellow hover:text-black transition-colors duration-300 text-center font-medium text-xs sm:text-sm"
                  >
                    Visit {partnership.name}
                  </a>
                  <Link
                    href="/contact"
                    className="block bg-yellow text-black rounded-lg p-2 sm:p-3 hover:bg-opacity-80 transition-colors duration-300 text-center font-medium text-xs sm:text-sm"
                  >
                    Contact Us
                  </Link>
                  <Link
                    href="/services"
                    className="block border border-yellow text-yellow rounded-lg p-2 sm:p-3 hover:bg-yellow hover:text-black transition-colors duration-300 text-center font-medium text-xs sm:text-sm"
                  >
                    View Our Services
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-[color:var(--color-background)] py-8 sm:py-12 md:py-16">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-8">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-black mb-3 sm:mb-4">
            Explore More Partnerships
          </h2>
          <p className="text-xs sm:text-base md:text-lg text-dark-gray mb-6 sm:mb-8">
            Discover our comprehensive network of strategic partners and how they can
            accelerate your technology initiatives.
          </p>
          <button
            onClick={() => setIsModalOpen(true)}
            className="bg-yellow text-black px-6 py-2 sm:px-8 sm:py-3 rounded-md font-semibold hover:bg-opacity-80 transition-colors duration-300 text-xs sm:text-base"
          >
            View All Partners
          </button>
        </div>
      </div>

      <FooterSection />

      <PartnersModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
};

export default PartnershipClientPage;