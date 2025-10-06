import { notFound } from 'next/navigation';
import { getSolutionById, generateStaticParams as getSolutionParams } from '@/data/solutions';
import { SolutionPageProps } from '@/types';
import SolutionPartnersSection from '@/components/SolutionPartnersSection';
import { SolutionCertificationsSection } from '@/components/SolutionCertificationsSection';
import FooterSection from '@/components/FooterSection';
import { CustomerStoriesSection } from '@/components/CustomerStoriesSection';
import StandardHeroSection from '@/components/StandardHeroSection';
import Link from 'next/link';
import Image from 'next/image';

// Generate static params for all solutions
export async function generateStaticParams() {
  return getSolutionParams();
}

export default async function SolutionDetailPage({ params }: SolutionPageProps) {
  const { solutionId } = await params;
  const solution = getSolutionById(solutionId);
  
  if (!solution) {
    notFound();
  }
  
  return (
    <div className="min-h-screen bg-white">
      {/* Breadcrumb Navigation */}
      <section className="bg-light-gray py-3 sm:py-4 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <nav className="flex items-center space-x-2 text-xs sm:text-sm">
            <Link href="/" className="text-gray hover:text-yellow">
              Home
            </Link>
            <span className="text-gray">/</span>
            <Link href="/solutions" className="text-gray hover:text-yellow">
              Solutions
            </Link>
            <span className="text-gray">/</span>
            <span className="text-black font-medium truncate">
              {solution.title}
            </span>
          </nav>
        </div>
      </section>

      {/* Hero Section */}
      <StandardHeroSection
        title={solution.title}
        subtitle="Solution"
        description={solution.description}
        backgroundImage={solution.heroImage || '/TaskImages/services.jpg'}
        maxContentWidth="max-w-lg"
      />

      {/* Detailed Description Section */}
      <section className="py-12 md:py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-black mb-6 md:mb-8">
              Overview
            </h2>
            <div className="prose max-w-none text-sm sm:text-base md:text-lg">
              <p className="text-dark-gray mb-8 leading-relaxed">
                {solution.fullDescription || solution.description}
              </p>
              
              {solution.benefits && solution.benefits.length > 0 && (
                <div className="mt-10 md:mt-12">
                  <h3 className="text-xl md:text-2xl font-semibold text-black mb-6">
                    Key Benefits
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {solution.benefits.map((benefit, index) => (
                      <div key={index} className="flex items-start">
                        <div className="w-2 h-2 bg-yellow rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        <p className="text-dark-gray">{benefit}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Partners Section */}
      {solution.partnerIds && solution.partnerIds.length > 0 && (
        <SolutionPartnersSection partnerIds={solution.partnerIds} />
      )}

      {/* Certifications Section */}
      {solution.certifications && solution.certifications.length > 0 && (
        <SolutionCertificationsSection 
          certifications={solution.certifications} 
          solutionTitle={solution.title}
        />
      )}

      {/* Customer Stories Section */}
      {solution.customerStories && solution.customerStories.length > 0 && (
        <CustomerStoriesSection customerStories={solution.customerStories} />
      )}      

      {/* Book Demo/Service Section */}
      <section className="py-12 md:py-16 px-4 sm:px-6 lg:px-8 bg-light-yellow">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-black mb-6">
            Ready to Get Started with {solution.title}?
          </h2>
          <p className="text-base md:text-xl text-dark-gray mb-8 max-w-3xl mx-auto">
            Take the next step in your digital transformation journey. Book a personalized demo 
            or schedule a consultation with our expert team.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-yellow text-black px-6 py-3 sm:px-8 sm:py-4 rounded-lg font-semibold hover:bg-opacity-80 transition-colors duration-200">
              BOOK A DEMO
            </button>
            <button className="bg-dark-gray text-white px-6 py-3 sm:px-8 sm:py-4 rounded-lg font-semibold hover:bg-black transition-colors duration-200">
              BOOK A SERVICE
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <FooterSection />
    </div>
  );
}

// Generate metadata for SEO
export async function generateMetadata({ params }: SolutionPageProps) {
  const { solutionId } = await params;
  const solution = getSolutionById(solutionId);
  
  if (!solution) {
    return {
      title: 'Solution Not Found',
      description: 'The requested solution could not be found.'
    };
  }
  
  return {
    title: `${solution.title} | Task Systems Solutions`,
    description: solution.description,
    keywords: solution.technologies?.join(', ') || '',
    openGraph: {
      title: `${solution.title} | Task Systems Solutions`,
      description: solution.description,
      type: 'website'
    }
  };
}