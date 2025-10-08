'use client';

import React, { useState } from 'react';
import FooterSection from '@/components/FooterSection';
import NextStepsModal from '@/components/NextStepsModal';
import { NextStepsFormData } from '@/types';
import Image from 'next/image';

export default function CloudAdoptionStrategy() {
  const [isNextStepsModalOpen, setIsNextStepsModalOpen] = useState(false);

  const handleNextStepsClick = () => setIsNextStepsModalOpen(true);
  const handleNextStepsClose = () => setIsNextStepsModalOpen(false);

  const handleNextStepsSubmit = async (data: NextStepsFormData) => {
    console.log('Next Steps form submitted:', data);
    alert('Thank you! We will contact you soon to schedule your Strategy Development.');
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-screen max-h-[600px] overflow-hidden">
        {/* Background Image */}
        <Image
          src="/TaskImages/services.jpg"
          alt="Cloud Adoption Strategy"
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
                Cloud Adoption Strategy
              </h1>
              <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2 sm:mb-4 text-gray-700">
                Be in control of the journey
              </h2>
              <p className="text-sm sm:text-base md:text-lg text-gray-600 mb-2 sm:mb-4">
                Consolidate findings from Portfolio Analysis, TCO Assessment, and Future-State Feasibility into one executable roadmap that guarantees ROI, resilience & readiness.
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
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-credera-dark mb-4 sm:mb-6">Purpose</h2>

              <div className="prose prose-sm sm:prose-lg max-w-none text-credera-gray-600">
                <p className="mb-4 sm:mb-6 text-sm sm:text-base">We consolidate findings from:</p>
                <ol className="list-decimal list-inside mb-4 sm:mb-6 space-y-1 sm:space-y-2 text-sm sm:text-base">
                  <li>Current-State Portfolio Analysis</li>
                  <li>Cloud TCO Assessment</li>
                  <li>Future-State Realisation Feasibility</li>
                </ol>
                <p className="mb-6 sm:mb-8 text-sm sm:text-base">
                  into a single, board-level <strong>Cloud Adoption Strategy</strong> that guarantees ROI, resilience & readiness.
                </p>
              </div>

              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-credera-dark mb-4 sm:mb-6">Strategy canvas</h2>

              <div className="overflow-x-auto mb-8 sm:mb-12">
                <table className="w-full border-collapse border border-gray-300 text-left">
                  <thead>
                    <tr className="bg-credera-gray-50">
                      <th className="border border-gray-300 px-3 sm:px-4 py-2 sm:py-3 font-semibold text-credera-dark text-sm sm:text-base">Input</th>
                      <th className="border border-gray-300 px-3 sm:px-4 py-2 sm:py-3 font-semibold text-credera-dark text-sm sm:text-base">Output</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-300 px-3 sm:px-4 py-2 sm:py-3 text-credera-gray-600 text-xs sm:text-sm">
                        R-strategy (Retain, Rehost, Replatform, Refactor, Retire)
                      </td>
                      <td className="border border-gray-300 px-3 sm:px-4 py-2 sm:py-3 text-credera-gray-600 text-xs sm:text-sm">Migration wave plan</td>
                    </tr>
                    <tr className="bg-credera-gray-50">
                      <td className="border border-gray-300 px-3 sm:px-4 py-2 sm:py-3 text-credera-gray-600 text-xs sm:text-sm">Gap analysis & RAID log</td>
                      <td className="border border-gray-300 px-3 sm:px-4 py-2 sm:py-3 text-credera-gray-600 text-xs sm:text-sm">Risk-mitigated execution path</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-3 sm:px-4 py-2 sm:py-3 text-credera-gray-600 text-xs sm:text-sm">Reference architecture</td>
                      <td className="border border-gray-300 px-3 sm:px-4 py-2 sm:py-3 text-credera-gray-600 text-xs sm:text-sm">Landing-zone design & guard-rails</td>
                    </tr>
                    <tr className="bg-credera-gray-50">
                      <td className="border border-gray-300 px-3 sm:px-4 py-2 sm:py-3 text-credera-gray-600 text-xs sm:text-sm">Cost-governance recs</td>
                      <td className="border border-gray-300 px-3 sm:px-4 py-2 sm:py-3 text-credera-gray-600 text-xs sm:text-sm">FinOps policy set</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-3 sm:px-4 py-2 sm:py-3 text-credera-gray-600 text-xs sm:text-sm">Security considerations</td>
                      <td className="border border-gray-300 px-3 sm:px-4 py-2 sm:py-3 text-credera-gray-600 text-xs sm:text-sm">Compliance controls</td>
                    </tr>
                    <tr className="bg-credera-gray-50">
                      <td className="border border-gray-300 px-3 sm:px-4 py-2 sm:py-3 text-credera-gray-600 text-xs sm:text-sm">Change-readiness score</td>
                      <td className="border border-gray-300 px-3 sm:px-4 py-2 sm:py-3 text-credera-gray-600 text-xs sm:text-sm">Comms & training plan</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-credera-dark mb-4 sm:mb-6">Roadmap snapshot</h2>
              <div className="space-y-4 sm:space-y-6">
                {[
                  {
                    title: 'Phase 0: Governance setup, landing zone build, pilot (30 days)',
                    desc: 'Initial foundation setup with governance framework and pilot environment.',
                  },
                  {
                    title: 'Phase 1–3: Migration waves by business priority (3–9 months)',
                    desc: 'Phased migration approach prioritized by business value and complexity.',
                  },
                  {
                    title: 'Phase 4: Transformation sprints (containerise, serverless, DevOps)',
                    desc: 'Advanced transformation initiatives including modernization and automation.',
                  },
                  {
                    title: 'Steady-State: No-Ops target, continuous cost optimisation',
                    desc: 'Ongoing optimization and automated operations for sustained value.',
                  },
                ].map((item, idx) => (
                  <div key={idx} className="bg-white border border-gray-200 rounded-lg p-4 sm:p-6 shadow-sm">
                    <h3 className="text-lg sm:text-xl font-semibold text-credera-dark mb-2 sm:mb-4">{item.title}</h3>
                    <p className="text-credera-gray-600 text-sm sm:text-base">{item.desc}</p>
                  </div>
                ))}
              </div>

              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-credera-dark mb-4 sm:mb-6 mt-8 sm:mt-12">Governance & cadence</h2>
              <div className="overflow-x-auto mb-8 sm:mb-12">
                <table className="w-full border-collapse border border-gray-300 text-left">
                  <thead>
                    <tr className="bg-credera-gray-50">
                      <th className="border border-gray-300 px-3 sm:px-4 py-2 sm:py-3 font-semibold text-credera-dark text-sm sm:text-base">Tier</th>
                      <th className="border border-gray-300 px-3 sm:px-4 py-2 sm:py-3 font-semibold text-credera-dark text-sm sm:text-base">Cadence</th>
                      <th className="border border-gray-300 px-3 sm:px-4 py-2 sm:py-3 font-semibold text-credera-dark text-sm sm:text-base">Audience</th>
                      <th className="border border-gray-300 px-3 sm:px-4 py-2 sm:py-3 font-semibold text-credera-dark text-sm sm:text-base">Focus</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-300 px-3 sm:px-4 py-2 sm:py-3 text-credera-gray-600 text-xs sm:text-sm">Strategic</td>
                      <td className="border border-gray-300 px-3 sm:px-4 py-2 sm:py-3 text-credera-gray-600 text-xs sm:text-sm">Bi-weekly</td>
                      <td className="border border-gray-300 px-3 sm:px-4 py-2 sm:py-3 text-credera-gray-600 text-xs sm:text-sm">Leadership</td>
                      <td className="border border-gray-300 px-3 sm:px-4 py-2 sm:py-3 text-credera-gray-600 text-xs sm:text-sm">Milestones, ROI</td>
                    </tr>
                    <tr className="bg-credera-gray-50">
                      <td className="border border-gray-300 px-3 sm:px-4 py-2 sm:py-3 text-credera-gray-600 text-xs sm:text-sm">Tactical</td>
                      <td className="border border-gray-300 px-3 sm:px-4 py-2 sm:py-3 text-credera-gray-600 text-xs sm:text-sm">Weekly</td>
                      <td className="border border-gray-300 px-3 sm:px-4 py-2 sm:py-3 text-credera-gray-600 text-xs sm:text-sm">Program office</td>
                      <td className="border border-gray-300 px-3 sm:px-4 py-2 sm:py-3 text-credera-gray-600 text-xs sm:text-sm">RAID, performance</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-3 sm:px-4 py-2 sm:py-3 text-credera-gray-600 text-xs sm:text-sm">Operational</td>
                      <td className="border border-gray-300 px-3 sm:px-4 py-2 sm:py-3 text-credera-gray-600 text-xs sm:text-sm">Daily</td>
                      <td className="border border-gray-300 px-3 sm:px-4 py-2 sm:py-3 text-credera-gray-600 text-xs sm:text-sm">Delivery squads</td>
                      <td className="border border-gray-300 px-3 sm:px-4 py-2 sm:py-3 text-credera-gray-600 text-xs sm:text-sm">Task board, burndown</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              {/* Resources card with brand styling */}
              <div className="bg-[color:var(--color-foreground)] border border-[color:var(--color-yellow)] rounded-lg p-4 sm:p-6">
                <h3 className="text-base sm:text-lg font-semibold text-[color:var(--color-yellow)] mb-3 sm:mb-4">
                  Download Resources
                </h3>
                <a
                  href="#"
                  className="inline-flex items-center text-[color:var(--color-yellow)] hover:underline font-medium text-sm sm:text-base"
                >
                  Download sample strategy deck (PPT) →
                </a>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-8 space-y-4 sm:space-y-6">
                {/* Expectation Card */}
                <div className="bg-[color:var(--color-foreground)] p-4 sm:p-6 rounded-lg border border-[color:var(--color-yellow)]">
                  <h3 className="text-base sm:text-lg font-semibold text-[color:var(--color-yellow)] mb-3 sm:mb-4">
                    What to Expect
                  </h3>
                  <ul className="space-y-2 sm:space-y-3 text-xs sm:text-sm text-[color:var(--color-yellow)]">
                    <li>→ Comprehensive strategy consolidation</li>
                    <li>→ Board-level presentation materials</li>
                    <li>→ Phased migration roadmap</li>
                    <li>→ Governance and cadence framework</li>
                    <li>→ ROI guarantees and success metrics</li>
                  </ul>
                </div>

                {/* Engagement Process */}
                <div className="bg-credera-gray-50 p-4 sm:p-6 rounded-lg border border-[color:var(--color-yellow)]">
                  <h3 className="text-base sm:text-lg font-semibold text-credera-dark mb-3 sm:mb-4">
                    Engagement Process
                  </h3>
                  <div className="space-y-3 sm:space-y-4 text-xs sm:text-sm text-credera-gray-600">
                    <div className="border-l-2 border-[color:var(--color-yellow)] pl-3 sm:pl-4">
                      <div className="font-semibold">Phase 1: Assessment</div>
                      <div>Current state analysis and readiness evaluation</div>
                    </div>
                    <div className="border-l-2 border-[color:var(--color-yellow)] pl-3 sm:pl-4">
                      <div className="font-semibold">Phase 2: Strategy</div>
                      <div>Target state design and migration planning</div>
                    </div>
                    <div className="border-l-2 border-[color:var(--color-yellow)] pl-3 sm:pl-4">
                      <div className="font-semibold">Phase 3: Roadmap</div>
                      <div>Detailed implementation plan development</div>
                    </div>
                    <div className="border-l-2 border-[color:var(--color-yellow)] pl-3 sm:pl-4">
                      <div className="font-semibold">Phase 4: Validation</div>
                      <div>Strategy review and stakeholder alignment</div>
                    </div>
                  </div>
                </div>

                {/* Benefits */}
                <div className="bg-[color:var(--color-light-yellow)] p-4 sm:p-6 rounded-lg ">
                  <h3 className="text-base sm:text-lg font-semibold text-[color:var(--color-foreground)] mb-3 sm:mb-4">
                    Strategy Benefits
                  </h3>
                  <ul className="space-y-1 sm:space-y-2 text-xs sm:text-sm text-[color:var(--color-foreground)]">
                    <li>✓ Reduced migration risks</li>
                    <li>✓ Optimized cloud costs</li>
                    <li>✓ Faster time to value</li>
                    <li>✓ Improved scalability</li>
                  </ul>
                </div>

                {/* Next Steps */}
                <div className="bg-[color:var(--color-foreground)] p-4 sm:p-6 rounded-lg border border-[color:var(--color-yellow)]">
                  <h3 className="text-base sm:text-lg font-semibold text-[color:var(--color-yellow)] mb-3 sm:mb-4">
                    Next Steps
                  </h3>
                  <p className="text-xs sm:text-sm text-[color:var(--color-yellow)] mb-3 sm:mb-4">
                    Ready to develop your cloud adoption strategy?
                  </p>
                  <button
                    onClick={handleNextStepsClick}
                    className="w-full bg-[color:var(--color-yellow)] text-[color:var(--color-dark-gray)] py-2 px-4 rounded-md hover:opacity-90 transition-colors duration-200 text-xs sm:text-sm font-semibold"
                  >
                    Start Strategy Development
                  </button>
                  <div className="mt-3 sm:mt-4 pt-3 sm:pt-4 border-t border-[color:var(--color-yellow)]">
                    <p className="text-xs text-[color:var(--color-yellow)] mb-2">Navigation:</p>
                    <div className="space-y-1 sm:space-y-2">
                      <a href="/consult/next-steps" className="block text-xs text-[color:var(--color-yellow)] hover:underline">
                        ← Future-State Feasibility
                      </a>
                      <a href="/consult/cloud-assessment" className="block text-xs text-[color:var(--color-yellow)] hover:underline">
                        Back to Cloud Assessment →
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
        defaultConsultType="strategy-development"
        showConsultTypeSelection={false}
      />
    </div>
  );
}