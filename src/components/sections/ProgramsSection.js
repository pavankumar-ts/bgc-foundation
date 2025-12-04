'use client';

import { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader } from '../ui/Card';
import Badge from '../ui/Badge';
import Image from 'next/image';

const ProgramsSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  // 8 Core Programs Grid as per design reference specification
  const programsGrid = [
    {
      title: 'Gastroenterology Consultations',
      description: 'Expert diagnosis and treatment by specialist gastroenterologists',
      img: '/assets/programs/consultations.webp',
    },
    {
      title: 'Endoscopy Services',
      description: 'Minimally invasive diagnostic procedures for accurate disease detection',
      img: '/assets/programs/endoscopy.webp',
    },
    {
      title: 'Blood Tests & Laboratory',
      description: 'Complete diagnostic workup for comprehensive health assessment',
      img: '/assets/programs/blood-test.webp',
    },
    {
      title: 'Fibroscan Technology',
      description: 'Advanced liver disease detection with lifestyle modification guidance',
      img: '/assets/programs/fibroscan.webp',
    },
    {
      title: 'Viral Hepatitis Screening',
      description: 'Early detection and management of Hepatitis B and C',
      img: '/assets/programs/hepatitis-screening.webp',
    },
    {
      title: 'Cancer Screening',
      description: 'Early identification of gastrointestinal cancers',
      img: '/assets/programs/cancer-screening.webp',
    },
    {
      title: 'Nutritional Counselling',
      description: 'Customized dietary guidance and lifestyle modification',
      img: '/assets/programs/nutrition.webp',
    },
    {
      title: 'Medicine Distribution',
      description: 'Free medication provided based on diagnostic results',
      img: '/assets/programs/medicine-distribution.webp',
    }
  ];



  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="section-spacing bg-white" id="programs">
      <div className="main-container">
        {/* 8-Card Services Grid as per Design Reference */}
        <div className="">
          <div className="text-center mb-12">
            <h3 className="subsection-h3 text-gray-900 mb-4">
              Comprehensive Digestive Health Programs
            </h3>
            <p className="body-large text-gray-600 max-w-3xl mx-auto">
              Our complete range of specialized programs designed to address digestive health 
              needs in rural communities with professional expertise and care.
            </p>
          </div>

          {/* Clean 8-Card Grid: 4 columns desktop, 2 mobile */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {programsGrid.map((program, index) => (
              <Card 
                key={index} 
                className={`h-full card-hover bg-primary-50/20 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardContent className="p-6 flex flex-col h-full">
                  {/* Consistent Image Container */}
                  <div className="w-full h-40 mb-4 flex items-center justify-center">
                    <Image
                      src={program.img}
                      alt={program.title}
                      width={1000}
                      height={1000}
                      className='w-full h-full object-cover rounded-lg'
                    />
                  </div>

                  {/* Content Section */}
                  <div className="flex-1 flex flex-col text-center">
                    <h4 className="card-h4 text-gray-900 mb-3">{program.title}</h4>
                    <p className="body-regular text-gray-600 leading-relaxed flex-1">
                      {program.description}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>


        {/* Call to Action */}
        {/* <div className="text-center bg-gradient-to-r from-primary-50 to-secondary-50 rounded-2xl p-8 border border-primary-200">
          <h3 className="text-xl font-bold gradient-text mb-4">
            Bring Healthcare to Your Community
          </h3>
          <p className="text-gray-700 mb-6 max-w-xl mx-auto">
            Contact us to schedule a rural health camp in your area.
          </p>
          <button className="bg-primary-500 hover:bg-primary-600 text-white px-8 py-4 rounded-lg font-semibold shadow-lg shadow-primary-500/25 micro-transition button-click">
            Schedule a Camp
          </button>
        </div> */}
      </div>
    </section>
  );
};

export default ProgramsSection;