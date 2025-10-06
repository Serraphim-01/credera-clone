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
      {/* GetConsult Hero Section */}
      <section className="relative min-h-[500px] lg:min-h-[600px] flex items-center justify-center text-center lg:text-left lg:justify-start">
        <Image
          src="/TaskImages/services.jpg"
          alt="GetConsult – Azure Cloud Advisory by Getronics"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="lg:absolute lg:bottom-8 lg:left-8 max-w-lg w-full">
            <div className="bg-white p-6 sm:p-8 shadow-xl rounded-lg">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-gray-900">
                GetConsult
              </h1>
              <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-4 text-gray-700">
                The first step to success on Cloud
              </h2>
              <p className="text-base sm:text-lg text-gray-600 mb-4">
                <em>(Azure Cloud Advisory)</em>
              </p>
              <blockquote className="text-sm sm:text-base italic text-gray-700 border-l-4 border-yellow pl-4">
                "There is no business strategy without a cloud strategy."
                <br />
                <cite className="text-xs sm:text-sm text-gray-600">— Gartner, 2021</cite>
              </blockquote>
            </div>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
              Cloud Has Shifted From Computing Style to Business Foundation
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Cloud has shifted from a style of computing to <strong>the</strong> foundation for business innovation.
              Our GetConsult service turns that principle into an executable, low-risk roadmap.
            </p>
          </div>
        </div>
      </section>

      {/* Why Talk Cloud Now Section */}
      <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-8">
              Why talk cloud now?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 max-w-5xl mx-auto">
              <div className="bg-white p-6 sm:p-8 rounded-lg shadow-lg">
                <div className="text-4xl sm:text-5xl font-bold text-yellow mb-4">63%</div>
                <p className="text-base sm:text-lg text-gray-700">of CEOs already achieve growth, efficiency & innovation through cloud</p>
              </div>
              <div className="bg-white p-6 sm:p-8 rounded-lg shadow-lg">
                <div className="text-4xl sm:text-5xl font-bold text-yellow mb-4">80%</div>
                <p className="text-base sm:text-lg text-gray-700">of IT budgets still "keep the lights on" and 80% of workloads are legacy</p>
              </div>
              <div className="bg-white p-6 sm:p-8 rounded-lg shadow-lg">
                <div className="text-4xl sm:text-5xl font-bold text-yellow mb-4">20%</div>
                <p className="text-base sm:text-lg text-gray-700">Freeing just 20% of that budget can fund core transformation</p>
              </div>
            </div>
          </div>

          {/* Getronics Cloud Framework */}
          <div className="mb-12 sm:mb-16">
            <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 text-center mb-10 sm:mb-12">
              Getronics Cloud Framework – 4 pillars
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="bg-light-yellow w-16 h-16 sm:w-20 sm:h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <FaChartBar className="text-yellow text-2xl sm:text-3xl" />
                </div>
                <h4 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">1. Advise</h4>
                <p className="text-gray-600">GetConsult (this page)</p>
              </div>

              <div className="text-center">
                <div className="bg-light-yellow w-16 h-16 sm:w-20 sm:h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <FaCog className="text-yellow text-2xl sm:text-3xl" />
                </div>
                <h4 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">2. Enable</h4>
                <p className="text-gray-600">GetFoundation</p>
              </div>

              <div className="text-center">
                <div className="bg-light-yellow w-16 h-16 sm:w-20 sm:h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <FaShieldAlt className="text-yellow text-2xl sm:text-3xl" />
                </div>
                <h4 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">3. Operate</h4>
                <p className="text-gray-600">GetManage / GetSecure</p>
              </div>

              <div className="text-center">
                <div className="bg-light-yellow w-16 h-16 sm:w-20 sm:h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <FaPlane className="text-yellow text-2xl sm:text-3xl" />
                </div>
                <h4 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">4. Evolve</h4>
                <p className="text-gray-600">GetTransform / GetDevelop</p>
              </div>
            </div>
          </div>

          {/* GetConsult in one sentence */}
          <div className="text-center">
            <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">
              GetConsult in one sentence
            </h3>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              We visualise your end-to-end cloud journey—using multi-cloud expertise, hyperscaler alliances and automated tooling—to deliver <strong>real business outcomes</strong>, one client at a time.
            </p>
          </div>
        </div>
      </section>

      {/* Four Advisory Focus Areas */}
      <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 text-center mb-10 sm:mb-12">
            Four advisory focus areas (service catalogue)
          </h2>
          {/* On mobile, use a card layout. On desktop, show the table. */}
          <div className="md:hidden space-y-4">
            <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
              <h3 className="font-semibold text-gray-900 mb-2">1. Current-State Portfolio Analysis</h3>
              <p className="text-gray-700 text-sm">"What do I own, how is it connected, what can move?"</p>
            </div>
            <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
              <h3 className="font-semibold text-gray-900 mb-2">2. Cloud TCO Assessment</h3>
              <p className="text-gray-700 text-sm">"What will it really cost—and save?"</p>
            </div>
            <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
              <h3 className="font-semibold text-gray-900 mb-2">3. Future-State Realisation Feasibility</h3>
              <p className="text-gray-700 text-sm">"Can my people, process & tech scale on cloud?"</p>
            </div>
            <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
              <h3 className="font-semibold text-gray-900 mb-2">4. Cloud Adoption Strategy</h3>
              <p className="text-gray-700 text-sm">"How do I phase migration and guarantee ROI?"</p>
            </div>
          </div>
          <div className="hidden md:block overflow-x-auto">
            <table className="w-full border-collapse border border-gray-300 text-left">
              <thead>
                <tr className="bg-gray-100">
                  <th className="border border-gray-300 px-6 py-4 font-semibold text-gray-900">Focus Area</th>
                  <th className="border border-gray-300 px-6 py-4 font-semibold text-gray-900">Typical Questions We Answer</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-300 px-6 py-4 font-medium text-gray-900">1. Current-State Portfolio Analysis</td>
                  <td className="border border-gray-300 px-6 py-4 text-gray-700">"What do I own, how is it connected, what can move?"</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-300 px-6 py-4 font-medium text-gray-900">2. Cloud TCO Assessment</td>
                  <td className="border border-gray-300 px-6 py-4 text-gray-700">"What will it really cost—and save?"</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-6 py-4 font-medium text-gray-900">3. Future-State Realisation Feasibility</td>
                  <td className="border border-gray-300 px-6 py-4 text-gray-700">"Can my people, process & tech scale on cloud?"</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-300 px-6 py-4 font-medium text-gray-900">4. Cloud Adoption Strategy</td>
                  <td className="border border-gray-300 px-6 py-4 text-gray-700">"How do I phase migration and guarantee ROI?"</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* 4-step delivery engine */}
      <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-10 sm:mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
              4-step delivery engine
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-600">
              Discover → Analyse → Recommend → Visualise
            </p>
            <p className="text-sm sm:text-base md:text-lg text-gray-500 mt-4">
              <em>(Repeatable, accelerator-enhanced, CMDB-aligned.)</em>
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-foreground text-yellow w-12 h-12 sm:w-16 sm:h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-lg sm:text-xl font-bold">1</div>
              <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">Discover</h3>
              <p className="text-gray-600 text-sm sm:text-base">Comprehensive asset and dependency discovery</p>
            </div>
            <div className="text-center">
              <div className="bg-foreground text-yellow w-12 h-12 sm:w-16 sm:h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-lg sm:text-xl font-bold">2</div>
              <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">Analyse</h3>
              <p className="text-gray-600 text-sm sm:text-base">Deep technical and business analysis</p>
            </div>
            <div className="text-center">
              <div className="bg-foreground text-yellow w-12 h-12 sm:w-16 sm:h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-lg sm:text-xl font-bold">3</div>
              <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">Recommend</h3>
              <p className="text-gray-600 text-sm sm:text-base">Strategic recommendations and roadmap</p>
            </div>
            <div className="text-center">
              <div className="bg-foreground text-yellow w-12 h-12 sm:w-16 sm:h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-lg sm:text-xl font-bold">4</div>
              <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">Visualise</h3>
              <p className="text-gray-600 text-sm sm:text-base">Clear visualization of your cloud journey</p>
            </div>
          </div>
        </div>
      </section>

      {/* What to Expect Section */}
      <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12">
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-8">
                What to Expect
              </h2>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-light-yellow flex items-center justify-center mr-4 mt-1">
                    <span className="text-foreground font-bold text-sm">1</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1 sm:mb-2">Initial Consultation</h3>
                    <p className="text-gray-600 text-sm sm:text-base">Comprehensive stakeholder interviews and requirement gathering sessions</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-light-yellow flex items-center justify-center mr-4 mt-1">
                    <span className="text-foreground font-bold text-sm">2</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1 sm:mb-2">Technical Discovery</h3>
                    <p className="text-gray-600 text-sm sm:text-base">Automated asset discovery and dependency mapping using QUEST tooling</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-light-yellow flex items-center justify-center mr-4 mt-1">
                    <span className="text-foreground font-bold text-sm">3</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1 sm:mb-2">Analysis & Recommendations</h3>
                    <p className="text-gray-600 text-sm sm:text-base">Detailed analysis with actionable recommendations and roadmap development</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-light-yellow flex items-center justify-center mr-4 mt-1">
                    <span className="text-foreground font-bold text-sm">4</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1 sm:mb-2">Strategic Presentation</h3>
                    <p className="text-gray-600 text-sm sm:text-base">Executive-level presentation of findings and strategic roadmap</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 p-6 sm:p-8 rounded-lg">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-8">
                Ready to Begin?
              </h2>
              <div className="space-y-6">
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Current-State Portfolio Analysis</h3>
                  <p className="text-gray-600 mb-4">Start with a forensic scan of your applications and infrastructure.</p>
                  <a
                    href="/consult/first-steps"
                    className="
    relative inline-flex items-center font-medium text-[color:var(--color-foreground)]
    hover:text-[color:var(--color-foreground)]
    after:content-[''] after:absolute after:left-0 after:bottom-0
    after:h-[2px] after:w-full after:bg-[color:var(--color-foreground)]
    after:origin-left after:scale-x-0 after:transition-transform after:duration-300
    hover:after:scale-x-100
  "
                  >
                    Learn More
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
                      className="
    relative inline-flex items-center gap-2
    bg-[color:var(--color-foreground)] text-[color:var(--color-yellow)]
    px-6 py-3 rounded-lg font-semibold
    transition-colors duration-200
    hover:bg-[color:var(--color-dark-gray)]
    group
  "
                    >
                      <span>Book a Demo</span>
                      <span
                        className="
      transform translate-x-1 opacity-0
      transition-all duration-300 ease-out
      group-hover:translate-x-2 group-hover:opacity-100
    "
                      >
                        →
                      </span>
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