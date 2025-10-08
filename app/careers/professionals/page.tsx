'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import FooterSection from '@/components/FooterSection';
import StandardHeroSection from '@/components/StandardHeroSection';
import { getJobsByCategory } from '@/data/careers';
import { JobOpening } from '@/types/index';

const ProfessionalsPage: React.FC = () => {
  const jobOpenings = getJobsByCategory('professional');

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <StandardHeroSection
        title="Apply now."
        subtitle="Ready to tackle new challenges and make an impact? Join our team of problem solvers, innovators, and creators."
        description="For experienced professionals, apply here."
        backgroundImage="/TaskImages/join.jpg"
        maxContentWidth="max-w-3xl"
      />

      {/* Job Openings Section */}
      <div className="py-8 sm:py-12 md:py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-credera-dark mb-3 sm:mb-4">
              Current Opportunities for Experienced Professionals
            </h2>
            <p className="text-gray-600 text-sm sm:text-base md:text-lg max-w-2xl mx-auto">
              Take your expertise to the next level and lead impactful projects with industry-leading clients
            </p>
          </div>

          {/* Jobs grid */}
          <div className="flex flex-col xl:flex-row gap-6 sm:gap-8">
            {/* Job list */}
            <div className="xl:flex-1 space-y-0">
              {jobOpenings.map((job, index) => (
                <div
                  key={job.id}
                  className={`w-full bg-white shadow-sm hover:shadow-md transition-all duration-300 ease-in-out ${index !== jobOpenings.length - 1
                    ? 'border-b border-gray-200'
                    : ''
                    }`}
                >
                  {/* Job Header */}
                  <div className="p-4 sm:p-6 md:p-8 flex flex-col sm:flex-row items-start justify-between gap-3 sm:gap-4">
                    <div className="flex-1">
                      <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-credera-dark mb-2">
                        {job.title}
                      </h3>
                      <p className="text-gray-600 text-sm sm:text-base mb-3 sm:mb-4">
                        {job.applicationDeadline}
                      </p>
                      {/* View More - Hidden on mobile, visible on sm and up */}
                      <Link
                        href={`/careers/${job.id}`}
                        className="hidden sm:inline text-credera-red font-medium hover:text-red-700 transition-colors duration-200 relative group text-sm sm:text-base"
                      >
                        View More
                        <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-credera-red transition-all duration-300 group-hover:w-full"></span>
                      </Link>
                    </div>

                    {/* Mobile: View More and Apply on same line */}
                    <div className="w-full sm:w-auto mt-0 sm:mt-0 flex sm:block items-center justify-between sm:justify-normal gap-4 sm:gap-0">
                      {/* View More - Only visible on mobile */}
                      <Link
                        href={`/careers/${job.id}`}
                        className="sm:hidden text-credera-red font-medium hover:text-red-700 transition-colors duration-200 relative group text-sm"
                      >
                        View More
                        <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-credera-red transition-all duration-300 group-hover:w-full"></span>
                      </Link>

                      <Link
                        href={`/careers/${job.id}`}
                        className="relative group text-[color:var(--color-foreground)] px-4 py-2 sm:px-6 sm:py-3 md:px-8 md:py-3 rounded-md font-semibold text-sm sm:text-base w-auto sm:w-auto inline-block text-center transition-colors duration-200"
                      >
                        <span className="inline-flex items-center gap-1">
                          Apply
                          {/* Arrow (hidden initially, slides in on hover) */}
                          <span className="inline-block opacity-0 -translate-x-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0">
                            →
                          </span>
                        </span>

                        {/* Underline (grows from left to right) */}
                        <span className="absolute left-0 bottom-0 h-[2px] w-0 bg-[color:var(--color-foreground)] transition-all duration-300 group-hover:w-full"></span>
                      </Link>
                    </div>
                  </div>
                </div>
              ))}

              {jobOpenings.length === 0 && (
                <div className="text-center py-8 sm:py-12">
                  <p className="text-gray-600 text-base sm:text-lg">
                    No positions currently available for experienced professionals.
                  </p>
                  <p className="text-gray-500 mt-2 text-sm sm:text-base">
                    Check back soon for new opportunities!
                  </p>
                </div>
              )}
            </div>

            {/* Sidebar - Hidden on mobile, visible on xl */}
            <div className="xl:w-80 lg:w-96 xl:block hidden">
              <div className="bg-gray-50 rounded-lg p-6 sm:p-8 sticky top-8">
                <h3 className="text-xl sm:text-2xl font-bold text-credera-dark mb-4 sm:mb-6">
                  Why Join Our Team?
                </h3>
                <div className="space-y-6 sm:space-y-8">
                  {/* Global Impact */}
                  <div className="flex items-start gap-3 sm:gap-4">
                    <div className="w-12 h-12 sm:w-16 sm:h-16 bg-credera-red rounded-full flex items-center justify-center flex-shrink-0">
                      <svg
                        className="w-6 h-6 sm:w-8 sm:h-8 text-[color:var(--color-foreground)]"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9v-9m0-9v9"
                        />
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-lg sm:text-xl font-bold text-credera-dark mb-2">
                        Global Impact
                      </h4>
                      <p className="text-gray-600 text-sm sm:text-base">
                        Lead transformational projects for Fortune 500 clients across
                        diverse industries and make a meaningful impact on business outcomes.
                      </p>
                    </div>
                  </div>

                  {/* Leadership Opportunities */}
                  <div className="flex items-start gap-3 sm:gap-4">
                    <div className="w-12 h-12 sm:w-16 sm:h-16 bg-credera-red rounded-full flex items-center justify-center flex-shrink-0">
                      <svg
                        className="w-6 h-6 sm:w-8 sm:h-8 text-[color:var(--color-foreground)]"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M13 10V3L4 14h7v7l9-11h-7z"
                        />
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-lg sm:text-xl font-bold text-credera-dark mb-2">
                        Leadership Opportunities
                      </h4>
                      <p className="text-gray-600 text-sm sm:text-base">
                        Take on leadership roles, drive strategic initiatives, and
                        shape the direction of cutting-edge technology and business solutions.
                      </p>
                    </div>
                  </div>

                  {/* Innovation Culture */}
                  <div className="flex items-start gap-3 sm:gap-4">
                    <div className="w-12 h-12 sm:w-16 sm:h-16 bg-credera-red rounded-full flex items-center justify-center flex-shrink-0">
                      <svg
                        className="w-6 h-6 sm:w-8 sm:h-8 text-[color:var(--color-foreground)]"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                        />
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-lg sm:text-xl font-bold text-credera-dark mb-2">
                        Innovation Culture
                      </h4>
                      <p className="text-gray-600 text-sm sm:text-base">
                        Work with the latest technologies and methodologies while
                        contributing to an innovative culture that drives industry change.
                      </p>
                    </div>
                  </div>

                  {/* Competitive Compensation */}
                  <div className="flex items-start gap-3 sm:gap-4">
                    <div className="w-12 h-12 sm:w-16 sm:h-16 bg-credera-red rounded-full flex items-center justify-center flex-shrink-0">
                      <svg
                        className="w-6 h-6 sm:w-8 sm:h-8 text-[color:var(--color-foreground)]"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-lg sm:text-xl font-bold text-credera-dark mb-2">
                        Competitive Compensation
                      </h4>
                      <p className="text-gray-600 text-sm sm:text-base">
                        Enjoy competitive salaries, performance bonuses, equity participation,
                        and comprehensive benefits that recognize your expertise and contributions.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <FooterSection />
    </div>
  );
};

export default ProfessionalsPage;