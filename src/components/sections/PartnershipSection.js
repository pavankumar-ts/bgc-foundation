'use client';

import { useState } from 'react';
import { Card, CardContent, CardHeader } from '../ui/Card';
import Badge from '../ui/Badge';

const PartnershipSection = () => {
  const [activePartnership, setActivePartnership] = useState('funding');

  const partnershipTypes = [
    {
      id: 'funding',
      title: 'Funding Partners',
      icon: '💰',
      description: 'Support our Mobile Endoscopy Initiative and rural health camp operations',
      examples: [
        'Mobile Endoscopy Unit acquisition',
        'Medical equipment funding',
        'Rural health camp sponsorship',
        'Infrastructure development'
      ]
    },
    {
      id: 'healthcare',
      title: 'Healthcare Partners',
      icon: '🏥',
      description: 'Collaborate with us to expand rural healthcare delivery',
      examples: [
        'Medical expertise sharing',
        'Training program development',
        'Telemedicine partnerships',
        'Specialist consultation networks'
      ]
    },
    {
      id: 'community',
      title: 'Community Partners',
      icon: '🤝',
      description: 'Help us reach more underserved rural communities',
      examples: [
        'Local community connections',
        'Rural area identification',
        'Cultural bridge building',
        'Community health education'
      ]
    },
    {
      id: 'corporate',
      title: 'Corporate Partners',
      icon: '🏢',
      description: 'Corporate social responsibility partnerships for sustainable impact',
      examples: [
        'Employee wellness programs',
        'Corporate health camps',
        'Sustainability initiatives',
        'Community outreach programs'
      ]
    }
  ];

  const currentPartnership = {
    organization: 'Rotary Cubbon Park Trust',
    district: 'RI District 3191, Bengaluru',
    focus: 'Mobile Endoscopy Initiative',
    status: 'Active collaboration for funding acquisition'
  };

  const impactAreas = [
    {
      title: 'Direct Healthcare Access',
      description: 'Bring specialized digestive health programs directly to rural communities',
      icon: '🩺'
    },
    {
      title: 'Professional Training',
      description: 'Develop local healthcare capacity and training programs',
      icon: '🎓'
    },
    {
      title: 'Technology Integration',
      description: 'Implement telemedicine and mobile health solutions',
      icon: '📱'
    },
    {
      title: 'Sustainable Infrastructure',
      description: 'Build lasting healthcare infrastructure in underserved areas',
      icon: '🏗️'
    }
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="section-spacing bg-gradient-to-r from-primary-50 to-secondary-50 pt-24">
        <div className="main-container">
          <div className="text-center max-w-4xl mx-auto">
            <Badge variant="default" className="mb-4">
              Partnership Opportunities
            </Badge>
            <h1 className="hero-h1 gradient-text mb-6">
              Join Our Mission to Transform Rural Healthcare
            </h1>
            <p className="body-large text-gray-600 leading-relaxed max-w-3xl mx-auto">
              Partner with BGC Foundation to bring life-saving digestive health programs to communities 
              that would otherwise have no access to specialized healthcare. Your collaboration creates lasting impact.
            </p>
          </div>
        </div>
      </section>

      {/* Partnership Types */}
      <section className="section-spacing bg-white">
        <div className="main-container">
          <div className="text-center mb-16">
            <h2 className="section-h2 text-gray-900 mb-6">
              How Organizations Can Partner With Us
            </h2>
            <p className="body-large text-gray-600 max-w-3xl mx-auto">
              We believe in collaborative healthcare solutions. Explore different ways your organization 
              can contribute to transforming rural healthcare delivery across Karnataka.
            </p>
          </div>

          {/* Partnership Type Selector */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {partnershipTypes.map((type) => (
              <button
                key={type.id}
                onClick={() => setActivePartnership(type.id)}
                className={`px-6 py-3 rounded-lg font-semibold micro-transition ${
                  activePartnership === type.id
                    ? 'bg-primary-500 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {type.icon} {type.title}
              </button>
            ))}
          </div>

          {/* Active Partnership Details */}
          {partnershipTypes.map((type) => (
            <div
              key={type.id}
              className={`${activePartnership === type.id ? 'block' : 'hidden'}`}
            >
              <Card className="medical-card max-w-4xl mx-auto">
                <CardHeader className="text-center">
                  <div className="text-4xl mb-4">{type.icon}</div>
                  <h3 className="subsection-h3 text-gray-900">{type.title}</h3>
                  <p className="text-gray-600 mt-2">{type.description}</p>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-4">Partnership Opportunities:</h4>
                      <ul className="space-y-3">
                        {type.examples.map((example, index) => (
                          <li key={index} className="flex items-center text-gray-600">
                            <span className="text-primary-500 mr-3">•</span>
                            {example}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="bg-gradient-to-r from-primary-50 to-secondary-50 p-6 rounded-lg">
                      <h4 className="font-semibold text-gray-900 mb-3">Get Started</h4>
                      <p className="text-gray-600 mb-4">
                        Ready to make a difference? Contact us to discuss how we can work together.
                      </p>
                      <div className="space-y-2">
                        <p className="text-sm text-gray-500">Contact Information:</p>
                        <p className="text-gray-700">Phone: +91 96637 15077</p>
                        <p className="text-gray-700">Email: partnerships@bgcfoundation.org</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </section>

      {/* Current Partnership Highlight */}
      <section className="section-spacing bg-gradient-to-r from-secondary-50 to-primary-50">
        <div className="main-container">
          <div className="text-center mb-12">
            <Badge variant="secondary" className="mb-4">
              Featured Partnership
            </Badge>
            <h2 className="section-h2 gradient-text mb-6">
              Current Collaboration: Rotary Cubbon Park Trust
            </h2>
            <p className="body-large text-gray-600 max-w-3xl mx-auto">
              We are currently working with the Trustees of Rotary Cubbon Park Trust, RI District 3191, 
              Bengaluru, to secure funding for our Mobile Endoscopy Initiative.
            </p>
          </div>

          <Card className="medical-card max-w-2xl mx-auto bg-white">
            <CardContent className="p-8 text-center">
              <div className="text-4xl mb-4">🤝</div>
              <h4 className="card-h4 text-gray-900 mb-2">Partnership in Action</h4>
              <div className="space-y-3 text-left">
                <div className="flex justify-between">
                  <span className="text-gray-600">Organization:</span>
                  <span className="font-semibold">{currentPartnership.organization}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">District:</span>
                  <span className="font-semibold">{currentPartnership.district}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Initiative:</span>
                  <span className="font-semibold">{currentPartnership.focus}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Status:</span>
                  <span className="font-semibold text-primary-600">{currentPartnership.status}</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Impact Areas */}
      <section className="section-spacing bg-white">
        <div className="main-container">
          <div className="text-center mb-16">
            <h2 className="section-h2 text-gray-900 mb-6">
              Partnership Impact Areas
            </h2>
            <p className="body-large text-gray-600 max-w-3xl mx-auto">
              Together, we can create sustainable change in rural healthcare delivery across multiple dimensions.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {impactAreas.map((area, index) => (
              <Card key={index} className="medical-card text-center h-full">
                <CardContent className="p-6 space-y-4">
                  <div className="text-3xl">{area.icon}</div>
                  <h3 className="card-h4 text-gray-900">{area.title}</h3>
                  <p className="text-sm text-gray-600">{area.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section-spacing bg-gradient-to-r from-primary-50 to-secondary-50">
        <div className="main-container text-center">
          <h2 className="section-h2 gradient-text mb-6">
            Ready to Partner with BGC Foundation?
          </h2>
          <p className="body-large text-gray-600 mb-8 max-w-2xl mx-auto">
            Contact us to discuss partnership opportunities and learn how we can work together 
            to transform rural healthcare delivery.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/contact" 
              className="bg-primary-500 hover:bg-primary-600 text-white px-8 py-4 rounded-lg font-semibold shadow-lg shadow-primary-500/25 micro-transition button-click inline-block"
            >
              Contact Us for Partnership
            </a>
            <a 
              href="/mobile-endoscopy" 
              className="bg-white text-primary-600 border border-primary-500 hover:bg-primary-50 px-8 py-4 rounded-lg font-semibold micro-transition button-click inline-block"
            >
              Learn About Mobile Endoscopy
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default PartnershipSection;