import React from 'react';
import StandardHeroSection from '@/components/StandardHeroSection';
import FooterSection from '@/components/FooterSection';

export default function CloudTCOAssessment() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <StandardHeroSection
        title="Cloud TCO Assessment"
        subtitle="Total Cost of Ownership Analysis"
        description="Understand the true cost of cloud migration with our comprehensive Total Cost of Ownership analysis. Make informed decisions with detailed financial modeling and ROI projections."
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
                Comprehensive Cost Analysis
              </h2>
              
              <div className="prose prose-lg max-w-none text-credera-gray-600">
                <p className="mb-6">
                  Moving to the cloud is a significant investment that requires careful financial 
                  planning. Our Cloud TCO Assessment provides a detailed analysis of all costs 
                  associated with your cloud migration, helping you make data-driven decisions 
                  about your technology investments.
                </p>
                
                <p className="mb-8">
                  We analyze current infrastructure costs, projected cloud expenses, migration 
                  costs, and ongoing operational expenses to provide a complete picture of your 
                  total cost of ownership over a 3-5 year period.
                </p>
              </div>

              <div className="space-y-8">
                <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
                  <h3 className="text-xl font-semibold text-credera-dark mb-4">
                    Current State Analysis
                  </h3>
                  <p className="text-credera-gray-600 mb-4">
                    Comprehensive assessment of your existing infrastructure costs and 
                    operational expenses to establish a baseline for comparison.
                  </p>
                  <ul className="list-disc list-inside text-credera-gray-600 space-y-2">
                    <li>Hardware and software licensing costs</li>
                    <li>Data center and facilities expenses</li>
                    <li>Staffing and operational costs</li>
                    <li>Maintenance and support agreements</li>
                    <li>Power, cooling, and space utilization</li>
                  </ul>
                </div>

                <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
                  <h3 className="text-xl font-semibold text-credera-dark mb-4">
                    Cloud Cost Modeling
                  </h3>
                  <p className="text-credera-gray-600 mb-4">
                    Detailed modeling of cloud service costs across multiple scenarios 
                    and usage patterns to project accurate future expenses.
                  </p>
                  <ul className="list-disc list-inside text-credera-gray-600 space-y-2">
                    <li>Compute, storage, and network pricing</li>
                    <li>Reserved vs. on-demand cost comparisons</li>
                    <li>Multi-cloud scenario analysis</li>
                    <li>Scaling and elasticity cost impacts</li>
                    <li>Data transfer and bandwidth costs</li>
                  </ul>
                </div>

                <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
                  <h3 className="text-xl font-semibold text-credera-dark mb-4">
                    Migration & Implementation Costs
                  </h3>
                  <p className="text-credera-gray-600 mb-4">
                    Assessment of one-time costs associated with cloud migration including 
                    planning, execution, and post-migration optimization.
                  </p>
                  <ul className="list-disc list-inside text-credera-gray-600 space-y-2">
                    <li>Migration planning and consulting</li>
                    <li>Application refactoring and modernization</li>
                    <li>Data migration and synchronization</li>
                    <li>Staff training and certification</li>
                    <li>Testing and validation activities</li>
                  </ul>
                </div>

                <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
                  <h3 className="text-xl font-semibold text-credera-dark mb-4">
                    ROI Analysis & Recommendations
                  </h3>
                  <p className="text-credera-gray-600 mb-4">
                    Financial modeling and return on investment analysis with specific 
                    recommendations for optimizing your cloud investment.
                  </p>
                  <ul className="list-disc list-inside text-credera-gray-600 space-y-2">
                    <li>3-5 year financial projections</li>
                    <li>Break-even analysis and timeline</li>
                    <li>Risk-adjusted cost scenarios</li>
                    <li>Cost optimization strategies</li>
                    <li>Investment prioritization matrix</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-8 space-y-6">
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
                    Get Started
                  </h3>
                  <p className="text-sm text-blue-700 mb-4">
                    Ready to understand your cloud TCO?
                  </p>
                  <button className="w-full bg-green-600 text-white py-2 px-4 rounded-md hover:bg-green-700 transition-colors duration-200 text-sm font-semibold">
                    Request Assessment
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