'use client';

import React from 'react';
import { X } from 'lucide-react';
import { JobOpening } from '@/types'; // You can also inline the interface if needed

interface JobDetailsModalProps {
  isOpen: boolean;
  onClose: () => void;
  job: JobOpening | null;
  onApply: (jobTitle: string) => void;
}

const JobDetailsModal: React.FC<JobDetailsModalProps> = ({ isOpen, onClose, job, onApply }) => {
  if (!isOpen || !job) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Overlay */}
      <div
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal Content */}
      <div className="relative bg-white rounded-lg shadow-xl max-w-3xl w-full max-h-[90vh] overflow-y-auto transform transition-all duration-300 ease-out scale-100">
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          <h2 className="text-2xl font-bold text-credera-dark">{job.title}</h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors"
            aria-label="Close modal"
          >
            <X className="w-6 h-6 text-gray-500" />
          </button>
        </div>

        <div className="p-6 space-y-6">
          <p className="text-gray-600 font-medium">{job.applicationDeadline}</p>

          <div>
            <h3 className="text-lg font-semibold text-credera-dark mb-2">About This Role</h3>
            <p className="text-gray-700 leading-relaxed">{job.description}</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h4 className="text-lg font-semibold text-credera-dark mb-2">Requirements</h4>
              <ul className="space-y-2">
                {job.requirements.map((req: string, idx: number) => (
                  <li key={idx} className="flex items-start">
                    <span className="text-credera-red mr-3 mt-1">•</span>
                    <span className="text-gray-700">{req}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold text-credera-dark mb-2">Key Responsibilities</h4>
              <ul className="space-y-2">
                {job.responsibilities.map((resp, idx) => (
                  <li key={idx} className="flex items-start">
                    <span className="text-credera-red mr-3 mt-1">•</span>
                    <span className="text-gray-700">{resp}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Apply Button */}
          <div className="pt-4 border-t border-gray-200">
            <button
              onClick={() => onApply(job.title)}
              className="bg-[color:var(--color-foreground)] text-[color:var(--color-yellow)] px-6 py-3 rounded-md hover:opacity-90 transition-colors duration-200 font-semibold w-full md:w-auto"
            >
              Apply for {job.title}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobDetailsModal;
