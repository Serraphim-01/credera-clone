'use client';

import React, { useState, useMemo } from 'react';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';
import Image from 'next/image';
import { solutionsData } from '@/data/solutions';
import { partnerships } from '@/data/partnerships';
import { servicesData } from '@/data/services';

interface Certification {
  id: string;
  name: string;
  issuer: string;
  imageUrl: string;
  level?: string;
  validUntil?: string;
  source?: 'solution' | 'partnership' | 'service';
  category?: string;
}

interface CertificationsSectionProps {
  certifications?: Certification[];
}

const CertificationsSection: React.FC<CertificationsSectionProps> = ({ certifications: propCertifications }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const CARDS_PER_PAGE = 8; // 2 per row × 4 rows

  // Use provided certifications or fall back to all certifications
  const displayedCertifications = useMemo(() => {
    if (propCertifications) {
      return propCertifications;
    }
    const allCertifications: Certification[] = [];

    // Add certifications from solutions
    solutionsData.forEach(solution => {
      if (solution.certifications) {
        solution.certifications.forEach(cert => {
          allCertifications.push({
            ...cert,
            source: 'solution',
            category: solution.title
          });
        });
      }
    });

    // Add certifications from partnerships
    partnerships.forEach(partnership => {
      if (partnership.certifications) {
        partnership.certifications.forEach((certName, index) => {
          allCertifications.push({
            id: `${partnership.id}-cert-${index}`,
            name: certName,
            issuer: partnership.name,
            imageUrl: partnership.logo,
            level: partnership.partnershipLevel,
            source: 'partnership',
            category: partnership.name
          });
        });
      }
    });

    // Add certifications from services
    servicesData.forEach(service => {
      if (service.certifications) {
        service.certifications.forEach(cert => {
          allCertifications.push({
            ...cert,
            source: 'service',
            category: service.title
          });
        });
      }
    });

    return allCertifications;
  }, [propCertifications]);

  // Filter certifications based on search term
  const filteredCertifications = useMemo(() => {
    const filtered = displayedCertifications.filter(cert => {
      const matchesSearch = cert.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           cert.issuer.toLowerCase().includes(searchTerm.toLowerCase());
      return matchesSearch;
    });
    // Reset to first page when search changes
    setCurrentPage(1);
    return filtered;
  }, [displayedCertifications, searchTerm]);

  // Pagination calculations
  const totalPages = Math.ceil(filteredCertifications.length / CARDS_PER_PAGE);
  const startIndex = (currentPage - 1) * CARDS_PER_PAGE;
  const endIndex = startIndex + CARDS_PER_PAGE;
  const currentPageCertifications = filteredCertifications.slice(startIndex, endIndex);

  // Smart pagination with ellipses
  const getPaginationNumbers = () => {
    const pages: (number | string)[] = [];
    
    if (totalPages <= 5) {
      // Show all pages if 5 or fewer
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      // Always show first page
      pages.push(1);
      
      if (currentPage > 3) {
        pages.push('...');
      }
      
      // Show current page and neighbors
      const start = Math.max(2, currentPage - 1);
      const end = Math.min(totalPages - 1, currentPage + 1);
      
      for (let i = start; i <= end; i++) {
        if (i !== 1 && i !== totalPages) {
          pages.push(i);
        }
      }
      
      if (currentPage < totalPages - 2) {
        pages.push('...');
      }
      
      // Always show last page
      if (totalPages > 1) {
        pages.push(totalPages);
      }
    }
    
    return pages;
  };

  // Pagination handlers
  const goToPage = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  const goToPreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const goToNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  return (
    <section className="py-8 bg-gray-50 sm:py-16">
      <div className="max-w-7xl mx-auto px-0 sm:px-4">
        {/* Search and Results Count */}
        <div className="mb-6 space-y-3 sm:mb-8 sm:space-y-4">
          <div className="flex flex-wrap items-center justify-between gap-2 sm:gap-4">
            <input
              type="text"
              placeholder="Search certifications..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 min-w-[200px] flex-1 max-w-md"
            />
            <div className="text-sm text-gray-600 whitespace-nowrap">
              {filteredCertifications.length} certification{filteredCertifications.length !== 1 ? 's' : ''}
            </div>
          </div>
        </div>

        {/* Certifications Grid */}
        {currentPageCertifications.length > 0 && (
          <div className="grid grid-cols-2 gap-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 sm:gap-6">
            {currentPageCertifications.map((certification) => (
              <div
                key={certification.id}
                className="relative bg-white rounded-lg overflow-hidden shadow-sm border border-gray-200 hover:shadow-md transition-shadow duration-200"
              >
                {/* Certification Image */}
                <div className="relative h-32 sm:h-64">
                  <Image
                    src={certification.imageUrl}
                    alt={certification.name}
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 50vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                  />
                  {/* Text Overlay at Bottom - Simplified for mobile */}
                  <div className="absolute bottom-0 left-0 right-0 text-white p-1 bg-[color:var(--color-foreground)]/80 sm:bg-[color:var(--color-foreground)]/70 sm:p-4">
                    {/* Mobile: Only show name and issuer */}
                    <div className="sm:hidden">
                      <h3 className="font-semibold text-xs leading-tight">
                        {certification.name}
                      </h3>
                      <p className="text-xs text-gray-200 mt-1">
                        {certification.issuer}
                      </p>
                    </div>
                    
                    {/* Desktop: Show all information */}
                    <div className="hidden sm:block">
                      <h3 className="font-semibold text-sm mb-1 leading-tight">
                        {certification.name}
                      </h3>
                      <p className="text-xs text-gray-200 mb-1">
                        {certification.issuer}
                      </p>
                      <div className="flex items-center justify-between">
                        <div className="space-x-1">
                          {certification.level && (
                            <span className="text-xs text-[color:var(--color-background)] px-1">
                              {certification.level}
                            </span>
                          )}
                          <span className="text-xs text-[color:var(--color-yellow)] px-1">
                            {certification.source}
                          </span>
                        </div>
                        {certification.validUntil && (
                          <span className="text-xs text-[color:var(--color-yellow)]">
                            Valid until {new Date(certification.validUntil).getFullYear()}
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Pagination Controls */}
        {filteredCertifications.length > CARDS_PER_PAGE && (
          <div className="flex flex-col items-center justify-between mt-6 space-y-4 sm:flex-row sm:space-y-0 sm:mt-8">
            <div className="text-xs text-gray-600 sm:text-sm">
              Showing {startIndex + 1}-{Math.min(endIndex, filteredCertifications.length)} of {filteredCertifications.length} certifications
            </div>
            <div className="flex items-center space-x-1">
              <button
                onClick={goToPreviousPage}
                disabled={currentPage === 1}
                className="p-1 rounded-md border border-gray-300 bg-white hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors sm:p-2"
              >
                <ChevronLeftIcon className="w-4 h-4 text-gray-600 sm:w-5 sm:h-5" />
              </button>
              
              <div className="flex items-center space-x-1">
                {getPaginationNumbers().map((page, index) => (
                  <button
                    key={index}
                    onClick={() => typeof page === 'number' && goToPage(page)}
                    disabled={page === '...'}
                    className={`px-2 py-1 text-xs rounded-md transition-colors sm:px-3 sm:py-2 sm:text-sm ${
                      page === '...'
                        ? 'bg-white border-none text-gray-500 cursor-default'
                        : currentPage === page
                        ? 'bg-[color:var(--color-foreground)] text-[color:var(--color-yellow)]'
                        : 'text-gray-700 hover:text-[color:var(--color-foreground)]'
                    }`}
                  >
                    {page}
                  </button>
                ))}
              </div>
              
              <button
                onClick={goToNextPage}
                disabled={currentPage === totalPages}
                className="p-1 rounded-md border border-gray-300 bg-white hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors sm:p-2"
              >
                <ChevronRightIcon className="w-4 h-4 text-gray-600 sm:w-5 sm:h-5" />
              </button>
            </div>
          </div>
        )}

        {/* No Results Message */}
        {filteredCertifications.length === 0 && (
          <div className="text-center py-6 sm:py-8">
            <p className="text-xs text-gray-500 sm:text-base">
              No certifications found matching your criteria.
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export { CertificationsSection };
export default CertificationsSection;