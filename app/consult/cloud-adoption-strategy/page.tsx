'use client';

import React, { useState } from 'react';
import StandardHeroSection from '@/components/StandardHeroSection';
import FooterSection from '@/components/FooterSection';
import NextStepsModal from '@/components/NextStepsModal';
import { NextStepsFormData } from '@/types';

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
      <StandardHeroSection
        title="Cloud Adoption Strategy"
        subtitle="Be in control of the journey"
        description="Consolidate findings from Portfolio Analysis, TCO Assessment, and Future-State Feasibility into one executable roadmap that guarantees ROI, resilience & readiness."
        backgroundImage="/TaskImages/services.jpg"
        maxContentWidth="max-w-lg"
      />

      {/* Main Content */}
      <section className="py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <h2 className="text-2xl md:text-3xl font-bold text-credera-dark mb-6">Purpose</h2>

              <div className="prose prose-lg max-w-none text-credera-gray-600">
                <p className="mb-6">We consolidate findings from:</p>
                <ol className="list-decimal list-inside mb-6 space-y-2">
                  <li>Current-State Portfolio Analysis</li>
                  <li>Cloud TCO Assessment</li>
                  <li>Future-State Realisation Feasibility</li>
                </ol>
                <p className="mb-8">
                  into a single, board-level <strong>Cloud Adoption Strategy</strong> that guarantees ROI, resilience & readiness.
                </p>
              </div>

              <h2 className="text-2xl md:text-3xl font-bold text-credera-dark mb-6">Strategy canvas</h2>

              {/* Mobile Card Layout */}
              <div className="md:hidden space-y-4 mb-12">
                <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">Input</h4>
                  <p className="text-gray-700 text-sm">R-strategy (Retain, Rehost, Replatform, Refactor, Retire)</p>
                  <hr className="my-2 border-gray-200" />
                  <h4 className="font-semibold text-gray-900 mb-2">Output</h4>
                  <p className="text-gray-700 text-sm">Migration wave plan</p>
                </div>
                <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">Input</h4>
                  <p className="text-gray-700 text-sm">Gap analysis & RAID log</p>
                  <hr className="my-2 border-gray-200" />
                  <h4 className="font-semibold text-gray-900 mb-2">Output</h4>
                  <p className="text-gray-700 text-sm">Risk-mitigated execution path</p>
                </div>
              </div>

              {/* Desktop Table */}
              <div className="hidden md:block overflow-x-auto mb-12">
                <table className="w-full border-collapse border border-gray-300 text-left">
                  <thead>
                    <tr className="bg-credera-gray-50">
                      <th className="border border-gray-300 px-4 py-3 font-semibold text-credera-dark">Input</th>
                      <th className="border border-gray-300 px-4 py-3 font-semibold text-credera-dark">Output</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-300 px-4 py-3 text-credera-gray-600">R-strategy (Retain, Rehost, Replatform, Refactor, Retire)</td>
                      <td className="border border-gray-300 px-4 py-3 text-credera-gray-600">Migration wave plan</td>
                    </tr>
                    <tr className="bg-credera-gray-50">
                      <td className="border border-gray-300 px-4 py-3 text-credera-gray-600">Gap analysis & RAID log</td>
                      <td className="border border-gray-300 px-4 py-3 text-credera-gray-600">Risk-mitigated execution path</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h2 className="text-2xl md:text-3xl font-bold text-credera-dark mb-6">Roadmap snapshot</h2>
              <div className="space-y-6">
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
                  <div key={idx} className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
                    <h3 className="text-lg md:text-xl font-semibold text-credera-dark mb-4">{item.title}</h3>
                    <p className="text-credera-gray-600">{item.desc}</p>
                  </div>
                ))}
              </div>

              <h2 className="text-2xl md:text-3xl font-bold text-credera-dark mb-6 mt-12">Governance & cadence</h2>

              {/* Mobile Card Layout */}
              <div className="md:hidden space-y-4 mb-12">
                <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
                  <div className="grid grid-cols-2 gap-x-4 gap-y-2">
                    <div><h4 className="font-semibold text-gray-900">Tier</h4><p className="text-gray-700 text-sm">Strategic</p></div>
                    <div><h4 className="font-semibold text-gray-900">Cadence</h4><p className="text-gray-700 text-sm">Bi-weekly</p></div>
                    <div><h4 className="font-semibold text-gray-900">Audience</h4><p className="text-gray-700 text-sm">Leadership</p></div>
                    <div><h4 className="font-semibold text-gray-900">Focus</h4><p className="text-gray-700 text-sm">Milestones, ROI</p></div>
                  </div>
                </div>
                <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
                  <div className="grid grid-cols-2 gap-x-4 gap-y-2">
                    <div><h4 className="font-semibold text-gray-900">Tier</h4><p className="text-gray-700 text-sm">Tactical</p></div>
                    <div><h4 className="font-semibold text-gray-900">Cadence</h4><p className="text-gray-700 text-sm">Weekly</p></div>
                    <div><h4 className="font-semibold text-gray-900">Audience</h4><p className="text-gray-700 text-sm">Program office</p></div>
                    <div><h4 className="font-semibold text-gray-900">Focus</h4><p className="text-gray-700 text-sm">RAID, performance</p></div>
                  </div>
                </div>
              </div>

              {/* Desktop Table */}
              <div className="hidden md:block overflow-x-auto mb-12">
                <table className="w-full border-collapse border border-gray-300 text-left">
                  <thead>
                    <tr className="bg-credera-gray-50">
                      <th className="border border-gray-300 px-4 py-3 font-semibold text-credera-dark">Tier</th>
                      <th className="border border-gray-300 px-4 py-3 font-semibold text-credera-dark">Cadence</th>
                      <th className="border border-gray-300 px-4 py-3 font-semibold text-credera-dark">Audience</th>
                      <th className="border border-gray-300 px-4 py-3 font-semibold text-credera-dark">Focus</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-300 px-4 py-3 text-credera-gray-600">Strategic</td>
                      <td className="border border-gray-300 px-4 py-3 text-credera-gray-600">Bi-weekly</td>
                      <td className="border border-gray-300 px-4 py-3 text-credera-gray-600">Leadership</td>
                      <td className="border border-gray-300 px-4 py-3 text-credera-gray-600">Milestones, ROI</td>
                    </tr>
                    <tr className="bg-credera-gray-50">
                      <td className="border border-gray-300 px-4 py-3 text-credera-gray-600">Tactical</td>
                      <td className="border border-gray-300 px-4 py-3 text-credera-gray-600">Weekly</td>
                      <td className="border border-gray-300 px-4 py-3 text-credera-gray-600">Program office</td>
                      <td className="border border-gray-300 px-4 py-3 text-credera-gray-600">RAID, performance</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="bg-foreground border border-yellow rounded-lg p-6">
                <h3 className="text-lg font-semibold text-yellow mb-4">
                  Download Resources
                </h3>
                <a
                  href="#"
                  className="inline-flex items-center text-yellow hover:underline font-medium"
                >
                  Download sample strategy deck (PPT) →
                </a>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-8 space-y-6">
                <div className="bg-foreground p-6 rounded-lg border border-yellow">
                  <h3 className="text-lg font-semibold text-yellow mb-4">
                    What to Expect
                  </h3>
                  <ul className="space-y-3 text-sm text-yellow">
                    <li>→ Comprehensive strategy consolidation</li>
                    <li>→ Board-level presentation materials</li>
                    <li>→ Phased migration roadmap</li>
                    <li>→ Governance and cadence framework</li>
                    <li>→ ROI guarantees and success metrics</li>
                  </ul>
                </div>

                <div className="bg-credera-gray-50 p-6 rounded-lg border border-yellow">
                  <h3 className="text-lg font-semibold text-credera-dark mb-4">
                    Engagement Process
                  </h3>
                  <div className="space-y-4 text-sm text-credera-gray-600">
                    <div className="border-l-2 border-[color:var(--color-yellow)] pl-4">
                      <div className="font-semibold">Phase 1: Assessment</div>
                      <div>Current state analysis and readiness evaluation</div>
                    </div>
                    <div className="border-l-2 border-[color:var(--color-yellow)] pl-4">
                      <div className="font-semibold">Phase 2: Strategy</div>
                      <div>Target state design and migration planning</div>
                    </div>
                    <div className="border-l-2 border-[color:var(--color-yellow)] pl-4">
                      <div className="font-semibold">Phase 3: Roadmap</div>
                      <div>Detailed implementation plan development</div>
                    </div>
                    <div className="border-l-2 border-[color:var(--color-yellow)] pl-4">
                      <div className="font-semibold">Phase 4: Validation</div>
                      <div>Strategy review and stakeholder alignment</div>
                    </div>
                  </div>
                </div>

                {/* Benefits */}
                <div className="bg-[color:var(--color-light-yellow)] p-6 rounded-lg ">
                  <h3 className="text-lg font-semibold text-[color:var(--color-foreground)] mb-4">
                    Strategy Benefits
                  </h3>
                  <ul className="space-y-2 text-sm text-[color:var(--color-foreground)]">
                    <li>✓ Reduced migration risks</li>
                    <li>✓ Optimized cloud costs</li>
                    <li>✓ Faster time to value</li>
                    <li>✓ Improved scalability</li>
                  </ul>
                </div>

                {/* Next Steps */}
                <div className="bg-[color:var(--color-foreground)] p-6 rounded-lg border border-[color:var(--color-yellow)]">
                  <h3 className="text-lg font-semibold text-[color:var(--color-yellow)] mb-4">
                    Next Steps
                  </h3>
                  <p className="text-sm text-[color:var(--color-yellow)] mb-4">
                    Ready to develop your cloud adoption strategy?
                  </p>
                  <button
                    onClick={handleNextStepsClick}
                    className="w-full bg-[color:var(--color-yellow)] text-[color:var(--color-dark-gray)] py-2 px-4 rounded-md hover:opacity-90 transition-colors duration-200 text-sm font-semibold"
                  >
                    Start Strategy Development
                  </button>
                  <div className="mt-4 pt-4 border-t border-[color:var(--color-yellow)]">
                    <p className="text-xs text-[color:var(--color-yellow)] mb-2">Navigation:</p>
                    <div className="space-y-2">
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
