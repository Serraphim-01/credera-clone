'use client';

import React, { useState } from 'react';
import StandardHeroSection from '@/components/StandardHeroSection';
import FooterSection from '@/components/FooterSection';
import NextStepsModal from '@/components/NextStepsModal';
import { NextStepsFormData } from '@/types';

export default function CloudAssessment() {
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
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <h2 className="text-3xl font-bold text-credera-dark mb-6">
                How we do it: Our Assessment Approach
              </h2>

              <div className="space-y-8">
                <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
                  <h3 className="text-xl font-semibold text-credera-dark mb-4">
                    Discover
                  </h3>
                  <ul className="list-disc list-inside text-credera-gray-600 space-y-2">
                    <li>Scoping the program</li>
                    <li>Inventory mapping</li>
                    <li>App dependency and Business mapping</li>
                    <li>Data gathering</li>
                    <li>SMEs / Portfolio owners' / Stakeholder interviews</li>
                  </ul>
                </div>

                <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
                  <h3 className="text-xl font-semibold text-credera-dark mb-4">
                    Analyse
                  </h3>
                  <ul className="list-disc list-inside text-credera-gray-600 space-y-2">
                    <li>Application Categorization</li>
                    <li>Business Impact Analysis</li>
                    <li>Security & Risk Analysis</li>
                    <li>App complexity Analysis</li>
                    <li>Technology dependency</li>
                    <li>R Strategy fitment</li>
                    <li>Skill GAP Analysis</li>
                    <li>Change Resistance</li>
                    <li>As Is State Study</li>
                  </ul>
                </div>

                <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
                  <h3 className="text-xl font-semibold text-credera-dark mb-4">
                    Recommend
                  </h3>
                  <ul className="list-disc list-inside text-credera-gray-600 space-y-2">
                    <li>Migration Readiness</li>
                    <li>Advisory Report</li>
                    <li>Defined Target Architecture</li>
                    <li>Migration Strategy</li>
                    <li>Tools & Technology</li>
                    <li>Business Case alignment</li>
                    <li>Optimisation possibilities</li>
                    <li>Recommended Cloud Roadmap</li>
                    <li>Pre-Defined Checklist</li>
                    <li>Planning Considerations</li>
                    <li>Business dependencies</li>
                    <li>Clarity on Milestones</li>
                    <li>Clarity on Metrics</li>
                    <li>Quick Win justification</li>
                    <li>POC/Pilot Goal alignment</li>
                  </ul>
                </div>
              </div>

              <h2 className="text-3xl font-bold text-credera-dark mb-6 mt-12">
                How we do it: Assessment Execution
              </h2>

              <div className="overflow-x-auto mb-12">
                <table className="w-full border-collapse border border-gray-300 text-left">
                  <thead>
                    <tr className="bg-gray-100">
                      <th className="border border-gray-300 px-4 py-3 font-semibold text-gray-900">Discover</th>
                      <th className="border border-gray-300 px-4 py-3 font-semibold text-gray-900">Analyse</th>
                      <th className="border border-gray-300 px-4 py-3 font-semibold text-gray-900">Recommend</th>
                      <th className="border border-gray-300 px-4 py-3 font-semibold text-gray-900">Visualise</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-300 px-4 py-3 text-gray-700 align-top">
                        <ul className="text-sm space-y-1">
                          <li>Automated Discovery</li>
                          <li>Conduct Interviews</li>
                          <li>Benchmarking current state of App/Infra Management</li>
                          <li>Cost Comparison</li>
                          <li>App Dependency Mapping</li>
                          <li>Deliver Adoption Deliver Indicative Migration Plan & Ops Model</li>
                        </ul>
                      </td>
                      <td className="border border-gray-300 px-4 py-3 text-gray-700 align-top">
                        <ul className="text-sm space-y-1">
                          <li>Current Cost Identification</li>
                          <li>Map Change Readiness</li>
                          <li>Benchmarking current state of App/Infra Cost</li>
                          <li>TCO Insights</li>
                        </ul>
                      </td>
                      <td className="border border-gray-300 px-4 py-3 text-gray-700 align-top">
                        <ul className="text-sm space-y-1">
                          <li>Cost Mapping</li>
                          <li>Collected Data Validation</li>
                          <li>Benchmarking current state of Operations</li>
                          <li>Strategy Report</li>
                          <li>Draft Program Roadmap by considering the R-Strategy</li>
                          <li>Identify Risks, Security considerations, governance requirements</li>
                        </ul>
                      </td>
                      <td className="border border-gray-300 px-4 py-3 text-gray-700 align-top">
                        <ul className="text-sm space-y-1">
                          <li>Stop Automated Discovery</li>
                          <li>Service Mapping</li>
                          <li>Service Maturity Overview</li>
                          <li>Cost Analysis</li>
                        </ul>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <p className="text-sm italic text-gray-500 mb-12">
                *Example timeline with the flexibility to use this within deal specific scenarios
              </p>

              <h2 className="text-3xl font-bold text-credera-dark mb-6">
                Cloud Assessment: Governance
              </h2>

              <p className="text-sm text-gray-600 mb-4">
                <strong>Legend for Participants:</strong> Customer; Getronics
              </p>

              <div className="overflow-x-auto">
                <table className="w-full border-collapse border border-gray-300 text-left">
                  <thead>
                    <tr className="bg-gray-100">
                      <th className="border border-gray-300 px-4 py-3 font-semibold text-gray-900">Tier</th>
                      <th className="border border-gray-300 px-4 py-3 font-semibold text-gray-900">Cadence</th>
                      <th className="border border-gray-300 px-4 py-3 font-semibold text-gray-900">Leads</th>
                      <th className="border border-gray-300 px-4 py-3 font-semibold text-gray-900">Topics</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-300 px-4 py-3 font-semibold text-gray-700">Leadership Engagement (Strategic)</td>
                      <td className="border border-gray-300 px-4 py-3 text-gray-700">Bi-Weekly</td>
                      <td className="border border-gray-300 px-4 py-3 text-gray-700">Customer + Getronics</td>
                      <td className="border border-gray-300 px-4 py-3 text-gray-700">Overall Engagement Progress, Key Milestones Forecast</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="border border-gray-300 px-4 py-3 font-semibold text-gray-700">Program Performance (Tactical)</td>
                      <td className="border border-gray-300 px-4 py-3 text-gray-700">Weekly</td>
                      <td className="border border-gray-300 px-4 py-3 text-gray-700">Customer + Getronics</td>
                      <td className="border border-gray-300 px-4 py-3 text-gray-700">Key Milestones Performance, RAID Log</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-3 font-semibold text-gray-700">Task Tracking (Operational)</td>
                      <td className="border border-gray-300 px-4 py-3 text-gray-700">Daily</td>
                      <td className="border border-gray-300 px-4 py-3 text-gray-700">Customer + Getronics</td>
                      <td className="border border-gray-300 px-4 py-3 text-gray-700">Task Completion Status, Task Planning</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-8 space-y-6">
                <div className="bg-teal-50 p-6 rounded-lg border border-teal-200">
                  <h3 className="text-lg font-semibold text-teal-800 mb-4">
                    What to Expect
                  </h3>
                  <ul className="space-y-3 text-sm text-teal-700">
                    <li className="flex items-start">
                      <span className="text-teal-600 mr-2">✓</span>
                      Comprehensive discovery and analysis
                    </li>
                    <li className="flex items-start">
                      <span className="text-teal-600 mr-2">✓</span>
                      Detailed assessment report
                    </li>
                    <li className="flex items-start">
                      <span className="text-teal-600 mr-2">✓</span>
                      Migration readiness evaluation
                    </li>
                    <li className="flex items-start">
                      <span className="text-teal-600 mr-2">✓</span>
                      Strategic recommendations
                    </li>
                    <li className="flex items-start">
                      <span className="text-teal-600 mr-2">✓</span>
                      Implementation roadmap
                    </li>
                  </ul>
                </div>

                <div className="bg-credera-gray-50 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold text-credera-dark mb-4">
                    Assessment Process
                  </h3>
                  <div className="space-y-4 text-sm text-credera-gray-600">
                    <div className="border-l-2 border-teal-500 pl-4">
                      <div className="font-semibold">Discovery</div>
                      <div>Scoping and data gathering</div>
                    </div>
                    <div className="border-l-2 border-teal-500 pl-4">
                      <div className="font-semibold">Analysis</div>
                      <div>Technical evaluation and assessment</div>
                    </div>
                    <div className="border-l-2 border-teal-500 pl-4">
                      <div className="font-semibold">Recommendations</div>
                      <div>Strategy development and roadmapping</div>
                    </div>
                    <div className="border-l-2 border-teal-500 pl-4">
                      <div className="font-semibold">Visualisation</div>
                      <div>Results presentation and planning</div>
                    </div>
                  </div>
                </div>

                <div className="bg-blue-50 p-6 rounded-lg border border-blue-200">
                  <h3 className="text-lg font-semibold text-blue-800 mb-4">
                    Next Steps
                  </h3>
                  <p className="text-sm text-blue-700 mb-4">
                    Ready to begin your comprehensive cloud assessment?
                  </p>
                  <button 
                    onClick={handleNextStepsClick}
                    className="w-full bg-teal-600 text-white py-2 px-4 rounded-md hover:bg-teal-700 transition-colors duration-200 text-sm font-semibold"
                  >
                    Start Assessment
                  </button>
                  <div className="mt-4 pt-4 border-t border-blue-200">
                    <p className="text-xs text-blue-600 mb-2">Navigation:</p>
                    <div className="space-y-2">
                      <a href="/consult/cloud-adoption-strategy" className="block text-xs text-blue-600 hover:underline">
                        ← Adoption Strategy
                      </a>
                      <a href="/consult" className="block text-xs text-blue-600 hover:underline">
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
