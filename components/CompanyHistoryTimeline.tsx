"use client";
import React from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { 
  FaBriefcase, 
  FaRocket, 
  FaGlobe, 
  FaLaptopCode, 
  FaBrain, 
  FaUsers, 
  FaStar 
} from 'react-icons/fa';

interface TimelineEvent {
  id: string;
  year: string;
  title: string;
  description: string;
  achievements?: string[];
  icon?: React.ReactNode;
}

interface CompanyHistoryTimelineProps {
  title?: string;
  events?: TimelineEvent[];
}

const CompanyHistoryTimeline: React.FC<CompanyHistoryTimelineProps> = ({
  title = "Our Journey",
  events
}) => {
  const defaultEvents: TimelineEvent[] = [
    {
      id: '1',
      year: '2006',
      title: 'Foundation & Vision',
      description: 'Credera was founded with a vision to deliver authentic consulting relationships and exceptional results.',
      achievements: ['Company established', 'First Dallas office opened', 'Initial team of 15 consultants'],
      icon: <FaBriefcase />
    },
    {
      id: '2',
      year: '2010',
      title: 'Rapid Growth',
      description: 'Expanded our service offerings and client base, establishing ourselves as a trusted consulting partner.',
      achievements: ['Reached 100+ employees', 'Expanded service portfolio', 'First major enterprise clients'],
      icon: <FaRocket />
    },
    {
      id: '3',
      year: '2014',
      title: 'Geographic Expansion',
      description: 'Opened new offices across the United States to better serve our growing client base.',
      achievements: ['Austin office opened', 'Denver office launched', 'Chicago presence established'],
      icon: <FaGlobe />
    },
    {
      id: '4',
      year: '2017',
      title: 'Digital Transformation Focus',
      description: 'Pivoted to focus heavily on digital transformation and modern technology solutions.',
      achievements: ['Cloud practice launched', 'Data & Analytics specialization', 'DevOps capabilities added'],
      icon: <FaLaptopCode />
    },
    {
      id: '5',
      year: '2020',
      title: 'Global Reach',
      description: 'Established international presence and remote-first capabilities during global changes.',
      achievements: ['London office opened', 'Remote work expertise', 'Global delivery model'],
      icon: <FaGlobe />
    },
    {
      id: '6',
      year: '2022',
      title: 'AI & Innovation',
      description: 'Leading the industry with AI implementations and cutting-edge technology solutions.',
      achievements: ['AI practice launched', 'Machine learning specialization', 'Innovation lab established'],
      icon: <FaBrain />
    },
    {
      id: '7',
      year: '2024',
      title: 'Future Forward',
      description: 'Continuing to innovate and lead in the consulting space with emerging technologies.',
      achievements: ['Quantum computing research', 'Sustainability practice', 'Next-gen solutions'],
      icon: <FaStar />
    }
  ];

  const timelineEvents = events || defaultEvents;

  return (
    <section className="bg-white py-20 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            {title}
          </h2>
          <div className="w-24 h-1 bg-red-500 mx-auto"></div>
        </div>

        {/* Vertical Timeline */}
        <VerticalTimeline>
          {timelineEvents.map((event, index) => (
            <VerticalTimelineElement
              key={event.id}
              className="vertical-timeline-element--work"
              contentStyle={{
                background: '#ffffff',
                border: '2px solid #e5e7eb',
                borderRadius: '12px',
                boxShadow: '0 10px 25px rgba(0, 0, 0, 0.1)',
                padding: '2rem'
              }}
              contentArrowStyle={{ 
                borderRight: '7px solid #ffffff',
                borderLeft: '7px solid #ffffff'
              }}
              date={event.year}
              dateClassName="text-gray-700 font-bold text-lg"
              iconStyle={{ 
                background: '#ef4444', 
                color: '#fff',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '60px',
                height: '60px'
              }}
              icon={event.icon || <FaBriefcase />}
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                {event.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {event.description}
              </p>
            </VerticalTimelineElement>
          ))}
        </VerticalTimeline>
      </div>
    </section>
  );
};

export default CompanyHistoryTimeline;