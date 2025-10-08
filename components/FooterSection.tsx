'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FooterSectionProps } from '@/types';

const FooterSection: React.FC<FooterSectionProps> = ({
  logoUrl = "/TaskImages/logo-white.png",
  description = "We are a global consulting firm that combines deep industry expertise with innovative technology solutions to help our clients achieve extraordinary results.",
  copyright = `© ${new Date().getFullYear()} Task Systems. All rights reserved.`
}) => {
  return (
    <footer className="bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Main Footer Content */}
        <div className="py-8 sm:py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 sm:gap-8">
            {/* First Column - Twice the width (spans 2 columns) */}
            <div className="md:col-span-2">
              <div className="mb-4 sm:mb-6">
                <Link
                  href="/"
                  className="relative inline-flex items-center overflow-hidden group rounded-lg w-[100px] sm:w-[120px] h-[50px] sm:h-[60px] mb-3 sm:mb-4"
                  aria-label="Task Home"
                >
                  {/* Base Logo (stays visible underneath) */}
                  <Image
                    src={logoUrl}
                    alt="Task Systems Logo"
                    fill
                    className="rounded-lg object-contain"
                    priority
                  />

                  {/* Hover Logo (slides over the base on hover) */}
                  <Image
                    src="/TaskImages/logo-black-hover.png"
                    alt="Task Systems Hover Logo"
                    fill
                    className="absolute top-0 left-0 rounded-lg object-contain translate-x-[-100%] transition-transform duration-500 group-hover:translate-x-0"
                    priority
                  />
                </Link>
                <p className="text-light-gray text-xs sm:text-sm leading-relaxed max-w-md">
                  {description}
                </p>
              </div>
            </div>

            {/* Second and Third Columns - Explore and About Us on same row on mobile */}
            <div className="grid grid-cols-2 gap-6 sm:gap-8 md:grid-cols-1 md:gap-0">
              {/* Second Column - Explore Links */}
              <div>
                <h3 className="text-base sm:text-lg font-semibold text-white mb-3 sm:mb-4">
                  Explore
                </h3>
                <ul className="space-y-2 sm:space-y-3">
                  <li>
                    <Link
                      href="/solutions"
                      className="text-light-gray hover:text-yellow transition-colors duration-200 text-xs sm:text-sm"
                    >
                      Solutions
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/consult"
                      className="text-light-gray hover:text-yellow transition-colors duration-200 text-xs sm:text-sm"
                    >
                      Consult
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/company"
                      className="text-light-gray hover:text-yellow transition-colors duration-200 text-xs sm:text-sm"
                    >
                      Company
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/careers"
                      className="text-light-gray hover:text-yellow transition-colors duration-200 text-xs sm:text-sm"
                    >
                      Careers
                    </Link>
                  </li>
                </ul>
              </div>

              {/* Third Column - About Us Links */}
              <div>
                <h3 className="text-base sm:text-lg font-semibold text-white mb-3 sm:mb-4">
                  About Us
                </h3>
                <ul className="space-y-2 sm:space-y-3">
                  <li>
                    <Link
                      href="/about"
                      className="text-light-gray hover:text-yellow transition-colors duration-200 text-xs sm:text-sm"
                    >
                      Our Story
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/team"
                      className="text-light-gray hover:text-yellow transition-colors duration-200 text-xs sm:text-sm"
                    >
                      Our Team
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/contact"
                      className="text-light-gray hover:text-yellow transition-colors duration-200 text-xs sm:text-sm"
                    >
                      Contact
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="py-4 sm:py-6 border-t border-dark-gray">
          <div className="text-center">
            <p className="text-xs sm:text-sm text-gray">
              {copyright}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;