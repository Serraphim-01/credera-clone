'use client';

import React, { useState } from 'react';
import FooterSection from '@/components/FooterSection';

interface JobOpening {
  id: string;
  title: string;
  applicationDeadline: string;
  description: string;
  requirements: string[];
  responsibilities: string[];
}

const jobOpenings: JobOpening[] = [
  {
    id: '1',
    title: 'Senior Software Engineer',
    applicationDeadline: 'Applications due by December 15, 2024',
    description: 'Join our dynamic engineering team to build cutting-edge solutions for Fortune 500 clients. We are looking for a passionate developer with expertise in modern web technologies and cloud platforms.',
    requirements: [
      '5+ years of experience in software development',
      'Proficiency in React, Node.js, and TypeScript',
      'Experience with cloud platforms (AWS, Azure, or GCP)',
      'Strong problem-solving skills and attention to detail',
      'Bachelor\'s degree in Computer Science or related field'
    ],
    responsibilities: [
      'Design and develop scalable web applications',
      'Collaborate with cross-functional teams to deliver high-quality solutions',
      'Mentor junior developers and contribute to code reviews',
      'Participate in architectural decisions and technical planning',
      'Stay current with emerging technologies and best practices'
    ]
  },
  {
    id: '2',
    title: 'Management Consultant',
    applicationDeadline: 'Applications due by January 10, 2025',
    description: 'Help leading organizations transform their business operations and achieve strategic objectives. This role offers the opportunity to work on diverse projects across multiple industries.',
    requirements: [
      'MBA or advanced degree preferred',
      '3+ years of consulting or strategy experience',
      'Strong analytical and problem-solving capabilities',
      'Excellent communication and presentation skills',
      'Experience with business process improvement'
    ],
    responsibilities: [
      'Lead client engagements and project deliverables',
      'Conduct market research and competitive analysis',
      'Develop strategic recommendations and implementation plans',
      'Facilitate workshops and stakeholder meetings',
      'Build strong client relationships and drive business development'
    ]
  },
  {
    id: '3',
    title: 'Data Scientist',
    applicationDeadline: 'Applications due by November 30, 2024',
    description: 'Drive data-driven decision making by developing advanced analytics solutions and machine learning models. Join our growing data science practice and work with cutting-edge technologies.',
    requirements: [
      'Master\'s or PhD in Data Science, Statistics, or related field',
      'Proficiency in Python, R, and SQL',
      'Experience with machine learning frameworks (TensorFlow, PyTorch)',
      'Strong statistical analysis and modeling skills',
      'Experience with big data technologies (Spark, Hadoop)'
    ],
    responsibilities: [
      'Develop predictive models and analytics solutions',
      'Analyze complex datasets to extract business insights',
      'Collaborate with clients to understand business requirements',
      'Present findings and recommendations to executive stakeholders',
      'Stay current with latest data science methodologies and tools'
    ]
  },
  {
    id: '4',
    title: 'UX/UI Designer',
    applicationDeadline: 'Applications due by December 31, 2024',
    description: 'Create exceptional user experiences for digital products and services. Work closely with clients and development teams to deliver intuitive, accessible, and visually compelling designs.',
    requirements: [
      'Bachelor\'s degree in Design, HCI, or related field',
      '4+ years of UX/UI design experience',
      'Proficiency in Figma, Sketch, and Adobe Creative Suite',
      'Strong portfolio demonstrating design thinking process',
      'Experience with user research and usability testing'
    ],
    responsibilities: [
      'Design user interfaces for web and mobile applications',
      'Conduct user research and usability testing',
      'Create wireframes, prototypes, and high-fidelity mockups',
      'Collaborate with developers to ensure design implementation',
      'Advocate for user-centered design principles'
    ]
  },
  {
    id: '5',
    title: 'Project Manager',
    applicationDeadline: 'Applications due by January 20, 2025',
    description: 'Lead complex technology and business transformation projects from initiation to delivery. Ensure projects are completed on time, within scope, and exceed client expectations.',
    requirements: [
      'PMP certification preferred',
      '5+ years of project management experience',
      'Experience with Agile and Waterfall methodologies',
      'Strong leadership and communication skills',
      'Background in technology or business consulting'
    ],
    responsibilities: [
      'Manage project scope, timeline, and budget',
      'Coordinate cross-functional project teams',
      'Communicate project status to stakeholders',
      'Identify and mitigate project risks',
      'Ensure quality deliverables and client satisfaction'
    ]
  }
];

