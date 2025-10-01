'use client';

import React from 'react';
import Image from 'next/image';

interface ServiceHeaderProps {
  title: string;
  description: string;
  heroImage: string;
}

const ServiceHeader: React.FC<ServiceHeaderProps> = ({ 
  title, 
  description, 
  heroImage 
}) => {
  return (
    <div className="relative h-[60vh] min-h-[500px] w-full overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src={heroImage}
          alt={title}
          fill
          className="object-cover"
          priority
        />
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-black bg-opacity-40" />
      </div>
      
      {/* Text Container - Overlaid on image */}
      <div className="relative z-10 h-full flex items-center">
        <div className="max-w-7xl mx-auto px-4 w-full">
          <div className="max-w-3xl">
            {/* White text container with subtle background */}
            <div className="bg-white bg-opacity-95 p-8 rounded-lg shadow-2xl">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 leading-tight">
                {title}
              </h1>
              <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
                {description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceHeader;