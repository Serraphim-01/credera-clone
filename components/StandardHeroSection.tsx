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
        src={backgroundImage}
        alt={title}
        fill
        className="object-cover absolute inset-0 z-0"
        priority
        sizes="100vw"
      />

      {/* Content */}
      <div className="relative h-full max-w-7xl mx-auto px-8 z-20">
        <div className="absolute bottom-0 left-8">
          <div className={`bg-white p-8 shadow-xl ${maxContentWidth}`}>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
              {title}
            </h1>
            {subtitle && (
              <h2 className="text-xl md:text-2xl font-semibold mb-4 text-gray-700">
                {subtitle}
              </h2>
            )}
            <p className="text-lg text-gray-600">
              {description}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StandardHeroSection;