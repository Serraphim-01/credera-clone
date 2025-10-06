'use client';

import React, { useState } from 'react';
import FooterSection from '@/components/FooterSection';
import StandardHeroSection from '@/components/StandardHeroSection';
import JobDetailsModal from '@/components/JobDetailsModal';

export interface JobOpening {
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
    description:
      'Join our dynamic engineering team to build cutting-edge solutions for Fortune 500 clients. We are looking for a passionate developer with expertise in modern web technologies and cloud platforms.',
    requirements: [
      '5+ years of experience in software development',
      'Proficiency in React, Node.js, and TypeScript',
      'Experience with cloud platforms (AWS, Azure, or GCP)',
      'Strong problem-solving skills and attention to detail',
      "Bachelor's degree in Computer Science or related field",
    ],
    responsibilities: [
      'Design and develop scalable web applications',
      'Collaborate with cross-functional teams to deliver high-quality solutions',
      'Mentor junior developers and contribute to code reviews',
      'Participate in architectural decisions and technical planning',
      'Stay current with emerging technologies and best practices',
    ],
  },
  {
    id: '2',
    title: 'Management Consultant',
    applicationDeadline: 'Applications due by January 10, 2025',
    description:
      'Help leading organizations transform their business operations and achieve strategic objectives. This role offers the opportunity to work on diverse projects across multiple industries.',
    requirements: [
      'MBA or advanced degree preferred',
      '3+ years of consulting or strategy experience',
      'Strong analytical and problem-solving capabilities',
      'Excellent communication and presentation skills',
      'Experience with business process improvement',
    ],
    responsibilities: [
      'Lead client engagements and project deliverables',
      'Conduct market research and competitive analysis',
      'Develop strategic recommendations and implementation plans',
      'Facilitate workshops and stakeholder meetings',
      'Build strong client relationships and drive business development',
    ],
  },
  {
    id: '3',
    title: 'Data Scientist',
    applicationDeadline: 'Applications due by November 30, 2024',
    description:
      'Drive data-driven decision making by developing advanced analytics solutions and machine learning models. Join our growing data science practice and work with cutting-edge technologies.',
    requirements: [
      "Master's or PhD in Data Science, Statistics, or related field",
      'Proficiency in Python, R, and SQL',
      'Experience with machine learning frameworks (TensorFlow, PyTorch)',
      'Strong statistical analysis and modeling skills',
      'Experience with big data technologies (Spark, Hadoop)',
    ],
    responsibilities: [
      'Develop predictive models and analytics solutions',
      'Analyze complex datasets to extract business insights',
      'Collaborate with clients to understand business requirements',
      'Present findings and recommendations to executive stakeholders',
      'Stay current with latest data science methodologies and tools',
    ],
  },
  {
    id: '4',
    title: 'UX/UI Designer',
    applicationDeadline: 'Applications due by December 31, 2024',
    description:
      'Create exceptional user experiences for digital products and services. Work closely with clients and development teams to deliver intuitive, accessible, and visually compelling designs.',
    requirements: [
      "Bachelor's degree in Design, HCI, or related field",
      '4+ years of UX/UI design experience',
      'Proficiency in Figma, Sketch, and Adobe Creative Suite',
      'Strong portfolio demonstrating design thinking process',
      'Experience with user research and usability testing',
    ],
    responsibilities: [
      'Design user interfaces for web and mobile applications',
      'Conduct user research and usability testing',
      'Create wireframes, prototypes, and high-fidelity mockups',
      'Collaborate with developers to ensure design implementation',
      'Advocate for user-centered design principles',
    ],
  },
  {
    id: '5',
    title: 'Project Manager',
    applicationDeadline: 'Applications due by January 20, 2025',
    description:
      'Lead complex technology and business transformation projects from initiation to delivery. Ensure projects are completed on time, within scope, and exceed client expectations.',
    requirements: [
      'PMP certification preferred',
      '5+ years of project management experience',
      'Experience with Agile and Waterfall methodologies',
      'Strong leadership and communication skills',
      'Background in technology or business consulting',
    ],
    responsibilities: [
      'Manage project scope, timeline, and budget',
      'Coordinate cross-functional project teams',
      'Communicate project status to stakeholders',
      'Identify and mitigate project risks',
      'Ensure quality deliverables and client satisfaction',
    ],
  },
];

const videos = [
  {
    id: 'dQw4w9WgXcQ',
    title: 'Day in the life at Task',
    date: 'Sept 1, 2024',
  },
  {
    id: '9bZkp7q19f0',
    title: 'Why our employees love Task',
    date: 'Oct 12, 2024',
  },
  {
    id: '3JZ_D3ELwOQ',
    title: 'Innovation culture at Task',
    date: 'Nov 5, 2024',
  },
];

