'use client';

import Badge from '../ui/Badge';
import Image from 'next/image';
import { ORGANIZATION, LEGAL, IMAGES } from '@/config/siteConfig';

const Footer = () => {
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