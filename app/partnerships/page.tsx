import React from 'react';
import Link from 'next/link';
import { partnerships, getAllPartnershipCategories } from '@/data/partnerships';
import { Partnership } from '@/types';
import FooterSection from '@/components/FooterSection';

const PartnershipsPage: React.FC = () => {
  const categories = getAllPartnershipCategories();
  
  const getCategoryTitle = (category: Partnership['category']) => {
    switch (category) {
      case 'technology': return 'Technology Partners';
      case 'hardware': return 'Hardware Partners';
      case 'infrastructure': return 'Infrastructure Partners';
      case 'enterprise': return 'Enterprise Partners';
      case 'security': return 'Security Partners';
      default: return 'Partners';
    }
  };

  const getPartnersByCategory = (category: Partnership['category']) => {
    return partnerships.filter(partner => partner.category === category);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-credera-red to-red-600 text-white py-24">
        <div className="max-w-7xl mx-auto px-8">
          <div className="max-w-4xl">
            <h1 className="text-5xl font-bold mb-6">Strategic Partnerships</h1>
            <p className="text-xl text-red-100 leading-relaxed">
              Leveraging strategic alliances with industry leaders to deliver best-in-class solutions. 
              Our partnerships enable us to provide comprehensive, cutting-edge technology implementations 
              that drive exceptional business outcomes.
            </p>
          </div>
        </div>
      </div>

      {/* Partners by Category */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-8">
          {categories.map((category) => {
            const categoryPartners = getPartnersByCategory(category);
            
            return (
              <div key={category} className="mb-16">
                <h2 className="text-3xl font-bold text-credera-dark mb-8 border-b-2 border-credera-red pb-4">
                  {getCategoryTitle(category)}
                </h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                  {categoryPartners.map((partner) => (
                    <Link
                      key={partner.id}
                      href={`/partnerships/${partner.id}`}
                      className="group bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg hover:border-credera-red transition-all duration-300"
                    >
                      <div className="text-center">
                        <div className="w-20 h-20 mx-auto mb-4 bg-gray-100 rounded-lg flex items-center justify-center group-hover:bg-credera-red group-hover:text-white transition-colors duration-300">
                          <span className="text-2xl font-bold">
                            {partner.name.charAt(0)}
                          </span>
                        </div>
                        <h3 className="text-lg font-semibold text-credera-dark group-hover:text-credera-red transition-colors duration-300 mb-2">
                          {partner.name}
                        </h3>
                        <p className="text-sm text-gray-600 mb-3">
                          {partner.partnershipLevel}
                        </p>
                        <div className="flex flex-wrap gap-1 justify-center">
                          {partner.specializations.slice(0, 2).map((spec, index) => (
                            <span
                              key={index}
                              className="px-2 py-1 bg-gray-100 text-xs text-gray-600 rounded"
                            >
                              {spec}
                            </span>
                          ))}
                          {partner.specializations.length > 2 && (
                            <span className="px-2 py-1 bg-gray-100 text-xs text-gray-600 rounded">
                              +{partner.specializations.length - 2} more
                            </span>
                          )}
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-4xl mx-auto text-center px-8">
          <h2 className="text-3xl font-bold text-credera-dark mb-4">
            Ready to Leverage Our Partnership Network?
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Contact us to learn how our strategic partnerships can accelerate your technology initiatives 
            and deliver exceptional results for your organization.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-credera-red text-white px-8 py-3 rounded-md font-semibold hover:bg-red-600 transition-colors duration-300"
            >
              Contact Us
            </Link>
            <Link
              href="/services"
              className="border border-credera-red text-credera-red px-8 py-3 rounded-md font-semibold hover:bg-credera-red hover:text-white transition-colors duration-300"
            >
              View Our Services
            </Link>
          </div>
        </div>
      </div>
      
      {/* Footer */}
      <FooterSection />
    </div>
  );
};

export default PartnershipsPage;