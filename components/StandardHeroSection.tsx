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
    <section className="relative h-screen max-h-[500px] sm:max-h-[600px] overflow-hidden">
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
      <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-8 z-20">
        <div className="absolute bottom-0 left-4 sm:left-8 w-[60%] max-w-lg">
          <div className={`bg-white p-4 sm:p-6 md:p-8 shadow-xl ${maxContentWidth}`}>
            <h1 className="text-xl sm:text-2xl md:text-3xl font-bold mb-2 sm:mb-4 text-gray-900">
              {title}
            </h1>
            {subtitle && (
              <h2 className="text-base sm:text-lg md:text-xl font-semibold mb-2 sm:mb-4 text-gray-700">
                {subtitle}
              </h2>
            )}
            <p className="text-xs sm:text-sm md:text-base text-gray-600">
              {description}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StandardHeroSection;