"use client";
import React, { useState, useRef, useEffect } from 'react';
import {
  FaBriefcase,
  FaRocket,
  FaGlobe,
  FaLaptopCode,
  FaBrain,
  FaStar,
} from 'react-icons/fa';
import '@/app/globals.css';

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
  const [activeIndex, setActiveIndex] = useState(0);
  const [isInView, setIsInView] = useState(false);
  const timelineRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const observerRef = useRef<IntersectionObserver | null>(null);

  const defaultEvents: TimelineEvent[] = [
    {
      id: '1',
      year: '2006',
      title: 'Foundation & Vision',
      description: 'Task Systems was founded with a vision to deliver authentic consulting relationships and exceptional results.',
      icon: <FaBriefcase />
    },
    {
      id: '2',
      year: '2010',
      title: 'Rapid Growth',
      description: 'Expanded our service offerings and client base, establishing ourselves as a trusted consulting partner.',
      icon: <FaRocket />
    },
    {
      id: '3',
      year: '2014',
      title: 'Geographic Expansion',
      description: 'Opened new offices across the United States to better serve our growing client base.',
      icon: <FaGlobe />
    },
    {
      id: '4',
      year: '2017',
      title: 'Digital Transformation Focus',
      description: 'Pivoted to focus heavily on digital transformation and modern technology solutions.',
      icon: <FaLaptopCode />
    },
    {
      id: '5',
      year: '2020',
      title: 'Global Reach',
      description: 'Established international presence and remote-first capabilities during global changes.',
      icon: <FaGlobe />
    },
    {
      id: '6',
      year: '2022',
      title: 'AI & Innovation',
      description: 'Leading the industry with AI implementations and cutting-edge technology solutions.',
      icon: <FaBrain />
    },
    {
      id: '7',
      year: '2024',
      title: 'Future Forward',
      description: 'Continuing to innovate and lead in the consulting space with emerging technologies.',
      icon: <FaStar />
    }
  ];

  const timelineEvents = events || defaultEvents;

  // Intersection Observer to show/hide progress bar
  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observerRef.current.observe(sectionRef.current);
    }

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, []);

  // Handle scroll to update active index
  useEffect(() => {
    const handleScroll = () => {
      if (!timelineRef.current) return;

      const container = timelineRef.current;
      const scrollLeft = container.scrollLeft;
      const containerWidth = container.offsetWidth;
      const totalWidth = container.scrollWidth;

      // Calculate progress (0 to 1)
      const progress = scrollLeft / (totalWidth - containerWidth);
      
      // Calculate active index based on scroll position with proper bounds
      const itemWidth = totalWidth / timelineEvents.length;
      let newIndex = Math.floor((scrollLeft + containerWidth / 2) / itemWidth);
      
      // Ensure index stays within bounds
      newIndex = Math.max(0, Math.min(newIndex, timelineEvents.length - 1));

      setActiveIndex(newIndex);
    };

    const container = timelineRef.current;
    if (container) {
      container.addEventListener('scroll', handleScroll, { passive: true });
      // Initialize active index
      handleScroll();
      return () => container.removeEventListener('scroll', handleScroll);
    }
  }, [timelineEvents.length]);

  // Scroll to center active item with proper edge handling
  const scrollToEvent = (index: number) => {
    if (timelineRef.current) {
      const container = timelineRef.current;
      const itemWidth = container.scrollWidth / timelineEvents.length;
      const containerWidth = container.offsetWidth;
      
      let scrollPosition;
      
      // Handle first item - align to left
      if (index === 0) {
        scrollPosition = 0;
      } 
      // Handle last item - align to show full item
      else if (index === timelineEvents.length - 1) {
        scrollPosition = container.scrollWidth - containerWidth;
      }
      // Handle middle items - center them
      else {
        scrollPosition = itemWidth * index - (containerWidth - itemWidth) / 2;
      }
      
      container.scrollTo({
        left: scrollPosition,
        behavior: 'smooth'
      });
    }
  };

  // Calculate progress for the progress bar with proper bounds
  const calculateProgress = () => {
    if (!timelineRef.current) return 0;
    
    const container = timelineRef.current;
    const scrollLeft = container.scrollLeft;
    const maxScroll = container.scrollWidth - container.offsetWidth;
    
    if (maxScroll <= 0) return 0;
    
    const progress = scrollLeft / maxScroll;
    return Math.max(0, Math.min(progress, 1));
  };

  // Add padding elements to ensure first and last items can be centered
  const renderTimelineItems = () => {
    return (
      <>
        {/* Left padding to ensure first item can be centered */}
        <div className="flex-shrink-0 w-1/2 md:w-48 px-2" aria-hidden="true" />
        
        {/* Actual timeline events */}
        {timelineEvents.map((event, index) => (
          <div
            key={event.id}
            className="flex-shrink-0 w-full md:w-96 px-4 snap-center"
          >
            <div className="flex flex-col md:flex-row items-start space-y-4 md:space-y-0 md:space-x-6 md:pt-8">
              {/* Timeline Dot and Year - Desktop */}
              <div className="hidden md:flex flex-col items-center space-y-2">
                <div 
                  className={`w-4 h-4 rounded-full border-4 border-white shadow-lg z-10 transition-all duration-300 ${
                    activeIndex === index ? 'bg-[color:var(--color-foreground)] scale-125' : 'bg-gray-400'
                  }`}
                ></div>
                <span 
                  className={`text-lg font-bold transition-colors duration-300 ${
                    activeIndex === index ? 'text-[color:var(--color-foreground)]' : 'text-gray-700'
                  }`}
                >
                  {event.year}
                </span>
              </div>

              {/* Timeline Dot and Year - Mobile */}
              <div className="flex md:hidden items-center space-x-4 w-full">
                <div className="flex flex-col items-center space-y-2 flex-shrink-0">
                  <div 
                    className={`w-4 h-4 rounded-full border-4 border-white shadow-lg transition-all duration-300 ${
                      activeIndex === index ? 'bg-[color:var(--color-foreground)] scale-125' : 'bg-gray-400'
                    }`}
                  ></div>
                  <span 
                    className={`text-sm font-bold transition-colors duration-300 ${
                      activeIndex === index ? 'text-[color:var(--color-foreground)]' : 'text-gray-700'
                    }`}
                  >
                    {event.year}
                  </span>
                </div>
                <div className="flex-1 border-t-2 border-gray-300 border-dashed"></div>
              </div>

              {/* Event Card */}
              <div 
                className={`flex-1 bg-white rounded-lg border-2 transition-all duration-300 cursor-pointer ${
                  activeIndex === index 
                    ? 'border-[color:var(--color-foreground)] shadow-xl scale-105' 
                    : 'border-gray-200 shadow-sm hover:shadow-md'
                }`}
                onClick={() => scrollToEvent(index)}
              >
                <div className="p-4 md:p-6">
                  {/* Icon and Title */}
                  <div className="flex items-center space-x-4 mb-4">
                    <div 
                      className={`w-12 h-12 rounded-full flex items-center justify-center text-white text-lg transition-colors duration-300 ${
                        activeIndex === index ? 'bg-[color:var(--color-foreground)]' : 'bg-gray-400'
                      }`}
                    >
                      {event.icon}
                    </div>
                    <h3 className="text-lg md:text-xl font-bold text-gray-900">
                      {event.title}
                    </h3>
                  </div>

                  {/* Description */}
                  <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                    {event.description}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
        
        {/* Right padding to ensure last item can be centered */}
        <div className="flex-shrink-0 w-1/2 md:w-48 px-2" aria-hidden="true" />
      </>
    );
  };

  return (
    <>
      {/* Fixed Progress Bar */}
      <div 
        className={`fixed top-0 left-0 right-0 h-1 bg-gray-200 z-40 transition-opacity duration-300 ${
          isInView ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <div 
          className="h-full bg-[color:var(--color-foreground)] transition-all duration-300 ease-out"
          style={{ width: `${calculateProgress() * 100}%` }}
        />
      </div>

      <section ref={sectionRef} className="bg-white py-12 md:py-20 px-4 md:px-8 pt-16">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              {title}
            </h2>
            <div className="w-16 md:w-24 h-1 bg-[color:var(--color-foreground)] mx-auto"></div>
          </div>

          {/* Timeline Container */}
          <div className="relative">
            {/* Timeline Line - Desktop - Moved upward */}
            <div className="absolute top-0 left-0 right-0 h-0.5 bg-gray-300 hidden md:block"></div>

            {/* Timeline Events with padding */}
            <div
              ref={timelineRef}
              className="flex overflow-x-auto pb-8 md:pb-12 scrollbar-hide snap-x snap-mandatory mt-8 md:mt-0"
            >
              {renderTimelineItems()}
            </div>
          </div>

          {/* Mobile Progress Indicator */}
          <div className="flex md:hidden items-center justify-center space-x-2 mt-8">
            {timelineEvents.map((_, index) => (
              <div
                key={index}
                className={`w-2 h-2 rounded-full transition-colors duration-300 ${
                  activeIndex === index ? 'bg-[color:var(--color-foreground)]' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
        </div>

        <style jsx>{`
          .scrollbar-hide {
            -ms-overflow-style: none;
            scrollbar-width: none;
          }
          .scrollbar-hide::-webkit-scrollbar {
            display: none;
          }
        `}</style>
      </section>
    </>
  );
};

export default CompanyHistoryTimeline;