'use client';

import { useState, useEffect, useRef } from 'react';
import Badge from '../ui/Badge';

const ExpertEndorsementSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const sectionRef = useRef(null);
  const videoRef = useRef(null);

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
        {/* Section Header */}
        <div
          className={`text-center mb-16 opacity-0 ${isVisible ? 'animate-smooth-fade-in-up' : ''}`}
          style={{ animationDelay: isVisible ? '0.1s' : '0s' }}
        >
          <Badge variant="secondary" className="inline-block mb-4">
            Endorsed by Leaders
          </Badge>
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
            Trusted by Karnataka's Healthcare Leaders
          </h2>
        </div>

        {/* Endorsements */}
        <div className="space-y-20">
          {/* Dr. C.N. Manjunath */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <div
                  className={`opacity-0 ${isVisible ? 'animate-smooth-fade-in-up' : ''}`}
                  style={{ animationDelay: isVisible ? '0.2s' : '0s' }}
                >
                  <h3 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 leading-tight">
                    Dr. C.N. Manjunath
                  </h3>
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
                  style={{ animationDelay: isVisible ? '0.4s' : '0s' }}
                >
                  <div className="flex flex-wrap gap-2 text-sm text-gray-600">
                    <span className="bg-gray-100 px-3 py-1 rounded-full hover:bg-gray-200 transition-colors duration-300">
                      Padma Shri Awardee
                    </span>
                    <span className="bg-gray-100 px-3 py-1 rounded-full hover:bg-gray-200 transition-colors duration-300">
                      Former Director, Sri Jayadeva Institute
                    </span>
                  </div>
                </div>
              </div>

              <div
                className={`opacity-0 ${isVisible ? 'animate-smooth-fade-in-up' : ''}`}
                style={{ animationDelay: isVisible ? '0.5s' : '0s' }}
              >
                <div className="border-l-4 border-l-primary-500 pl-6 space-y-3 hover:border-l-primary-600 transition-colors duration-300">
                  <h4 className="text-xl font-semibold text-gray-900">
                    Supporting Rural Digestive Healthcare Access
                  </h4>
                  <p className="body-large text-gray-600 leading-relaxed">
                    Dr. Manjunath shares his perspective on the importance of bringing specialist digestive healthcare directly to rural communities in Karnataka.
                  </p>
                </div>
              </div>
            </div>

            <div
              className={`opacity-0 ${isVisible ? 'animate-smooth-scale-in' : ''}`}
              style={{ animationDelay: isVisible ? '0.6s' : '0s' }}
            >
              <div className="relative group cursor-pointer">
                <div className={`relative aspect-video bg-white rounded-2xl overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-700 ease-out ${isVisible ? 'animate-video-glow' : ''}`}>
                  <video
                    ref={videoRef}
                    controls
                    className="w-full h-full object-cover hover:scale-[1.02] transition-transform duration-700 ease-out"
                    preload="metadata"
                    onPlay={() => setIsVideoPlaying(true)}
                    onPause={() => setIsVideoPlaying(false)}
                    onEnded={() => setIsVideoPlaying(false)}
                  >
                    <source src="/assets/dr-manjunath-video.mp4" type="video/mp4" />
                    <source src="/assets/dr-manjunath-video.webm" type="video/webm" />
                    Your browser does not support the video tag.
                  </video>

                  <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-black/15 via-transparent to-black/5 opacity-60 group-hover:opacity-30 transition-opacity duration-500"></div>

                  <div className="hidden lg:flex absolute inset-0 items-center justify-center pointer-events-none">
                    <div className="w-20 h-20 bg-white/95 backdrop-blur-sm rounded-full flex items-center justify-center shadow-xl transform scale-0 group-hover:scale-100 transition-all duration-500 ease-out">
                      {isVideoPlaying ? (
                        // Pause icon (two vertical bars)
                        <div className="flex gap-1.5">
                          <div className="w-1.5 h-5 bg-primary-600 rounded-sm"></div>
                          <div className="w-1.5 h-5 bg-primary-600 rounded-sm"></div>
                        </div>
                      ) : (
                        // Play icon (triangle)
                        <div className="w-0 h-0 border-l-[20px] border-l-primary-600 border-t-[14px] border-t-transparent border-b-[14px] border-b-transparent ml-1 drop-shadow-sm"></div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Dinesh Gundu Rao */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div
              className={`opacity-0 ${isVisible ? 'animate-smooth-scale-in' : ''} order-2 lg:order-1`}
              style={{ animationDelay: isVisible ? '0.7s' : '0s' }}
            >
              <div className="relative group">
                <div className="relative aspect-[4/3] bg-white rounded-2xl overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-700 ease-out">
                  <img
                    src="/assets/Dinesh Gundu Rao.jpeg"
                    alt="Dinesh Gundu Rao"
                    className="w-full h-full object-cover hover:scale-[1.02] transition-transform duration-700 ease-out"
                  />
                  <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-black/10 via-transparent to-black/5 opacity-40"></div>
                </div>
              </div>
            </div>

            <div className="space-y-8 order-1 lg:order-2">
              <div className="space-y-4">
                <div
                  className={`opacity-0 ${isVisible ? 'animate-smooth-fade-in-up' : ''}`}
                  style={{ animationDelay: isVisible ? '0.8s' : '0s' }}
                >
                  <h3 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 leading-tight">
                    Dinesh Gundu Rao
                  </h3>
                </div>

                <div
                  className={`opacity-0 ${isVisible ? 'animate-smooth-fade-in-up' : ''}`}
                  style={{ animationDelay: isVisible ? '0.9s' : '0s' }}
                >
                  <p className="text-lg font-medium text-primary-600">
                    Hon'ble Minister of Health & Family Welfare, Govt of Karnataka
                  </p>
                </div>

                <div
                  className={`opacity-0 ${isVisible ? 'animate-smooth-fade-in-up' : ''}`}
                  style={{ animationDelay: isVisible ? '1.0s' : '0s' }}
                >
                  <div className="flex flex-wrap gap-2 text-sm text-gray-600">
                    <span className="bg-gray-100 px-3 py-1 rounded-full hover:bg-gray-200 transition-colors duration-300">
                      Karnataka Legislative Assembly
                    </span>
                    <span className="bg-gray-100 px-3 py-1 rounded-full hover:bg-gray-200 transition-colors duration-300">
                      Government of Karnataka
                    </span>
                  </div>
                </div>
              </div>

              <div
                className={`opacity-0 ${isVisible ? 'animate-smooth-fade-in-up' : ''}`}
                style={{ animationDelay: isVisible ? '1.1s' : '0s' }}
              >
                <div className="border-l-4 border-l-primary-500 pl-6 space-y-3 hover:border-l-primary-600 transition-colors duration-300">
                  <h4 className="text-xl font-semibold text-gray-900">
                    Championing Rural Healthcare Access
                  </h4>
                  <p className="body-large text-gray-600 leading-relaxed">
                    Hon'ble Minister Dinesh Gundu Rao actively supports innovative healthcare initiatives that bring specialized medical services directly to rural communities across Karnataka.
                  </p>
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