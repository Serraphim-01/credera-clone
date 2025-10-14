'use client';

import React, { useState } from 'react';
import { X, Upload, CheckCircle } from 'lucide-react';
import { ApplicationFormData, ApplicationModalProps } from '@/types/index';

const ApplicationModal: React.FC<ApplicationModalProps> = ({
  isOpen,
  onClose,
  jobTitle,
  onSubmit
}) => {
  const [formData, setFormData] = useState<ApplicationFormData>({
    firstName: '',
    lastName: '',
    email: '',
    country: '',
    phone: '',
    location: '',
    resume: null,
    education: '',
    linkedinProfile: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    setFormData(prev => ({
      ...prev,
      resume: file
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await onSubmit(formData);
      setShowSuccess(true);

      // Auto-close success modal after 2 seconds
      setTimeout(() => {
        setShowSuccess(false);
        onClose();
        // Reset form
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          country: '',
          phone: '',
          location: '',
          resume: null,
          education: '',
          linkedinProfile: ''
        });
      }, 2000);
    } catch (error) {
      console.error('Application submission error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isOpen) return null;

  // Success Modal
  if (showSuccess) {
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
        <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" />
        <div className="relative bg-white rounded-lg shadow-xl p-8 max-w-md w-full text-center">
          <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
          <h3 className="text-2xl font-bold text-credera-dark mb-2">Application Submitted!</h3>
          <p className="text-gray-600">Thank you for applying to the {jobTitle} position. We&apos;ll be in touch soon.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Overlay */}
      <div
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal Content */}
      <div className="relative bg-white rounded-lg shadow-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          <h2 className="text-2xl font-bold text-credera-dark">Apply for {jobTitle}</h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors"
            aria-label="Close modal"
          >
            <X className="w-6 h-6 text-gray-500" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="p-6 space-y-6">
          {/* Personal Information */}
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">
                First Name *
              </label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                required
                value={formData.firstName}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-credera-red focus:border-transparent"
              />
            </div>
            <div>
              <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">
                Last Name *
              </label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                required
                value={formData.lastName}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-credera-red focus:border-transparent"
              />
            </div>
          </div>

          {/* Contact Information */}
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
              Email Address *
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              value={formData.email}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-credera-red focus:border-transparent"
            />
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="country" className="block text-sm font-medium text-gray-700 mb-1">
                Country *
              </label>
              <select
                id="country"
                name="country"
                required
                value={formData.country}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-credera-red focus:border-transparent"
              >
                <option value="">Select Country</option>
                <option value="US">United States</option>
                <option value="CA">Canada</option>
                <option value="UK">United Kingdom</option>
                <option value="AU">Australia</option>
                <option value="DE">Germany</option>
                <option value="FR">France</option>
                <option value="IN">India</option>
                <option value="JP">Japan</option>
                <option value="SG">Singapore</option>
                <option value="OTHER">Other</option>
              </select>
            </div>
            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                Phone Number *
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                required
                value={formData.phone}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-credera-red focus:border-transparent"
              />
            </div>
          </div>

          <div>
            <label htmlFor="location" className="block text-sm font-medium text-gray-700 mb-1">
              Location (City) *
            </label>
            <input
              type="text"
              id="location"
              name="location"
              required
              placeholder="e.g. New York, London, Toronto"
              value={formData.location}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-credera-red focus:border-transparent"
            />
          </div>

          {/* Resume Upload */}
          <div>
            <label htmlFor="resume" className="block text-sm font-medium text-gray-700 mb-1">
              Resume/CV *
            </label>
            <div className="border-2 border-dashed border-gray-300 rounded-md p-4 text-center hover:border-credera-red transition-colors">
              <Upload className="w-8 h-8 text-gray-400 mx-auto mb-2" />
              <input
                type="file"
                id="resume"
                name="resume"
                required
                accept=".pdf,.doc,.docx"
                onChange={handleFileChange}
                className="hidden"
              />
              <label
                htmlFor="resume"
                className="cursor-pointer text-credera-red font-medium hover:text-red-700"
              >
                {formData.resume ? formData.resume.name : 'Click to upload your resume'}
              </label>
              <p className="text-xs text-gray-500 mt-1">PDF, DOC, or DOCX (max 5MB)</p>
            </div>
          </div>

          {/* Education */}
          <div>
            <label htmlFor="education" className="block text-sm font-medium text-gray-700 mb-1">
              Education *
            </label>
            <textarea
              id="education"
              name="education"
              required
              rows={3}
              placeholder="Please describe your educational background..."
              value={formData.education}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-credera-red focus:border-transparent"
            />
          </div>

          {/* LinkedIn Profile */}
          <div>
            <label htmlFor="linkedinProfile" className="block text-sm font-medium text-gray-700 mb-1">
              LinkedIn Profile
            </label>
            <input
              type="url"
              id="linkedinProfile"
              name="linkedinProfile"
              placeholder="https://linkedin.com/in/yourprofile"
              value={formData.linkedinProfile}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-credera-red focus:border-transparent"
            />
          </div>

          {/* Submit Button */}
          <div className="pt-4 border-t border-gray-200">
            <button
              type="submit"
              disabled={isSubmitting}
              className="group relative w-full text-[color:var(--color-foreground)] px-6 py-3 rounded-md font-semibold disabled:opacity-50 disabled:cursor-not-allowed overflow-hidden"
            >
              <span className="relative inline-flex items-center">
                {isSubmitting ? 'Submitting Application...' : 'Submit Application'}

                {/* Arrow */}
                <span
                  className="ml-2 opacity-0 transform translate-x-[-6px] transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0"
                >
                  →
                </span>

                {/* Underline */}
                <span
                  className="absolute -bottom-1 left-0 w-0 h-[2px] bg-[color:var(--color-foreground)] transition-all duration-300 group-hover:w-full"
                ></span>
              </span>
            </button>
          </div>

        </form>
      </div>
    </div>
  );
};

export default ApplicationModal;