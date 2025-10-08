'use client';

import React, { useState } from 'react';
import StandardHeroSection from '@/components/StandardHeroSection';
import FooterSection from '@/components/FooterSection';
import NextStepsModal from '@/components/NextStepsModal';
import { NextStepsFormData } from '@/types';
import Image from 'next/image';

export default function CurrentStatePortfolioAnalysis() {
  const [isNextStepsModalOpen, setIsNextStepsModalOpen] = useState(false);

  const handleNextStepsClick = () => {
    setIsNextStepsModalOpen(true);
  };

  const handleNextStepsClose = () => {
    setIsNextStepsModalOpen(false);
  };

  const handleNextStepsSubmit = async (data: NextStepsFormData) => {
    console.log('Next Steps form submitted:', data);
    // Handle form submission logic here
    alert('Thank you! We will contact you soon to schedule your Portfolio Analysis.');
  };
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-screen max-h-[600px] overflow-hidden">
        {/* Background Image */}
        <Image
          src="/TaskImages/services.jpg"
          alt="Current-State Portfolio Analysis & Recommendation"
          fill
          className="object-cover absolute inset-0 z-0"
          priority
          sizes="100vw"
        />

        {/* Content */}
        <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-8 z-20">
          <div className="absolute bottom-0 left-4 sm:left-8 w-[60%] max-w-lg">
            <div className="bg-white p-4 sm:p-6 md:p-8 shadow-xl">
              <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2 sm:mb-4 text-gray-900">
                Current-State Portfolio Analysis & Recommendation
              </h1>
              <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2 sm:mb-4 text-gray-700">
                Set yourself for success
              </h2>
              <p className="text-sm sm:text-base md:text-lg text-gray-600 mb-2 sm:mb-4">
                A forensic, criteria-based scan of every application & infrastructure asset. Know what you have before you move it.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-8 sm:py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 sm:gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-credera-dark mb-4 sm:mb-6">
                The WHAT
              </h2>

              <div className="prose prose-sm sm:prose-lg max-w-none text-credera-gray-600">
                <p className="mb-4 sm:mb-6 text-sm sm:text-base">
                  A forensic, criteria-based scan of every application & infrastructure asset:
                </p>

                <ul className="list-disc list-inside mb-4 sm:mb-6 space-y-1 sm:space-y-2 text-sm sm:text-base">
                  <li><strong>Apps</strong>: architecture, complexity, criticality, cost, dependencies, integrations, risk, scalability, tech stack, usage.</li>
                  <li><strong>Infrastructure</strong>: ditto—plus data size, security, storage.</li>
                  <li><strong>Tools</strong>: capability, dependencies, usage.</li>
                </ul>

                <div className="bg-[color:var(--color-foreground)] border-l-4 border-[color:var(--color-yellow)] p-4 sm:p-6 mb-6 sm:mb-8">
                  <blockquote className="text-base sm:text-lg italic text-[color:var(--color-yellow)] ">
                    <strong>Forrester</strong>: 45% complexity reduction & 51% higher availability start with <strong>accurate discovery</strong>.
                  </blockquote>
                </div>
              </div>

              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-credera-dark mb-4 sm:mb-6 mt-8 sm:mt-12">
                The HOW – bottom-up automation, top-down governance
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-6">
                <div className="bg-white border border-gray-200 rounded-lg p-4 sm:p-6 shadow-sm">
                  <h3 className="text-lg sm:text-xl font-semibold text-credera-dark mb-2 sm:mb-4">
                    1. Stakeholder kick-off & scoping
                  </h3>
                  <p className="text-credera-gray-600 text-sm sm:text-base">
                    Initial meetings to define scope, objectives, and establish project governance framework.
                  </p>
                </div>

                <div className="bg-white border border-gray-200 rounded-lg p-4 sm:p-6 shadow-sm">
                  <h3 className="text-lg sm:text-xl font-semibold text-credera-dark mb-2 sm:mb-4">
                    2. QUEST agentless discovery (automated)
                  </h3>
                  <p className="text-credera-gray-600 text-sm sm:text-base">
                    Comprehensive automated discovery using QUEST tooling to identify all assets and dependencies.
                  </p>
                </div>

                <div className="bg-white border border-gray-200 rounded-lg p-4 sm:p-6 shadow-sm">
                  <h3 className="text-lg sm:text-xl font-semibold text-credera-dark mb-2 sm:mb-4">
                    3. Dependency & business-service mapping
                  </h3>
                  <p className="text-credera-gray-600 text-sm sm:text-base">
                    Detailed mapping of application dependencies and alignment with business services.
                  </p>
                </div>

                <div className="bg-white border border-gray-200 rounded-lg p-4 sm:p-6 shadow-sm">
                  <h3 className="text-lg sm:text-xl font-semibold text-credera-dark mb-2 sm:mb-4">
                    4. CMDB compare & data validation
                  </h3>
                  <p className="text-credera-gray-600 text-sm sm:text-base">
                    Cross-validation with existing CMDB data to ensure accuracy and completeness.
                  </p>
                </div>

                <div className="bg-white border border-gray-200 rounded-lg p-4 sm:p-6 shadow-sm">
                  <h3 className="text-lg sm:text-xl font-semibold text-credera-dark mb-2 sm:mb-4">
                    5. Risk/complexity scoring
                  </h3>
                  <p className="text-credera-gray-600 text-sm sm:text-base">
                    Systematic assessment and scoring of migration risk and complexity factors.
                  </p>
                </div>

                <div className="bg-white border border-gray-200 rounded-lg p-4 sm:p-6 shadow-sm">
                  <h3 className="text-lg sm:text-xl font-semibold text-credera-dark mb-2 sm:mb-4">
                    6. Gap & readiness identification
                  </h3>
                  <p className="text-credera-gray-600 text-sm sm:text-base">
                    Identification of gaps and assessment of cloud readiness across all components.
                  </p>
                </div>

                <div className="bg-white border border-gray-200 rounded-lg p-4 sm:p-6 shadow-sm md:col-span-2 xl:col-span-1">
                  <h3 className="text-lg sm:text-xl font-semibold text-credera-dark mb-2 sm:mb-4">
                    7. Publish Portfolio Analysis Report
                  </h3>
                  <p className="text-credera-gray-600 text-sm sm:text-base">
                    Comprehensive report with move-group recommendations and strategic insights.
                  </p>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-8 space-y-4 sm:space-y-6">
                <div className="bg-[color:var(--color-foreground)] border border-green-200 rounded-lg p-4 sm:p-6">
                  <h3 className="text-base sm:text-lg font-semibold text-[color:var(--color-yellow)] mb-3 sm:mb-4">
                    Outcomes
                  </h3>
                  <ul className="space-y-2 sm:space-y-3 text-xs sm:text-sm text-[color:var(--color-yellow)]">
                    <li className="flex items-start">
                      <span className="text-[color:var(--color-yellow)] mr-2 sm:mr-3 text-lg sm:text-xl">✓</span>
                      Single source of truth for apps & infra
                    </li>
                    <li className="flex items-start">
                      <span className="text-[color:var(--color-yellow)] mr-2 sm:mr-3 text-lg sm:text-xl">✓</span>
                      Move-blockers surfaced early
                    </li>
                    <li className="flex items-start">
                      <span className="text-[color:var(--color-yellow)] mr-2 sm:mr-3 text-lg sm:text-xl">✓</span>
                      Quick-win candidates highlighted
                    </li>
                    <li className="flex items-start">
                      <span className="text-[color:var(--color-yellow)] mr-2 sm:mr-3 text-lg sm:text-xl">✓</span>
                      Data-driven input to TCO, security & migration waves
                    </li>
                  </ul>
                </div>
              
              <div className="bg-credera-gray-50 p-4 sm:p-6 rounded-lg">
                <h3 className="text-base sm:text-lg font-semibold text-credera-dark mb-3 sm:mb-4">
                  What to Expect
                </h3>
                <ul className="space-y-2 sm:space-y-3 text-xs sm:text-sm text-credera-gray-600">
                  <li className="flex items-start">
                    <span className="text-credera-red mr-2">•</span>
                    Comprehensive asset discovery and inventory
                  </li>
                  <li className="flex items-start">
                    <span className="text-credera-red mr-2">•</span>
                    Detailed dependency and integration mapping
                  </li>
                  <li className="flex items-start">
                    <span className="text-credera-red mr-2">•</span>
                    Risk and complexity assessment
                  </li>
                  <li className="flex items-start">
                    <span className="text-credera-red mr-2">•</span>
                    Move-group recommendations
                  </li>
                  <li className="flex items-start">
                    <span className="text-credera-red mr-2">•</span>
                    Portfolio Analysis Report with actionable insights
                  </li>
                </ul>
              </div>

              <div className="bg-[color:var(--color-foreground)] p-4 sm:p-6 rounded-lg border border-[color:var(--color-yellow)] ">
                <h3 className="text-base sm:text-lg font-semibold text-[color:var(--color-yellow)] mb-3 sm:mb-4">
                  Next Steps
                </h3>
                <p className="text-xs sm:text-sm text-[color:var(--color-yellow)] mb-3 sm:mb-4">
                  Ready to begin your portfolio analysis?
                </p>
                <button 
                  onClick={handleNextStepsClick}
                  className="w-full bg-[color:var(--color-yellow)] text-[color:var(--color-dark-gray)] py-2 px-4 rounded-md hover:bg-blue-700 transition-colors duration-200 text-xs sm:text-sm font-semibold"
                >
                  Start Portfolio Analysis
                </button>
                <div className="mt-3 sm:mt-4 pt-3 sm:pt-4 border-t border-[color:var(--color-yellow)]">
                  <p className="text-xs text-[color:var(--color-yellow)] mb-2">Navigation:</p>
                  <div className="space-y-1 sm:space-y-2">
                    <a href="/consult" className="block text-xs text-[color:var(--color-yellow)] hover:underline">
                      ← Back to Overview
                    </a>
                    <a href="/consult/cloud-tco-assessment" className="block text-xs text-[color:var(--color-yellow)] hover:underline">
                      Next: TCO Assessment →
                    </a>
                  </div>
                </div>
              </div>

              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <FooterSection />
      
      {/* Next Steps Modal */}
      <NextStepsModal 
        isOpen={isNextStepsModalOpen}
        onClose={handleNextStepsClose}
        onSubmit={handleNextStepsSubmit}
        defaultConsultType="portfolio-analysis"
        showConsultTypeSelection={false}
      />
    </div>
  );
}