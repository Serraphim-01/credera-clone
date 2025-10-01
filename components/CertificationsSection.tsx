'use client';

import React, { useState, useMemo } from 'react';
import { ChevronDownIcon, ChevronUpIcon, FunnelIcon, ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';
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
  source: 'solution' | 'partnership' | 'service';
  category?: string;
}

interface CertificationsSectionProps {
  certifications?: Certification[];
}

const CertificationsSection: React.FC<CertificationsSectionProps> = ({ certifications }) => {
  const [isMinimized, setIsMinimized] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const CARDS_PER_ROW = 4;
  const ROWS_PER_PAGE = 4;
  const CARDS_PER_PAGE = CARDS_PER_ROW * ROWS_PER_PAGE;

  // Use provided certifications or fall back to all certifications
  const displayedCertifications = useMemo(() => {
    const certifications: Certification[] = [];

    // Add certifications from solutions
    solutionsData.forEach(solution => {
      if (solution.certifications) {
        solution.certifications.forEach(cert => {
          certifications.push({
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
          certifications.push({
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
          certifications.push({
            ...cert,
            source: 'service',
            category: service.title
          });
        });
      }
    });

    return certifications;
  }, [certifications]);

  // Get unique categories for filtering
  const categories = useMemo(() => {
    const cats = new Set(['all']);
    displayedCertifications.forEach(cert => {
      if (cert.category) cats.add(cert.category);
      cats.add(cert.source);
    });
    return Array.from(cats);
  }, [displayedCertifications]);

  // Filter certifications based on category and search term
  const filteredCertifications = useMemo(() => {
    const filtered = displayedCertifications.filter(cert => {
      const matchesCategory = selectedCategory === 'all' || 
                             cert.category === selectedCategory ||
                             cert.source === selectedCategory;
      const matchesSearch = cert.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           cert.issuer.toLowerCase().includes(searchTerm.toLowerCase());
      return matchesCategory && matchesSearch;
    });
    // Reset to first page when filter changes
    setCurrentPage(1);
    return filtered;
  }, [displayedCertifications, selectedCategory, searchTerm]);

  // Pagination calculations
  const totalPages = Math.ceil(filteredCertifications.length / CARDS_PER_PAGE);
  const startIndex = (currentPage - 1) * CARDS_PER_PAGE;
  const endIndex = startIndex + CARDS_PER_PAGE;
  const currentPageCertifications = filteredCertifications.slice(startIndex, endIndex);

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
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Header with Toggle */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Our Certifications
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl">
              Our team holds industry-leading certifications that validate our expertise and commitment to excellence.
            </p>
          </div>
          <button
            onClick={() => setIsMinimized(!isMinimized)}
            className="flex items-center space-x-2 px-4 py-2 bg-white rounded-lg shadow-sm border border-gray-200 hover:bg-gray-50 transition-colors duration-200"
            aria-label={isMinimized ? 'Expand certifications' : 'Minimize certifications'}
          >
            <span className="text-sm font-medium text-gray-700">
              {isMinimized ? 'Show' : 'Hide'}
            </span>
            {isMinimized ? (
              <ChevronDownIcon className="w-4 h-4 text-gray-600" />
            ) : (
              <ChevronUpIcon className="w-4 h-4 text-gray-600" />
            )}
          </button>
        </div>

        {/* Filters */}
        {!isMinimized && (
          <div className="mb-8 space-y-4">
            <div className="flex flex-wrap items-center gap-4">
              <div className="flex items-center space-x-2">
                <FunnelIcon className="w-5 h-5 text-gray-500" />
                <span className="text-sm font-medium text-gray-700">Filter by:</span>
              </div>
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              >
                <option value="all">All Categories</option>
                <option value="solution">Solutions</option>
                <option value="partnership">Partnerships</option>
                <option value="service">Services</option>
                {categories.filter(cat => !['all', 'solution', 'partnership', 'service'].includes(cat)).map(category => (
                  <option key={category} value={category}>{category}</option>
                ))}
              </select>
              <input
                type="text"
                placeholder="Search certifications..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 min-w-[200px]"
              />
            </div>
            <div className="text-sm text-gray-600">
              Showing {filteredCertifications.length} of {displayedCertifications.length} certifications
            </div>
          </div>
        )}

        {/* Certifications Grid */}
        {!isMinimized && currentPageCertifications.length > 0 && (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-[90rem] mx-auto">
            {currentPageCertifications.map((certification) => (
              <div
                key={certification.id}
                className="relative bg-white rounded-lg overflow-hidden shadow-sm border border-gray-200 hover:shadow-md transition-shadow duration-200"
              >
                {/* Certification Image */}
                <div className="relative h-64 bg-gradient-to-br from-orange-500 to-orange-600">
                  <Image
                    src={certification.imageUrl}
                    alt={certification.name}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  {/* Text Overlay at Bottom */}
                  <div className="absolute bottom-0 left-0 right-0 text-white p-4 bg-gradient-to-t from-orange-500/90 to-transparent">
                    <h3 className="font-semibold text-base mb-1 leading-tight">
                      {certification.name}
                    </h3>
                    <p className="text-xs text-gray-200 mb-1">
                      {certification.issuer}
                    </p>
                    <div className="flex items-center justify-between">
                      <div className="space-x-2">
                        {certification.level && (
                          <span className="text-xs text-orange-300 px-1">
                            {certification.level}
                          </span>
                        )}
                        <span className="text-xs text-blue-300 px-1">
                          {certification.source}
                        </span>
                      </div>
                      {certification.validUntil && (
                        <span className="text-xs text-gray-300">
                          Valid until {new Date(certification.validUntil).getFullYear()}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Pagination Controls */}
        {!isMinimized && filteredCertifications.length > CARDS_PER_PAGE && (
          <div className="flex items-center justify-between mt-8">
            <div className="text-sm text-gray-600">
              Showing {startIndex + 1}-{Math.min(endIndex, filteredCertifications.length)} of {filteredCertifications.length} certifications
            </div>
            <div className="flex items-center space-x-2">
              <button
                onClick={goToPreviousPage}
                disabled={currentPage === 1}
                className="p-2 rounded-md border border-gray-300 bg-white hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              >
                <ChevronLeftIcon className="w-5 h-5 text-gray-600" />
              </button>
              
              <div className="flex items-center space-x-1">
                {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                  <button
                    key={page}
                    onClick={() => goToPage(page)}
                    className={`px-3 py-2 text-sm rounded-md transition-colors ${
                      currentPage === page
                        ? 'bg-blue-600 text-white'
                        : 'bg-white border border-gray-300 text-gray-700 hover:bg-gray-50'
                    }`}
                  >
                    {page}
                  </button>
                ))}
              </div>
              
              <button
                onClick={goToNextPage}
                disabled={currentPage === totalPages}
                className="p-2 rounded-md border border-gray-300 bg-white hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              >
                <ChevronRightIcon className="w-5 h-5 text-gray-600" />
              </button>
            </div>
          </div>
        )}

        {/* No Results Message */}
        {!isMinimized && filteredCertifications.length === 0 && (
          <div className="text-center py-8">
            <p className="text-gray-500">
              No certifications found matching your criteria.
            </p>
          </div>
        )}

        {/* Minimized State */}
        {isMinimized && (
          <div className="text-center py-8">
            <p className="text-gray-500">
              {displayedCertifications.length} certification{displayedCertifications.length !== 1 ? 's' : ''} available
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export { CertificationsSection };
export default CertificationsSection;