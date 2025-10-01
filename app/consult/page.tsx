'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { FaCloud, FaExpandArrowsAlt, FaDollarSign, FaExchangeAlt, FaShieldAlt } from 'react-icons/fa';
import FooterSection from '@/components/FooterSection';
import BookingModal from '@/components/BookingModal';

export default function ConsultOverview() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalType, setModalType] = useState<'demo' | 'service'>('demo');

  const handleBooking = (type: 'demo' | 'service') => {
    setModalType(type);
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
          alt="Azure Cloud Advisory Services"
          fill
          className="object-cover absolute inset-0 z-0"
          priority
          sizes="100vw"
        />

        {/* Content */}
        <div className="relative h-full max-w-7xl mx-auto px-8 z-20">
          <div className="absolute bottom-0 left-8 max-w-md">
            <div className="bg-white p-8 shadow-xl">
              <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
                GetConsult
              </h1>
              <h2 className="text-xl md:text-2xl font-semibold mb-4 text-gray-700">
                Azure Cloud Advisory
              </h2>
              <p className="text-lg text-gray-600">
                The first step to success on Cloud
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Cloud Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Why Move to Cloud?
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Cloud transformation is no longer optional—it's essential for businesses that want to stay competitive,
              agile, and prepared for the future. Discover the key benefits that make cloud adoption a strategic imperative.
            </p>
          </div>
        </div>
      </section>

      {/* Statistics Section with Icons and Gartner Quotes */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          {/* Icons Section moved here */}
          <div className="mb-16">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
              {/* Speed & Service Continuity */}
              <div className="text-center">
                <div className="bg-orange-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <FaCloud className="text-orange-600 text-3xl" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900">
                  Speed & Service Continuity
                </h3>
              </div>

              {/* Scalability */}
              <div className="text-center">
                <div className="bg-orange-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <FaExpandArrowsAlt className="text-orange-600 text-3xl" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900">
                  Scalability
                </h3>
              </div>

              {/* Agile Cost Structures */}
              <div className="text-center">
                <div className="bg-orange-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <FaDollarSign className="text-orange-600 text-3xl" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900">
                  Agile Cost Structures
                </h3>
              </div>

              {/* Flexibility */}
              <div className="text-center">
                <div className="bg-orange-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <FaExchangeAlt className="text-orange-600 text-3xl" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900">
                  Flexibility
                </h3>
              </div>

              {/* Resilience & Security */}
              <div className="text-center">
                <div className="bg-orange-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <FaShieldAlt className="text-orange-600 text-3xl" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900">
                  Resilience & Security
                </h3>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Quote 1 */}
            <div className="bg-white p-8 rounded-lg shadow-lg border-l-4 border-orange-500">
              <div className="text-6xl text-orange-500 mb-4">"”</div>
              <blockquote className="text-2xl font-medium text-gray-900 mb-6 leading-relaxed">
                There is no business strategy without a cloud strategy
              </blockquote>
              <cite className="text-lg text-gray-600 font-semibold">
                — Gartner, 2021
              </cite>
            </div>

            {/* Quote 2 */}
            <div className="bg-white p-8 rounded-lg shadow-lg border-l-4 border-blue-600">
              <div className="text-6xl text-blue-600 mb-4">"”</div>
              <blockquote className="text-2xl font-medium text-gray-900 mb-6 leading-relaxed">
                63% achieved growth, efficiency, innovation and other CEO priorities as an outcome of adopting cloud
              </blockquote>
              <cite className="text-lg text-gray-600 font-semibold">
                — Gartner, 2021
              </cite>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Ready to Start Your Cloud Journey?
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Take the first step towards cloud success. Our expert consultants are ready to guide you
            through every phase of your cloud transformation journey.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => handleBooking('demo')}
              className="bg-orange-500 text-white px-8 py-4 rounded-lg font-semibold hover:bg-orange-600 transition-colors duration-200"
            >
              Book a Demo
            </button>
            <button 
              onClick={() => handleBooking('service')}
              className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200"
            >
              Book a Service
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <FooterSection />
      
      {/* Booking Modal */}
      <BookingModal 
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        type={modalType}
      />
    </div>
  );
}