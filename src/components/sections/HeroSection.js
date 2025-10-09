'use client';

import { useState, useEffect } from 'react';
import Button from '../ui/Button';
import Badge from '../ui/Badge';

const HeroSection = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const ruralCampImages = [
    {
      src: '/assets/home/hero1.webp',
      alt: 'Mobile health camp in rural Karnataka village',
      title: 'Bringing Healthcare to Rural Communities',
      subtitle: 'We reach the most remote villages in Karnataka to provide essential digestive healthcare services directly to those who need them most.'
    },
    {
      src: '/assets/home/hero2.webp',
      alt: 'Medical screening at village camp',
      title: 'Advanced Medical Screening & Diagnosis',
      subtitle: 'Our state-of-the-art mobile units are equipped with modern diagnostic tools to detect and prevent digestive health issues early.'
    },
    {
      src: '/assets/home/hero3.webp',
      alt: 'Healthcare professionals at rural outreach',
      title: 'Expert Healthcare Professionals',
      subtitle: 'Our dedicated team of gastroenterologists and healthcare specialists are committed to delivering world-class medical care.'
    },
    {
      src: '/assets/home/hero4.webp',
      alt: 'Community health education session',
      title: 'Community Health Education & Awareness',
      subtitle: 'We believe in empowering communities through education, teaching preventive care and healthy lifestyle practices.'
    }
  ];


  useEffect(() => {
    setIsVisible(true);
    
    const interval = setInterval(() => {
      setIsTransitioning(true);
      
      setTimeout(() => {
        setCurrentImage((prev) => (prev + 1) % ruralCampImages.length);
        setIsTransitioning(false);
      }, 300);
    }, 5000);

    return () => clearInterval(interval);
  }, [ruralCampImages.length]);


  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Full-screen background image slides */}
      <div className="absolute inset-0 overflow-hidden">
        <div 
          className="flex h-full transition-transform duration-1000 ease-in-out"
          style={{
            transform: `translateX(-${currentImage * 100}vw)`,
            width: `${ruralCampImages.length * 100}vw`
          }}
        >
          {ruralCampImages.map((image, index) => (
            <div
              key={index}
              className="relative h-full w-screen flex-shrink-0"
            >
              <img
                src={image.src}
                alt={image.alt}
                className={`w-full h-full object-cover transition-transform duration-[8000ms] ease-linear ${
                  index === currentImage ? 'scale-110' : 'scale-100'
                }`}
                onError={(e) => {
                  // Fallback for missing images
                  e.target.style.display = 'none';
                  e.target.nextSibling.style.display = 'flex';
                }}
              />
              {/* Fallback placeholder */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary-200 to-secondary-200 items-center justify-center text-white hidden">
                <div className="text-center space-y-4">
                  <div className="text-6xl">🏥</div>
                  <div className="text-lg font-semibold">Rural Health Camp</div>
                  <div className="text-sm opacity-75">{image.alt}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* Content overlay */}
      <div className="relative z-10 wide-container w-full">
        <div className="text-center space-y-8 max-w-4xl mx-auto pt-24">
          {/* Main Headline */}
          <div className={`space-y-6 ${isVisible ? 'animate-fade-in-up animate-delay-200' : 'opacity-0'}`}>
            <Badge variant="default" className="text-sm font-semibold bg-white/10 backdrop-blur-sm border-white/20 text-white">
              Karnataka&apos;s First Rural Digestive Healthcare Initiative
            </Badge>
            
            <div className={`transition-all duration-500 ease-in-out ${
              isTransitioning 
                ? 'opacity-0 translate-y-4 scale-95' 
                : 'opacity-100 translate-y-0 scale-100'
            }`}>
              <h1 className="hero-h1 text-white drop-shadow-lg">
                {ruralCampImages[currentImage]?.title}
              </h1>
              
              <p className="text-lg text-white/90 leading-relaxed max-w-2xl mx-auto drop-shadow-md mt-4">
                {ruralCampImages[currentImage]?.subtitle}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation dots */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3 z-20">
        {ruralCampImages.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              setIsTransitioning(true);
              setTimeout(() => {
                setCurrentImage(index);
                setIsTransitioning(false);
              }, 300);
            }}
            className={`w-4 h-4 rounded-full transition-all duration-300 ${
              index === currentImage 
                ? 'bg-white scale-110 shadow-lg' 
                : 'bg-white/50 hover:bg-white/70 hover:scale-105'
            }`}
          />
        ))}
      </div>

    </section>
  );
};

export default HeroSection;