'use client';

import { useState, useEffect } from 'react';
import { Card, CardContent } from '../ui/Card';
import Badge from '../ui/Badge';
import Image from 'next/image';

const MeetDoctorsSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Featured Doctor - Dr. Yogananda Reddy
  const featuredDoctor = {
    name: 'Dr. Yogananda Reddy',
    title: 'Chief Gastroenterologist & Program Director',
    credentials: ['MBBS, FRCP (London)', 'MRCP (UK)', 'CCT Gastroenterology', 'NHS Excellence Award'],
    description: 'From London\'s NHS hospitals to Karnataka\'s villages - Dr. Reddy chose to leave his comfortable UK practice to serve those who need it most. With two decades of international expertise, he now leads our "Hospital on Wheels" mission, bringing world-class digestive healthcare directly to rural doorsteps.',
    quote: '"We don\'t just bring medicine to villages. We bring dignity—the dignity of receiving world-class care in your own backyard."',
    photo: '/assets/dr-yogananda.webp',
    experience: '50+ Years Combined Experience',
  };

  // Team Structure as per content reference
  const teamCategories = [
    { title: 'Specialist Gastroenterologists', count: 6, icon: '/assets/icons/doctor.svg' },
    { title: 'Junior Doctors', count: 4, icon: '/assets/icons/doctor.svg' },
    { title: 'Qualified Nurses', count: 8, icon: '/assets/icons/doctor.svg' },
    { title: 'Endoscopy Technicians', count: 2, icon: '/assets/icons/doctor.svg' },
    { title: 'Lab Technicians', count: 2, icon: '/assets/icons/doctor.svg' },
    { title: 'Nursing Assistants', count: 4, icon: '/assets/icons/doctor.svg' },
    { title: 'Admin Staff', count: 6, icon: '/assets/icons/doctor.svg' },
    { title: 'Pharmacists', count: 3, icon: '/assets/icons/doctor.svg' }
  ];

  // Team members showcasing diverse expertise and commitment
  const teamMembers = [
    { name: 'Dr. Rajesh Kumar', specialization: 'Senior Gastroenterologist', experience: '15+ years', story: 'Left Bangalore to serve villages' },
    { name: 'Dr. Priya Sharma', specialization: 'Hepatology Specialist', experience: '12+ years', story: 'Fluent in 4 local languages' },
    { name: 'Dr. Suresh Patel', specialization: 'Endoscopy Expert', experience: '18+ years', story: 'Pioneer of mobile endoscopy' },
    { name: 'Sr. Nurse Anita', specialization: 'Critical Care Nursing', experience: '10+ years', story: 'The caring heart of our team' },
    { name: 'Dr. Meera Reddy', specialization: 'Pediatric Gastroenterology', experience: '8+ years', story: 'Champions child health in villages' },
    { name: 'Tech. Ravi Kumar', specialization: 'Endoscopy Technician', experience: '6+ years', story: 'Makes complex procedures simple' }
  ];

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="section-spacing bg-white" id="team">
      <div className="main-container">

        {/* Featured Doctor - Dr. Yogananda Reddy */}
        <div className="mb-20">
          <Card className=" mx-auto">
            <CardContent className="p-8">
              <div className="grid lg:grid-cols-3 gap-8 items-center">
                <div className="text-center">
                  <div className="w-[400px] h-72 mx-auto rounded-lg overflow-hidden bg-gray-100 mb-4">
                    <Image
                      src={featuredDoctor.photo}
                      alt={featuredDoctor.name}
                      width={1000}
                      height={1000}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>

                <div className="lg:col-span-2 space-y-4">
                  <h3 className="subsection-h3 text-gray-900">
                    {featuredDoctor.name}
                  </h3>

                    <div className="body-large text-primary-600">
                      {featuredDoctor.title}

                  </div>
                  <Badge variant="secondary" className="text-xs">
                    {featuredDoctor.experience}
                  </Badge>
                  <p className="body-regular text-gray-700 mb-4">
                    {featuredDoctor.description}
                  </p>
                  
                  <blockquote className="border-l-4 border-primary-500 pl-4 py-2 mb-4 bg-primary-50 rounded-r">
                    <p className="italic text-gray-800 font-medium">{featuredDoctor.quote}</p>
                  </blockquote>
                  <div>
                    <h4 className="card-h4 text-gray-900 mb-2">Professional Credentials</h4>
                    <div className="flex flex-wrap gap-2">
                      {featuredDoctor.credentials.map((credential, index) => (
                        <Badge key={index} variant="outline" className="text-xs">
                          {credential}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Team Structure Grid */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h3 className="subsection-h3 text-gray-900 mb-4">
              35 Professionals, One Shared Purpose
            </h3>
            <p className="body-large text-gray-600 max-w-3xl mx-auto">
              When our mobile units roll into a village, they bring an entire hospital's worth of expertise. Every role matters, every person counts - from our gastroenterologists to our nursing assistants, we're a family united by purpose.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {teamCategories.map((category, index) => (
              <Card
                key={index}
                className={`bg-primary-50/20 text-center p-2 flex justify-center items-center h-full transform transition-all duration-500 hover:scale-105 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <CardContent className="space-y-4">
                  <div className="flex items-center justify-center gap-3 mb-2">
                    <Image
                      src={category.icon}
                      alt={category.title}
                      width={40}
                      height={40}
                    />
                    <div className="text-4xl font-bold text-primary-600">
                      {category.count}
                    </div>
                  </div>
                  <h4 className="card-h4 text-gray-900">
                    {category.title}
                  </h4>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Team Member Carousel */}
        <div className="mb-0">
          <div className="text-center mb-4">
            <h3 className="subsection-h3 text-gray-900 mb-6">
              Faces of Compassion
            </h3>
            <p className="body-large text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Behind every successful rural health camp are real people with real stories. These are just a few of the remarkable individuals who chose rural service over personal comfort.
            </p>
          </div>

          <div className="grid grid-cols-3 gap-8 max-w-6xl mx-auto">
            {teamMembers.map((member, index) => (
              <Card
                key={index}
                className={`group text-center transform transition-all duration-500 hover:scale-105 cursor-pointer`}
              >
                <CardContent className="space-y-4 p-6">
                  {/* Professional Photo */}
                  <div className="mb-4">
                    <div className="w-full h-[240px] mx-auto overflow-hidden rounded-lg group-hover:shadow-md transition-shadow duration-300 border-2 border-primary-100">
                      <Image
                        src="/dummy.webp"
                        alt={member.name}
                        width={1280}
                        height={1280}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <h5 className="font-semibold text-gray-900 text-base leading-tight">
                      {member.name}
                    </h5>
                    <p className="text-primary-600 font-medium text-sm leading-tight">
                      {member.specialization}
                    </p>
                    <p className="text-gray-500 text-xs italic mb-2">
                      {member.story}
                    </p>
                    <Badge variant="outline" className="text-xs px-2 py-1">
                      {member.experience}
                    </Badge>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

        </div>
        
        {/* Mission Connection CTA */}
        <div className="mt-16 text-center bg-gradient-to-r from-primary-50 to-primary-100 rounded-xl p-8">
          <h3 className="subsection-h3 text-gray-900 mb-4">
            Every Team Member Has a Story
          </h3>
          <p className="body-large text-gray-700 max-w-2xl mx-auto mb-6">
            They could work anywhere. They chose here. Because when you see the gratitude in a farmer's eyes after receiving life-saving care in his own village, you understand what true purpose feels like.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <div className="bg-white px-6 py-3 rounded-lg shadow-sm">
              <div className="text-2xl font-bold text-primary-600">5K+</div>
              <div className="text-sm text-gray-600">Lives Touched Annually</div>
            </div>
            <div className="bg-white px-6 py-3 rounded-lg shadow-sm">
              <div className="text-2xl font-bold text-primary-600">4+</div>
              <div className="text-sm text-gray-600">Villages Served</div>
            </div>
            <div className="bg-white px-6 py-3 rounded-lg shadow-sm">
              <div className="text-2xl font-bold text-primary-600">35</div>
              <div className="text-sm text-gray-600">Dedicated Hearts</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MeetDoctorsSection;