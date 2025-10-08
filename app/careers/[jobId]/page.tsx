'use client';

import React, { useState, use } from 'react';
import { notFound } from 'next/navigation';
import FooterSection from '@/components/FooterSection';
import StandardHeroSection from '@/components/StandardHeroSection';
import ApplicationModal from '@/components/ApplicationModal';
import { getJobById } from '@/data/careers';
import { JobOpening, ApplicationFormData } from '@/types/index';

interface JobDetailPageProps {
  params: Promise<{ jobId: string }>;
}

const JobDetailPage: React.FC<JobDetailPageProps> = ({ params }) => {
  const { jobId } = use(params); 
  const [showApplicationModal, setShowApplicationModal] = useState(false);
  const job = getJobById(jobId);

  if (!job) {
    notFound();
  }

  const handleApply = async (applicationData: ApplicationFormData) => {
    // In a real application, this would submit to an API
    console.log('Application submitted:', applicationData);

    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 1000));

    // Success is default for now as requested
    return;
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <StandardHeroSection
        title={job.title}
        subtitle={job.applicationDeadline}
        description={job.fullDescription || job.description}
        backgroundImage={job.category === 'student-intern' ? '/TaskImages/meet.jpg' : '/TaskImages/join.jpg'}
        maxContentWidth="max-w-4xl"
      />

      {/* Job Details Content */}
      <div className="py-8 sm:py-12 md:py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">

          {/* What You Will Do */}
          {job.whatYouWillDo && (
            <section className="mb-8 sm:mb-12">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-credera-dark mb-4 sm:mb-6">What You Will Do</h2>
              <ul className="space-y-3 sm:space-y-4">
                {job.whatYouWillDo.map((item, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-[color:var(--color-foreground)] mr-3 sm:mr-4 mt-1 text-lg sm:text-xl">•</span>
                    <span className="text-gray-700 text-base sm:text-lg">{item}</span>
                  </li>
                ))}
              </ul>
            </section>
          )}

          {/* Responsibilities */}
          <section className="mb-8 sm:mb-12">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-credera-dark mb-4 sm:mb-6">Responsibilities</h2>
            <ul className="space-y-3 sm:space-y-4">
              {job.responsibilities.map((responsibility, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-[color:var(--color-foreground)] mr-3 sm:mr-4 mt-1 text-lg sm:text-xl">•</span>
                  <span className="text-gray-700 text-base sm:text-lg">{responsibility}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* Who You Are */}
          {job.whoYouAre && (
            <section className="mb-8 sm:mb-12">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-credera-dark mb-4 sm:mb-6">Who You Are</h2>
              <ul className="space-y-3 sm:space-y-4">
                {job.whoYouAre.map((item, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-[color:var(--color-foreground)] mr-3 sm:mr-4 mt-1 text-lg sm:text-xl">•</span>
                    <span className="text-gray-700 text-base sm:text-lg">{item}</span>
                  </li>
                ))}
              </ul>
            </section>
          )}

          {/* Requirements */}
          <section className="mb-8 sm:mb-12">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-credera-dark mb-4 sm:mb-6">Requirements</h2>
            <ul className="space-y-3 sm:space-y-4">
              {job.requirements.map((requirement, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-[color:var(--color-foreground)] mr-3 sm:mr-4 mt-1 text-lg sm:text-xl">•</span>
                  <span className="text-gray-700 text-base sm:text-lg">{requirement}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* Benefits */}
          {job.benefits && (
            <section className="mb-8 sm:mb-12">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-credera-dark mb-4 sm:mb-6">Benefits</h2>
              <ul className="space-y-3 sm:space-y-4">
                {job.benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-[color:var(--color-foreground)] mr-3 sm:mr-4 mt-1 text-lg sm:text-xl">•</span>
                    <span className="text-gray-700 text-base sm:text-lg">{benefit}</span>
                  </li>
                ))}
              </ul>
            </section>
          )}
        </div>
      </div>

      {/* Application Form Section */}
      <div className="py-8 sm:py-12 md:py-16 bg-[color:var(--color-very-light-yellow)]">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-credera-dark mb-4 sm:mb-6">
            Ready to Apply?
          </h2>
          <p className="text-gray-600 text-base sm:text-lg mb-6 sm:mb-8">
            Take the next step in your career and join our team of innovators and problem solvers.
          </p>
          <button
            onClick={() => setShowApplicationModal(true)}
            className="group relative text-[color:var(--color-foreground)] px-6 sm:px-8 md:px-12 py-3 sm:py-4 rounded-md font-semibold text-base sm:text-lg overflow-hidden border border-[color:var(--color-foreground)] hover:bg-[color:var(--color-foreground)] hover:text-white transition-colors duration-300"
          >
            <span className="relative inline-flex items-center">
              Apply for {job.title}

              {/* Arrow */}
              <span
                className="ml-2 opacity-0 transform -translate-x-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0"
              >
                →
              </span>

              {/* Underline - hidden on hover when background changes */}
              <span
                className="absolute -bottom-1 left-0 w-0 h-[2px] bg-[color:var(--color-foreground)] transition-all duration-300 group-hover:w-0"
              ></span>
            </span>
          </button>
        </div>
      </div>

      {/* Related Opportunities Section */}
      <div className="py-8 sm:py-12 md:py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-credera-dark text-center mb-6 sm:mb-8">
            Other Opportunities
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 md:gap-8">
            <div className="bg-[color:var(--color-very-light-yellow)] rounded-lg p-4 sm:p-6 md:p-8 text-center">
              <h3 className="text-lg sm:text-xl font-bold text-credera-dark mb-3 sm:mb-4">
                {job.category === 'student-intern' ? 'Experienced Professionals' : 'Students & Interns'}
              </h3>
              <p className="text-gray-600 text-sm sm:text-base mb-4 sm:mb-6">
                {job.category === 'student-intern'
                  ? 'Explore senior-level positions and leadership opportunities'
                  : 'Discover entry-level positions and internship opportunities'
                }
              </p>
              <a
                href={job.category === 'student-intern' ? '/careers/professionals' : '/careers/students-interns'}
                className="group relative inline-flex items-center text-[color:var(--color-foreground)] font-semibold text-sm sm:text-base"
              >
                <span className="relative inline-flex items-center">
                  View Positions
                  {/* Arrow */}
                  <span className="ml-1 opacity-0 -translate-x-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0">
                    →
                  </span>
                  {/* Underline */}
                  <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-[color:var(--color-foreground)] transition-all duration-300 group-hover:w-full"></span>
                </span>
              </a>
            </div>

            <div className="bg-[color:var(--color-very-light-yellow)] rounded-lg p-4 sm:p-6 md:p-8 text-center">
              <h3 className="text-lg sm:text-xl font-bold text-credera-dark mb-3 sm:mb-4">
                Life at Task Systems
              </h3>
              <p className="text-gray-600 text-sm sm:text-base mb-4 sm:mb-6">
                Learn more about our culture, values, and what makes us a great place to work.
              </p>
              <a
                href="/careers"
                className="group relative inline-flex items-center text-[color:var(--color-foreground)] font-semibold text-sm sm:text-base"
              >
                <span className="relative inline-flex items-center">
                  Discover Our Culture
                  {/* Arrow */}
                  <span className="ml-1 opacity-0 -translate-x-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0">
                    →
                  </span>
                  {/* Underline */}
                  <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-[color:var(--color-foreground)] transition-all duration-300 group-hover:w-full"></span>
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Application Modal */}
      <ApplicationModal
        isOpen={showApplicationModal}
        onClose={() => setShowApplicationModal(false)}
        jobTitle={job.title}
        onSubmit={handleApply}
      />

      {/* Footer */}
      <FooterSection />
    </div>
  );
};

export default JobDetailPage;