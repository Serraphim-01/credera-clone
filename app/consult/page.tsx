'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { FaCloud, FaExpandArrowsAlt, FaDollarSign, FaExchangeAlt, FaShieldAlt, FaChartBar, FaCog, FaUsers, FaPlane } from 'react-icons/fa';
import FooterSection from '@/components/FooterSection';
import BookingModal from '@/components/BookingModal';

export default function ConsultOverview() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };
  return (
    <div className="min-h-screen bg-white">
      {/* GetConsult Hero Section with Next.js Image */}
      <section className="relative h-screen max-h-[600px] overflow-hidden">
        {/* Background Image */}
        <Image
          src="/TaskImages/services.jpg"
          alt="GetConsult – Azure Cloud Advisory by Getronics"
          fill
          className="object-cover absolute inset-0 z-0"
          priority
          sizes="100vw"
        />

        {/* Content */}
        <div className="relative h-full max-w-7xl mx-auto px-8 z-20">
          <div className="absolute bottom-0 left-8 max-w-lg">
            <div className="bg-white p-8 shadow-xl">
              <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
                GetConsult
              </h1>
              <h2 className="text-xl md:text-2xl font-semibold mb-4 text-gray-700">
                The first step to success on Cloud
              </h2>
              <p className="text-lg text-gray-600 mb-4">
                <em>(Azure Cloud Advisory)</em>
              </p>
              <blockquote className="text-base italic text-gray-700 border-l-4 border-orange-500 pl-4">
                "There is no business strategy without a cloud strategy."
                <br />
                <cite className="text-sm text-gray-600">— Gartner, 2021</cite>
              </blockquote>
            </div>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Cloud Has Shifted From Computing Style to Business Foundation
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Cloud has shifted from a style of computing to <strong>the</strong> foundation for business innovation. 
              Our GetConsult service turns that principle into an executable, low-risk roadmap.
            </p>
          </div>
        </div>
      </section>

      {/* Why Talk Cloud Now Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-8">
              Why talk cloud now?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <div className="text-5xl font-bold text-green-600 mb-4">63%</div>
                <p className="text-lg text-gray-700">of CEOs already achieve growth, efficiency & innovation through cloud</p>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <div className="text-5xl font-bold text-orange-600 mb-4">80%</div>
                <p className="text-lg text-gray-700">of IT budgets still "keep the lights on" and 80% of workloads are legacy</p>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <div className="text-5xl font-bold text-blue-600 mb-4">20%</div>
                <p className="text-lg text-gray-700">Freeing just 20% of that budget can fund core transformation</p>
              </div>
            </div>
          </div>

          {/* Getronics Cloud Framework */}
          <div className="mb-16">
            <h3 className="text-3xl font-bold text-gray-900 text-center mb-12">
              Getronics Cloud Framework – 4 pillars
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="bg-blue-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <FaChartBar className="text-blue-600 text-3xl" />
                </div>
                <h4 className="text-xl font-semibold text-gray-900 mb-2">1. Advise</h4>
                <p className="text-gray-600">GetConsult (this page)</p>
              </div>
              
              <div className="text-center">
                <div className="bg-green-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <FaCog className="text-green-600 text-3xl" />
                </div>
                <h4 className="text-xl font-semibold text-gray-900 mb-2">2. Enable</h4>
                <p className="text-gray-600">GetFoundation</p>
              </div>
              
              <div className="text-center">
                <div className="bg-orange-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <FaShieldAlt className="text-orange-600 text-3xl" />
                </div>
                <h4 className="text-xl font-semibold text-gray-900 mb-2">3. Operate</h4>
                <p className="text-gray-600">GetManage / GetSecure</p>
              </div>
              
              <div className="text-center">
                <div className="bg-purple-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <FaPlane className="text-purple-600 text-3xl" />
                </div>
                <h4 className="text-xl font-semibold text-gray-900 mb-2">4. Evolve</h4>
                <p className="text-gray-600">GetTransform / GetDevelop</p>
              </div>
            </div>
          </div>

          {/* GetConsult in one sentence */}
          <div className="text-center">
            <h3 className="text-3xl font-bold text-gray-900 mb-6">
              GetConsult in one sentence
            </h3>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              We visualise your end-to-end cloud journey—using multi-cloud expertise, hyperscaler alliances and automated tooling—to deliver <strong>real business outcomes</strong>, one client at a time.
            </p>
          </div>
        </div>
      </section>

      {/* Four Advisory Focus Areas */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 text-center mb-12">
            Four advisory focus areas (service catalogue)
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse border border-gray-300 text-left">
              <thead>
                <tr className="bg-gray-100">
                  <th className="border border-gray-300 px-6 py-4 font-semibold text-gray-900">Focus Area</th>
                  <th className="border border-gray-300 px-6 py-4 font-semibold text-gray-900">Typical Questions We Answer</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-300 px-6 py-4 font-medium text-gray-900">
                    1. Current-State Portfolio Analysis
                  </td>
                  <td className="border border-gray-300 px-6 py-4 text-gray-700">
                    "What do I own, how is it connected, what can move?"
                  </td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-300 px-6 py-4 font-medium text-gray-900">
                    2. Cloud TCO Assessment
                  </td>
                  <td className="border border-gray-300 px-6 py-4 text-gray-700">
                    "What will it really cost—and save?"
                  </td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-6 py-4 font-medium text-gray-900">
                    3. Future-State Realisation Feasibility
                  </td>
                  <td className="border border-gray-300 px-6 py-4 text-gray-700">
                    "Can my people, process & tech scale on cloud?"
                  </td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-300 px-6 py-4 font-medium text-gray-900">
                    4. Cloud Adoption Strategy
                  </td>
                  <td className="border border-gray-300 px-6 py-4 text-gray-700">
                    "How do I phase migration and guarantee ROI?"
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* 4-step delivery engine */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              4-step delivery engine
            </h2>
            <p className="text-xl text-gray-600">
              Discover → Analyse → Recommend → Visualise
            </p>
            <p className="text-lg text-gray-500 mt-4">
              <em>(Repeatable, accelerator-enhanced, CMDB-aligned.)</em>
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-blue-600 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                1
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Discover</h3>
              <p className="text-gray-600">Comprehensive asset and dependency discovery</p>
            </div>
            <div className="text-center">
              <div className="bg-green-600 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                2
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Analyse</h3>
              <p className="text-gray-600">Deep technical and business analysis</p>
            </div>
            <div className="text-center">
              <div className="bg-orange-600 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                3
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Recommend</h3>
              <p className="text-gray-600">Strategic recommendations and roadmap</p>
            </div>
            <div className="text-center">
              <div className="bg-purple-600 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                4
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Visualise</h3>
              <p className="text-gray-600">Clear visualization of your cloud journey</p>
            </div>
          </div>
        </div>
      </section>

      {/* What to Expect Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">
                What to Expect
              </h2>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-blue-100 w-8 h-8 rounded-full flex items-center justify-center mr-4 mt-1">
                    <span className="text-blue-600 font-bold text-sm">1</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Initial Consultation</h3>
                    <p className="text-gray-600">Comprehensive stakeholder interviews and requirement gathering sessions</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-green-100 w-8 h-8 rounded-full flex items-center justify-center mr-4 mt-1">
                    <span className="text-green-600 font-bold text-sm">2</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Technical Discovery</h3>
                    <p className="text-gray-600">Automated asset discovery and dependency mapping using QUEST tooling</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-orange-100 w-8 h-8 rounded-full flex items-center justify-center mr-4 mt-1">
                    <span className="text-orange-600 font-bold text-sm">3</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Analysis & Recommendations</h3>
                    <p className="text-gray-600">Detailed analysis with actionable recommendations and roadmap development</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-purple-100 w-8 h-8 rounded-full flex items-center justify-center mr-4 mt-1">
                    <span className="text-purple-600 font-bold text-sm">4</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Strategic Presentation</h3>
                    <p className="text-gray-600">Executive-level presentation of findings and strategic roadmap</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-gray-50 p-8 rounded-lg">
              <h2 className="text-3xl font-bold text-gray-900 mb-8">
                Ready to Begin?
              </h2>
              <div className="space-y-6">
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Current-State Portfolio Analysis</h3>
                  <p className="text-gray-600 mb-4">Start with a forensic scan of your applications and infrastructure.</p>
                  <a href="/consult/first-steps" className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium">
                    Learn More →
                  </a>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Get Started with GetConsult</h3>
                  <p className="text-gray-600 mb-6">
                    Take the first step towards cloud success with our comprehensive GetConsult service.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <button
                      onClick={handleOpenModal}
                      className="bg-orange-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-orange-600 transition-colors duration-200"
                    >
                      Book a Demo
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <FooterSection />

      {/* Booking Modal */}
      <BookingModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />
    </div>
  );
}