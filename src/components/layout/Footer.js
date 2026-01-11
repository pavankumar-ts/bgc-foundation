'use client';

import { useState } from 'react';
import { Card, CardContent } from '../ui/Card';
import Badge from '../ui/Badge';
import Image from 'next/image';
import { ORGANIZATION, LEGAL, IMAGES } from '@/config/siteConfig';
import { GOOGLE_SHEETS_URL } from '@/config/constants';

const Footer = () => {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleNewsletterSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      await fetch(GOOGLE_SHEETS_URL, {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          formType: 'foundation-lead',
          date: new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' }),
          name: '',
          email: email,
          phone: '',
          interestType: 'Newsletter Subscription',
          message: 'Newsletter subscription request',
          sourcePage: 'Footer Newsletter'
        })
      });

      setSubmitStatus('success');
      setEmail('');
    } catch (error) {
      console.error('Newsletter subscription error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const footerSections = [
    {
      title: 'About',
      links: [
        { name: 'Our Mission', href: '/about' },
        { name: 'Our Team', href: '/team' },
        { name: 'Impact', href: '/impact' }
      ]
    },
    {
      title: 'Programs',
      links: [
        { name: 'Health Camps', href: '/camps' },
        { name: 'All Programs', href: '/programs' }
      ]
    },
    {
      title: 'Support Us',
      links: [
        { name: 'Contact', href: '/contact' },
        { name: 'Partner With Us', href: '/contact' }
      ]
    }
  ];

  return (
    <footer className="bg-gradient-to-br from-white via-gray-50 to-primary-50 text-gray-900">
      {/* Newsletter Subscription */}
      <div className="border-b border-gray-200">
        <div className="section-container py-12 pt-0">
          <Card className="bg-gradient-to-r from-primary-600 to-secondary-600 border-none">
            <CardContent className="text-center py-8 px-6">
              <h3 className="subsection-h3 text-white mb-4">
                Stay Updated on Our Impact
              </h3>
              <p className="text-primary-100 mb-6 max-w-2xl mx-auto">
                Get monthly updates on our rural healthcare initiatives, patient stories,
                and ways to make a difference in underserved communities.
              </p>
              <form onSubmit={handleNewsletterSubmit} className="max-w-md mx-auto px-4 sm:px-0">
                <div className="flex flex-col sm:flex-row gap-3">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    disabled={isSubmitting}
                    className="flex-1 px-4 py-3 rounded-lg text-gray-900 focus:ring-2 focus:ring-white focus:outline-none disabled:bg-gray-200 disabled:cursor-not-allowed w-full"
                  />
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="bg-white text-primary-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors shadow-sm disabled:bg-gray-300 disabled:cursor-not-allowed whitespace-nowrap w-full sm:w-auto"
                  >
                    {isSubmitting ? 'Sending...' : 'Subscribe'}
                  </button>
                </div>
                {submitStatus === 'success' && (
                  <p className="text-xs text-white mt-3 font-medium">
                    ✓ Successfully subscribed! Thank you for joining our community.
                  </p>
                )}
                {submitStatus === 'error' && (
                  <p className="text-xs text-red-200 mt-3 font-medium">
                    ✗ Something went wrong. Please try again.
                  </p>
                )}
                {!submitStatus && (
                  <p className="text-xs text-primary-200 mt-3">
                    We respect your privacy. Unsubscribe at any time.
                  </p>
                )}
              </form>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="section-container py-16">
        <div className="grid lg:grid-cols-6 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-2 space-y-6">
            <Image
              src={IMAGES.logo}
              alt={`${ORGANIZATION.name} Logo`}
              width={1000}
              height={1000}
              className="h-20 object-left object-contain"
            />
            <p className="text-gray-700 leading-relaxed">
              {ORGANIZATION.tagline}. Bridging the gap between specialized medical care and rural communities.
            </p>
          </div>

          {/* Footer Links */}
          {footerSections.map((section, index) => (
            <div key={index} className="space-y-4">
              <h4 className="card-h4 text-gray-900">{section.title}</h4>
              <ul className="space-y-2">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a
                      href={link.href}
                      className="text-gray-600 hover:text-primary-600 text-sm transition-colors"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      {/* Bottom Bar */}
      <div className="border-t border-gray-200 bg-gray-100">
        <div className="section-container py-6">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6 text-sm text-gray-600">
              <span>{LEGAL.copyright.text}</span>
              <div className="flex space-x-4">
                <a href="/privacy-policy" className="hover:text-gray-900 transition-colors">Privacy Policy</a>
                <a href="/terms-of-service" className="hover:text-gray-900 transition-colors">Terms of Service</a>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <Badge variant="primary" className="text-xs">
                Registration ID: BMH-4-00820-2024-25
              </Badge>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;