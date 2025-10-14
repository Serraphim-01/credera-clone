'use client';

import React, { Suspense } from 'react';
import FooterSection from '@/components/FooterSection';
import StandardHeroSection from '@/components/StandardHeroSection';
import NewsroomContent from '@/components/NewsroomContent';

const NewsRoomPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <StandardHeroSection
        title="Newsroom"
        subtitle="Insights and Analysis"
        description="Stay ahead of industry trends with our expert insights, research, and analysis. Access comprehensive resources covering emerging technologies, best practices, and strategic guidance."
        backgroundImage="/TaskImages/insights.jpg"
        maxContentWidth="max-w-4xl"
      />

      {/* Articles Grid */}
      <Suspense fallback={<div>Loading...</div>}>
        <NewsroomContent />
      </Suspense>
      
      {/* Footer */}
      <FooterSection />
    </div>
  );
};

export default NewsRoomPage;
