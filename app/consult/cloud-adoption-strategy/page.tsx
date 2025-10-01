import React from 'react';
import StandardHeroSection from '@/components/StandardHeroSection';
import FooterSection from '@/components/FooterSection';

export default function CloudAdoptionStrategy() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <StandardHeroSection
        title="Cloud Adoption Strategy"
        subtitle="Strategic Cloud Planning"
        description="Develop a comprehensive cloud adoption strategy that aligns with your business objectives and technical requirements. From cloud-first to hybrid approaches, we help you choose the right path."
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
                Strategic Cloud Planning
              </h2>
              
              <div className="prose prose-lg max-w-none text-credera-gray-600">
                <p className="mb-6">
                  A successful cloud adoption requires more than just technology migration—it 
                  demands a strategic approach that considers your organization's unique needs, 
                  constraints, and objectives. Our cloud adoption strategy service helps you 
                  develop a clear roadmap for your cloud journey.
                </p>
                
                <p className="mb-8">
                  We work with you to assess your current state, define your target cloud 
                  architecture, and create a detailed migration and adoption plan that minimizes 
                  risk while maximizing the benefits of cloud technologies.
                </p>
              </div>

              <div className="space-y-8">
                <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
                  <h3 className="text-xl font-semibold text-credera-dark mb-4">
                    Cloud Strategy Assessment
                  </h3>
                  <p className="text-credera-gray-600 mb-4">
                    Comprehensive evaluation of your organization's readiness for cloud 
                    adoption and identification of the most suitable cloud approach.
                  </p>
                  <ul className="list-disc list-inside text-credera-gray-600 space-y-2">
                    <li>Current infrastructure and application portfolio analysis</li>
                    <li>Business requirements and compliance assessment</li>
                    <li>Organizational readiness evaluation</li>
                    <li>Cloud provider comparison and selection</li>
                    <li>Hybrid vs. multi-cloud strategy evaluation</li>
                  </ul>
                </div>

                <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
                  <h3 className="text-xl font-semibold text-credera-dark mb-4">
                    Migration Strategy & Approach
                  </h3>
                  <p className="text-credera-gray-600 mb-4">
                    Develop detailed migration strategies for different application types 
                    and workloads, optimizing for performance, cost, and risk.
                  </p>
                  <ul className="list-disc list-inside text-credera-gray-600 space-y-2">
                    <li>Application portfolio categorization and prioritization</li>
                    <li>Migration pattern selection (6 R's framework)</li>
                    <li>Phased migration planning and sequencing</li>
                    <li>Data migration strategy and execution plan</li>
                    <li>Rollback and contingency planning</li>
                  </ul>
                </div>

                <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
                  <h3 className="text-xl font-semibold text-credera-dark mb-4">
                    Cloud Operating Model
                  </h3>
                  <p className="text-credera-gray-600 mb-4">
                    Design new operating models and governance structures to effectively 
                    manage and optimize your cloud environment post-migration.
                  </p>
                  <ul className="list-disc list-inside text-credera-gray-600 space-y-2">
                    <li>Cloud governance and policy framework</li>
                    <li>Resource management and cost optimization</li>
                    <li>Security and compliance controls</li>
                    <li>Monitoring and performance management</li>
                    <li>Incident response and disaster recovery</li>
                  </ul>
                </div>

                <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
                  <h3 className="text-xl font-semibold text-credera-dark mb-4">
                    Change Management & Training
                  </h3>
                  <p className="text-credera-gray-600 mb-4">
                    Prepare your organization and team for the cloud transformation 
                    through comprehensive change management and capability development.
                  </p>
                  <ul className="list-disc list-inside text-credera-gray-600 space-y-2">
                    <li>Organizational change strategy and planning</li>
                    <li>Skills gap analysis and training programs</li>
                    <li>Cloud certification and career development paths</li>
                    <li>Communication and stakeholder engagement</li>
                    <li>Success metrics and adoption tracking</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-8 space-y-6">
                <div className="bg-indigo-50 p-6 rounded-lg border border-indigo-200">
                  <h3 className="text-lg font-semibold text-indigo-800 mb-4">
                    Strategy Components
                  </h3>
                  <ul className="space-y-3 text-sm text-indigo-700">
                    <li className="flex items-start">
                      <span className="text-indigo-600 mr-2">→</span>
                      Cloud readiness assessment
                    </li>
                    <li className="flex items-start">
                      <span className="text-indigo-600 mr-2">→</span>
                      Target architecture design
                    </li>
                    <li className="flex items-start">
                      <span className="text-indigo-600 mr-2">→</span>
                      Migration roadmap and timeline
                    </li>
                    <li className="flex items-start">
                      <span className="text-indigo-600 mr-2">→</span>
                      Cost optimization strategy
                    </li>
                    <li className="flex items-start">
                      <span className="text-indigo-600 mr-2">→</span>
                      Risk mitigation plan
                    </li>
                    <li className="flex items-start">
                      <span className="text-indigo-600 mr-2">→</span>
                      Governance framework
                    </li>
                  </ul>
                </div>

                <div className="bg-credera-gray-50 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold text-credera-dark mb-4">
                    Engagement Process
                  </h3>
                  <div className="space-y-4 text-sm text-credera-gray-600">
                    <div className="border-l-2 border-indigo-500 pl-4">
                      <div className="font-semibold">Phase 1: Assessment</div>
                      <div>Current state analysis and readiness evaluation</div>
                    </div>
                    <div className="border-l-2 border-indigo-500 pl-4">
                      <div className="font-semibold">Phase 2: Strategy</div>
                      <div>Target state design and migration planning</div>
                    </div>
                    <div className="border-l-2 border-indigo-500 pl-4">
                      <div className="font-semibold">Phase 3: Roadmap</div>
                      <div>Detailed implementation plan development</div>
                    </div>
                    <div className="border-l-2 border-indigo-500 pl-4">
                      <div className="font-semibold">Phase 4: Validation</div>
                      <div>Strategy review and stakeholder alignment</div>
                    </div>
                  </div>
                </div>

                <div className="bg-yellow-50 p-6 rounded-lg border border-yellow-200">
                  <h3 className="text-lg font-semibold text-yellow-800 mb-4">
                    Strategy Benefits
                  </h3>
                  <ul className="space-y-2 text-sm text-yellow-700">
                    <li className="flex items-start">
                      <span className="text-yellow-600 mr-2">✓</span>
                      Reduced migration risks
                    </li>
                    <li className="flex items-start">
                      <span className="text-yellow-600 mr-2">✓</span>
                      Optimized cloud costs
                    </li>
                    <li className="flex items-start">
                      <span className="text-yellow-600 mr-2">✓</span>
                      Faster time to value
                    </li>
                    <li className="flex items-start">
                      <span className="text-yellow-600 mr-2">✓</span>
                      Improved scalability
                    </li>
                  </ul>
                </div>

                <div className="bg-blue-50 p-6 rounded-lg border border-blue-200">
                  <h3 className="text-lg font-semibold text-blue-800 mb-4">
                    Get Your Strategy
                  </h3>
                  <p className="text-sm text-blue-700 mb-4">
                    Ready to develop your cloud adoption strategy?
                  </p>
                  <button className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 transition-colors duration-200 text-sm font-semibold">
                    Start Strategy Development
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
                    <a href="/consult/cloud-assessment" className="block text-sm text-credera-red hover:underline">
                      Cloud Assessment →
                    </a>
                    <a href="/consult/next-steps" className="block text-sm text-credera-red hover:underline">
                      Next Steps Planning →
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