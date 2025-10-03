'use client';

import React from 'react';
import Link from 'next/link';
import { getAllSolutions } from '@/data/solutions';
import StandardHeroSection from '@/components/StandardHeroSection';
import FooterSection from '@/components/FooterSection';

export default function SolutionsPage() {
  const solutions = getAllSolutions();
  return (
    <>
      {/* Hero Section */}
      <StandardHeroSection
        title="Solutions"
        subtitle="Cutting-edge service offerings"
        description="Our cutting-edge service offerings are shaped by true technology thought leaders. At Credera, we are consistently evolving our service offerings to ensure they work for the organizations of the future."
        backgroundImage="/TaskImages/services.jpg"
        maxContentWidth="max-w-lg"
      />

      {/* Solutions Grid */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {solutions.map((solution, index) => (
              <Link
                href={`/solutions/${solution.id}`}
                className="group block bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 p-8 border border-gray-100 h-full"
                style={{
                  animationDelay: `${index * 100}ms`
                }}
              >
                <div className="flex flex-col justify-between h-full">
                  {/* Title and Description */}
                  <div className="text-left">
                    <h3 className="text-2xl font-bold text-credera-dark mb-4">
                      {solution.title}
                    </h3>
                    <p className="text-credera-gray-600 leading-relaxed mb-6">
                      {solution.description}
                    </p>
                  </div>

                  {/* CTA */}
                  <div className="mt-auto relative inline-flex items-center font-semibold text-black">
                    EXPLORE {solution.title.toUpperCase()}
                    <svg
                      className="w-4 h-4 ml-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                    <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-[var(--color-yellow)] transition-all duration-300 group-hover:w-full"></span>
                  </div>
                </div>
              </Link>

            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <FooterSection />
    </>
  );
}