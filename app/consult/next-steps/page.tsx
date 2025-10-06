'use client';

import React, { useState } from 'react';
import StandardHeroSection from '@/components/StandardHeroSection';
import FooterSection from '@/components/FooterSection';
import NextStepsModal from '@/components/NextStepsModal';
import { NextStepsFormData } from '@/types';

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
      <StandardHeroSection
        title="Future-State Realisation Feasibility"
        subtitle="Innovate to Grow – Innovate to Sustain – Innovate to Transform"
        description="Before we commit to a target architecture, we pressure-test execution, people, and measurement capabilities. Ensure people, process & tech can scale on cloud."
        backgroundImage="/TaskImages/services.jpg"
        maxContentWidth="max-w-lg"
      />

      {/* Main Content */}
      <section className="py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 md:gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <h2 className="text-2xl md:text-3xl font-bold text-credera-dark mb-6">The WHAT</h2>

              <div className="prose max-w-none text-credera-gray-600">
                <p className="mb-6 text-base sm:text-lg">
                  Before we commit to a target architecture, we pressure-test:
                </p>
                <ul className="list-disc list-inside mb-6 space-y-2 text-sm sm:text-base">
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
                <div className="bg-foreground border-l-4 border-yellow p-6 mb-8">
                  <blockquote className="text-base sm:text-lg text-yellow">
                    <strong>World Skills UK 2021</strong>: 76% of firms expect profitability hit from digital-skills shortage.
                  </blockquote>
                </div>
              </div>

              <h2 className="text-2xl md:text-3xl font-bold text-credera-dark mb-6 mt-12">
                The HOW – scalability by design
              </h2>

              <div className="space-y-6">
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
                  <div key={idx} className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
                    <h3 className="text-lg md:text-xl font-semibold text-credera-dark mb-4">{item.step}</h3>
                    <p className="text-credera-gray-600 text-sm sm:text-base">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-8 space-y-6">
                <div className="bg-foreground border border-yellow rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-yellow mb-4">
                    Success Markers
                  </h3>
                  <ul className="space-y-2 text-sm text-yellow">
                    <li>✓ Modular cloud landing zones</li>
                    <li>✓ Automation-first ops model</li>
                    <li>✓ KPI tree aligned to business OKRs</li>
                    <li>✓ Skills-upskilling plan with timelines</li>
                  </ul>
                </div>

                <div className="bg-light-yellow p-6 rounded-lg">
                  <h3 className="text-lg font-semibold text-foreground mb-4">
                    What to Expect
                  </h3>
                  <ul className="space-y-2 text-sm text-foreground">
                    <li>• Multiple operating model scenarios</li>
                    <li>• KPI-based stress testing and evaluation</li>
                    <li>• Workforce capability assessment</li>
                    <li>• Reference architecture design</li>
                    <li>• Skills development roadmap</li>
                  </ul>
                </div>

                <div className="bg-credera-gray-50 p-6 rounded-lg border border-yellow">
                  <h3 className="text-lg font-semibold text-credera-dark mb-4">Typical Timeline</h3>
                  <div className="space-y-4 text-sm text-credera-gray-600">
                    <div className="border-l-2 border-yellow pl-4">
                      <div className="font-semibold">Weeks 1-3</div>
                      <div>Roadmap development and planning</div>
                    </div>
                    <div className="border-l-2 border-yellow pl-4">
                      <div className="font-semibold">Weeks 4-6</div>
                      <div>Governance setup and pilot planning</div>
                    </div>
                    <div className="border-l-2 border-yellow pl-4">
                      <div className="font-semibold">Weeks 7-12</div>
                      <div>Pilot execution and validation</div>
                    </div>
                    <div className="border-l-2 border-yellow pl-4">
                      <div className="font-semibold">Week 13+</div>
                      <div>Full implementation planning</div>
                    </div>
                  </div>
                </div>

                <div className="bg-foreground p-6 rounded-lg border border-yellow">
                  <h3 className="text-lg font-semibold text-yellow mb-4">
                    Next Steps
                  </h3>
                  <p className="text-sm text-[color:var(--color-yellow)] mb-4">
                    Ready to validate your future-state feasibility?
                  </p>
                  <button
                    onClick={handleNextStepsClick}
                    className="w-full bg-[color:var(--color-yellow)] text-[color:var(--color-dark-gray)] py-2 px-4 rounded-md hover:opacity-90 transition-colors duration-200 text-sm font-semibold"
                  >
                    Start Feasibility Assessment
                  </button>
                  <div className="mt-4 pt-4 border-t border-[color:var(--color-yellow)]">
                    <p className="text-xs text-[color:var(--color-yellow)] mb-2">Navigation:</p>
                    <div className="space-y-2">
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
