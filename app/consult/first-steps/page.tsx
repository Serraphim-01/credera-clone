import React from 'react';
import StandardHeroSection from '@/components/StandardHeroSection';
import FooterSection from '@/components/FooterSection';

export default function FirstSteps() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <StandardHeroSection
        title="First Steps"
        subtitle="Digital Transformation Consultation"
        description="Begin your digital transformation journey with our comprehensive first steps consultation. We help you define your vision, assess current capabilities, and create a roadmap for success."
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
                Starting Your Journey Right
              </h2>
              
              <div className="prose prose-lg max-w-none text-credera-gray-600">
                <p className="mb-6">
                  The first steps in any digital transformation are crucial. Our initial consultation 
                  process is designed to thoroughly understand your business objectives, current 
                  technology landscape, and strategic goals. This foundational phase sets the stage 
                  for all future initiatives.
                </p>
                
                <p className="mb-8">
                  We believe that every successful transformation begins with clear understanding 
                  and careful planning. Our experienced consultants work closely with your team 
                  to ensure we capture all critical requirements and establish realistic expectations.
                </p>
              </div>

              <div className="space-y-8">
                <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
                  <h3 className="text-xl font-semibold text-credera-dark mb-4">
                    Discovery Phase
                  </h3>
                  <p className="text-credera-gray-600 mb-4">
                    Our discovery process involves comprehensive stakeholder interviews, 
                    technical assessments, and business process analysis.
                  </p>
                  <ul className="list-disc list-inside text-credera-gray-600 space-y-2">
                    <li>Stakeholder interviews and requirements gathering</li>
                    <li>Current state technology assessment</li>
                    <li>Business process documentation</li>
                    <li>Risk and constraint identification</li>
                  </ul>
                </div>

                <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
                  <h3 className="text-xl font-semibold text-credera-dark mb-4">
                    Planning & Strategy
                  </h3>
                  <p className="text-credera-gray-600 mb-4">
                    Based on our discovery findings, we develop a customized strategy 
                    that aligns with your business objectives and technical requirements.
                  </p>
                  <ul className="list-disc list-inside text-credera-gray-600 space-y-2">
                    <li>Strategic roadmap development</li>
                    <li>Technology architecture planning</li>
                    <li>Timeline and milestone definition</li>
                    <li>Resource requirement assessment</li>
                  </ul>
                </div>

                <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
                  <h3 className="text-xl font-semibold text-credera-dark mb-4">
                    Validation & Approval
                  </h3>
                  <p className="text-credera-gray-600 mb-4">
                    We present our findings and recommendations to your stakeholders 
                    for review, validation, and approval before moving forward.
                  </p>
                  <ul className="list-disc list-inside text-credera-gray-600 space-y-2">
                    <li>Executive presentation and review</li>
                    <li>Strategy validation workshops</li>
                    <li>Stakeholder alignment sessions</li>
                    <li>Final roadmap approval</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-8 space-y-6">
                <div className="bg-credera-gray-50 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold text-credera-dark mb-4">
                    What to Expect
                  </h3>
                  <ul className="space-y-3 text-sm text-credera-gray-600">
                    <li className="flex items-start">
                      <span className="text-credera-red mr-2">•</span>
                      2-4 week discovery timeline
                    </li>
                    <li className="flex items-start">
                      <span className="text-credera-red mr-2">•</span>
                      Detailed requirements documentation
                    </li>
                    <li className="flex items-start">
                      <span className="text-credera-red mr-2">•</span>
                      Strategic roadmap and timeline
                    </li>
                    <li className="flex items-start">
                      <span className="text-credera-red mr-2">•</span>
                      Risk assessment and mitigation plan
                    </li>
                    <li className="flex items-start">
                      <span className="text-credera-red mr-2">•</span>
                      Budget and resource estimates
                    </li>
                  </ul>
                </div>

                <div className="bg-blue-50 p-6 rounded-lg border border-blue-200">
                  <h3 className="text-lg font-semibold text-blue-800 mb-4">
                    Next Steps
                  </h3>
                  <p className="text-sm text-blue-700 mb-4">
                    Ready to begin your first steps consultation?
                  </p>
                  <button className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors duration-200 text-sm font-semibold">
                    Schedule Consultation
                  </button>
                </div>

                <div className="bg-white border border-gray-200 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-credera-dark mb-4">
                    Related Services
                  </h3>
                  <div className="space-y-3">
                    <a href="/consult/cloud-tco-assessment" className="block text-sm text-credera-red hover:underline">
                      Cloud TCO Assessment →
                    </a>
                    <a href="/consult/next-steps" className="block text-sm text-credera-red hover:underline">
                      Next Steps Planning →
                    </a>
                    <a href="/consult/cloud-adoption-strategy" className="block text-sm text-credera-red hover:underline">
                      Cloud Adoption Strategy →
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