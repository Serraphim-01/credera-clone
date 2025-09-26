'use client';

import React, { useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { MegaMenuContent } from '@/types';

interface MegaDropdownProps {
  content: MegaMenuContent;
  isVisible: boolean;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
}

const MegaDropdown: React.FC<MegaDropdownProps> = ({
  content,
  isVisible,
  onMouseEnter,
  onMouseLeave
}) => {
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (!isVisible) return;

      if (event.key === 'Escape') {
        onMouseLeave();
      }
    };

    if (isVisible) {
      document.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isVisible, onMouseLeave]);

  if (!isVisible) return null;

  return (
    <div
      ref={dropdownRef}
      className="w-full bg-white shadow-2xl border-t border-gray-100 transform transition-all duration-300 ease-out"
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      role="menu"
      aria-label="Mega menu"
    >
      <div className="max-w-7xl mx-auto px-8 py-8">
        <div className="grid grid-cols-12 gap-8">
          {/* Overview Section - Left Side */}
          <div className="col-span-12 lg:col-span-3">
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-bold text-credera-dark mb-3">
                  {content.overview.title}
                </h3>
                <p className="text-credera-gray-600 text-sm leading-relaxed mb-4">
                  {content.overview.description}
                </p>
                <Link
                  href={content.overview.readMoreLink}
                  className="inline-flex items-center text-sm font-semibold text-credera-red hover:text-credera-dark transition-colors duration-200 group"
                  role="menuitem"
                >
                  READ OVERVIEW
                  <svg
                    className="w-4 h-4 ml-2 transition-transform duration-200 group-hover:translate-x-1"
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
              
              {/* Featured Image */}
              <div className="hidden lg:block">
                <div className="relative w-full h-48 rounded-lg overflow-hidden">
                  <Image
                    src={content.overview.image}
                    alt={content.overview.title}
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Service Categories - Right Side */}
          <div className="col-span-12 lg:col-span-9">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {content.categories.map((category, categoryIndex) => (
                <div
                  key={category.id}
                  className="space-y-4 animate-fadeInUp"
                  style={{
                    animationDelay: `${categoryIndex * 100}ms`,
                    animationFillMode: 'both'
                  }}
                >
                  <h4 className="text-lg font-bold text-credera-dark border-b border-gray-200 pb-2">
                    {category.title}
                  </h4>
                  <ul className="space-y-3" role="group" aria-labelledby={`category-${category.id}`}>
                    {category.services.map((service, serviceIndex) => (
                      <li key={serviceIndex}>
                        <Link
                          href={service.href}
                          className="block text-sm text-credera-gray-600 hover:text-credera-red transition-colors duration-200 hover:translate-x-1 transform"
                          role="menuitem"
                          title={service.description}
                        >
                          {service.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Banner Section */}
        {content.banner && (
          <div className="mt-8 pt-8 border-t border-gray-200">
            <div className="bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg p-6 text-white">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  {content.banner.icon && (
                    <div className="w-8 h-8 flex items-center justify-center">
                      <Image
                        src={`/icons/${content.banner.icon}.svg`}
                        alt=""
                        width={24}
                        height={24}
                        className="text-white"
                      />
                    </div>
                  )}
                  <span className="text-lg font-semibold">
                    {content.banner.text}
                  </span>
                </div>
                <Link
                  href={content.banner.link}
                  className="inline-flex items-center px-4 py-2 bg-white text-blue-600 rounded-md hover:bg-blue-50 transition-colors duration-200 text-sm font-semibold"
                  role="menuitem"
                >
                  Learn More
                  <svg
                    className="w-4 h-4 ml-2"
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
          </div>
        )}
      </div>
    </div>
  );
};

export default MegaDropdown;