'use client';

import React, { useState, useCallback, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { NavigationProps } from '@/types';
import MegaDropdown from './MegaDropdown';

const NavigationComponent: React.FC<NavigationProps> = ({
  logoSrc,
  navigationItems,
  topBarItems
}) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mobileActiveDropdown, setMobileActiveDropdown] = useState<string | null>(null);
  const hoverTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const hideTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Handle mega menu hover with delays
  const handleMenuItemEnter = useCallback((itemLabel: string) => {
    // Clear any pending hide timeout
    if (hideTimeoutRef.current) {
      clearTimeout(hideTimeoutRef.current);
      hideTimeoutRef.current = null;
    }

    // Set show timeout
    hoverTimeoutRef.current = setTimeout(() => {
      setActiveDropdown(itemLabel);
    }, 200);
  }, []);

  const handleMenuItemLeave = useCallback(() => {
    // Clear show timeout
    if (hoverTimeoutRef.current) {
      clearTimeout(hoverTimeoutRef.current);
      hoverTimeoutRef.current = null;
    }

    // Set hide timeout
    hideTimeoutRef.current = setTimeout(() => {
      setActiveDropdown(null);
    }, 300);
  }, []);

  const handleDropdownEnter = useCallback(() => {
    // Clear hide timeout when entering dropdown
    if (hideTimeoutRef.current) {
      clearTimeout(hideTimeoutRef.current);
      hideTimeoutRef.current = null;
    }
  }, []);

  const handleDropdownLeave = useCallback(() => {
    // Immediately hide when leaving dropdown
    setActiveDropdown(null);
  }, []);

  // Close dropdown when clicking overlay
  const handleOverlayClick = useCallback(() => {
    setActiveDropdown(null);
  }, []);

  // Handle mobile dropdown toggle
  const toggleMobileDropdown = (itemLabel: string) => {
    setMobileActiveDropdown(mobileActiveDropdown === itemLabel ? null : itemLabel);
  };

  // Get the active mega menu content
  const activeMegaMenuContent = navigationItems.find(
    item => item.label === activeDropdown && item.megaMenuContent
  )?.megaMenuContent;

  return (
    <>
      <nav className="w-full bg-white shadow-sm sticky top-0 z-50">
        {/* Top Bar */}
        <div className="h-10 bg-[color:var(--color-background)] border-b border-gray-200">
          <div className="max-w-7xl mx-auto px-8 h-full">
            <div className="flex items-center justify-end h-full">
              <div className="flex items-center space-x-6">
                {topBarItems.map((item, index) => (
                  <Link
                    key={index}
                    href={item.href}
                    className="text-nav text-dark-gray hover:text-yellow transition-colors duration-200 flex items-center space-x-2"
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
              <Link
                href="/"
                className="relative flex items-center overflow-hidden group rounded-lg"
                aria-label="Task Home"
              >
                {/* Base Logo (stays in place) */}
                <Image
                  src="/TaskImages/logo.png"
                  alt="Task"
                  width={200}
                  height={64}
                  priority
                  className="h-16 w-auto rounded-lg"
                />

                {/* Hover Logo (slides over on hover) */}
                <Image
                  src="/TaskImages/logo-black-hover.png"
                  alt="Task Hover"
                  width={200}
                  height={64}
                  priority
                  className="h-16 w-auto absolute top-0 left-0 rounded-lg translate-x-[-100%] transition-transform duration-500 group-hover:translate-x-0"
                />
              </Link>


              {/* Desktop Navigation */}
              <div className="hidden lg:flex items-center space-x-12">
                {navigationItems.map((item, index) => (
                  <div
                    key={index}
                    className="relative"
                    onMouseEnter={() => {
                      if (item.megaMenuContent || item.hasDropdown) {
                        handleMenuItemEnter(item.label);
                      }
                    }}
                    onMouseLeave={handleMenuItemLeave}
                  >
                    {item.href ? (
                      <Link
                        href={item.href}
                        className="text-nav text-dark-gray hover:text-yellow transition-colors duration-200 flex items-center space-x-1 py-2"
                        aria-expanded={activeDropdown === item.label ? 'true' : 'false'}
                        aria-haspopup={item.hasDropdown || item.megaMenuContent ? 'true' : 'false'}
                      >
                        <span>{item.label}</span>
                        {(item.hasDropdown || item.megaMenuContent) && (
                          <svg
                            className={`w-4 h-4 transition-transform duration-200 ${activeDropdown === item.label ? 'rotate-180' : ''
                              }`}
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
                    ) : (
                      <span className="text-nav text-dark-gray hover:text-yellow transition-colors duration-200 flex items-center space-x-1 py-2 cursor-default">
                        <span>{item.label}</span>
                        {(item.hasDropdown || item.megaMenuContent) && (
                          <svg
                            className={`w-4 h-4 transition-transform duration-200 ${activeDropdown === item.label ? 'rotate-180' : ''
                              }`}
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
                      </span>
                    )}

                    {/* Standard Dropdown Menu (for items without mega menu) */}
                    {!item.megaMenuContent && item.hasDropdown && item.dropdownItems && (
                      <div className={`absolute top-full left-0 w-64 bg-white shadow-lg border border-gray-100 rounded-md mt-2 transition-all duration-200 z-50 ${activeDropdown === item.label
                        ? 'opacity-100 visible translate-y-0'
                        : 'opacity-0 invisible -translate-y-2'
                        }`}>
                        <div className="py-2">
                          {item.dropdownItems.map((dropdownItem, dropIndex) => (
                            dropdownItem.href ? (
                              <Link
                                key={dropIndex}
                                href={dropdownItem.href!}
                                className="block px-4 py-2 text-sm text-dark-gray hover:bg-light-gray hover:text-yellow transition-colors duration-150"
                              >
                                {dropdownItem.label}
                              </Link>
                            ) : (
                              <span
                                key={dropIndex}
                                className="block px-4 py-2 text-sm text-dark-gray cursor-default"
                              >
                                {dropdownItem.label}
                              </span>
                            )
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>

              {/* Mobile Menu Button */}
              <button
                className="lg:hidden flex items-center justify-center w-10 h-10 rounded-md hover:bg-light-gray transition-colors duration-200"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                aria-expanded={isMobileMenuOpen}
                aria-label="Toggle mobile menu"
              >
                <svg
                  className="w-6 h-6 text-dark-gray"
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
                <div key={index}>
                  <div className="flex items-center justify-between">
                    {item.href ? (
                      <Link
                        href={item.href}
                        className="block text-nav text-dark-gray hover:text-yellow transition-colors duration-200 py-2 flex-1"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        {item.label}
                      </Link>
                    ) : (
                      <span className="block text-nav text-dark-gray py-2 cursor-default flex-1">
                        {item.label}
                      </span>
                    )}

                    {/* Mobile dropdown toggle */}
                    {item.megaMenuContent && (
                      <button
                        onClick={() => toggleMobileDropdown(item.label)}
                        className="p-2 hover:bg-light-gray rounded-md transition-colors duration-200"
                      >
                        <svg
                          className={`w-4 h-4 transition-transform duration-200 ${mobileActiveDropdown === item.label ? 'rotate-180' : ''}`}
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
                      </button>
                    )}
                  </div>

                  {/* Mobile mega menu dropdown */}
                  {item.megaMenuContent && mobileActiveDropdown === item.label && (
                    <div className="mt-2 pl-4 space-y-4 border-l-2 border-yellow">
                      {item.megaMenuContent.categories.map((category, categoryIndex) => (
                        <div key={categoryIndex}>
                          <h4 className="font-semibold text-dark-gray text-sm mb-2">
                            {category.title}
                          </h4>
                          <div className="grid grid-cols-2 gap-2">
                            {category.services.map((service, serviceIndex) => (
                              service.href ? (
                                <Link
                                  key={serviceIndex}
                                  href={service.href}
                                  className="block text-xs text-gray hover:text-yellow transition-colors duration-200 py-1"
                                  onClick={() => setIsMobileMenuOpen(false)}
                                >
                                  {service.label}
                                </Link>
                              ) : (
                                <span
                                  key={serviceIndex}
                                  className="block text-xs text-gray py-1 cursor-default"
                                >
                                  {service.label}
                                </span>
                              )
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Standard dropdown items (if no mega menu) */}
                  {item.dropdownItems && !item.megaMenuContent && (
                    <div className="pl-4 mt-2 space-y-2">
                      {item.dropdownItems.map((dropdownItem, dropIndex) => (
                        dropdownItem.href ? (
                          <Link
                            key={dropIndex}
                            href={dropdownItem.href}
                            className="block text-sm text-gray hover:text-yellow transition-colors duration-200 py-1"
                            onClick={() => setIsMobileMenuOpen(false)}
                          >
                            {dropdownItem.label}
                          </Link>
                        ) : (
                          <span
                            key={dropIndex}
                            className="block text-sm text-gray py-1 cursor-default"
                          >
                            {dropdownItem.label}
                          </span>
                        )
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Full-width Mega Dropdown - positioned outside nav but fixed below it */}
      {activeMegaMenuContent && (
        <>
          {/* Overlay */}
          <div
            className="fixed inset-0 z-40 bg-black/50"
            onClick={handleOverlayClick}
            aria-hidden="true"
            style={{ top: '80px' }}
          />

          {/* Mega Dropdown */}
          <div className="fixed top-20 left-0 w-full z-50 mt-6">
            <MegaDropdown
              content={activeMegaMenuContent}
              isVisible={true}
              onMouseEnter={handleDropdownEnter}
              onMouseLeave={handleDropdownLeave}
              sectionType={activeDropdown || undefined}
            />
          </div>
        </>
      )}
    </>
  );
};

export default NavigationComponent;