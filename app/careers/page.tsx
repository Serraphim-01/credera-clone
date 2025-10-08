'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import FooterSection from '@/components/FooterSection';
import StandardHeroSection from '@/components/StandardHeroSection';

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
  const [selectedVideo, setSelectedVideo] = useState(videos[0].id);

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

      <section className="py-8 sm:py-12 md:py-16 bg-white">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-6 sm:gap-8 md:gap-12 px-4 sm:px-6">
          {/* Left: Video */}
          <div className="aspect-w-16 aspect-h-9 rounded-lg sm:rounded-xl overflow-hidden shadow-md sm:shadow-lg">
            <iframe
              src="https://www.youtube.com/embed/YOUR_VIDEO_ID"
              title="Leaving a Legacy"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full min-h-[200px] sm:min-h-[300px]"
            ></iframe>
          </div>

          {/* Right: Text */}
          <div className="flex flex-col justify-center">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-credera-dark mb-3 sm:mb-4">
              Leaving a legacy with our people.
            </h2>
            <p className="text-gray-600 text-sm sm:text-base md:text-lg leading-relaxed">
              Our employees are the lifeblood of our company. We're passionate about
              fostering their growth and helping all team members achieve their career
              and personal aspirations—this is the legacy we want to build.
            </p>
          </div>
        </div>
      </section>

      <section className="py-8 sm:py-12 md:py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-6 sm:gap-8 md:gap-12 px-4 sm:px-6 items-center">
          {/* Left: Text */}
          <div>
            <p className="text-xs sm:text-sm font-semibold text-credera-red uppercase mb-2">
              Life at Task
            </p>
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-credera-dark mb-3 sm:mb-4">
              Discover our people-first culture.
            </h2>
            <p className="text-gray-600 text-sm sm:text-base mb-4 sm:mb-6">
              Over a lifetime, the average person spends 90,000 hours at work, which
              is over 50% of our waking hours. Enjoying what you do and the people you
              work with is important! Hear what our people have to say about the Task
              employee experience.
            </p>
            <a
              href="/life-at-company"
              className="text-credera-red font-semibold hover:underline text-sm sm:text-base"
            >
              Learn more →
            </a>
          </div>

          {/* Right: Image */}
          <div className="rounded-lg sm:rounded-xl overflow-hidden shadow-sm sm:shadow-md">
            <img
              src="/TaskImages/join.jpg"
              alt="Life at Task"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      <section className="py-8 sm:py-12 md:py-16 bg-white">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-6 sm:gap-8 md:gap-12 px-4 sm:px-6">
          {/* Left: Main Video */}
          <div className="aspect-w-16 aspect-h-9 rounded-lg sm:rounded-xl overflow-hidden shadow-md sm:shadow-lg">
            <iframe
              key={selectedVideo}
              src={`https://www.youtube.com/embed/${selectedVideo}`}
              title="Task Video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full min-h-[200px] sm:min-h-[300px]"
            ></iframe>
          </div>

          {/* Right: Video List */}
          <div className="max-h-[400px] sm:max-h-[500px] overflow-y-auto pr-2 space-y-4 sm:space-y-6">
            {videos.map((vid) => (
              <button
                key={vid.id}
                onClick={() => setSelectedVideo(vid.id)}
                className={`flex gap-3 sm:gap-4 items-start w-full text-left transition ${selectedVideo === vid.id ? 'opacity-100' : 'opacity-70 hover:opacity-100'
                  }`}
              >
                <div className="w-24 h-16 sm:w-32 sm:h-20 rounded-md overflow-hidden flex-shrink-0">
                  <img
                    src={`https://img.youtube.com/vi/${vid.id}/hqdefault.jpg`}
                    alt={vid.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-semibold text-credera-dark text-sm sm:text-base">{vid.title}</h4>
                  <p className="text-xs sm:text-sm text-gray-500">{vid.date}</p>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-16 md:py-20 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-credera-dark mb-4 sm:mb-6">
            Start your Task journey.
          </h2>
          <p className="text-gray-600 text-sm sm:text-base md:text-lg mb-8 sm:mb-12">
            We're always adding new faces with unique backgrounds and perspectives to
            our Task systems team. Explore our open positions below.
          </p>

          {/* Cards - 2 per row on mobile */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 md:gap-8">
            {/* Students/Interns */}
            <Link
              href="/careers/students-interns"
              className="block overflow-hidden transition-shadow duration-300 group"
            >
              <img
                src="/TaskImages/meet.jpg"
                alt="Students and Interns"
                className="w-full h-40 sm:h-48 md:h-56 object-cover"
              />
              <div className="p-3 sm:p-4">
                <h3 className="text-lg sm:text-xl font-semibold text-[color:var(--color-foreground)] mb-2">
                  Students & Interns
                </h3>
                <p className="text-gray-600 text-xs sm:text-sm mb-3 sm:mb-4">
                  Kickstart your career with valuable experience and mentorship.
                </p>

                {/* Apply Link */}
                <span className="inline-flex items-center text-[color:var(--color-foreground)] font-medium text-sm sm:text-base relative">
                  Apply
                  <span className="ml-1 transform transition-transform duration-300 group-hover:translate-x-1">
                    →
                  </span>
                  <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-[color:var(--color-foreground)] transition-all duration-300 group-hover:w-full"></span>
                </span>
              </div>
            </Link>

            {/* Experienced Professionals */}
            <Link
              href="/careers/professionals"
              className="block overflow-hidden transition-shadow duration-300 group"
            >
              <img
                src="/TaskImages/join.jpg"
                alt="Experienced Professionals"
                className="w-full h-40 sm:h-48 md:h-56 object-cover"
              />
              <div className="p-3 sm:p-4">
                <h3 className="text-lg sm:text-xl font-semibold text-[color:var(--color-foreground)] mb-2">
                  Experienced Professionals
                </h3>
                <p className="text-gray-600 text-xs sm:text-sm mb-3 sm:mb-4">
                  Take your expertise to the next level and lead impactful projects.
                </p>

                {/* Apply Link */}
                <span className="inline-flex items-center text-[color:var(--color-foreground)] font-medium text-sm sm:text-base relative">
                  Apply
                  <span className="ml-1 transform transition-transform duration-300 group-hover:translate-x-1">
                    →
                  </span>
                  <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-[color:var(--color-foreground)] transition-all duration-300 group-hover:w-full"></span>
                </span>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <FooterSection />
    </div>
  );
};

export default CareersPage;