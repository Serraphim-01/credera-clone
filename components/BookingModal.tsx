'use client';

import React, { useState, useEffect } from 'react';
import { X } from 'lucide-react';
import { servicesData } from '@/data/services';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  type: 'demo' | 'service';
}

interface FormData {
  name: string;
  email: string;
  organization: string;
  dateRange: {
    start: string;
    end: string;
  };
  selectedService: string;
  canReplyEmail: boolean;
  canContactPromo: boolean;
}

const BookingModal: React.FC<BookingModalProps> = ({ isOpen, onClose, type }) => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    organization: '',
    dateRange: {
      start: '',
      end: ''
    },
    selectedService: '',
    canReplyEmail: false,
    canContactPromo: false
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState<Partial<FormData>>({});

  // Reset form when modal opens/closes
  useEffect(() => {
    if (!isOpen) {
      setFormData({
        name: '',
        email: '',
        organization: '',
        dateRange: { start: '', end: '' },
        selectedService: '',
        canReplyEmail: false,
        canContactPromo: false
      });
      setErrors({});
      setIsSubmitting(false);
    }
  }, [isOpen]);

  // Close modal on escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [isOpen, onClose]);

  // Prevent body scroll when modal is open
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

  const validateForm = (): boolean => {
    const newErrors: Partial<FormData> = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData.organization.trim()) {
      newErrors.organization = 'Organization name is required';
    }

    if (!formData.dateRange.start) {
      newErrors.dateRange = { ...newErrors.dateRange, start: 'Start date is required' };
    }

    if (!formData.dateRange.end) {
      newErrors.dateRange = { ...newErrors.dateRange, end: 'End date is required' };
    }

    if (formData.dateRange.start && formData.dateRange.end) {
      const startDate = new Date(formData.dateRange.start);
      const endDate = new Date(formData.dateRange.end);
      if (startDate >= endDate) {
        newErrors.dateRange = { ...newErrors.dateRange, end: 'End date must be after start date' };
      }
    }

    if (!formData.selectedService) {
      newErrors.selectedService = 'Please select a service';
    }

    if (!formData.canReplyEmail) {
      newErrors.canReplyEmail = 'You must allow us to reply to your email';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Handle successful submission
      console.log('Booking submitted:', {
        type,
        ...formData
      });

      // Close modal and show success message
      onClose();
      alert(`${type === 'demo' ? 'Demo' : 'Service'} booking submitted successfully! We'll contact you soon.`);
    } catch (error) {
      console.error('Booking submission failed:', error);
      alert('Failed to submit booking. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (field: keyof FormData, value: string | boolean) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));

    // Clear error when user starts typing
    if (errors[field]) {
      setErrors(prev => ({
        ...prev,
        [field]: undefined
      }));
    }
  };

  const handleDateRangeChange = (field: 'start' | 'end', value: string) => {
    setFormData(prev => ({
      ...prev,
      dateRange: {
        ...prev.dateRange,
        [field]: value
      }
    }));

    // Clear date range errors
    if (errors.dateRange) {
      setErrors(prev => ({
        ...prev,
        dateRange: undefined
      }));
    }
  };

  if (!isOpen) return null;

  const isDemo = type === 'demo';
  const modalTitle = isDemo ? 'Book a Demo' : 'Book a Service';
  const dateLabel = isDemo ? 'Preferred Demo Date Range' : 'Preferred Meeting Date Range';

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop with blur */}
      <div 
        className="absolute inset-0 bg-black bg-opacity-50"
        style={{ backdropFilter: 'blur(8px)' }}
        onClick={onClose}
      />
      
      {/* Modal */}
      <div className="relative bg-white rounded-lg shadow-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          <h2 className="text-2xl font-bold text-gray-900">{modalTitle}</h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors"
            aria-label="Close modal"
          >
            <X className="w-6 h-6 text-gray-500" />
          </button>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="p-6 space-y-6">
          {/* Name */}
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
              Full Name *
            </label>
            <input
              type="text"
              id="name"
              value={formData.name}
              onChange={(e) => handleInputChange('name', e.target.value)}
              className={`w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 ${
                errors.name ? 'border-red-500' : 'border-gray-300'
              }`}
              placeholder="Enter your full name"
            />
            {errors.name && <p className="mt-1 text-sm text-red-600">{errors.name}</p>}
          </div>

          {/* Email */}
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
              Official Email Address *
            </label>
            <input
              type="email"
              id="email"
              value={formData.email}
              onChange={(e) => handleInputChange('email', e.target.value)}
              className={`w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 ${
                errors.email ? 'border-red-500' : 'border-gray-300'
              }`}
              placeholder="Enter your official email address"
            />
            {errors.email && <p className="mt-1 text-sm text-red-600">{errors.email}</p>}
          </div>

          {/* Organization */}
          <div>
            <label htmlFor="organization" className="block text-sm font-medium text-gray-700 mb-1">
              Organization Name *
            </label>
            <input
              type="text"
              id="organization"
              value={formData.organization}
              onChange={(e) => handleInputChange('organization', e.target.value)}
              className={`w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 ${
                errors.organization ? 'border-red-500' : 'border-gray-300'
              }`}
              placeholder="Enter your organization name"
            />
            {errors.organization && <p className="mt-1 text-sm text-red-600">{errors.organization}</p>}
          </div>

          {/* Date Range */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              {dateLabel} *
            </label>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <input
                  type="date"
                  value={formData.dateRange.start}
                  onChange={(e) => handleDateRangeChange('start', e.target.value)}
                  min={new Date().toISOString().split('T')[0]}
                  className={`w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 ${
                    errors.dateRange?.start ? 'border-red-500' : 'border-gray-300'
                  }`}
                />
                {errors.dateRange?.start && <p className="mt-1 text-sm text-red-600">{errors.dateRange.start}</p>}
              </div>
              <div>
                <input
                  type="date"
                  value={formData.dateRange.end}
                  onChange={(e) => handleDateRangeChange('end', e.target.value)}
                  min={formData.dateRange.start || new Date().toISOString().split('T')[0]}
                  className={`w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 ${
                    errors.dateRange?.end ? 'border-red-500' : 'border-gray-300'
                  }`}
                />
                {errors.dateRange?.end && <p className="mt-1 text-sm text-red-600">{errors.dateRange.end}</p>}
              </div>
            </div>
          </div>

          {/* Service Selection */}
          <div>
            <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-1">
              Select a Service for {isDemo ? 'Demo' : 'Meeting'} *
            </label>
            <select
              id="service"
              value={formData.selectedService}
              onChange={(e) => handleInputChange('selectedService', e.target.value)}
              className={`w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 ${
                errors.selectedService ? 'border-red-500' : 'border-gray-300'
              }`}
            >
              <option value="">Choose a service...</option>
              {servicesData.map((service) => (
                <option key={service.id} value={service.id}>
                  {service.title}
                </option>
              ))}
            </select>
            {errors.selectedService && <p className="mt-1 text-sm text-red-600">{errors.selectedService}</p>}
          </div>

          {/* Consent Checkboxes */}
          <div className="space-y-4">
            <div className="flex items-start">
              <input
                type="checkbox"
                id="canReplyEmail"
                checked={formData.canReplyEmail}
                onChange={(e) => handleInputChange('canReplyEmail', e.target.checked)}
                className={`mt-1 h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded ${
                  errors.canReplyEmail ? 'border-red-500' : ''
                }`}
              />
              <label htmlFor="canReplyEmail" className="ml-2 text-sm text-gray-700">
                I confirm that you can reply to me on this email address *
              </label>
            </div>
            {errors.canReplyEmail && <p className="text-sm text-red-600">{errors.canReplyEmail}</p>}

            <div className="flex items-start">
              <input
                type="checkbox"
                id="canContactPromo"
                checked={formData.canContactPromo}
                onChange={(e) => handleInputChange('canContactPromo', e.target.checked)}
                className="mt-1 h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
              />
              <label htmlFor="canContactPromo" className="ml-2 text-sm text-gray-700">
                I agree to receive promotional communications and updates about your services
              </label>
            </div>
          </div>

          {/* Submit Button */}
          <div className="flex justify-end pt-4 border-t border-gray-200">
            <button
              type="button"
              onClick={onClose}
              className="mr-4 px-6 py-2 text-sm font-medium text-gray-700 bg-gray-100 border border-gray-300 rounded-md hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={isSubmitting}
              className="px-6 py-2 text-sm font-medium text-white bg-blue-600 border border-transparent rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? 'Submitting...' : `Submit ${isDemo ? 'Demo' : 'Service'} Request`}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default BookingModal;