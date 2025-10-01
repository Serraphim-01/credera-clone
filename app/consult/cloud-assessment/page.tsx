import React from 'react';
import StandardHeroSection from '@/components/StandardHeroSection';
import FooterSection from '@/components/FooterSection';

export default function CloudAssessment() {
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
                Complete Cloud Evaluation
              </h2>
              
              <div className="prose prose-lg max-w-none text-credera-gray-600">
                <p className="mb-6">
                  Our comprehensive cloud assessment provides a thorough evaluation of your 
                  current infrastructure, applications, and processes to determine cloud 
                  readiness and optimization opportunities. We analyze technical, security, 
                  compliance, and operational aspects to provide actionable recommendations.
                </p>
                
                <p className="mb-8">
                  The assessment covers everything from application dependencies and data 
                  flows to security posture and performance characteristics, giving you a 
                  complete picture of your cloud migration potential and requirements.
                </p>
              </div>

              <div className="space-y-8">
                <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
                  <h3 className="text-xl font-semibold text-credera-dark mb-4">
                    Infrastructure Assessment
                  </h3>
                  <p className="text-credera-gray-600 mb-4">
                    Detailed analysis of your current infrastructure components, 
                    performance metrics, and cloud compatibility.
                  </p>
                  <ul className="list-disc list-inside text-credera-gray-600 space-y-2">
                    <li>Server and storage utilization analysis</li>
                    <li>Network topology and bandwidth assessment</li>
                    <li>Hardware lifecycle and maintenance evaluation</li>
                    <li>Performance monitoring and capacity planning</li>
                    <li>Disaster recovery and backup assessment</li>
                  </ul>
                </div>

                <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
                  <h3 className="text-xl font-semibold text-credera-dark mb-4">
                    Application Portfolio Analysis
                  </h3>
                  <p className="text-credera-gray-600 mb-4">
                    Comprehensive evaluation of your application portfolio to determine 
                    cloud readiness and migration complexity.
                  </p>
                  <ul className="list-disc list-inside text-credera-gray-600 space-y-2">
                    <li>Application architecture and dependency mapping</li>
                    <li>Technology stack compatibility assessment</li>
                    <li>Performance and scalability requirements</li>
                    <li>Integration points and data flow analysis</li>
                    <li>Modernization opportunities identification</li>
                  </ul>
                </div>

                <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
                  <h3 className="text-xl font-semibold text-credera-dark mb-4">
                    Security & Compliance Review
                  </h3>
                  <p className="text-credera-gray-600 mb-4">
                    Thorough security posture evaluation and compliance requirements 
                    assessment for cloud migration planning.
                  </p>
                  <ul className="list-disc list-inside text-credera-gray-600 space-y-2">
                    <li>Current security controls and policies review</li>
                    <li>Compliance requirements and regulations mapping</li>
                    <li>Data classification and protection needs</li>
                    <li>Identity and access management assessment</li>
                    <li>Cloud security framework recommendations</li>
                  </ul>
                </div>

                <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
                  <h3 className="text-xl font-semibold text-credera-dark mb-4">
                    Operational Readiness
                  </h3>
                  <p className="text-credera-gray-600 mb-4">
                    Assessment of organizational readiness, processes, and capabilities 
                    required for successful cloud adoption.
                  </p>
                  <ul className="list-disc list-inside text-credera-gray-600 space-y-2">
                    <li>Team skills and capability gap analysis</li>
                    <li>Operational processes and procedures review</li>
                    <li>Change management readiness assessment</li>
                    <li>Monitoring and management tool evaluation</li>
                    <li>Training and certification requirements</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-8 space-y-6">
                <div className="bg-teal-50 p-6 rounded-lg border border-teal-200">
                  <h3 className="text-lg font-semibold text-teal-800 mb-4">
                    Assessment Scope
                  </h3>
                  <ul className="space-y-3 text-sm text-teal-700">
                    <li className="flex items-start">
                      <span className="text-teal-600 mr-2">□</span>
                      Infrastructure inventory and analysis
                    </li>
                    <li className="flex items-start">
                      <span className="text-teal-600 mr-2">□</span>
                      Application portfolio assessment
                    </li>
                    <li className="flex items-start">
                      <span className="text-teal-600 mr-2">□</span>
                      Security and compliance review
                    </li>
                    <li className="flex items-start">
                      <span className="text-teal-600 mr-2">□</span>
                      Data architecture evaluation
                    </li>
                    <li className="flex items-start">
                      <span className="text-teal-600 mr-2">□</span>
                      Performance benchmarking
                    </li>
                    <li className="flex items-start">
                      <span className="text-teal-600 mr-2">□</span>
                      Cost analysis and projections
                    </li>
                  </ul>
                </div>

                <div className="bg-credera-gray-50 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold text-credera-dark mb-4">
                    Assessment Methodology
                  </h3>
                  <div className="space-y-4 text-sm text-credera-gray-600">
                    <div className="border-l-2 border-teal-500 pl-4">
                      <div className="font-semibold">Discovery</div>
                      <div>Data collection and documentation review</div>
                    </div>
                    <div className="border-l-2 border-teal-500 pl-4">
                      <div className="font-semibold">Analysis</div>
                      <div>Technical evaluation and gap identification</div>
                    </div>
                    <div className="border-l-2 border-teal-500 pl-4">
                      <div className="font-semibold">Recommendations</div>
                      <div>Strategy development and roadmap creation</div>
                    </div>
                    <div className="border-l-2 border-teal-500 pl-4">
                      <div className="font-semibold">Presentation</div>
                      <div>Findings review and stakeholder alignment</div>
                    </div>
                  </div>
                </div>

                <div className="bg-orange-50 p-6 rounded-lg border border-orange-200">
                  <h3 className="text-lg font-semibold text-orange-800 mb-4">
                    Assessment Outputs
                  </h3>
                  <ul className="space-y-2 text-sm text-orange-700">
                    <li className="flex items-start">
                      <span className="text-orange-600 mr-2">📋</span>
                      Detailed assessment report
                    </li>
                    <li className="flex items-start">
                      <span className="text-orange-600 mr-2">📊</span>
                      Cloud readiness scorecard
                    </li>
                    <li className="flex items-start">
                      <span className="text-orange-600 mr-2">🗺️</span>
                      Migration roadmap
                    </li>
                    <li className="flex items-start">
                      <span className="text-orange-600 mr-2">💰</span>
                      Cost-benefit analysis
                    </li>
                    <li className="flex items-start">
                      <span className="text-orange-600 mr-2">⚠️</span>
                      Risk assessment
                    </li>
                  </ul>
                </div>

                <div className="bg-blue-50 p-6 rounded-lg border border-blue-200">
                  <h3 className="text-lg font-semibold text-blue-800 mb-4">
                    Schedule Assessment
                  </h3>
                  <p className="text-sm text-blue-700 mb-4">
                    Get a comprehensive cloud assessment for your organization.
                  </p>
                  <button className="w-full bg-teal-600 text-white py-2 px-4 rounded-md hover:bg-teal-700 transition-colors duration-200 text-sm font-semibold">
                    Book Assessment
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
                    <a href="/consult/cloud-adoption-strategy" className="block text-sm text-credera-red hover:underline">
                      Cloud Adoption Strategy →
                    </a>
                    <a href="/consult/first-steps" className="block text-sm text-credera-red hover:underline">
                      First Steps Consultation →
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