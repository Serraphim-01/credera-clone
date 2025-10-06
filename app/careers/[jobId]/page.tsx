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
      <div className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-6">

          {/* What You Will Do */}
          {job.whatYouWillDo && (
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-credera-dark mb-6">What You Will Do</h2>
              <ul className="space-y-4">
                {job.whatYouWillDo.map((item, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-[color:var(--color-foreground)] mr-4 mt-1 text-xl">•</span>
                    <span className="text-gray-700 text-lg">{item}</span>
                  </li>
                ))}
              </ul>
            </section>
          )}

          {/* Responsibilities */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-credera-dark mb-6">Responsibilities</h2>
            <ul className="space-y-4">
              {job.responsibilities.map((responsibility, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-[color:var(--color-foreground)] mr-4 mt-1 text-xl">•</span>
                  <span className="text-gray-700 text-lg">{responsibility}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* Who You Are */}
          {job.whoYouAre && (
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-credera-dark mb-6">Who You Are</h2>
              <ul className="space-y-4">
                {job.whoYouAre.map((item, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-[color:var(--color-foreground)] mr-4 mt-1 text-xl">•</span>
                    <span className="text-gray-700 text-lg">{item}</span>
                  </li>
                ))}
              </ul>
            </section>
          )}

          {/* Requirements */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-credera-dark mb-6">Requirements</h2>
            <ul className="space-y-4">
              {job.requirements.map((requirement, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-[color:var(--color-foreground)] mr-4 mt-1 text-xl">•</span>
                  <span className="text-gray-700 text-lg">{requirement}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* Benefits */}
          {job.benefits && (
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-credera-dark mb-6">Benefits</h2>
              <ul className="space-y-4">
                {job.benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-[color:var(--color-foreground)] mr-4 mt-1 text-xl">•</span>
                    <span className="text-gray-700 text-lg">{benefit}</span>
                  </li>
                ))}
              </ul>
            </section>
          )}
        </div>
      </div>

      {/* Application Form Section */}
      <div className="py-16 bg-[color:var(--color-very-light-yellow)]">
        <div className="max-w-2xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-credera-dark mb-6">
            Ready to Apply?
          </h2>
          <p className="text-gray-600 text-lg mb-8">
            Take the next step in your career and join our team of innovators and problem solvers.
          </p>
          <button
            onClick={() => setShowApplicationModal(true)}
            className="group relative text-[color:var(--color-foreground)] px-12 py-4 rounded-md font-semibold text-lg overflow-hidden"
          >
            <span className="relative inline-flex items-center">
              Apply for {job.title}

              {/* Arrow */}
              <span
                className="ml-2 opacity-0 transform -translate-x-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0"
              >
                →
              </span>

              {/* Underline */}
              <span
                className="absolute -bottom-1 left-0 w-0 h-[2px] bg-[color:var(--color-foreground)] transition-all duration-300 group-hover:w-full"
              ></span>
            </span>
          </button>

        </div>
      </div>

      {/* Application Modal */}
      <ApplicationModal
        isOpen={showApplicationModal}
        onClose={() => setShowApplicationModal(false)}
        jobTitle={job.title}
        onSubmit={handleApply}
      />

      {/* Related Opportunities Section */}
      <div className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-credera-dark text-center mb-8">
            Other Opportunities
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-[color:var(--color-very-light-yellow)] rounded-lg p-8 text-center">
              <h3 className="text-xl font-bold text-credera-dark mb-4">
                {job.category === 'student-intern' ? 'Experienced Professionals' : 'Students & Interns'}
              </h3>
              <p className="text-gray-600 mb-6">
                {job.category === 'student-intern'
                  ? 'Explore senior-level positions and leadership opportunities'
                  : 'Discover entry-level positions and internship opportunities'
                }
              </p>
              <a
                href={job.category === 'student-intern' ? '/careers/professionals' : '/careers/students-interns'}
                className="group relative inline-flex items-center text-[color:var(--color-foreground)] font-semibold"
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

            <div className="bg-[color:var(--color-very-light-yellow)] rounded-lg p-8 text-center">
              <h3 className="text-xl font-bold text-credera-dark mb-4">
                Life at Task Systems
              </h3>
              <p className="text-gray-600 mb-6">
                Learn more about our culture, values, and what makes us a great place to work.
              </p>
              <a
                href="/careers"
                className="group relative inline-flex items-center text-[color:var(--color-foreground)] font-semibold"
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

      {/* Footer */}
      <FooterSection />
    </div>
  );
};

export default JobDetailPage;