'use client';

import React, { useState } from 'react';
import { NextStepsModalProps } from '@/types';

const NextStepsModal: React.FC<NextStepsModalProps> = ({
  isOpen,
  onClose,
  onSubmit,
  defaultConsultType,
  showConsultTypeSelection = false
}) => {
  const consultOptions = [
    { value: 'portfolio-analysis', label: 'Portfolio Analysis' },
    { value: 'tco-assessment', label: 'TCO Assessment' },
    { value: 'feasibility-assessment', label: 'Feasibility Assessment' },
    { value: 'strategy-development', label: 'Strategy Development' },
    { value: 'cloud-assessment', label: 'Cloud Assessment' }
  ];

  const [formData, setFormData] = useState({
    name: '',
    companyEmail: '',
    companyName: '',
    scheduleTime: '',
    consultType: defaultConsultType || ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await onSubmit(formData);
      // Reset form after successful submission
      setFormData({
        name: '',
        companyEmail: '',
        companyName: '',
        scheduleTime: '',
        consultType: defaultConsultType || ''
      });
      onClose();
    } catch (error) {
      console.error('Form submission error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const isFormValid = formData.name && formData.companyEmail && formData.companyName && formData.scheduleTime && 
    (showConsultTypeSelection ? formData.consultType : true);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black/50 transition-opacity -z-10"
        onClick={onClose}
      />
      
      {/* Modal */}
      <div className="flex items-center justify-center min-h-screen px-4 pt-4 pb-20 text-center sm:block sm:p-0 z-40">
        <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
          <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
            {/* Header */}
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-2xl font-bold text-credera-dark">
                Schedule Your Initial Call
              </h3>
              <button
                onClick={onClose}
                className="text-gray-400 hover:text-gray-600 transition-colors"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Consult Type Selection - Only show when showConsultTypeSelection is true */}
              {showConsultTypeSelection && (
                <div>
                  <label htmlFor="consultType" className="block text-sm font-medium text-credera-dark mb-2">
                    Select Consult Type *
                  </label>
                  <select
                    id="consultType"
                    name="consultType"
                    value={formData.consultType}
                    onChange={handleInputChange}
                    required={showConsultTypeSelection}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-credera-red focus:border-transparent"
                  >
                    <option value="">Select the consult service you need...</option>
                    {consultOptions.map((option) => (
                      <option key={option.value} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </select>
                </div>
              )}

              {/* Name Field */}
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-credera-dark mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-credera-red focus:border-transparent"
                  placeholder="Enter your full name"
                />
              </div>

              {/* Company Email Field */}
              <div>
                <label htmlFor="companyEmail" className="block text-sm font-medium text-credera-dark mb-2">
                  Company Email *
                </label>
                <input
                  type="email"
                  id="companyEmail"
                  name="companyEmail"
                  value={formData.companyEmail}
                  onChange={handleInputChange}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-credera-red focus:border-transparent"
                  placeholder="Enter your company email"
                />
              </div>

              {/* Company Name Field */}
              <div>
                <label htmlFor="companyName" className="block text-sm font-medium text-credera-dark mb-2">
                  Company Name *
                </label>
                <input
                  type="text"
                  id="companyName"
                  name="companyName"
                  value={formData.companyName}
                  onChange={handleInputChange}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-credera-red focus:border-transparent"
                  placeholder="Enter your company name"
                />
              </div>

              {/* Schedule Time Field */}
              <div>
                <label htmlFor="scheduleTime" className="block text-sm font-medium text-credera-dark mb-2">
                  Preferred Call Time *
                </label>
                <input
                  type="datetime-local"
                  id="scheduleTime"
                  name="scheduleTime"
                  value={formData.scheduleTime}
                  onChange={handleInputChange}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-credera-red focus:border-transparent"
                  min={new Date().toISOString().slice(0, 16)}
                />
              </div>

              {/* Submit Button */}
              <div className="flex justify-end space-x-3 pt-4">
                <button
                  type="button"
                  onClick={onClose}
                  className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-200 rounded-md hover:bg-gray-300 transition-colors"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={!isFormValid || isSubmitting}
                  className="px-6 py-2 text-sm font-medium text-white bg-credera-red rounded-md hover:bg-red-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                >
                  {isSubmitting ? 'Submitting...' : 'Schedule Call'}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NextStepsModal;