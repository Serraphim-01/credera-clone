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
  sectionType?: string; // Add optional prop to identify section type
}

const MegaDropdown: React.FC<MegaDropdownProps> = ({
  content,
  isVisible,
  onMouseEnter,
  onMouseLeave,
  sectionType
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
                {/* Special buttons for Services section - removed per requirements */}

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
            {/* Special handling for Partnerships - use 4 columns for better layout */}
            {sectionType === 'PARTNERSHIPS' ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {content.categories.map((category, categoryIndex) => (
                  <div
                    key={category.id}
                    className="space-y-4 animate-fadeInUp"
                    style={{
                      animationDelay: `${categoryIndex * 100}ms`,
                      animationFillMode: 'both'
                    }}
                  >
                    {/* Partnerships section titles should be static, others should have links */}
                    <span className="text-lg font-bold text-credera-dark border-b border-gray-200 pb-2 block">
                      {category.title}
                    </span>
                    <ul className="space-y-2 mt-4" role="group" aria-labelledby={`category-${category.id}`}>
                      {category.services.map((service, serviceIndex) => (
                        <li key={serviceIndex}>
                          <Link
                            href={service.href!}
                            className="block text-sm text-credera-gray-600 hover:text-credera-red cursor-pointer transition-colors duration-200"
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
            ) : (
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
                    {/* Partnerships section titles should be static, others should have links */}
                    {sectionType === 'NEWSROOM' ? (
                      <Link
                        href={`/newsroom?category=${category.id}`}
                        className="text-lg font-bold text-credera-dark border-b border-gray-200 pb-2 hover:text-credera-red transition-colors duration-200 block"
                      >
                        {category.title}
                      </Link>
                    ) : (
                      <Link
                        href={`/${category.id}`}
                        className="text-lg font-bold text-credera-dark border-b border-gray-200 pb-2 hover:text-credera-red transition-colors duration-200 block"
                      >
                        {category.title}
                      </Link>
                    )}
                    <ul className="space-y-3 mt-4" role="group" aria-labelledby={`category-${category.id}`}>
                      {category.services.map((service, serviceIndex) => (
                        <li key={serviceIndex}>
                          {/* Services sections sub-items should have href, others are static text */}
                          {sectionType === 'SERVICES' && service.href ? (
                            <Link
                              href={service.href}
                              className="block text-sm text-credera-gray-600 hover:text-credera-red cursor-pointer transition-colors duration-200"
                              title={service.description}
                            >
                              {service.label}
                            </Link>
                          ) : (
                            <span
                              className="block text-sm text-credera-gray-600 cursor-default"
                              title={service.description}
                            >
                              {service.label}
                            </span>
                          )}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>


      </div>
    </div>
  );
};

export default MegaDropdown;