'use client';

import React from 'react';
import { FiCheck } from 'react-icons/fi';

interface ServiceOverviewProps {
  overview: string;
  keyFeatures: string[];
}

const ServiceOverview: React.FC<ServiceOverviewProps> = ({ 
  overview, 
  keyFeatures 
}) => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Overview Content */}
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Service Overview
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              {overview}
            </p>
          </div>

          {/* Key Features */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Key Features
            </h3>
            <ul className="space-y-4">
              {keyFeatures.map((feature, index) => (
                <li key={index} className="flex items-start space-x-3">
                  <div className="flex-shrink-0 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center mt-0.5">
                    <FiCheck className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-gray-700 text-lg">{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceOverview;