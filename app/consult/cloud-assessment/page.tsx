'use client';

import React, { useState } from 'react';
import StandardHeroSection from '@/components/StandardHeroSection';
import FooterSection from '@/components/FooterSection';
import NextStepsModal from '@/components/NextStepsModal';
import { NextStepsFormData } from '@/types';

export default function CloudAssessment() {
  const [isNextStepsModalOpen, setIsNextStepsModalOpen] = useState(false);

  const handleNextStepsClick = () => setIsNextStepsModalOpen(true);
  const handleNextStepsClose = () => setIsNextStepsModalOpen(false);

  const handleNextStepsSubmit = async (data: NextStepsFormData) => {
    console.log('Next Steps form submitted:', data);
    alert('Thank you! We will contact you soon to schedule your Cloud Assessment.');
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <StandardHeroSection
        title="Cloud Assessment"
        subtitle="Complete Cloud Evaluation"
        description="Comprehensive evaluation of your cloud readiness, infrastructure, and applications. Get detailed insights into your current state and recommendations for cloud optimization."
        backgroundImage="/TaskImages/services.jpg"
        maxContentWidth="max-w-lg"
      />

      {/* Main Content */}
      <section className="py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <h2 className="text-2xl md:text-3xl font-bold text-credera-dark mb-6">
                How we do it: Our Assessment Approach
              </h2>

              <div className="space-y-6 md:space-y-8">
                {[
                  {
                    title: 'Discover',
                    items: [
                      'Scoping the program',
                      'Inventory mapping',
                      'App dependency and Business mapping',
                      'Data gathering',
                      'Stakeholder interviews',
                    ],
                  },
                  {
                    title: 'Analyse',
                    items: [
                      'Application Categorization',
                      'Business Impact Analysis',
                      'Security & Risk Analysis',
                      'App complexity Analysis',
                      'Technology dependency',
                      'R Strategy fitment',
                      'Skill GAP Analysis',
                      'Change Resistance',
                      'As Is State Study',
                    ],
                  },
                  {
                    title: 'Recommend',
                    items: [
                      'Migration Readiness',
                      'Advisory Report',
                      'Defined Target Architecture',
                      'Migration Strategy',
                      'Tools & Technology',
                      'Business Case alignment',
                      'Optimisation possibilities',
                      'Recommended Cloud Roadmap',
                      'Pre-Defined Checklist',
                      'Planning Considerations',
                      'Business dependencies',
                      'Clarity on Milestones',
                      'Clarity on Metrics',
                      'Quick Win justification',
                      'POC/Pilot Goal alignment',
                    ],
                  },
                ].map((block, idx) => (
                  <div key={idx} className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
                    <h3 className="text-lg md:text-xl font-semibold text-credera-dark mb-4">{block.title}</h3>
                    <ul className="list-disc list-inside text-credera-gray-600 space-y-2 text-sm sm:text-base">
                      {block.items.map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>

              {/* Execution Table */}
              <h2 className="text-2xl md:text-3xl font-bold text-credera-dark mb-6 mt-12">
                How we do it: Assessment Execution
              </h2>

              {/* Mobile Card Layout */}
              <div className="md:hidden space-y-4 mb-12">
                <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">Discover</h4>
                  <ul className="list-disc list-inside text-gray-700 text-sm space-y-1">
                    <li>Automated Discovery</li>
                    <li>Conduct Interviews</li>
                  </ul>
                </div>
                <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">Analyse</h4>
                  <ul className="list-disc list-inside text-gray-700 text-sm space-y-1">
                    <li>Current Cost Identification</li>
                    <li>TCO Insights</li>
                  </ul>
                </div>
              </div>

              {/* Desktop Table */}
              <div className="hidden md:block overflow-x-auto mb-12">
                <table className="w-full border-collapse border border-gray-300 text-left">
                  <thead>
                    <tr className="bg-credera-gray-50">
                      <th className="border px-4 py-3 font-semibold text-credera-dark">Discover</th>
                      <th className="border px-4 py-3 font-semibold text-credera-dark">Analyse</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border px-4 py-3 text-credera-gray-600 align-top">
                        <ul className="text-sm space-y-1">
                          <li>Automated Discovery</li>
                          <li>Conduct Interviews</li>
                        </ul>
                      </td>
                      <td className="border px-4 py-3 text-credera-gray-600 align-top">
                        <ul className="text-sm space-y-1">
                          <li>Current Cost Identification</li>
                          <li>TCO Insights</li>
                        </ul>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <p className="text-xs sm:text-sm italic text-gray-500 mb-12">
                *Example timeline with flexibility for deal-specific scenarios
              </p>

              <h2 className="text-2xl md:text-3xl font-bold text-credera-dark mb-6">
                Cloud Assessment: Governance
              </h2>

              {/* Mobile Card Layout */}
              <div className="md:hidden space-y-4">
                <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">Leadership Engagement (Strategic)</h4>
                  <div className="grid grid-cols-2 gap-x-4 gap-y-2 text-sm">
                    <div><strong className="font-semibold text-gray-600">Cadence:</strong> Bi-Weekly</div>
                    <div><strong className="font-semibold text-gray-600">Leads:</strong> Customer + Partner</div>
                    <div className="col-span-2"><strong className="font-semibold text-gray-600">Topics:</strong> Overall Engagement Progress, Key Milestones Forecast</div>
                  </div>
                </div>
              </div>

              {/* Desktop Table */}
              <div className="hidden md:block overflow-x-auto">
                <table className="w-full border-collapse border border-gray-300 text-left">
                  <thead>
                    <tr className="bg-credera-gray-50">
                      <th className="border px-4 py-3 font-semibold text-credera-dark">Tier</th>
                      <th className="border px-4 py-3 font-semibold text-credera-dark">Cadence</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border px-4 py-3 font-semibold text-credera-gray-600">Leadership Engagement (Strategic)</td>
                      <td className="border px-4 py-3 text-credera-gray-600">Bi-Weekly</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-8 space-y-6">
                <div className="bg-foreground border border-yellow p-6 rounded-lg">
                  <h3 className="text-lg font-semibold text-yellow mb-4">
                    What to Expect
                  </h3>
                  <ul className="space-y-2 text-sm text-yellow">
                    <li>✓ Comprehensive discovery and analysis</li>
                    <li>✓ Detailed assessment report</li>
                  </ul>
                </div>

                <div className="bg-credera-gray-50 p-6 rounded-lg border border-yellow">
                  <h3 className="text-lg font-semibold text-credera-dark mb-4">Assessment Process</h3>
                  <div className="space-y-4 text-sm text-credera-gray-600">
                    <div className="border-l-2 border-yellow pl-4">
                      <div className="font-semibold">Discovery</div>
                      <div>Scoping and data gathering</div>
                    </div>
                    <div className="border-l-2 border-[color:var(--color-yellow)] pl-4">
                      <div className="font-semibold">Analysis</div>
                      <div>Technical evaluation and assessment</div>
                    </div>
                    <div className="border-l-2 border-[color:var(--color-yellow)] pl-4">
                      <div className="font-semibold">Recommendations</div>
                      <div>Strategy development and roadmapping</div>
                    </div>
                    <div className="border-l-2 border-[color:var(--color-yellow)] pl-4">
                      <div className="font-semibold">Visualisation</div>
                      <div>Results presentation and planning</div>
                    </div>
                  </div>
                </div>

                {/* Next Steps */}
                <div className="bg-[color:var(--color-foreground)] border border-[color:var(--color-yellow)] p-6 rounded-lg">
                  <h3 className="text-lg font-semibold text-[color:var(--color-yellow)] mb-4">
                    Next Steps
                  </h3>
                  <p className="text-sm text-[color:var(--color-yellow)] mb-4">
                    Ready to begin your comprehensive cloud assessment?
                  </p>
                  <button
                    onClick={handleNextStepsClick}
                    className="w-full bg-[color:var(--color-yellow)] text-[color:var(--color-dark-gray)] py-2 px-4 rounded-md hover:opacity-90 transition-colors duration-200 text-sm font-semibold"
                  >
                    Start Assessment
                  </button>
                  <div className="mt-4 pt-4 border-t border-[color:var(--color-yellow)]">
                    <p className="text-xs text-[color:var(--color-yellow)] mb-2">Navigation:</p>
                    <div className="space-y-2">
                      <a
                        href="/consult/cloud-adoption-strategy"
                        className="block text-xs text-[color:var(--color-yellow)] hover:underline"
                      >
                        ← Adoption Strategy
                      </a>
                      <a
                        href="/consult"
                        className="block text-xs text-[color:var(--color-yellow)] hover:underline"
                      >
                        Back to Overview →
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
        defaultConsultType="cloud-assessment"
        showConsultTypeSelection={false}
      />
    </div>
  );
}
