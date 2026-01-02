'use client';

import { useState } from 'react';
import { Card, CardContent, CardHeader } from '../ui/Card';
import Badge from '../ui/Badge';
import { ORGANIZATION, CONTACT, getTelLink, getMailtoLink } from '@/config/siteConfig';
import { GOOGLE_SHEETS_URL } from '@/config/constants';

export default function ContactFormSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    organization: '',
    message: '',
    inquiryType: 'general'
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const response = await fetch(GOOGLE_SHEETS_URL, {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          formType: 'foundation-lead',
          date: new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' }),
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          interestType: formData.inquiryType,
          message: `${formData.organization ? `Organization: ${formData.organization}\n\n` : ''}${formData.message}`,
          sourcePage: window.location.pathname
        })
      });

      // Since we're using no-cors, we can't read the response
      // Assume success if no error is thrown
      setSubmitStatus('success');
      setFormData({
        name: '',
        email: '',
        phone: '',
        organization: '',
        message: '',
        inquiryType: 'general'
      });
    } catch (error) {
      console.error('Form submission error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary-50 to-secondary-50 pt-28 pb-16">
        <div className="main-container">
          <div className="text-center max-w-4xl mx-auto">
            <Badge variant="default" className="mb-4">
              Get In Touch
            </Badge>
            <h1 className="hero-h1 gradient-text mb-6">
              Contact {ORGANIZATION.name}
            </h1>
            <p className="body-large text-gray-600 leading-relaxed max-w-3xl mx-auto">
              Ready to partner with us in transforming rural healthcare? Have questions about our programs? 
              We&apos;d love to hear from you.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information & Form */}
      <section className="section-spacing bg-white">
        <div className="main-container">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h2 className="section-h2 text-gray-900 mb-8">
                {ORGANIZATION.fullName}
              </h2>

              <div className="space-y-8">
                <Card className="medical-card">
                  <CardContent className="p-6">
                    <h4 className="card-h4 text-gray-900 mb-4">
                      Location
                    </h4>
                    <p className="text-gray-600">
                      {CONTACT.address.city}, {CONTACT.address.state}<br />
                      {CONTACT.address.country}
                    </p>
                  </CardContent>
                </Card>

                <Card className="medical-card">
                  <CardContent className="p-6">
                    <h4 className="card-h4 text-gray-900 mb-4">
                      Contact Information
                    </h4>
                    <div className="space-y-2 text-gray-600">
                      <p>Email: <a href={getMailtoLink(CONTACT.emails.general)} className="text-primary-600 hover:underline">{CONTACT.emails.general}</a></p>
                      <p>Hospital: <a href={getTelLink(CONTACT.phones.hospital)} className="text-primary-600 hover:underline">{CONTACT.phones.hospital}</a></p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <Card className="medical-card">
                <CardHeader>
                  <h3 className="subsection-h3 text-gray-900">
                    Send Us a Message
                  </h3>
                  <p className="text-gray-600">
                    We&apos;ll get back to you within 24 hours.
                  </p>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          required
                          value={formData.name}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                          placeholder="Your full name"
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          required
                          value={formData.email}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                          placeholder="your.email@example.com"
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                          placeholder="+91 XXXXX XXXXX"
                        />
                      </div>
                      <div>
                        <label htmlFor="organization" className="block text-sm font-medium text-gray-700 mb-2">
                          Organization
                        </label>
                        <input
                          type="text"
                          id="organization"
                          name="organization"
                          value={formData.organization}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                          placeholder="Your organization"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="inquiryType" className="block text-sm font-medium text-gray-700 mb-2">
                        Inquiry Type
                      </label>
                      <select
                        id="inquiryType"
                        name="inquiryType"
                        value={formData.inquiryType}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                      >
                        <option value="general">General Inquiry</option>
                        <option value="partnership">Partnership Opportunity</option>
                        <option value="donation">Donation Inquiry</option>
                        <option value="mobile-endoscopy">Mobile Endoscopy Support</option>
                        <option value="health-camp">Request Health Camp</option>
                        <option value="media">Media/Press Inquiry</option>
                      </select>
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                        Message *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        required
                        rows={6}
                        value={formData.message}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                        placeholder="Tell us about your inquiry, partnership interest, or how we can help..."
                      />
                    </div>

                    {submitStatus === 'success' && (
                      <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
                        <p className="text-green-800 text-sm font-medium">
                          ✓ Thank you! Your message has been sent successfully. We'll get back to you within 24 hours.
                        </p>
                      </div>
                    )}

                    {submitStatus === 'error' && (
                      <div className="p-4 bg-red-50 border border-red-200 rounded-lg">
                        <p className="text-red-800 text-sm font-medium">
                          ✗ Something went wrong. Please try again or contact us directly at {CONTACT.emails.general}
                        </p>
                      </div>
                    )}

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-primary-500 hover:bg-primary-600 disabled:bg-gray-400 disabled:cursor-not-allowed text-white px-8 py-4 rounded-lg font-semibold shadow-lg shadow-primary-500/25 micro-transition button-click"
                    >
                      {isSubmitting ? 'Sending...' : 'Send Message'}
                    </button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}