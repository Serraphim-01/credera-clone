'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import StandardHeroSection from '@/components/StandardHeroSection';
import FooterSection from '@/components/FooterSection';
import CompanyHistoryTimeline from '@/components/CompanyHistoryTimeline';
import CertificationsSection from '@/components/CertificationsSection';
import CustomerStoriesSection from '@/components/CustomerStoriesSection';
import { ChevronUp, ChevronDown, Building, Users, Award, Clock } from 'lucide-react';

// Leadership data
const leadershipTeam = {
  chairman: [
    {
      id: 'chairman-1',
      name: 'John Stevens',
      title: 'Chairman of the Board',
      image: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg',
      bio: 'With over 30 years of experience in technology and business strategy, John leads the board with vision and expertise.',
      linkedin: 'https://linkedin.com/in/johnstevens'
    }
  ],
  directors: [
    {
      id: 'director-1',
      name: 'Sarah Mitchell',
      title: 'Board Director - Strategy',
      image: 'https://images.pexels.com/photos/3777946/pexels-photo-3777946.jpeg',
      bio: 'Former Fortune 500 executive with extensive experience in digital transformation and strategic planning.',
      linkedin: 'https://linkedin.com/in/sarahmitchell'
    },
    {
      id: 'director-2',
      name: 'Michael Thompson',
      title: 'Board Director - Finance',
      image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg',
      bio: 'Distinguished financial leader with expertise in corporate finance and mergers & acquisitions.',
      linkedin: 'https://linkedin.com/in/michaelthompson'
    }
  ],
  management: [
    {
      id: 'ceo-1',
      name: 'David Rodriguez',
      title: 'Chief Executive Officer',
      image: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg',
      bio: 'Visionary leader driving innovation and growth across all business units.',
      linkedin: 'https://linkedin.com/in/davidrodriguez'
    },
    {
      id: 'gm-1',
      name: 'Jennifer Walsh',
      title: 'General Manager',
      image: 'https://images.pexels.com/photos/3777946/pexels-photo-3777946.jpeg',
      bio: 'Operational excellence expert ensuring seamless delivery across all client engagements.',
      linkedin: 'https://linkedin.com/in/jenniferwalsh'
    },
    {
      id: 'ed-1',
      name: 'Robert Kim',
      title: 'Executive Director',
      image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg',
      bio: 'Strategic planning and business development leader with focus on market expansion.',
      linkedin: 'https://linkedin.com/in/robertkim'
    },
    {
      id: 'cfo-1',
      name: 'Amanda Chen',
      title: 'Chief Financial Officer',
      image: 'https://images.pexels.com/photos/3777946/pexels-photo-3777946.jpeg',
      bio: 'Financial strategy expert ensuring sustainable growth and fiscal responsibility.',
      linkedin: 'https://linkedin.com/in/amandachen'
    },
    {
      id: 'hr-1',
      name: 'Lisa Johnson',
      title: 'HR Manager',
      image: 'https://images.pexels.com/photos/3777946/pexels-photo-3777946.jpeg',
      bio: 'People and culture champion fostering talent development and organizational excellence.',
      linkedin: 'https://linkedin.com/in/lisajohnson'
    },
    {
      id: 'compliance-1',
      name: 'Mark Davis',
      title: 'Compliance Manager',
      image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg',
      bio: 'Regulatory and compliance expert ensuring adherence to industry standards and regulations.',
      linkedin: 'https://linkedin.com/in/markdavis'
    }
  ]
};

const LeadershipCard: React.FC<{
  person: typeof leadershipTeam.chairman[0];
  className?: string;
}> = ({ person, className = '' }) => (
  <div className={`bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 w-full max-w-[400px] min-w-0 ${className}`}>
    <div className="relative h-64 md:h-56 sm:h-48">
      <Image
        src={person.image}
        alt={person.name}
        fill
        className="object-cover"
        sizes="(max-width: 640px) 45vw, (max-width: 768px) 40vw, 400px"
      />
    </div>
    <div className="p-6 md:p-4 sm:p-3">
      <h3 className="text-xl md:text-lg sm:text-xs font-bold text-black mb-2 sm:mb-0">{person.name}</h3>
      <p className="text-dark-gray font-semibold mb-3 md:mb-2 sm:mb-1 text-base md:text-sm sm:text-xs">{person.title}</p>
      <a
        href={person.linkedin}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center text-dark-gray hover:text-yellow text-base md:text-sm sm:text-xs font-medium"
      >
        <svg
          className="w-4 h-4 md:w-3 md:h-3 sm:w-2.5 sm:h-2.5 mr-2"
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
        Connect
      </a>
    </div>
  </div>
);