const CareersPage: React.FC = () => {
  const [expandedJob, setExpandedJob] = useState<string | null>(null);

  const toggleJobExpansion = (jobId: string) => {
    setExpandedJob(expandedJob === jobId ? null : jobId);
  };

  const handleApply = (jobTitle: string) => {
    alert(`Thank you for your interest in the ${jobTitle} position! Our application system is coming soon.`);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-credera-dark text-white py-20 sm:py-12">
        <div className="max-w-7xl mx-auto px-8 sm:px-4">
          <div className="text-center">
            <h1 className="text-5xl sm:text-3xl font-bold mb-6 sm:mb-4">
              Join Our Team
            </h1>
            <p className="text-xl sm:text-base text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Build your career with a global consulting firm that values innovation, collaboration, and professional growth. 
              Discover opportunities to make a meaningful impact while working with industry-leading clients.
            </p>
          </div>
        </div>
      </div>

      {/* Job Openings Section */}
      <div className="py-16 sm:py-8">
        <div className="max-w-[2000px] mx-auto px-8 sm:px-4">
          <div className="text-center mb-12 sm:mb-8">
            <h2 className="text-4xl sm:text-2xl font-bold text-credera-dark mb-4 sm:mb-2">
              Current Opportunities
            </h2>
            <p className="text-lg sm:text-base text-gray-600 max-w-2xl mx-auto">
              Explore our open positions and find the perfect role to advance your career
            </p>
          </div>

          {/* Large screen layout with sidebar on the right */}
          <div className="flex flex-col xl:flex-row gap-8">
            {/* Job Cards - Takes up more space on large screens */}
            <div className="xl:flex-1 space-y-0">
            {jobOpenings.map((job, index) => (
              <div
                key={job.id}
                className={`w-full bg-white shadow-sm transition-all duration-300 ease-in-out ${
                  expandedJob === job.id ? 'shadow-lg' : 'hover:shadow-md'
                } ${index !== jobOpenings.length - 1 ? 'border-b border-gray-200' : ''}`}
              >
                {/* Job Header */}
                <div className="p-8 sm:p-4">
                  <div className="flex flex-col sm:flex-col md:flex-row items-start md:items-center justify-between gap-4">
                    <div className="flex-1">
                      <h3 className="text-2xl sm:text-lg font-bold text-credera-dark mb-2">
                        {job.title}
                      </h3>
                      <p className="text-gray-600 mb-4 sm:mb-3 sm:text-sm">
                        {job.applicationDeadline}
                      </p>
                      <button
                        onClick={() => toggleJobExpansion(job.id)}
                        className="text-credera-red font-medium hover:text-red-700 transition-colors duration-200 relative group sm:text-sm"
                      >
                        View More
                        <span className={`absolute bottom-0 left-0 w-0 h-0.5 bg-credera-red transition-all duration-300 group-hover:w-full`}></span>
                      </button>
                    </div>
                    <div className="ml-0 md:ml-8">
                      <button
                        onClick={() => handleApply(job.title)}
                        className="bg-credera-red text-white px-8 py-3 sm:px-4 sm:py-2 rounded-md hover:bg-red-700 transition-colors duration-200 font-semibold sm:text-sm w-full md:w-auto"
                      >
                        Apply
                      </button>
                    </div>
                  </div>
                </div>

                {/* Expanded Job Details */}
                <div
                  className={`overflow-hidden transition-all duration-500 ease-in-out ${
                    expandedJob === job.id 
                      ? 'max-h-screen opacity-100' 
                      : 'max-h-0 opacity-0'
                  }`}
                >
                  <div className="px-8 pb-8 sm:px-4 sm:pb-4 border-t border-gray-100">
                    <div className="pt-6 sm:pt-4 space-y-6 sm:space-y-4">
                      {/* Job Description */}
                      <div>
                        <h4 className="text-lg sm:text-base font-semibold text-credera-dark mb-3 sm:mb-2">
                          About This Role
                        </h4>
                        <p className="text-gray-700 sm:text-sm leading-relaxed">
                          {job.description}
                        </p>
                      </div>

                      <div className="grid md:grid-cols-2 gap-8 sm:gap-4">
                        {/* Requirements */}
                        <div>
                          <h4 className="text-lg sm:text-base font-semibold text-credera-dark mb-3 sm:mb-2">
                            Requirements
                          </h4>
                          <ul className="space-y-2 sm:space-y-1">
                            {job.requirements.map((requirement, reqIndex) => (
                              <li key={reqIndex} className="flex items-start">
                                <span className="text-credera-red mr-3 mt-1">•</span>
                                <span className="text-gray-700 sm:text-sm">{requirement}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Responsibilities */}
                        <div>
                          <h4 className="text-lg sm:text-base font-semibold text-credera-dark mb-3 sm:mb-2">
                            Key Responsibilities
                          </h4>
                          <ul className="space-y-2 sm:space-y-1">
                            {job.responsibilities.map((responsibility, respIndex) => (
                              <li key={respIndex} className="flex items-start">
                                <span className="text-credera-red mr-3 mt-1">•</span>
                                <span className="text-gray-700 sm:text-sm">{responsibility}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>

                      {/* Apply Button in Expanded View */}
                      <div className="pt-4 sm:pt-3 border-t border-gray-100">
                        <button
                          onClick={() => handleApply(job.title)}
                          className="bg-credera-red text-white px-8 py-3 sm:px-4 sm:py-2 rounded-md hover:bg-red-700 transition-colors duration-200 font-semibold sm:text-sm w-full md:w-auto"
                        >
                          Apply for {job.title}
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
            </div>
            
            {/* Sidebar for large screens - Company benefits/culture info */}
            <div className="xl:w-96 xl:block hidden">
              <div className="bg-gray-50 rounded-lg p-8 sm:p-4 sticky top-8">
                <h3 className="text-2xl sm:text-xl font-bold text-credera-dark mb-8 sm:mb-6">Why Join Us?</h3>
                
                <div className="space-y-8 sm:space-y-6">
                  <div>
                    <div className="w-16 h-16 sm:w-12 sm:h-12 bg-credera-red rounded-full flex items-center justify-center mb-4 sm:mb-3">
                      <svg className="w-8 h-8 sm:w-6 sm:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 005.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                      </svg>
                    </div>
                    <h4 className="text-xl sm:text-lg font-bold text-credera-dark mb-3 sm:mb-2">
                      Collaborative Culture
                    </h4>
                    <p className="text-gray-600 sm:text-sm">
                      Work alongside talented professionals in an environment that encourages innovation and growth.
                    </p>
                  </div>

                  <div>
                    <div className="w-16 h-16 sm:w-12 sm:h-12 bg-credera-red rounded-full flex items-center justify-center mb-4 sm:mb-3">
                      <svg className="w-8 h-8 sm:w-6 sm:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </div>
                    <h4 className="text-xl sm:text-lg font-bold text-credera-dark mb-3 sm:mb-2">
                      Career Development
                    </h4>
                    <p className="text-gray-600 sm:text-sm">
                      Access continuous learning opportunities, mentorship programs, and clear advancement paths.
                    </p>
                  </div>

                  <div>
                    <div className="w-16 h-16 sm:w-12 sm:h-12 bg-credera-red rounded-full flex items-center justify-center mb-4 sm:mb-3">
                      <svg className="w-8 h-8 sm:w-6 sm:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9v-9m0-9v9" />
                      </svg>
                    </div>
                    <h4 className="text-xl sm:text-lg font-bold text-credera-dark mb-3 sm:mb-2">
                      Global Impact
                    </h4>
                    <p className="text-gray-600 sm:text-sm">
                      Make a difference working on meaningful projects with clients across diverse industries worldwide.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <FooterSection />
    </div>
  );
};

export default CareersPage;