import { notFound } from 'next/navigation';
import { getSolutionById, generateStaticParams as getSolutionParams } from '@/data/solutions';
import { SolutionPageProps } from '@/types';
import SolutionPartnersSection from '@/components/SolutionPartnersSection';
import { SolutionCertificationsSection } from '@/components/SolutionCertificationsSection';
import FooterSection from '@/components/FooterSection';
import { CustomerStoriesSection } from '@/components/CustomerStoriesSection';
import StandardHeroSection from '@/components/StandardHeroSection';
import Link from 'next/link';

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
      <section className="bg-light-gray py-3 px-4">
        <div className="max-w-7xl mx-auto">
          <nav className="flex items-center space-x-2 text-xs">
            <Link href="/" className="text-gray hover:text-yellow">
              Home
            </Link>
            <span className="text-gray">/</span>
            <Link href="/solutions" className="text-gray hover:text-yellow">
              Solutions
            </Link>
            <span className="text-gray">/</span>
            <span className="text-black font-medium">
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
      <section className="py-8 px-4 sm:py-16">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-xl font-bold text-black mb-4 sm:text-3xl sm:mb-8">
              Overview
            </h2>
            <div className="prose prose-sm sm:prose-lg max-w-none">
              <p className="text-sm text-dark-gray mb-6 leading-relaxed sm:text-xl sm:mb-8">
                {solution.fullDescription || solution.description}
              </p>
              
              {solution.benefits && solution.benefits.length > 0 && (
                <div className="mt-8 sm:mt-12">
                  <h3 className="text-lg font-semibold text-black mb-4 sm:text-2xl sm:mb-6">
                    Key Benefits
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4">
                    {solution.benefits.map((benefit, index) => (
                      <div key={index} className="flex items-start">
                        <div className="w-2 h-2 bg-yellow rounded-full mt-2 mr-3 flex-shrink-0 sm:mt-3 sm:mr-4"></div>
                        <p className="text-xs text-dark-gray sm:text-base">{benefit}</p>
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
      <section className="py-8 px-4 bg-[color:var(--color-light-yellow)] sm:py-16">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-xl font-bold text-black mb-4 sm:text-3xl sm:mb-6">
            Ready to Get Started with {solution.title}?
          </h2>
          <p className="text-sm text-dark-gray mb-6 max-w-3xl mx-auto sm:text-xl sm:mb-8">
            Take the next step in your digital transformation journey. Book a personalized demo 
            or schedule a consultation with our expert team.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center sm:gap-4">
            <button className="bg-yellow text-black px-6 py-3 rounded-lg font-semibold hover:bg-opacity-80 transition-colors duration-200 text-xs sm:px-8 sm:py-4 sm:text-base">
              BOOK A DEMO
            </button>
            <button className="bg-dark-gray text-white px-6 py-3 rounded-lg font-semibold hover:bg-black transition-colors duration-200 text-xs sm:px-8 sm:py-4 sm:text-base">
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