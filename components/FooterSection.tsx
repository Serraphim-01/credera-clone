'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FooterSectionProps } from '@/types';

const FooterSection: React.FC<FooterSectionProps> = ({
  logoUrl = "/TaskImages/logo.png",
  description = "We are a global consulting firm that combines deep industry expertise with innovative technology solutions to help our clients achieve extraordinary results.",
  copyright = `© ${new Date().getFullYear()} Task Systems. All rights reserved.`
}) => {
  return (
    <footer className="bg-black text-white">
      <div className="max-w-7xl mx-auto px-8">
        {/* Main Footer Content */}
        <div className="py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* First Column - Twice the width (spans 2 columns) */}
            <div className="md:col-span-2">
              <div className="mb-6">
                <Image
                  src={logoUrl}
                  alt="Task Systems Logo"
                  width={120}
                  height={40}
                  className="mb-4 rounded-lg"
                />
                <p className="text-light-gray text-sm leading-relaxed max-w-md">
                  {description}
                </p>
              </div>
            </div>

            {/* Second Column - Explore Links */}
            <div>
              <h3 className="text-lg font-semibold text-white mb-4">
                Explore
              </h3>
              <ul className="space-y-3">
                <li>
                  <Link
                    href="/solutions"
                    className="text-light-gray hover:text-yellow transition-colors duration-200 text-sm"
                  >
                    Solutions
                  </Link>
                </li>
                <li>
                  <Link
                    href="/consult"
                    className="text-light-gray hover:text-yellow transition-colors duration-200 text-sm"
                  >
                    Consult
                  </Link>
                </li>
                <li>
                  <Link
                    href="/company"
                    className="text-light-gray hover:text-yellow transition-colors duration-200 text-sm"
                  >
                    Company
                  </Link>
                </li>
                <li>
                  <Link
                    href="/careers"
                    className="text-light-gray hover:text-yellow transition-colors duration-200 text-sm"
                  >
                    Careers
                  </Link>
                </li>
              </ul>
            </div>

            {/* Third Column - About Us Links */}
            <div>
              <h3 className="text-lg font-semibold text-white mb-4">
                About Us
              </h3>
              <ul className="space-y-3">
                <li>
                  <Link
                    href="/about"
                    className="text-light-gray hover:text-yellow transition-colors duration-200 text-sm"
                  >
                    Our Story
                  </Link>
                </li>
                <li>
                  <Link
                    href="/team"
                    className="text-light-gray hover:text-yellow transition-colors duration-200 text-sm"
                  >
                    Our Team
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contact"
                    className="text-light-gray hover:text-yellow transition-colors duration-200 text-sm"
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="py-6 border-t border-dark-gray">
          <div className="text-center">
            <p className="text-sm text-gray">
              {copyright}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;