import React from 'react';
import Link from 'next/link';
import { FaCloud, FaChartLine, FaMobile, FaShieldAlt } from 'react-icons/fa';

interface TopSolution {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  href: string;
  color: string;
}

interface TopSolutionsSectionProps {
  title?: string;
  solutions?: TopSolution[];
}

const TopSolutionsSection: React.FC<TopSolutionsSectionProps> = ({ 
  title = "Top Solutions We Offer",
  solutions 
}) => {
  const defaultSolutions: TopSolution[] = [
    {
      id: '1',
      title: 'Cloud Transformation',
      description: 'Scalable cloud solutions for modern enterprises',
      icon: <FaCloud size={24} />,
      href: '/solutions/cloud',
      color: 'bg-blue-50 text-blue-600 border-blue-200'
    },
    {
      id: '2',
      title: 'Data & Analytics',
      description: 'AI-driven insights for data-informed decisions',
      icon: <FaChartLine size={24} />,
      href: '/solutions/analytics',
      color: 'bg-green-50 text-green-600 border-green-200'
    },
    {
      id: '3',
      title: 'Digital Experience',
      description: 'Customer-centric digital transformation',
      icon: <FaMobile size={24} />,
      href: '/solutions/digital',
      color: 'bg-purple-50 text-purple-600 border-purple-200'
    },
    {
      id: '4',
      title: 'Cybersecurity',
      description: 'Enterprise security and compliance solutions',
      icon: <FaShieldAlt size={24} />,
      href: '/solutions/security',
      color: 'bg-red-50 text-red-600 border-red-200'
    }
  ];

  const solutionItems = solutions || defaultSolutions;

  return (
    <section className="bg-white py-16 px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-credera-dark mb-4">
            {title}
          </h2>
          <div className="w-24 h-1 bg-credera-red mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {solutionItems.map((solution) => (
            <Link
              key={solution.id}
              href={solution.href}
              className="group block relative h-80 rounded-xl overflow-hidden transition-all duration-300 hover:shadow-lg hover:scale-105"
            >
              {/* Background with gradient overlay */}
              <div className={`absolute inset-0 ${solution.color.replace('bg-', '').replace('-50', '-500')} opacity-20 group-hover:opacity-30 transition-opacity duration-300`}></div>
              <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/60 group-hover:from-black/50 group-hover:to-black/70 transition-all duration-300"></div>
              
              {/* Content overlay */}
              <div className="relative z-10 p-6 h-full flex flex-col justify-between text-white">
                <div className="flex items-center justify-center mb-4">
                  <div className="p-4 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 transition-all duration-300 group-hover:bg-white/30 group-hover:scale-110">
                    {solution.icon}
                  </div>
                </div>
                
                <div className="text-center">
                  <h3 className="text-xl font-bold mb-3 group-hover:text-yellow-300 transition-colors duration-300">
                    {solution.title}
                  </h3>
                  
                  <p className="text-white/90 text-sm leading-relaxed mb-4">
                    {solution.description}
                  </p>

                  <div className="flex items-center justify-center text-yellow-300 text-sm font-medium group-hover:translate-y-1 transition-transform duration-300">
                    Learn more
                    <svg
                      className="ml-2 w-4 h-4"
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
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TopSolutionsSection;