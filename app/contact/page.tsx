'use client';

import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';
import StandardHeroSection from '@/components/StandardHeroSection';
import FooterSection from '@/components/FooterSection';

const ContactPage = () => {
  const locations = [
    {
      name: 'Lagos Office',
      address: 'Yudala Heights Building, 13 Idowu Martins Street, Victoria Island, Lagos',
      phone: '+234 911 080 8619',
      email: 'engage@tasksystems.com',
    },
    {
      name: 'Abuja Office',
      address: '20 Port Harcourt Crescent, off Gimbiya Street, Area 11 Garki District, Abuja',
      phone: '+234 911 080 8619',
    },
    {
      name: 'Rivers Office',
      address: '146 Trans Amadi Industrial Layout, Port Harcourt, Rivers State',
      phone: '+234 911 080 8619',
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <StandardHeroSection
        title="Contact Us"
        subtitle="Get in Touch"
        description="We're here to help. Whether you have a question about our services, want to discuss a project, or are interested in a partnership, we'd love to hear from you."
        backgroundImage="/TaskImages/meet.jpg"
        maxContentWidth="max-w-4xl"
      />

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Contact Details */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold text-black mb-6">Our Locations</h2>
                {locations.map((location) => (
                  <div key={location.name} className="mb-6">
                    <h3 className="text-xl font-semibold text-black">{location.name}</h3>
                    <div className="flex items-start mt-2">
                      <MapPin className="w-5 h-5 text-yellow mt-1 mr-3" />
                      <p className="text-dark-gray">{location.address}</p>
                    </div>
                    <div className="flex items-center mt-2">
                      <Phone className="w-5 h-5 text-yellow mr-3" />
                      <p className="text-dark-gray">{location.phone}</p>
                    </div>
                    {location.email && (
                      <div className="flex items-center mt-2">
                        <Mail className="w-5 h-5 text-yellow mr-3" />
                        <a href={`mailto:${location.email}`} className="text-dark-gray hover:text-yellow">
                          {location.email}
                        </a>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Google Map */}
            <div>
              <h2 className="text-3xl font-bold text-black mb-6">Find Us on the Map</h2>
              <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden shadow-lg">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3168.636531339655!2d-122.0840!3d37.4220!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80858085a498b0d7%3A0x24249a2a7a9d701c!2sGoogleplex!5e0!3m2!1sen!2sus!4v1628882724874!5m2!1sen!2sus"
                  width="100%"
                  height="450"
                  style={{ border: 0 }}
                  allowFullScreen={true}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>

      <FooterSection />
    </div>
  );
};

export default ContactPage;