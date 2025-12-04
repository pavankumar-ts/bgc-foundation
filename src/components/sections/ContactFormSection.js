'use client';

import { useState } from 'react';
import { Card, CardContent, CardHeader } from '../ui/Card';
import Badge from '../ui/Badge';

export default function ContactFormSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    organization: '',
    message: '',
    inquiryType: 'general'
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
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
              Contact BGC Foundation
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
                Bangalore Gastro Centre (BGC) Foundation
              </h2>
              
              <div className="space-y-8">
                <Card className="medical-card">
                  <CardContent className="p-6">
                    <h4 className="card-h4 text-gray-900 mb-4">
                      Location
                    </h4>
                    <p className="text-gray-600">
                      Bengaluru, Karnataka<br />
                      India
                    </p>
                  </CardContent>
                </Card>

                <Card className="medical-card">
                  <CardContent className="p-6">
                    <h4 className="card-h4 text-gray-900 mb-4">
                      Contact Information
                    </h4>
                    <div className="space-y-2 text-gray-600">
                      <p>Email: info@bgcfoundation.org</p>
                      <p>Hospital: 080 4688 8888</p>
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

                    <button
                      type="submit"
                      className="w-full bg-primary-500 hover:bg-primary-600 text-white px-8 py-4 rounded-lg font-semibold shadow-lg shadow-primary-500/25 micro-transition button-click"
                    >
                      Send Message
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