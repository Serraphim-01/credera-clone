'use client';

import React, { useState } from 'react';
import FooterSection from '@/components/FooterSection';
import NextStepsModal from '@/components/NextStepsModal';
import { NextStepsFormData } from '@/types';
import Image from 'next/image';

export default function FutureStateRealisationFeasibility() {
  const [isNextStepsModalOpen, setIsNextStepsModalOpen] = useState(false);

  const handleNextStepsClick = () => setIsNextStepsModalOpen(true);
  const handleNextStepsClose = () => setIsNextStepsModalOpen(false);

  const handleNextStepsSubmit = async (data: NextStepsFormData) => {
    console.log('Next Steps form submitted:', data);
    alert('Thank you! We will contact you soon to schedule your Feasibility Assessment.');
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-screen max-h-[600px] overflow-hidden">
        {/* Background Image */}
        <Image
          src="/TaskImages/services.jpg"
          alt="Future-State Realisation Feasibility"
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
                Future-State Realisation Feasibility
              </h1>
              <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2 sm:mb-4 text-gray-700">
                Innovate to Grow – Innovate to Sustain – Innovate to Transform
              </h2>
              <p className="text-sm sm:text-base md:text-lg text-gray-600 mb-2 sm:mb-4">
                Before we commit to a target architecture, we pressure-test execution, people, and measurement capabilities. Ensure people, process & tech can scale on cloud.
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
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-credera-dark mb-4 sm:mb-6">The WHAT</h2>

              <div className="prose prose-sm sm:prose-lg max-w-none text-credera-gray-600">
                <p className="mb-4 sm:mb-6 text-sm sm:text-base">
                  Before we commit to a target architecture, we pressure-test:
                </p>
                <ul className="list-disc list-inside mb-4 sm:mb-6 space-y-1 sm:space-y-2 text-sm sm:text-base">
                  <li>
                    <strong>Execution</strong>: ease of operations, location strategy, partner/service model, tooling, automation, repeatability.
                  </li>
                  <li>
                    <strong>People</strong>: service effectiveness, scalability, skill gaps.
                  </li>
                  <li>
                    <strong>Measurement</strong>: KPI & metric definability, tracking feasibility.
                  </li>
                </ul>

                {/* Callout with brand colors */}
                <div className="bg-[color:var(--color-foreground)] border-l-4 border-[color:var(--color-yellow)] p-4 sm:p-6 mb-6 sm:mb-8">
                  <blockquote className="text-base sm:text-lg text-[color:var(--color-yellow)]">
                    <strong>World Skills UK 2021</strong>: 76% of firms expect profitability hit from digital-skills shortage.
                  </blockquote>
                </div>
              </div>

              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-credera-dark mb-4 sm:mb-6 mt-8 sm:mt-12">
                The HOW – scalability by design
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                {[
                  {
                    step: '1. Model multiple future-state operating patterns',
                    desc: 'Design and evaluate central, distributed, hybrid, and multi-cloud operating models.',
                  },
                  {
                    step: '2. Stress-test each against KPI set',
                    desc: 'Evaluate Time-to-Market, TCO elasticity, automation %, ops head-count against each model.',
                  },
                  {
                    step: '3. Validate against workforce capability',
                    desc: 'Assess workforce capability and change-resistance factors for realistic implementation.',
                  },
                  {
                    step: '4. Select optimal pattern and embed into reference architecture',
                    desc: 'Choose the best-fit operating pattern and integrate into comprehensive reference architecture.',
                  },
                ].map((item, idx) => (
                  <div key={idx} className="bg-white border border-gray-200 rounded-lg p-4 sm:p-6 shadow-sm">
                    <h3 className="text-lg sm:text-xl font-semibold text-credera-dark mb-2 sm:mb-4">{item.step}</h3>
                    <p className="text-credera-gray-600 text-sm sm:text-base">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-8 space-y-4 sm:space-y-6">
                {/* Success Markers */}
                <div className="bg-[color:var(--color-foreground)] border border-[color:var(--color-yellow)] rounded-lg p-4 sm:p-6">
                  <h3 className="text-base sm:text-lg font-semibold text-[color:var(--color-yellow)] mb-3 sm:mb-4">
                    Success Markers
                  </h3>
                  <ul className="space-y-2 sm:space-y-3 text-xs sm:text-sm text-[color:var(--color-yellow)]">
                    <li>✓ Modular cloud landing zones</li>
                    <li>✓ Automation-first ops model</li>
                    <li>✓ KPI tree aligned to business OKRs</li>
                    <li>✓ Skills-upskilling plan with timelines</li>
                  </ul>
                </div>

                {/* What to Expect */}
                <div className="bg-[color:var(--color-light-yellow)] p-4 sm:p-6 rounded-lg">
                  <h3 className="text-base sm:text-lg font-semibold text-[color:var(--color-foreground)] mb-3 sm:mb-4">
                    What to Expect
                  </h3>
                  <ul className="space-y-2 sm:space-y-3 text-xs sm:text-sm text-[color:var(--color-foreground)]">
                    <li>• Multiple operating model scenarios</li>
                    <li>• KPI-based stress testing and evaluation</li>
                    <li>• Workforce capability assessment</li>
                    <li>• Reference architecture design</li>
                    <li>• Skills development roadmap</li>
                  </ul>
                </div>

                {/* Timeline */}
                <div className="bg-credera-gray-50 p-4 sm:p-6 rounded-lg border border-[color:var(--color-yellow)]">
                  <h3 className="text-base sm:text-lg font-semibold text-credera-dark mb-3 sm:mb-4">Typical Timeline</h3>
                  <div className="space-y-3 sm:space-y-4 text-xs sm:text-sm text-credera-gray-600">
                    <div className="border-l-2 border-[color:var(--color-yellow)] pl-3 sm:pl-4">
                      <div className="font-semibold">Weeks 1-3</div>
                      <div>Roadmap development and planning</div>
                    </div>
                    <div className="border-l-2 border-[color:var(--color-yellow)] pl-3 sm:pl-4">
                      <div className="font-semibold">Weeks 4-6</div>
                      <div>Governance setup and pilot planning</div>
                    </div>
                    <div className="border-l-2 border-[color:var(--color-yellow)] pl-3 sm:pl-4">
                      <div className="font-semibold">Weeks 7-12</div>
                      <div>Pilot execution and validation</div>
                    </div>
                    <div className="border-l-2 border-[color:var(--color-yellow)] pl-3 sm:pl-4">
                      <div className="font-semibold">Week 13+</div>
                      <div>Full implementation planning</div>
                    </div>
                  </div>
                </div>

                {/* Next Steps */}
                <div className="bg-[color:var(--color-foreground)] p-4 sm:p-6 rounded-lg border border-[color:var(--color-yellow)]">
                  <h3 className="text-base sm:text-lg font-semibold text-[color:var(--color-yellow)] mb-3 sm:mb-4">
                    Next Steps
                  </h3>
                  <p className="text-xs sm:text-sm text-[color:var(--color-yellow)] mb-3 sm:mb-4">
                    Ready to validate your future-state feasibility?
                  </p>
                  <button
                    onClick={handleNextStepsClick}
                    className="w-full bg-[color:var(--color-yellow)] text-[color:var(--color-dark-gray)] py-2 px-4 rounded-md hover:opacity-90 transition-colors duration-200 text-xs sm:text-sm font-semibold"
                  >
                    Start Feasibility Assessment
                  </button>
                  <div className="mt-3 sm:mt-4 pt-3 sm:pt-4 border-t border-[color:var(--color-yellow)]">
                    <p className="text-xs text-[color:var(--color-yellow)] mb-2">Navigation:</p>
                    <div className="space-y-1 sm:space-y-2">
                      <a
                        href="/consult/cloud-tco-assessment"
                        className="block text-xs text-[color:var(--color-yellow)] hover:underline"
                      >
                        ← TCO Assessment
                      </a>
                      <a
                        href="/consult/cloud-adoption-strategy"
                        className="block text-xs text-[color:var(--color-yellow)] hover:underline"
                      >
                        Next: Adoption Strategy →
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
        defaultConsultType="feasibility-assessment"
        showConsultTypeSelection={false}
      />
    </div>
  );
}