'use client';

import React, { useState } from 'react';
import StandardHeroSection from '@/components/StandardHeroSection';
import FooterSection from '@/components/FooterSection';
import NextStepsModal from '@/components/NextStepsModal';
import { NextStepsFormData } from '@/types';

export default function CloudTCOAssessment() {
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
    alert('Thank you! We will contact you soon to schedule your TCO Assessment.');
  };
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <StandardHeroSection
        title="Cloud TCO Assessment"
        subtitle="Gain visibility into the future"
        description="We decode Total Cost of Ownership across people, process, technology—today vs. future cloud operating model. Gain visibility into future costs—and savings."
        backgroundImage="/TaskImages/services.jpg"
        maxContentWidth="max-w-lg"
      />

      {/* Main Content */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <h2 className="text-3xl font-bold text-credera-dark mb-6">
                The WHAT
              </h2>

              <div className="prose prose-lg max-w-none text-credera-gray-600">
                <p className="mb-6">
                  We decode <strong>Total Cost of Ownership</strong> across people, process, technology—today vs. future cloud operating model.
                </p>

                <ul className="list-disc list-inside mb-6 space-y-2">
                  <li><strong>People</strong>: roles & responsibilities, skill categories, gaps.</li>
                  <li><strong>Process/Program</strong>: business priorities, service-management maturity, partner model, timeline.</li>
                  <li><strong>Technology</strong>: apps, facilities, hardware, software, guard-rail gaps.</li>
                </ul>

                <div className="bg-blue-50 border-l-4 border-blue-500 p-6 mb-6">
                  <blockquote className="text-lg text-blue-800">
                    <strong>Gartner</strong>: Hidden costs & mistimed effort are top-3 migration killers.
                  </blockquote>
                </div>

                <div className="bg-green-50 border-l-4 border-green-500 p-6 mb-8">
                  <blockquote className="text-lg text-green-800">
                    <strong>Forrester</strong>: 79% of cloud adopters see &gt;20% savings when TCO is modelled correctly.
                  </blockquote>
                </div>
              </div>

              <h2 className="text-3xl font-bold text-credera-dark mb-6 mt-12">
                The HOW
              </h2>

              <div className="space-y-8">
                <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
                  <h3 className="text-xl font-semibold text-credera-dark mb-4">
                    1. Current-cost identification & mapping by business service
                  </h3>
                  <p className="text-credera-gray-600 mb-4">
                    Comprehensive baseline cost analysis mapped to specific business services and functions.
                  </p>
                </div>

                <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
                  <h3 className="text-xl font-semibold text-credera-dark mb-4">
                    2. 360° future-state cost simulation (IaaS, PaaS, SaaS, labour, tooling)
                  </h3>
                  <p className="text-credera-gray-600 mb-4">
                    Complete future-state cost modeling across all cloud service layers and operational components.
                  </p>
                </div>

                <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
                  <h3 className="text-xl font-semibold text-credera-dark mb-4">
                    3. Cost-governance framework design (tags, policies, FinOps)
                  </h3>
                  <p className="text-credera-gray-600 mb-4">
                    Framework design for ongoing cost management and optimization using FinOps principles.
                  </p>
                </div>

                <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
                  <h3 className="text-xl font-semibold text-credera-dark mb-4">
                    4. Scenario comparison & optimisation heat-map
                  </h3>
                  <p className="text-credera-gray-600 mb-4">
                    Multiple scenario analysis with optimization opportunities visualized through heat-mapping.
                  </p>
                </div>

                <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
                  <h3 className="text-xl font-semibold text-credera-dark mb-4">
                    5. ROI & cash-flow projections tied to migration waves
                  </h3>
                  <p className="text-credera-gray-600 mb-4">
                    Detailed financial projections aligned with phased migration approach.
                  </p>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-8 space-y-6">
                <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-green-800 mb-4">
                    Deliverables
                  </h3>
                  <ul className="space-y-3 text-sm text-green-700">
                    <li className="flex items-start">
                      <span className="text-green-600 mr-3 text-xl">✓</span>
                      TCO & ROI dashboard (3-year horizon)
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-600 mr-3 text-xl">✓</span>
                      Cost-governance blueprint
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-600 mr-3 text-xl">✓</span>
                      Optimisation roadmap with quick-, mid- & long-term wins
                    </li>
                  </ul>
                </div>
              <div className="bg-green-50 p-6 rounded-lg border border-green-200">
                <h3 className="text-lg font-semibold text-green-800 mb-4">
                  Assessment Deliverables
                </h3>
                <ul className="space-y-3 text-sm text-green-700">
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">✓</span>
                    Detailed TCO report and analysis
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">✓</span>
                    Financial modeling spreadsheets
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">✓</span>
                    Executive summary presentation
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">✓</span>
                    Cost optimization recommendations
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">✓</span>
                    Implementation roadmap
                  </li>
                </ul>
              </div>

              <div className="bg-credera-gray-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-credera-dark mb-4">
                  Timeline & Process
                </h3>
                <div className="space-y-4 text-sm text-credera-gray-600">
                  <div className="border-l-2 border-green-500 pl-4">
                    <div className="font-semibold">Week 1-2</div>
                    <div>Data collection and current state analysis</div>
                  </div>
                  <div className="border-l-2 border-green-500 pl-4">
                    <div className="font-semibold">Week 3-4</div>
                    <div>Cloud cost modeling and scenario planning</div>
                  </div>
                  <div className="border-l-2 border-green-500 pl-4">
                    <div className="font-semibold">Week 5-6</div>
                    <div>Analysis, reporting, and recommendations</div>
                  </div>
                </div>
              </div>

              <div className="bg-blue-50 p-6 rounded-lg border border-blue-200">
                <h3 className="text-lg font-semibold text-blue-800 mb-4">
                  Next Steps
                </h3>
                <p className="text-sm text-blue-700 mb-4">
                  Ready to understand your cloud TCO?
                </p>
                <button 
                  onClick={handleNextStepsClick}
                  className="w-full bg-green-600 text-white py-2 px-4 rounded-md hover:bg-green-700 transition-colors duration-200 text-sm font-semibold"
                >
                  Request Assessment
                </button>
                <div className="mt-4 pt-4 border-t border-blue-200">
                  <p className="text-xs text-blue-600 mb-2">Navigation:</p>
                  <div className="space-y-2">
                    <a href="/consult/first-steps" className="block text-xs text-blue-600 hover:underline">
                      ← Portfolio Analysis
                    </a>
                    <a href="/consult/next-steps" className="block text-xs text-blue-600 hover:underline">
                      Next: Future-State Feasibility →
                    </a>
                  </div>
                </div>
              </div>

              </div>  {/* Added missing closing div for sticky container */}
            </div>
          </div>
        </div>
      </section >

    {/* Footer */}
    <FooterSection />
    
    {/* Next Steps Modal */}
    <NextStepsModal 
      isOpen={isNextStepsModalOpen}
      onClose={handleNextStepsClose}
      onSubmit={handleNextStepsSubmit}
      defaultConsultType="tco-assessment"
      showConsultTypeSelection={false}
    />
  </div >
  );
}