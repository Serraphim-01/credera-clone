'use client';

import React, { useState } from 'react';
import { BookingActionsSectionProps } from '@/types';
import { FiCalendar, FiArrowRight } from 'react-icons/fi';
import BookingModal from './BookingModal';

const BookingActionsSection: React.FC<BookingActionsSectionProps> = ({ actions }) => {
  const [selectedAction, setSelectedAction] = useState<string | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalType, setModalType] = useState<'demo' | 'service'>('demo');

  const handleBooking = (actionType: string) => {
    setSelectedAction(actionType);
    
    // Determine modal type based on action
    if (actionType.toLowerCase().includes('demo')) {
      setModalType('demo');
    } else {
      setModalType('service');
    }
    
    // Open the booking modal
    setIsModalOpen(true);
    
    // Reset selection after animation
    setTimeout(() => setSelectedAction(null), 1000);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <section className="py-16 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-xl opacity-90 max-w-3xl mx-auto">
            Take the next step and discover how our solutions can transform your business.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {actions.map((action) => (
            <div
              key={action.type}
              className="bg-white/10 backdrop-blur-sm rounded-lg p-8 border border-white/20 hover:bg-white/15 transition-all duration-200"
            >
              <div className="text-center">
                <div className="w-16 h-16 bg-white/20 rounded-full mx-auto mb-6 flex items-center justify-center">
                  <FiCalendar className="w-8 h-8" />
                </div>
                
                <h3 className="text-2xl font-bold mb-4">
                  {action.label}
                </h3>
                
                <p className="text-lg opacity-90 mb-8 leading-relaxed">
                  {action.description}
                </p>
                
                <button
                  onClick={() => handleBooking(action.type)}
                  disabled={selectedAction === action.type}
                  className={`w-full bg-white text-blue-600 font-bold py-4 px-8 rounded-lg transition-all duration-200 hover:bg-gray-100 hover:shadow-lg flex items-center justify-center space-x-2 ${
                    selectedAction === action.type ? 'opacity-50 cursor-not-allowed' : ''
                  }`}
                >
                  <span>{selectedAction === action.type ? 'Processing...' : action.ctaText}</span>
                  {selectedAction !== action.type && <FiArrowRight className="w-5 h-5" />}
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Information */}
        <div className="mt-12 text-center">
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 max-w-2xl mx-auto border border-white/20">
            <p className="text-sm opacity-90">
              Our team typically responds within 24 hours. For urgent inquiries, please call us directly at{' '}
              <a href="tel:+1-555-123-4567" className="font-semibold underline hover:no-underline">
                +1 (555) 123-4567
              </a>
            </p>
          </div>
        </div>
      </div>
      
      {/* Booking Modal */}
      <BookingModal 
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        type={modalType}
      />
    </section>
  );
};

export default BookingActionsSection;