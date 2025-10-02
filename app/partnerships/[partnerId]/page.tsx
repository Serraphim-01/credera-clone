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
      {/* Hero Section */}
      <section className="relative h-screen max-h-[600px] overflow-hidden">
        {/* Background Image - I'll add a real one later */}
        <Image
          src="/TaskImages/services.jpg" // Placeholder, will be replaced with partner building image
          alt={`${partnership.name} office building`}
          fill
          className="object-cover absolute inset-0 z-0"
          priority
          sizes="100vw"
        />

        {/* Content */}
        <div className="relative h-full max-w-7xl mx-auto px-8 z-20">
          <div className="absolute bottom-0 left-8 max-w-lg">
            <div className="bg-white p-8 shadow-xl">
               <div className="w-40 h-16 relative mb-4">
                <Image
                    src={partnership.logo}
                    alt={`${partnership.name} logo`}
                    fill
                    className="object-contain"
                />
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-4 text-black">
                {partnership.name}
              </h1>
              <p className="text-lg text-dark-gray mb-4">
                {partnership.description}
              </p>
               <div className="flex flex-wrap gap-4">
                <span className="bg-light-gray text-dark-gray px-4 py-2 rounded-lg font-semibold">
                  {partnership.partnershipLevel}
                </span>
                <a
                  href={partnership.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-yellow text-black px-6 py-2 rounded-lg font-semibold hover:bg-opacity-80 transition-colors duration-300"
                >
                  Visit Website
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Content Sections */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-12">
              {/* What We Do Section */}
              <section>
                <h2 className="text-3xl font-bold text-black mb-6 border-b-2 border-yellow pb-4">
                  What We Do Together
                </h2>
                <div className="prose prose-lg text-dark-gray max-w-none">
                  <p className="leading-relaxed">{partnership.whatWeDo}</p>
                </div>
              </section>

              {/* Partnership Story Section */}
              <section>
                <h2 className="text-3xl font-bold text-black mb-6 border-b-2 border-yellow pb-4">
                  Our Partnership Story
                </h2>
                <div className="prose prose-lg text-dark-gray max-w-none">
                  <p className="leading-relaxed">{partnership.partnerStory}</p>
                </div>
              </section>

              {/* Specializations */}
              <section>
                <h2 className="text-3xl font-bold text-black mb-6 border-b-2 border-yellow pb-4">
                  Specializations
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {partnership.specializations.map((spec, index) => (
                    <div
                      key={index}
                      className="bg-light-gray border border-gray-200 rounded-lg p-4 hover:border-yellow transition-colors duration-300"
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-yellow rounded-full flex items-center justify-center">
                          <svg className="w-4 h-4 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <span className="font-semibold text-black">{spec}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              {/* Partnership Level */}
              <div className="bg-light-gray rounded-lg p-6">
                <h3 className="text-xl font-bold text-black mb-4">Partnership Level</h3>
                <div className="bg-yellow text-black px-4 py-2 rounded-lg text-center font-semibold">
                  {partnership.partnershipLevel}
                </div>
              </div>

              {/* Certifications */}
              <div className="bg-light-gray rounded-lg p-6">
                <h3 className="text-xl font-bold text-black mb-4">Our Certifications</h3>
                <div className="space-y-3">
                  {partnership.certifications.map((cert, index) => (
                    <div
                      key={index}
                      className="bg-white border border-gray-200 rounded-lg p-3 hover:border-yellow transition-colors duration-300"
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-6 h-6 bg-yellow/20 rounded-full flex items-center justify-center">
                          <svg className="w-3 h-3 text-yellow" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <span className="text-sm font-medium text-dark-gray">{cert}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Quick Links */}
              <div className="bg-light-gray rounded-lg p-6">
                <h3 className="text-xl font-bold text-black mb-4">Quick Links</h3>
                <div className="space-y-3">
                  <a
                    href={partnership.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block bg-white border border-gray-200 rounded-lg p-3 hover:border-yellow hover:text-black transition-colors duration-300 text-center font-medium"
                  >
                    Visit {partnership.name}
                  </a>
                  <Link
                    href="/contact"
                    className="block bg-yellow text-black rounded-lg p-3 hover:bg-opacity-80 transition-colors duration-300 text-center font-medium"
                  >
                    Contact Us
                  </Link>
                  <Link
                    href="/services"
                    className="block border border-yellow text-yellow rounded-lg p-3 hover:bg-yellow hover:text-black transition-colors duration-300 text-center font-medium"
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
      <div className="bg-light-gray py-16">
        <div className="max-w-4xl mx-auto text-center px-8">
          <h2 className="text-3xl font-bold text-black mb-4">
            Explore More Partnerships
          </h2>
          <p className="text-lg text-dark-gray mb-8">
            Discover our comprehensive network of strategic partners and how they can 
            accelerate your technology initiatives.
          </p>
          <Link
            href="/partnerships"
            className="bg-yellow text-black px-8 py-3 rounded-md font-semibold hover:bg-opacity-80 transition-colors duration-300"
          >
            View All Partners
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PartnershipPage;