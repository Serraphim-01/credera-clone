import React from 'react';
import Link from 'next/link';
import { 
  FaAws,
  FaMicrosoft
} from 'react-icons/fa';
import { 
  SiGooglecloud,
  SiHuawei,
  SiDell
} from 'react-icons/si';

interface PartnerItem {
  id: string;
  name: string;
  icon: React.ReactNode;
  color: string;
}

interface PartnersSectionProps {
  title?: string;
  subtitle?: string;
  partners?: PartnerItem[];
}

const PartnersSection: React.FC<PartnersSectionProps> = ({
  title = "Our Partners",
  subtitle = "Trusted technology partners powering our solutions",
  partners
}) => {
  const defaultPartners: PartnerItem[] = [
    { id: '1', name: 'AWS', icon: <FaAws size={48} />, color: 'text-orange-500' },
    { id: '2', name: 'Google Cloud', icon: <SiGooglecloud size={48} />, color: 'text-blue-500' },
    { id: '3', name: 'Microsoft', icon: <FaMicrosoft size={48} />, color: 'text-blue-600' },
    { id: '4', name: 'Huawei', icon: <SiHuawei size={48} />, color: 'text-red-600' },
    { id: '5', name: 'Dell', icon: <SiDell size={48} />, color: 'text-blue-700' }
  ];

  const partnerItems = partners || defaultPartners;

  return (
    <section className="bg-gradient-to-br from-gray-50 to-gray-100 py-20 px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-credera-dark mb-4">
            {title}
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-6">
            {subtitle}
          </p>
          <div className="w-24 h-1 bg-credera-red mx-auto"></div>
        </div>

        {/* Partners Grid */}
        <div className="flex justify-center items-center gap-16 mb-12">
          {partnerItems.map((partner) => (
            <div
              key={partner.id}
              className="group flex flex-col items-center cursor-pointer relative"
            >
              <div className={`transition-all duration-300 group-hover:scale-110 ${partner.color} mb-4`}>
                {partner.icon}
              </div>
              
              {/* Hover tooltip */}
              <div className="absolute -top-16 left-1/2 transform -translate-x-1/2 bg-credera-dark text-white px-3 py-1 rounded-md text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap pointer-events-none">
                {partner.name}
                <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-credera-dark"></div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Partners Link */}
        <div className="text-center">
          <Link
            href="/partners"
            className="inline-flex items-center text-credera-red hover:text-opacity-80 font-medium transition-colors duration-200"
          >
            View All Partners
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
          </Link>
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;