const CareersPage: React.FC = () => {
  const [selectedJob, setSelectedJob] = useState<JobOpening | null>(null);

  const handleOpenJob = (job: JobOpening) => setSelectedJob(job);
  const handleCloseJob = () => setSelectedJob(null);
  const [selectedVideo, setSelectedVideo] = useState(videos[0].id);

  const handleApply = (jobTitle: string) => {
    alert(
      `Thank you for your interest in the ${jobTitle} position! Our application system is coming soon.`
    );
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <StandardHeroSection
        title="Join Our Team"
        subtitle="Careers at Task Systems"
        description="Build your career with a global consulting firm that values innovation, collaboration, and professional growth. Discover opportunities to make a meaningful impact while working with industry-leading clients."
        backgroundImage="/TaskImages/join.jpg"
        maxContentWidth="max-w-3xl"
      />

      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 px-6">
          {/* Left: Video */}
          <div className="aspect-w-16 aspect-h-9 rounded-xl overflow-hidden shadow-lg">
            <iframe
              src="https://www.youtube.com/embed/YOUR_VIDEO_ID"
              title="Leaving a Legacy"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full"
            ></iframe>
          </div>

          {/* Right: Text */}
          <div className="flex flex-col justify-center">
            <h2 className="text-3xl font-bold text-credera-dark mb-4">
              Leaving a legacy with our people.
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              Our employees are the lifeblood of our company. We're passionate about
              fostering their growth and helping all team members achieve their career
              and personal aspirations—this is the legacy we want to build.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 px-6 items-center">
          {/* Left: Text */}
          <div>
            <p className="text-sm font-semibold text-credera-red uppercase mb-2">
              Life at Task
            </p>
            <h2 className="text-3xl font-bold text-credera-dark mb-4">
              Discover our people-first culture.
            </h2>
            <p className="text-gray-600 mb-6">
              Over a lifetime, the average person spends 90,000 hours at work, which
              is over 50% of our waking hours. Enjoying what you do and the people you
              work with is important! Hear what our people have to say about the Task
              employee experience.
            </p>
            <a
              href="/life-at-company"
              className="text-credera-red font-semibold hover:underline"
            >
              Learn more →
            </a>
          </div>

          {/* Right: Image */}
          <div className="rounded-xl overflow-hidden shadow-md">
            <img
              src="/TaskImages/join.jpg"
              alt="Life at Task"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 px-6">
          {/* Left: Main Video */}
          <div className="aspect-w-16 aspect-h-9 rounded-xl overflow-hidden shadow-lg">
            <iframe
              key={selectedVideo} // ensures iframe reloads on change
              src={`https://www.youtube.com/embed/${selectedVideo}`}
              title="Task Video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full"
            ></iframe>
          </div>

          {/* Right: Video List */}
          <div className="max-h-[500px] overflow-y-auto pr-2 space-y-6">
            {videos.map((vid) => (
              <button
                key={vid.id}
                onClick={() => setSelectedVideo(vid.id)}
                className={`flex gap-4 items-start w-full text-left transition ${selectedVideo === vid.id ? 'opacity-100' : 'opacity-70 hover:opacity-100'
                  }`}
              >
                <div className="w-32 h-20 rounded-md overflow-hidden flex-shrink-0">
                  <img
                    src={`https://img.youtube.com/vi/${vid.id}/hqdefault.jpg`}
                    alt={vid.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-semibold text-credera-dark">{vid.title}</h4>
                  <p className="text-sm text-gray-500">{vid.date}</p>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50 text-center">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-credera-dark mb-6">
            Start your Task journey.
          </h2>
          <p className="text-gray-600 text-lg mb-12">
            We're always adding new faces with unique backgrounds and perspectives to
            our Task systems team. Explore our open positions below.
          </p>

          {/* Cards */}
          <div className="grid sm:grid-cols-2 gap-[40px]">
            {/* Students/Interns */}
            <div className="overflow-hidden">
              <img
                src="/TaskImages/meet.jpg"
                alt="Students and Interns"
                className="w-full h-56 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold text-[color:var(--color-foreground)]  mb-2">
                  Students & Interns
                </h3>
                <p className="text-gray-600 text-sm">
                  Kickstart your career with valuable experience and mentorship.
                </p>
              </div>
            </div>

            {/* Experienced Professionals */}
            <div className="overflow-hidden">
              <img
                src="/TaskImages/join.jpg"
                alt="Experienced Professionals"
                className="w-full h-56 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold text-[color:var(--color-foreground)] mb-2">
                  Experienced Professionals
                </h3>
                <p className="text-gray-600 text-sm">
                  Take your expertise to the next level and lead impactful projects.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Job Openings Section */}
      <div className="py-16 sm:py-8">
        <div className="max-w-[2000px] mx-auto px-8 sm:px-4">
          <div className="text-center mb-12 sm:mb-8">
            <h2 className="text-4xl sm:text-2xl font-bold text-credera-dark mb-4 sm:mb-2">
              Current Opportunities
            </h2>
            <p className="text-lg sm:text-base text-gray-600 max-w-2xl mx-auto">
              Explore our open positions and find the perfect role to advance
              your career
            </p>
          </div>

          {/* Jobs grid */}
          <div className="flex flex-col xl:flex-row gap-8">
            {/* Job list */}
            <div className="xl:flex-1 space-y-0">
              {jobOpenings.map((job, index) => (
                <div
                  key={job.id}
                  className={`w-full bg-white shadow-sm hover:shadow-md transition-all duration-300 ease-in-out ${index !== jobOpenings.length - 1
                    ? 'border-b border-gray-200'
                    : ''
                    }`}
                >
                  {/* Job Header */}
                  <div className="p-8 sm:p-4 flex flex-col sm:flex-col md:flex-row items-start md:items-center justify-between gap-4">
                    <div className="flex-1">
                      <h3 className="text-2xl sm:text-lg font-bold text-credera-dark mb-2">
                        {job.title}
                      </h3>
                      <p className="text-gray-600 mb-4 sm:mb-3 sm:text-sm">
                        {job.applicationDeadline}
                      </p>
                      <button
                        onClick={() => handleOpenJob(job)}
                        className="text-credera-red font-medium hover:text-red-700 transition-colors duration-200 relative group sm:text-sm"
                      >
                        View More
                        <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-credera-red transition-all duration-300 group-hover:w-full"></span>
                      </button>
                    </div>
                    <div className="ml-0 md:ml-8">
                      <button
                        onClick={() => handleApply(job.title)}
                        className="bg-[color:var(--color-foreground)] text-[color:var(--color-yellow)] px-8 py-3 sm:px-4 sm:py-2 rounded-md hover:opacity-90 transition-colors duration-200 font-semibold sm:text-sm w-full md:w-auto"
                      >
                        Apply
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Sidebar */}
            <div className="xl:w-96 xl:block hidden">
              <div className="bg-gray-50 rounded-lg p-8 sm:p-4 sticky top-8">
                <h3 className="text-2xl sm:text-xl font-bold text-credera-dark mb-8 sm:mb-6">
                  Why Join Us?
                </h3>
                <div className="space-y-8 sm:space-y-6">
                  <div>
                    <div className="w-16 h-16 sm:w-12 sm:h-12 bg-credera-red rounded-full flex items-center justify-center mb-4 sm:mb-3">
                      <svg
                        className="w-8 h-8 sm:w-6 sm:h-6 text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 005.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                        />
                      </svg>
                    </div>
                    <h4 className="text-xl sm:text-lg font-bold text-credera-dark mb-3 sm:mb-2">
                      Collaborative Culture
                    </h4>
                    <p className="text-gray-600 sm:text-sm">
                      Work alongside talented professionals in an environment
                      that encourages innovation and growth.
                    </p>
                  </div>

                  <div>
                    <div className="w-16 h-16 sm:w-12 sm:h-12 bg-credera-red rounded-full flex items-center justify-center mb-4 sm:mb-3">
                      <svg
                        className="w-8 h-8 sm:w-6 sm:h-6 text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M13 10V3L4 14h7v7l9-11h-7z"
                        />
                      </svg>
                    </div>
                    <h4 className="text-xl sm:text-lg font-bold text-credera-dark mb-3 sm:mb-2">
                      Career Development
                    </h4>
                    <p className="text-gray-600 sm:text-sm">
                      Access continuous learning opportunities, mentorship
                      programs, and clear advancement paths.
                    </p>
                  </div>

                  <div>
                    <div className="w-16 h-16 sm:w-12 sm:h-12 bg-credera-red rounded-full flex items-center justify-center mb-4 sm:mb-3">
                      <svg
                        className="w-8 h-8 sm:w-6 sm:h-6 text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9v-9m0-9v9"
                        />
                      </svg>
                    </div>
                    <h4 className="text-xl sm:text-lg font-bold text-credera-dark mb-3 sm:mb-2">
                      Global Impact
                    </h4>
                    <p className="text-gray-600 sm:text-sm">
                      Make a difference working on meaningful projects with
                      clients across diverse industries worldwide.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Job Details Modal */}
      <JobDetailsModal
        isOpen={!!selectedJob}
        onClose={handleCloseJob}
        job={selectedJob}
        onApply={handleApply}
      />

      {/* Footer */}
      <FooterSection />
    </div>
  );
};

export default CareersPage;
