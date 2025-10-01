import React from 'react';
import StandardHeroSection from '@/components/StandardHeroSection';
import FooterSection from '@/components/FooterSection';

export default function NextSteps() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <StandardHeroSection
        title="Next Steps"
        subtitle="Strategic Planning & Implementation"
        description="After your initial assessment and planning, we guide you through the next crucial steps of your digital transformation journey. Strategic planning and implementation roadmap development."
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
                Moving Forward with Confidence
              </h2>
              
              <div className="prose prose-lg max-w-none text-credera-gray-600">
                <p className="mb-6">
                  The next steps phase is where strategic planning meets practical implementation. 
                  Having completed your initial assessment, we now focus on developing detailed 
                  action plans, prioritizing initiatives, and establishing the foundation for 
                  successful execution of your digital transformation.
                </p>
                
                <p className="mb-8">
                  Our structured approach ensures that every step forward is carefully planned, 
                  risk-assessed, and aligned with your business objectives. We help you navigate 
                  complex decisions and maintain momentum throughout your transformation journey.
                </p>
              </div>

              <div className="space-y-8">
                <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
                  <h3 className="text-xl font-semibold text-credera-dark mb-4">
                    Strategic Roadmap Development
                  </h3>
                  <p className="text-credera-gray-600 mb-4">
                    Create a detailed, phased approach to your transformation with clear 
                    milestones, dependencies, and success criteria.
                  </p>
                  <ul className="list-disc list-inside text-credera-gray-600 space-y-2">
                    <li>Initiative prioritization and sequencing</li>
                    <li>Detailed project plans and timelines</li>
                    <li>Resource allocation and budgeting</li>
                    <li>Risk assessment and mitigation strategies</li>
                    <li>Success metrics and KPI definition</li>
                  </ul>
                </div>

                <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
                  <h3 className="text-xl font-semibold text-credera-dark mb-4">
                    Implementation Planning
                  </h3>
                  <p className="text-credera-gray-600 mb-4">
                    Develop comprehensive implementation plans that address technical, 
                    operational, and organizational aspects of your transformation.
                  </p>
                  <ul className="list-disc list-inside text-credera-gray-600 space-y-2">
                    <li>Technical architecture and design</li>
                    <li>Change management and communication plans</li>
                    <li>Training and capability development</li>
                    <li>Quality assurance and testing strategies</li>
                    <li>Go-live and rollback procedures</li>
                  </ul>
                </div>

                <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
                  <h3 className="text-xl font-semibold text-credera-dark mb-4">
                    Governance & Oversight
                  </h3>
                  <p className="text-credera-gray-600 mb-4">
                    Establish governance structures and oversight mechanisms to ensure 
                    successful execution and continuous alignment with business objectives.
                  </p>
                  <ul className="list-disc list-inside text-credera-gray-600 space-y-2">
                    <li>Steering committee establishment</li>
                    <li>Project governance frameworks</li>
                    <li>Regular review and checkpoint processes</li>
                    <li>Issue escalation and resolution procedures</li>
                    <li>Performance monitoring and reporting</li>
                  </ul>
                </div>

                <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
                  <h3 className="text-xl font-semibold text-credera-dark mb-4">
                    Pilot & Proof of Concept
                  </h3>
                  <p className="text-credera-gray-600 mb-4">
                    Execute focused pilot projects to validate assumptions, test approaches, 
                    and build confidence before full-scale implementation.
                  </p>
                  <ul className="list-disc list-inside text-credera-gray-600 space-y-2">
                    <li>Pilot project design and execution</li>
                    <li>Proof of concept development</li>
                    <li>Results analysis and validation</li>
                    <li>Lessons learned documentation</li>
                    <li>Scaled implementation planning</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-8 space-y-6">
                <div className="bg-purple-50 p-6 rounded-lg border border-purple-200">
                  <h3 className="text-lg font-semibold text-purple-800 mb-4">
                    Key Deliverables
                  </h3>
                  <ul className="space-y-3 text-sm text-purple-700">
                    <li className="flex items-start">
                      <span className="text-purple-600 mr-2">•</span>
                      Detailed implementation roadmap
                    </li>
                    <li className="flex items-start">
                      <span className="text-purple-600 mr-2">•</span>
                      Project charter and scope definition
                    </li>
                    <li className="flex items-start">
                      <span className="text-purple-600 mr-2">•</span>
                      Resource and budget estimates
                    </li>
                    <li className="flex items-start">
                      <span className="text-purple-600 mr-2">•</span>
                      Risk assessment and mitigation plan
                    </li>
                    <li className="flex items-start">
                      <span className="text-purple-600 mr-2">•</span>
                      Pilot project plan and execution
                    </li>
                    <li className="flex items-start">
                      <span className="text-purple-600 mr-2">•</span>
                      Governance and oversight framework
                    </li>
                  </ul>
                </div>

                <div className="bg-credera-gray-50 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold text-credera-dark mb-4">
                    Typical Timeline
                  </h3>
                  <div className="space-y-4 text-sm text-credera-gray-600">
                    <div className="border-l-2 border-purple-500 pl-4">
                      <div className="font-semibold">Weeks 1-3</div>
                      <div>Roadmap development and planning</div>
                    </div>
                    <div className="border-l-2 border-purple-500 pl-4">
                      <div className="font-semibold">Weeks 4-6</div>
                      <div>Governance setup and pilot planning</div>
                    </div>
                    <div className="border-l-2 border-purple-500 pl-4">
                      <div className="font-semibold">Weeks 7-12</div>
                      <div>Pilot execution and validation</div>
                    </div>
                    <div className="border-l-2 border-purple-500 pl-4">
                      <div className="font-semibold">Week 13+</div>
                      <div>Full implementation planning</div>
                    </div>
                  </div>
                </div>

                <div className="bg-blue-50 p-6 rounded-lg border border-blue-200">
                  <h3 className="text-lg font-semibold text-blue-800 mb-4">
                    Ready to Plan?
                  </h3>
                  <p className="text-sm text-blue-700 mb-4">
                    Let's develop your next steps together.
                  </p>
                  <button className="w-full bg-purple-600 text-white py-2 px-4 rounded-md hover:bg-purple-700 transition-colors duration-200 text-sm font-semibold">
                    Start Planning
                  </button>
                </div>

                <div className="bg-white border border-gray-200 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-credera-dark mb-4">
                    Related Services
                  </h3>
                  <div className="space-y-3">
                    <a href="/consult/first-steps" className="block text-sm text-credera-red hover:underline">
                      First Steps Consultation →
                    </a>
                    <a href="/consult/cloud-adoption-strategy" className="block text-sm text-credera-red hover:underline">
                      Cloud Adoption Strategy →
                    </a>
                    <a href="/consult/cloud-assessment" className="block text-sm text-credera-red hover:underline">
                      Cloud Assessment →
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Footer */}
      <FooterSection />
    </div>
  );
}