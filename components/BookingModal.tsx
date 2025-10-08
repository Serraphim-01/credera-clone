'use client';

import React, { useState, useEffect } from 'react';
import { X } from 'lucide-react';
import { solutionsData } from '@/data/solutions';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

interface FormData {
  fullName: string;
  company: string;
  companyEmail: string;
  solution: string;
  serviceType: 'demo' | 'service';
  demoType: 'online' | 'physical' | '';
  timeRange: string;
}

const BookingModal: React.FC<BookingModalProps> = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState<FormData>({
    fullName: '',
    company: '',
    companyEmail: '',
    solution: '',
    serviceType: 'demo',
    demoType: '',
    timeRange: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState<Partial<Record<keyof FormData, string>>>({});

  useEffect(() => {
    if (isOpen) {
      setFormData({
        fullName: '',
        company: '',
        companyEmail: '',
        solution: '',
        serviceType: 'demo',
        demoType: '',
        timeRange: '',
      });
      setErrors({});
      setIsSubmitting(false);
    }
  }, [isOpen]);

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
    document.body.style.overflow = isOpen ? 'hidden' : 'unset';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const validateForm = (): boolean => {
    const newErrors: Partial<Record<keyof FormData, string>> = {};
    if (!formData.fullName.trim()) newErrors.fullName = 'Full name is required';
    if (!formData.company.trim()) newErrors.company = 'Company name is required';
    if (!formData.companyEmail.trim()) {
      newErrors.companyEmail = 'Company email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.companyEmail)) {
      newErrors.companyEmail = 'Please enter a valid email address';
    }
    if (!formData.solution) newErrors.solution = 'Please select a solution';
    if (formData.serviceType === 'demo' && !formData.demoType) {
      newErrors.demoType = 'Please select a demo type';
    }
    if (!formData.timeRange.trim()) newErrors.timeRange = 'Time range is required';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);
    try {
      await new Promise(resolve => setTimeout(resolve, 1500));
      console.log('Booking submitted:', formData);
      onClose();
      alert('Your request has been submitted successfully! We will be in touch shortly.');
    } catch (error) {
      console.error('Booking submission failed:', error);
      alert('Failed to submit your request. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (field: keyof FormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: undefined }));
    }
  };

  const handleServiceTypeChange = (value: 'demo' | 'service') => {
    setFormData(prev => ({
      ...prev,
      serviceType: value,
      demoType: value === 'service' ? '' : prev.demoType,
    }));
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div
        className={`
      absolute inset-0 bg-black/50 transition-opacity duration-300
      ${isOpen ? "opacity-100" : "opacity-0"}
    `}
        style={{ backdropFilter: 'blur(8px)' }}
        onClick={onClose}
      />
      <div
        className={`
      relative bg-white rounded-lg shadow-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto
      transform transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]
      ${isOpen ? "opacity-100 scale-100 translate-y-0" : "opacity-0 scale-95 translate-y-4"}
    `}
      >
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          <h2 className="text-2xl font-bold text-gray-900">Book a Demo or Service</h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors"
            aria-label="Close modal"
          >
            <X className="w-6 h-6 text-gray-500" />
          </button>
        </div>
        <form onSubmit={handleSubmit} className="p-6 space-y-6">
          <div>
            <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-1">Full Name *</label>
            <input
              type="text"
              id="fullName"
              value={formData.fullName}
              onChange={(e) => handleInputChange('fullName', e.target.value)}
              className={`w-full px-3 py-2 border rounded-md ${errors.fullName ? 'border-red-500' : 'border-gray-300'}`}
              placeholder="e.g., Jane Doe"
            />
            {errors.fullName && <p className="mt-1 text-sm text-red-600">{errors.fullName}</p>}
          </div>
          <div>
            <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1">Company *</label>
            <input
              type="text"
              id="company"
              value={formData.company}
              onChange={(e) => handleInputChange('company', e.target.value)}
              className={`w-full px-3 py-2 border rounded-md ${errors.company ? 'border-red-500' : 'border-gray-300'}`}
              placeholder="e.g., Acme Corporation"
            />
            {errors.company && <p className="mt-1 text-sm text-red-600">{errors.company}</p>}
          </div>
          <div>
            <label htmlFor="companyEmail" className="block text-sm font-medium text-gray-700 mb-1">Company Email *</label>
            <input
              type="email"
              id="companyEmail"
              value={formData.companyEmail}
              onChange={(e) => handleInputChange('companyEmail', e.target.value)}
              className={`w-full px-3 py-2 border rounded-md ${errors.companyEmail ? 'border-red-500' : 'border-gray-300'}`}
              placeholder="e.g., jane.doe@acme.com"
            />
            {errors.companyEmail && <p className="mt-1 text-sm text-red-600">{errors.companyEmail}</p>}
          </div>
          <div>
            <label htmlFor="solution" className="block text-sm font-medium text-gray-700 mb-1">Solution of Interest *</label>
            <select
              id="solution"
              value={formData.solution}
              onChange={(e) => handleInputChange('solution', e.target.value)}
              className={`w-full px-3 py-2 border rounded-md ${errors.solution ? 'border-red-500' : 'border-gray-300'}`}
            >
              <option value="">Select a solution</option>
              {solutionsData.map((solution) => (
                <option key={solution.id} value={solution.id}>{solution.title}</option>
              ))}
            </select>
            {errors.solution && <p className="mt-1 text-sm text-red-600">{errors.solution}</p>}
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Type of Service *</label>
            <div className="flex gap-4">
              <label className="flex items-center">
                <input
                  type="radio"
                  name="serviceType"
                  value="demo"
                  checked={formData.serviceType === 'demo'}
                  onChange={() => handleServiceTypeChange('demo')}
                  className="form-radio"
                />
                <span className="ml-2">Demo</span>
              </label>
              <label className="flex items-center">
                <input
                  type="radio"
                  name="serviceType"
                  value="service"
                  checked={formData.serviceType === 'service'}
                  onChange={() => handleServiceTypeChange('service')}
                  className="form-radio"
                />
                <span className="ml-2">Service</span>
              </label>
            </div>
          </div>
          {formData.serviceType === 'demo' && (
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Demo Type *</label>
              <div className="flex gap-4">
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="demoType"
                    value="online"
                    checked={formData.demoType === 'online'}
                    onChange={(e) => handleInputChange('demoType', e.target.value)}
                    className="form-radio"
                  />
                  <span className="ml-2">Online</span>
                </label>
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="demoType"
                    value="physical"
                    checked={formData.demoType === 'physical'}
                    onChange={(e) => handleInputChange('demoType', e.target.value)}
                    className="form-radio"
                  />
                  <span className="ml-2">Physical</span>
                </label>
              </div>
              {errors.demoType && <p className="mt-1 text-sm text-red-600">{errors.demoType}</p>}
            </div>
          )}
          <div>
            <label htmlFor="timeRange" className="block text-sm font-medium text-gray-700 mb-1">Preferred Time Range *</label>
            <input
              type="text"
              id="timeRange"
              value={formData.timeRange}
              onChange={(e) => handleInputChange('timeRange', e.target.value)}
              className={`w-full px-3 py-2 border rounded-md ${errors.timeRange ? 'border-red-500' : 'border-gray-300'}`}
              placeholder="e.g., Next week, mornings"
            />
            {errors.timeRange && <p className="mt-1 text-sm text-red-600">{errors.timeRange}</p>}
          </div>
          <div className="flex justify-end pt-4 border-t border-gray-200">
            <button
              type="button"
              onClick={onClose}
              className="mr-4 px-6 py-2 text-sm font-medium text-gray-700 bg-gray-100 rounded-md"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={isSubmitting}
              className="px-6 py-2 text-sm font-medium text-[color:var(--color-yellow)] bg-[color:var(--color-foreground)] rounded-md disabled:opacity-50"
            >
              {isSubmitting ? 'Submitting...' : 'Submit Request'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default BookingModal;