const CompanyPage = () => {
  const [expandedSections, setExpandedSections] = useState<Record<string, boolean>>({
    'customer-stories': true,
    'certifications': true,
    'leadership': true,
    'company-history': true
  });

  const toggleSection = (sectionId: string) => {
    setExpandedSections(prev => ({
      ...prev,
      [sectionId]: !prev[sectionId]
    }));
  };

  const SectionHeader: React.FC<{
    id: string;
    title: string;
    icon: React.ReactNode;
    description: string;
  }> = ({ id, title, icon, description }) => (
    <div className="flex items-center justify-between mb-8 md:mb-6 sm:mb-4">
      <div className="flex items-center space-x-4 md:space-x-3 sm:space-x-2">
        <div className="p-3 md:p-2 sm:p-1.5 bg-light-gray rounded-lg">
          {icon}
        </div>
        <div>
          <h2 className="text-3xl md:text-2xl sm:text-xl font-bold text-black">{title}</h2>
          <p className="text-gray mt-1 md:mt-0.5 text-base md:text-sm sm:text-xs">{description}</p>
        </div>
      </div>
      <button
        onClick={() => toggleSection(id)}
        className="p-2 md:p-1.5 sm:p-1 hover:bg-light-gray rounded-full transition-colors"
        aria-label={`${expandedSections[id] ? 'Collapse' : 'Expand'} ${title} section`}
      >
        {expandedSections[id] ? (
          <ChevronUp className="w-6 h-6 md:w-5 md:h-5 sm:w-4 sm:h-4 text-dark-gray" />
        ) : (
          <ChevronDown className="w-6 h-6 md:w-5 md:h-5 sm:w-4 sm:h-4 text-dark-gray" />
        )}
      </button>
    </div>
  );

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <StandardHeroSection
        title="About Our Company"
        subtitle="Building the Future Through Innovation and Excellence"
        description="A global consulting firm founded on the principle of authentic relationships and exceptional results. Learn about our story, values, and the people who make our success possible."
        backgroundImage="/TaskImages/meet.jpg"
      />

      {/* Reduced container width from max-w-7xl to max-w-6xl to fit 3 cards of 400px each */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-12 sm:py-8 space-y-16 md:space-y-12 sm:space-y-8">
        {/* Leadership Section */}
        <section id="leadership">
          <SectionHeader
            id="leadership"
            title="Leadership"
            icon={<Building className="w-6 h-6 md:w-5 md:h-5 sm:w-4 sm:h-4 text-black" />}
            description="Meet the visionary leaders driving our organization forward"
          />
          {expandedSections['leadership'] && (
            <div className="transition-all duration-300 space-y-12 md:space-y-8 sm:space-y-6">
              {/* Chairman and Directors Combined */}
              <div>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-6 md:gap-8 justify-center max-w-[660px] mx-auto">
                  {leadershipTeam.chairman.map((person) => (
                    <LeadershipCard
                      key={person.id}
                      person={person}
                      className="w-full max-w-[200px] mx-auto"
                    />
                  ))}
                  {leadershipTeam.directors.map((person) => (
                    <LeadershipCard
                      key={person.id}
                      person={person}
                      className="w-full max-w-[200px] mx-auto"
                    />
                  ))}
                </div>

              </div>

              {/* Management Team */}
              <div>
                <h3 className="text-2xl md:text-xl sm:text-lg font-bold text-black mb-6 md:mb-4 sm:mb-3">Management Team</h3>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-6 md:gap-8 justify-center max-w-[660px] mx-auto">
                  {leadershipTeam.management.map((person) => (
                    <LeadershipCard
                      key={person.id}
                      person={person}
                      className="w-full max-w-[200px] mx-auto"
                    />
                  ))}
                </div>

              </div>
            </div>
          )}
        </section>

        {/* Company History Section */}
        <section id="company-history">
          <SectionHeader
            id="company-history"
            title="Company History"
            icon={<Clock className="w-6 h-6 md:w-5 md:h-5 sm:w-4 sm:h-4 text-black" />}
            description="Our journey of growth, innovation, and impact over the years"
          />
          {expandedSections['company-history'] && (
            <div className="transition-all duration-300">
              <CompanyHistoryTimeline />
            </div>
          )}
        </section>

        {/* Certifications Section */}
        <section id="certifications">
          <SectionHeader
            id="certifications"
            title="Certifications & Awards"
            icon={<Award className="w-6 h-6 md:w-5 md:h-5 sm:w-4 sm:h-4 text-black" />}
            description="Industry recognition and professional certifications that validate our expertise"
          />
          {expandedSections['certifications'] && (
            <div className="transition-all duration-300">
              <CertificationsSection />
            </div>
          )}
        </section>

        {/* Customer Stories Section */}
        <section id="customer-stories">
          <SectionHeader
            id="customer-stories"
            title="Customer Stories"
            icon={<Users className="w-6 h-6 md:w-5 md:h-5 sm:w-4 sm:h-4 text-black" />}
            description="Real stories of transformation and success from our valued clients"
          />
          {expandedSections['customer-stories'] && (
            <div className="transition-all duration-300">
              <CustomerStoriesSection />
            </div>
          )}
        </section>
      </div>

      <FooterSection />
    </div>
  );
};

export default CompanyPage;