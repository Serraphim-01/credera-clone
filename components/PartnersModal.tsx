'use client';

import React, { useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { X } from 'lucide-react';
import { partnerships } from '@/data/partnerships';

interface PartnersModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const PartnersModal: React.FC<PartnersModalProps> = ({ isOpen, onClose }) => {
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [isOpen, onClose]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div
        className="absolute inset-0 bg-black bg-opacity-50"
        style={{ backdropFilter: 'blur(8px)' }}
        onClick={onClose}
      />
      <div className="relative bg-white rounded-lg shadow-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          <h2 className="text-2xl font-bold text-black">Our Partners</h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-light-gray rounded-full transition-colors"
            aria-label="Close modal"
          >
            <X className="w-6 h-6 text-dark-gray" />
          </button>
        </div>
        <div className="p-6">
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
            {partnerships.map((partner) => (
              <Link key={partner.id} href={`/partnerships/${partner.id}`} className="group flex flex-col items-center text-center subtle-lift" onClick={onClose}>
                <div className="w-24 h-24 relative mb-4 transition-all duration-300 group-hover:scale-110">
                  <Image
                    src={partner.logo}
                    alt={`${partner.name} logo`}
                    fill
                    className="object-contain"
                  />
                </div>
                <span className="text-sm font-semibold text-dark-gray">{partner.name}</span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PartnersModal;