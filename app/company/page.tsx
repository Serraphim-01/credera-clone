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
  <div className={`bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 max-w-[400px] ${className}`}>
    <div className="relative h-64">
      <Image
        src={person.image}
        alt={person.name}
        fill
        className="object-cover"
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      />
    </div>
    <div className="p-6">
      <h3 className="text-xl font-bold text-gray-900 mb-2">{person.name}</h3>
      <p className="text-blue-600 font-semibold mb-3">{person.title}</p>
      <a
        href={person.linkedin}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center text-blue-600 hover:text-blue-800 text-sm font-medium"
      >
        <svg
          className="w-4 h-4 mr-2"
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
    <div className="flex items-center justify-between mb-8">
      <div className="flex items-center space-x-4">
        <div className="p-3 bg-blue-100 rounded-lg">
          {icon}
        </div>
        <div>
          <h2 className="text-3xl font-bold text-gray-900">{title}</h2>
          <p className="text-gray-600 mt-1">{description}</p>
        </div>
      </div>
      <button
        onClick={() => toggleSection(id)}
        className="p-2 hover:bg-gray-100 rounded-full transition-colors"
        aria-label={`${expandedSections[id] ? 'Collapse' : 'Expand'} ${title} section`}
      >
        {expandedSections[id] ? (
          <ChevronUp className="w-6 h-6 text-gray-600" />
        ) : (
          <ChevronDown className="w-6 h-6 text-gray-600" />
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
        ctaButtons={[
          {
            text: 'Our Story',
            href: '#company-history',
            variant: 'primary'
          },
          {
            text: 'Meet Our Team',
            href: '#leadership',
            variant: 'secondary'
          }
        ]}
      />

      <div className="max-w-7xl mx-auto px-4 py-16 space-y-16">
        {/* Customer Stories Section */}
        <section id="customer-stories">
          <SectionHeader
            id="customer-stories"
            title="Customer Stories"
            icon={<Users className="w-6 h-6 text-blue-600" />}
            description="Real stories of transformation and success from our valued clients"
          />
          {expandedSections['customer-stories'] && (
            <div className="transition-all duration-300">
              <CustomerStoriesSection />
            </div>
          )}
        </section>

        {/* Certifications Section */}
        <section id="certifications">
          <SectionHeader
            id="certifications"
            title="Certifications & Awards"
            icon={<Award className="w-6 h-6 text-blue-600" />}
            description="Industry recognition and professional certifications that validate our expertise"
          />
          {expandedSections['certifications'] && (
            <div className="transition-all duration-300">
              <CertificationsSection />
            </div>
          )}
        </section>

        {/* Leadership Section */}
        <section id="leadership">
          <SectionHeader
            id="leadership"
            title="Leadership"
            icon={<Building className="w-6 h-6 text-blue-600" />}
            description="Meet the visionary leaders driving our organization forward"
          />
          {expandedSections['leadership'] && (
            <div className="transition-all duration-300 space-y-12">
              {/* Chairman and Directors Combined */}
              <div>
                <div className="flex flex-wrap justify-center gap-6">
                  {/* Chairman */}
                  {leadershipTeam.chairman.map((person) => (
                    <LeadershipCard key={person.id} person={person} />
                  ))}
                  {/* Directors */}
                  {leadershipTeam.directors.map((person) => (
                    <LeadershipCard key={person.id} person={person} />
                  ))}
                </div>
              </div>

              {/* Management Team */}
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Management Team</h3>
                <div className="flex flex-wrap justify-center gap-6">
                  {leadershipTeam.management.map((person) => (
                    <LeadershipCard key={person.id} person={person} />
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
            icon={<Clock className="w-6 h-6 text-blue-600" />}
            description="Our journey of growth, innovation, and impact over the years"
          />
          {expandedSections['company-history'] && (
            <div className="transition-all duration-300">
              <CompanyHistoryTimeline />
            </div>
          )}
        </section>
      </div>

      <FooterSection />
    </div>
  );
};

export default CompanyPage;