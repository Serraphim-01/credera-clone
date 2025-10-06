'use client';

import React from 'react';
import Link from 'next/link';
import { ContactUsSectionProps } from '@/types';

const ContactUsSection: React.FC<ContactUsSectionProps> = ({
  title = "We want to help you create something extraordinary.",
  contactLink = "/contact"
}) => {
  return (
    <section className="py-16 sm:py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Centered Title */}
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-credera-dark">
            {title}
          </h2>
        </div>

        {/* Centered Button */}
        <div className="text-center">
          <Link
            href={contactLink}
            className="inline-flex items-center px-6 py-3 sm:px-8 sm:py-4 bg-[color:var(--color-foreground)] text-[color:var(--color-yellow)] font-semibold rounded-md hover:bg-[color:var(--color-dark-gray)] transition-colors duration-200 space-x-2 group"
          >
            <span>Contact Us</span>
            <svg
              className="w-5 h-5 transition-transform duration-200 group-hover:translate-x-1"
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
    </section>
  );
};

export default ContactUsSection;