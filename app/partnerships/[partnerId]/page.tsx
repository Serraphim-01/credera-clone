import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { getPartnershipById, partnerships } from '@/data/partnerships';
import { PartnershipPageProps } from '@/types';

export async function generateStaticParams() {
  return partnerships.map((partnership) => ({
    partnerId: partnership.id,
  }));
}

const PartnershipPage: React.FC<PartnershipPageProps> = async ({ params }) => {
  const { partnerId } = await params;
  const partnership = getPartnershipById(partnerId);

  if (!partnership) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section with Partner Branding */}
      <div className="relative bg-gradient-to-br from-credera-red to-red-600 text-white py-24">
        <div className="max-w-7xl mx-auto px-8">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="flex-1">
              <div className="flex items-center mb-6">
                <Link
                  href="/partnerships"
                  className="text-red-100 hover:text-white transition-colors duration-300 flex items-center gap-2 mb-4"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                  Back to Partnerships
                </Link>
              </div>
              <h1 className="text-5xl font-bold mb-6">{partnership.name}</h1>
              <p className="text-xl text-red-100 leading-relaxed mb-6">
                {partnership.description}
              </p>
              <div className="flex flex-wrap gap-4">
                <span className="bg-white bg-opacity-20 text-white px-4 py-2 rounded-lg font-semibold">
                  {partnership.partnershipLevel}
                </span>
                <a
                  href={partnership.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white text-credera-red px-6 py-2 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300"
                >
                  Visit Website
                </a>
              </div>
            </div>
            <div className="w-64 h-64 bg-white rounded-lg flex items-center justify-center shadow-lg">
              <span className="text-6xl font-bold text-credera-red">
                {partnership.name.charAt(0)}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Content Sections */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-12">
              {/* What We Do Section */}
              <section>
                <h2 className="text-3xl font-bold text-credera-dark mb-6 border-b-2 border-credera-red pb-4">
                  What We Do Together
                </h2>
                <div className="prose prose-lg text-gray-700 max-w-none">
                  <p className="leading-relaxed">{partnership.whatWeDo}</p>
                </div>
              </section>

              {/* Partnership Story Section */}
              <section>
                <h2 className="text-3xl font-bold text-credera-dark mb-6 border-b-2 border-credera-red pb-4">
                  Our Partnership Story
                </h2>
                <div className="prose prose-lg text-gray-700 max-w-none">
                  <p className="leading-relaxed">{partnership.partnerStory}</p>
                </div>
              </section>

              {/* Specializations */}
              <section>
                <h2 className="text-3xl font-bold text-credera-dark mb-6 border-b-2 border-credera-red pb-4">
                  Specializations
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {partnership.specializations.map((spec, index) => (
                    <div
                      key={index}
                      className="bg-gray-50 border border-gray-200 rounded-lg p-4 hover:border-credera-red transition-colors duration-300"
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-credera-red rounded-full flex items-center justify-center">
                          <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <span className="font-semibold text-credera-dark">{spec}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              {/* Partnership Level */}
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-xl font-bold text-credera-dark mb-4">Partnership Level</h3>
                <div className="bg-credera-red text-white px-4 py-2 rounded-lg text-center font-semibold">
                  {partnership.partnershipLevel}
                </div>
              </div>

              {/* Certifications */}
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-xl font-bold text-credera-dark mb-4">Our Certifications</h3>
                <div className="space-y-3">
                  {partnership.certifications.map((cert, index) => (
                    <div
                      key={index}
                      className="bg-white border border-gray-200 rounded-lg p-3 hover:border-credera-red transition-colors duration-300"
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center">
                          <svg className="w-3 h-3 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <span className="text-sm font-medium text-gray-800">{cert}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Quick Links */}
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-xl font-bold text-credera-dark mb-4">Quick Links</h3>
                <div className="space-y-3">
                  <a
                    href={partnership.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block bg-white border border-gray-200 rounded-lg p-3 hover:border-credera-red hover:text-credera-red transition-colors duration-300 text-center font-medium"
                  >
                    Visit {partnership.name}
                  </a>
                  <Link
                    href="/contact"
                    className="block bg-credera-red text-white rounded-lg p-3 hover:bg-red-600 transition-colors duration-300 text-center font-medium"
                  >
                    Contact Us
                  </Link>
                  <Link
                    href="/services"
                    className="block border border-credera-red text-credera-red rounded-lg p-3 hover:bg-credera-red hover:text-white transition-colors duration-300 text-center font-medium"
                  >
                    View Our Services
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Related Partners CTA */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-4xl mx-auto text-center px-8">
          <h2 className="text-3xl font-bold text-credera-dark mb-4">
            Explore More Partnerships
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Discover our comprehensive network of strategic partners and how they can 
            accelerate your technology initiatives.
          </p>
          <Link
            href="/partnerships"
            className="bg-credera-red text-white px-8 py-3 rounded-md font-semibold hover:bg-red-600 transition-colors duration-300"
          >
            View All Partners
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PartnershipPage;