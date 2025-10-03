import React from 'react';
import Image from 'next/image';

interface StandardHeroSectionProps {
  title: string;
  subtitle?: string;
  description: string;
  backgroundImage: string;
  maxContentWidth?: string;
}

const StandardHeroSection: React.FC<StandardHeroSectionProps> = ({
  title,
  subtitle,
  description,
  backgroundImage,
  maxContentWidth = "max-w-md"
}) => {
  return (
    <section className="relative h-screen max-h-[600px] overflow-hidden">
      {/* Background Image */}
      <Image
        src="/TaskImages/hero-background.jpg"
        alt={title}
        fill
        className="object-cover absolute inset-0 z-0"
        priority
        sizes="100vw"
      />

      {/* Content */}
      <div className="absolute inset-0 bg-black opacity-30 z-10" />
      <div className="relative h-full flex items-center max-w-7xl mx-auto px-8 z-20">
        <div className={`max-w-full md:${maxContentWidth}`}>
          <div className="bg-white p-8 shadow-xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-black">
              {title}
            </h1>
            {subtitle && (
              <h2 className="text-xl md:text-2xl font-semibold mb-4 text-dark-gray">
                {subtitle}
              </h2>
            )}
            <p className="text-lg text-dark-gray">
              {description}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StandardHeroSection;