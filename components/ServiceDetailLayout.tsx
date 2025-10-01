'use client';

import React from 'react';
import { ServiceDetail } from '@/types';
import ServiceHeader from './ServiceHeader';
import ServiceOverview from './ServiceOverview';
import TechStackSection from './TechStackSection';
import CertificationsSection from './CertificationsSection';
import BookingActionsSection from './BookingActionsSection';
import CaseStudiesSection from './CaseStudiesSection';

interface ServiceDetailLayoutProps {
  service: ServiceDetail;
}

const ServiceDetailLayout: React.FC<ServiceDetailLayoutProps> = ({ service }) => {
  return (
    <div className="min-h-screen bg-white">
      {/* Service Header */}
      <ServiceHeader 
        title={service.title}
        description={service.description}
        heroImage="/images/service-hero.jpg"
      />

      {/* Service Overview */}
      <ServiceOverview 
        overview={service.overview}
        keyFeatures={service.keyFeatures}
      />

      {/* Tech Stack Section */}
      <TechStackSection techStacks={service.techStacks} />

      {/* Certifications Section */}
      <CertificationsSection certifications={service.certifications} />

      {/* Case Studies Section */}
      {service.caseStudies && service.caseStudies.length > 0 && (
        <CaseStudiesSection caseStudies={service.caseStudies} />
      )}

      {/* Booking Actions */}
      <BookingActionsSection 
        actions={[
          {
            type: 'demo',
            label: 'Book a Demo',
            description: 'See our solutions in action with a personalized demonstration',
            ctaText: 'BOOK DEMO'
          },
          {
            type: 'service',
            label: 'Book This Service',
            description: 'Get started with professional implementation and support',
            ctaText: 'BOOK SERVICE'
          }
        ]}
      />
    </div>
  );
};

export default ServiceDetailLayout;