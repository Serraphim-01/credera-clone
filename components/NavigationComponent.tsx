'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { NavigationProps } from '@/types';

const NavigationComponent: React.FC<NavigationProps> = ({
  logoSrc,
  navigationItems,
  topBarItems
}) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="w-full bg-white shadow-sm sticky top-0 z-50">
      {/* Top Bar */}
      <div className="h-10 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-8 h-full">
          <div className="flex items-center justify-end h-full">
            <div className="flex items-center space-x-6">
              {topBarItems.map((item, index) => (
                <Link
                  key={index}
                  href={item.href}
                  className="text-nav text-credera-gray-600 hover:text-credera-red transition-colors duration-200 flex items-center space-x-2"
                  aria-label={item.label}
                >
                  {item.icon && (
                    <Image
                      src={`/icons/${item.icon}.svg`}
                      alt=""
                      width={16}
                      height={16}
                      className="text-current"
                    />
                  )}
                  <span>{item.label}</span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="h-20 bg-white">
        <div className="max-w-7xl mx-auto px-8 h-full">
          <div className="flex items-center justify-between h-full">
            {/* Logo */}
            <Link href="/" className="flex items-center" aria-label="Credera Home">
              <Image
                src={logoSrc}
                alt="Credera"
                width={120}
                height={32}
                priority
                className="h-8 w-auto"
              />
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-12">
              {navigationItems.map((item, index) => (
                <div key={index} className="relative group">
                  <Link
                    href={item.href}
                    className="text-nav text-credera-dark hover:text-credera-red transition-colors duration-200 flex items-center space-x-1"
                    aria-expanded={item.hasDropdown ? 'false' : undefined}
                    aria-haspopup={item.hasDropdown ? 'true' : undefined}
                  >
                    <span>{item.label}</span>
                    {item.hasDropdown && (
                      <svg
                        className="w-4 h-4 transition-transform duration-200 group-hover:rotate-180"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    )}
                  </Link>
                  
                  {/* Dropdown Menu (Placeholder for now) */}
                  {item.hasDropdown && item.dropdownItems && (
                    <div className="absolute top-full left-0 w-64 bg-white shadow-lg border border-gray-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 mt-2 rounded-md">
                      <div className="py-2">
                        {item.dropdownItems.map((dropdownItem, dropIndex) => (
                          <Link
                            key={dropIndex}
                            href={dropdownItem.href}
                            className="block px-4 py-2 text-sm text-credera-dark hover:bg-credera-gray-100 hover:text-credera-red transition-colors duration-150"
                          >
                            {dropdownItem.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden flex items-center justify-center w-10 h-10 rounded-md hover:bg-credera-gray-100 transition-colors duration-200"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-expanded={isMobileMenuOpen}
              aria-label="Toggle mobile menu"
            >
              <svg
                className="w-6 h-6 text-credera-dark"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {isMobileMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-200 shadow-lg">
          <div className="px-4 py-6 space-y-4">
            {navigationItems.map((item, index) => (
              <Link
                key={index}
                href={item.href}
                className="block text-nav text-credera-dark hover:text-credera-red transition-colors duration-200 py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            
            {/* Mobile Top Bar Items */}
            <div className="pt-4 mt-4 border-t border-gray-200 space-y-4">
              {topBarItems.map((item, index) => (
                <Link
                  key={index}
                  href={item.href}
                  className="block text-nav text-credera-gray-600 hover:text-credera-red transition-colors duration-200 py-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default NavigationComponent;