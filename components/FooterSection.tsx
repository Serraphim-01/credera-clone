'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FooterSectionProps } from '@/types';

const FooterSection: React.FC<FooterSectionProps> = ({
  logoUrl = "/images/logo.png",
  description = "We are a global consulting firm that combines deep industry expertise with innovative technology solutions to help our clients achieve extraordinary results.",
  copyright = `© ${new Date().getFullYear()} Credera. All rights reserved.`
}) => {
  return (
    <footer className="bg-credera-dark text-white">
      <div className="max-w-7xl mx-auto px-8">
        {/* Main Footer Content */}
        <div className="py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* First Column - Twice the width (spans 2 columns) */}
            <div className="md:col-span-2">
              <div className="mb-6">
                <Image
                  src={logoUrl}
                  alt="Credera"
                  width={120}
                  height={40}
                  className="mb-4"
                />
                <p className="text-gray-300 text-sm leading-relaxed max-w-md">
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
                    href="/services"
                    className="text-gray-300 hover:text-credera-red transition-colors duration-200 text-sm"
                  >
                    Services
                  </Link>
                </li>
                <li>
                  <Link
                    href="/industries"
                    className="text-gray-300 hover:text-credera-red transition-colors duration-200 text-sm"
                  >
                    Industries
                  </Link>
                </li>
                <li>
                  <Link
                    href="/insights"
                    className="text-gray-300 hover:text-credera-red transition-colors duration-200 text-sm"
                  >
                    Insights
                  </Link>
                </li>
                <li>
                  <Link
                    href="/careers"
                    className="text-gray-300 hover:text-credera-red transition-colors duration-200 text-sm"
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
                    className="text-gray-300 hover:text-credera-red transition-colors duration-200 text-sm"
                  >
                    Our Story
                  </Link>
                </li>
                <li>
                  <Link
                    href="/team"
                    className="text-gray-300 hover:text-credera-red transition-colors duration-200 text-sm"
                  >
                    Our Team
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contact"
                    className="text-gray-300 hover:text-credera-red transition-colors duration-200 text-sm"
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="py-6 border-t border-gray-700">
          <div className="text-center">
            <p className="text-sm text-gray-400">
              {copyright}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;