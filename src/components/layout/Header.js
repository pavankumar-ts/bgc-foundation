'use client';

import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import Button from '../ui/Button';
import Image from 'next/image';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();


  const navigation = [
    { name: 'About', href: '/about' },
    { name: 'Our Team', href: '/team' },
    { name: 'Programs', href: '/programs' },
    { name: 'Health Camps', href: '/camps' },
    { name: 'Impact & Results', href: '/impact' },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
       'bg-white/100 backdrop-blur-sm'
      }`}
    >
      <nav className="main-container">
        <div className="flex h-20 items-center">
          {/* Logo - Left Aligned */}
          <div className="flex-shrink-0">
            <Link href="/">
              <Image src="/assets/logo.svg" alt="BGC Foundation Logo"
              className='w-auto h-[40px]'
              width={1000} height={1000}  />
            </Link>
          </div>

          {/* Center Navigation */}
          <div className="hidden md:flex items-center justify-center flex-1 space-x-8">
            {navigation.map((item) => {
              const isActive = pathname === item.href || pathname.startsWith(item.href + '/');
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`px-3 py-2 text-sm font-medium transition-colors duration-200 relative group ${
                    isActive
                      ? 'text-primary-600'
                      : 'text-gray-600 hover:text-primary-600'
                  }`}
                >
                  {item.name}
                  <span className={`absolute inset-x-0 bottom-0 h-0.5 bg-primary-500 transform transition-transform duration-200 ${
                    isActive
                      ? 'scale-x-100'
                      : 'scale-x-0 group-hover:scale-x-100'
                  }`} />
                </Link>
              );
            })}
          </div>

          
          {/* Right CTA Button */}
          <div className="hidden md:flex flex-shrink-0">
            <Link href="/contact">
              <Button className="shadow-sm bg-primary-600 hover:bg-primary-700 text-white">
                Contact Us
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-lg text-gray-600 hover:text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-primary-500"
              aria-label="Toggle menu"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isMobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-t border-gray-200 bg-white">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navigation.map((item) => {
                const isActive = pathname === item.href || pathname.startsWith(item.href + '/');
                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={`block px-3 py-2 rounded-lg text-base font-medium transition-colors duration-200 ${
                      isActive
                        ? 'text-primary-600 bg-primary-50'
                        : 'text-gray-600 hover:text-primary-600 hover:bg-gray-50'
                    }`}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                );
              })}
              <div className="pt-4 space-y-2">
                <Link href="/partnerships">
                  <Button variant="outline" size="sm" className="w-full">
                    Partner With Us
                  </Button>
                </Link>
                <Link href="/contact">
                  <Button size="sm" className="w-full">
                    Contact
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;