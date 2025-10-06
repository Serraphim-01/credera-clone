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
      <div className="py-16 sm:py-8">
        <div className="max-w-6xl mx-auto px-8 sm:px-4">
          <div className="text-center mb-12 sm:mb-8">
            <h2 className="text-4xl sm:text-2xl font-bold text-credera-dark mb-4 sm:mb-2">
              Current Opportunities for Experienced Professionals
            </h2>
            <p className="text-lg sm:text-base text-gray-600 max-w-2xl mx-auto">
              Take your expertise to the next level and lead impactful projects with industry-leading clients
            </p>
          </div>

          {/* Jobs grid */}
          <div className="flex flex-col xl:flex-row gap-8">
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
                  <div className="p-8 sm:p-4 flex flex-col sm:flex-col md:flex-row items-start md:items-center justify-between gap-4">
                    <div className="flex-1">
                      <h3 className="text-2xl sm:text-lg font-bold text-credera-dark mb-2">
                        {job.title}
                      </h3>
                      <p className="text-gray-600 mb-4 sm:mb-3 sm:text-sm">
                        {job.applicationDeadline}
                      </p>
                      <Link
                        href={`/careers/${job.id}`}
                        className="text-credera-red font-medium hover:text-red-700 transition-colors duration-200 relative group sm:text-sm"
                      >
                        View More
                        <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-credera-red transition-all duration-300 group-hover:w-full"></span>
                      </Link>
                    </div>
                    <div className="ml-0 md:ml-8">
                      <Link
                        href={`/careers/${job.id}`}
                        className="relative group text-[color:var(--color-foreground)] px-8 py-3 sm:px-4 sm:py-2 rounded-md font-semibold sm:text-sm w-full md:w-auto inline-block text-center transition-colors duration-200"
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
                <div className="text-center py-12">
                  <p className="text-gray-600 text-lg">
                    No positions currently available for experienced professionals.
                  </p>
                  <p className="text-gray-500 mt-2">
                    Check back soon for new opportunities!
                  </p>
                </div>
              )}
            </div>

            {/* Sidebar */}
            <div className="xl:w-96 xl:block hidden">
              <div className="bg-gray-50 rounded-lg p-8 sm:p-4 sticky top-8">
                <h3 className="text-2xl sm:text-xl font-bold text-credera-dark mb-6">
                  Why Join Our Team?
                </h3>
                <div className="space-y-6">

                  {/* Item */}
                  <div className="flex items-start gap-4">
                    <div className="w-16 h-16 sm:w-12 sm:h-12 bg-credera-red rounded-full flex items-center justify-center flex-shrink-0">
                      <svg
                        className="w-8 h-8 sm:w-6 sm:h-6 text-[color:var(--color-foreground)]"
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
                      <h4 className="text-xl sm:text-lg font-bold text-credera-dark mb-2">
                        Global Impact
                      </h4>
                      <p className="text-gray-600 sm:text-sm">
                        Lead transformational projects for Fortune 500 clients across
                        diverse industries and make a meaningful impact on business outcomes.
                      </p>
                    </div>
                  </div>


                  <div className="flex items-start gap-4">
                    <div className="w-16 h-16 sm:w-12 sm:h-12 bg-credera-red rounded-full flex items-center justify-center flex-shrink-0">
                      <svg
                        className="w-8 h-8 sm:w-6 sm:h-6 text-[color:var(--color-foreground)]"
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
                      <h4 className="text-xl sm:text-lg font-bold text-credera-dark mb-2">
                        Leadership Opportunities
                      </h4>
                      <p className="text-gray-600 sm:text-sm">
                        Take on leadership roles, drive strategic initiatives, and
                        shape the direction of cutting-edge technology and business solutions.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-16 h-16 sm:w-12 sm:h-12 bg-credera-red rounded-full flex items-center justify-center flex-shrink-0">
                      <svg
                        className="w-8 h-8 sm:w-6 sm:h-6 text-[color:var(--color-foreground)]"
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
                      <h4 className="text-xl sm:text-lg font-bold text-credera-dark mb-3 sm:mb-2">
                        Innovation Culture
                      </h4>
                      <p className="text-gray-600 sm:text-sm">
                        Work with the latest technologies and methodologies while
                        contributing to an innovative culture that drives industry change.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-16 h-16 sm:w-12 sm:h-12 bg-credera-red rounded-full flex items-center justify-center flex-shrink-0">
                      <svg
                        className="w-8 h-8 sm:w-6 sm:h-6 text-[color:var(--color-foreground)]"
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
                      <h4 className="text-xl sm:text-lg font-bold text-credera-dark mb-3 sm:mb-2">
                        Competitive Compensation
                      </h4>
                      <p className="text-gray-600 sm:text-sm">
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