'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { partnerships } from '@/data/partnerships';

interface SolutionPartnersSectionProps {
  partnerIds: string[];
}

const SolutionPartnersSection: React.FC<SolutionPartnersSectionProps> = ({ partnerIds }) => {
  if (!partnerIds || partnerIds.length === 0) {
    return null;
  }

  const solutionPartners = partnerships.filter(p => partnerIds.includes(p.id));

  if (solutionPartners.length === 0) {
    return null;
  }

  return (
    <section className="py-8 bg-gray-50 sm:py-16">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-xl font-bold text-gray-900 mb-3 sm:text-3xl sm:mb-4">
            Our Technology Partners
          </h2>
          <p className="text-xs text-gray-600 max-w-3xl mx-auto sm:text-lg">
            This solution is powered by our strong partnerships with industry-leading technology providers.
          </p>
        </div>
        <div className="flex flex-wrap justify-center gap-4 sm:gap-8">
          {solutionPartners.map((partner) => (
            <Link key={partner.id} href={`/partnerships/${partner.id}`} className="group">
              <div className="flex flex-col items-center text-center w-20 sm:w-32">
                <div className="w-16 h-16 relative mb-2 transition-all duration-300 group-hover:scale-110 sm:w-24 sm:h-24 sm:mb-4">
                  <Image
                    src={partner.logo}
                    alt={`${partner.name} logo`}
                    fill
                    className="object-contain"
                  />
                </div>
                <span className="text-xs font-semibold text-dark-gray sm:text-sm">{partner.name}</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SolutionPartnersSection;