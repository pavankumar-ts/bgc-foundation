'use client';

import { useState, useEffect, useRef } from 'react';
import Badge from '../ui/Badge';

const ExpertEndorsementSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated) {
            setIsVisible(true);
            setHasAnimated(true);
          }
        });
      },
      {
        threshold: 0.15,
        rootMargin: '0px 0px -50px 0px'
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [hasAnimated]);

  return (
    <section
      ref={sectionRef}
      className="section-spacing bg-gray-50 overflow-hidden"
      id="expert-endorsement"
    >
      <div className="main-container">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div
                className={`opacity-0 ${isVisible ? 'animate-smooth-fade-in-up' : ''}`}
                style={{ animationDelay: isVisible ? '0.1s' : '0s' }}
              >
                <Badge variant="secondary" className="inline-block mb-4">
                  Expert Endorsement
                </Badge>
                <div className="space-y-3">
                  <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                    Dr. C.N. Manjunath
                  </h2>
                </div>
              </div>

              <div
                className={`opacity-0 ${isVisible ? 'animate-smooth-fade-in-up' : ''}`}
                style={{ animationDelay: isVisible ? '0.3s' : '0s' }}
              >
                <p className="text-lg font-medium text-primary-600">
                  Member of Parliament, Bangalore Rural
                </p>
              </div>

              <div
                className={`opacity-0 ${isVisible ? 'animate-smooth-fade-in-up' : ''}`}
                style={{ animationDelay: isVisible ? '0.5s' : '0s' }}
              >
                <div className="flex flex-wrap gap-2 text-sm text-gray-600">
                  <span className="bg-gray-100 px-3 py-1 rounded-full hover:bg-gray-200 transition-colors duration-300">Padma Shri Awardee</span>
                  <span className="bg-gray-100 px-3 py-1 rounded-full hover:bg-gray-200 transition-colors duration-300">Former Director, Sri Jayadeva Institute</span>
                </div>
              </div>
            </div>

            <div
              className={`opacity-0 ${isVisible ? 'animate-smooth-fade-in-up' : ''}`}
              style={{ animationDelay: isVisible ? '0.7s' : '0s' }}
            >
              <div className="border-l-4 border-l-primary-500 pl-6 space-y-3 hover:border-l-primary-600 transition-colors duration-300">
                <h3 className="text-xl font-semibold text-gray-900">
                  Supporting Rural Digestive Healthcare Access
                </h3>
                <p className="body-large text-gray-600 leading-relaxed">
                  Dr. Manjunath shares his perspective on the importance of bringing specialist digestive healthcare directly to rural communities in Karnataka.
                </p>
              </div>
            </div>
          </div>

          {/* Video */}
          <div
            className={`opacity-0 ${isVisible ? 'animate-smooth-scale-in' : ''}`}
            style={{ animationDelay: isVisible ? '0.9s' : '0s' }}
          >
            <div className="relative group cursor-pointer">
              <div className={`relative aspect-video bg-white rounded-2xl overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-700 ease-out ${isVisible ? 'animate-video-glow' : ''}`}>
                <video
                  controls
                  className="w-full h-full object-cover hover:scale-[1.02] transition-transform duration-700 ease-out"
                  // poster="/dummy.webp"
                  preload="metadata"
                >
                  <source src="/assets/dr-manjunath-video.mp4" type="video/mp4" />
                  <source src="/assets/dr-manjunath-video.webm" type="video/webm" />
                  Your browser does not support the video tag.
                </video>

                {/* Enhanced overlay with gradient */}
                <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-black/15 via-transparent to-black/5 opacity-60 group-hover:opacity-30 transition-opacity duration-500"></div>

                {/* Play button overlay */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <div className="w-20 h-20 bg-white/95 backdrop-blur-sm rounded-full flex items-center justify-center shadow-xl transform scale-0 group-hover:scale-100 transition-all duration-500 ease-out">
                    <div className="w-0 h-0 border-l-[20px] border-l-primary-600 border-t-[14px] border-t-transparent border-b-[14px] border-b-transparent ml-1 drop-shadow-sm"></div>
                  </div>
                </div>
                </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExpertEndorsementSection;