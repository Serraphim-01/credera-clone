'use client';

import React from 'react';
import Link from 'next/link';
import FooterSection from '@/components/FooterSection';
import StandardHeroSection from '@/components/StandardHeroSection';
import { getJobsByCategory } from '@/data/careers';

const StudentsInternsPage: React.FC = () => {
  const jobOpenings = getJobsByCategory('student-intern');

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <StandardHeroSection
        title="Apply now."
        subtitle="Ready to tackle new challenges and make an impact? Join our team of problem solvers, innovators, and creators."
        description="For entry-level positions and internships, apply here."
        backgroundImage="/TaskImages/meet.jpg"
        maxContentWidth="max-w-3xl"
      />

      {/* Job Openings Section */}
      <div className="py-8 sm:py-12 md:py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-credera-dark mb-3 sm:mb-4">
              Current Opportunities for Students & Interns
            </h2>
            <p className="text-gray-600 text-sm sm:text-base md:text-lg max-w-2xl mx-auto">
              Start your career journey with hands-on experience and mentorship from industry experts
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
                    No positions currently available for students and interns.
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
                  Why Start Your Career With Us?
                </h3>
                <div className="space-y-6 sm:space-y-8">
                  <div className="flex items-start gap-3 sm:gap-4">
                    <div className="w-12 h-12 sm:w-16 sm:h-16 bg-credera-red rounded-full flex items-center justify-center flex-shrink-0">
                      <svg
                        className="w-6 h-6 sm:w-8 sm:h-8 [color:var(--color-foreground)]"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                        />
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-lg sm:text-xl font-bold text-credera-dark mb-2">
                        Learn from Experts
                      </h4>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 sm:gap-4">
                    <div className="w-12 h-12 sm:w-16 sm:h-16 bg-credera-red rounded-full flex items-center justify-center flex-shrink-0">
                      <svg
                        className="w-6 h-6 sm:w-8 sm:h-8 [color:var(--color-foreground)]"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                        />
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-lg sm:text-xl font-bold text-credera-dark mb-2">
                        Real Project Experience
                      </h4>
                      
                    </div>
                  </div>

                  <div className="flex items-start gap-3 sm:gap-4">
                    <div className="w-12 h-12 sm:w-16 sm:h-16 bg-credera-red rounded-full flex items-center justify-center flex-shrink-0">
                      <svg
                        className="w-6 h-6 sm:w-8 sm:h-8 [color:var(--color-foreground)]"
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
                        Career Development
                      </h4>
                    
                    </div>
                  </div>

                  <div className="flex items-start gap-3 sm:gap-4">
                    <div className="w-12 h-12 sm:w-16 sm:h-16 bg-credera-red rounded-full flex items-center justify-center flex-shrink-0">
                      <svg
                        className="w-6 h-6 sm:w-8 sm:h-8 [color:var(--color-foreground)]"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 005.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                        />
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-lg sm:text-xl font-bold text-credera-dark mb-2">
                        Collaborative Environment
                      </h4>
                      
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

export default StudentsInternsPage;