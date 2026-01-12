'use client';

import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import Button from '../ui/Button';
import Image from 'next/image';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  const pathname = usePathname();

  const handleCloseMenu = () => {
    setIsClosing(true);
    setTimeout(() => {
      setIsMobileMenuOpen(false);
      setIsClosing(false);
    }, 300);
  };


  const navigation = [
    { name: 'About', href: '/about' },
    { name: 'Our Team', href: '/team' },
    { name: 'Programs', href: '/programs' },
    { name: 'Health Camps', href: '/camps' },
    { name: 'Gallery', href: '/gallery' },
    { name: 'Media & Events', href: '/media-events' },
    { name: 'Impact & Results', href: '/impact' },
    { name: 'Blog', href: 'https://www.bangaloregastrocentre.com/blog?page=1&pageSize=12&sortBy=newest&year=all&month=all', external: true },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
         'bg-white/100 backdrop-blur-sm'
        }`}
      >
        <nav className="main-container">
          <div className="flex h-16 md:h-20 items-center justify-between">
            {/* Logo - Left Aligned */}
            <div className="flex-shrink-0">
              <Link href="/">
                <Image src="/assets/logo.svg" alt="BGC Foundation Logo"
                className='w-auto h-14'
                width={1000} height={1000}  />
              </Link>
            </div>

            {/* Center Navigation */}
            <div className="hidden md:flex items-center justify-center flex-1 space-x-4">
              {navigation.map((item) => {
                const isActive = pathname === item.href || pathname.startsWith(item.href + '/');
                const LinkComponent = item.external ? 'a' : Link;
                const linkProps = item.external
                  ? { href: item.href, target: '_blank', rel: 'noopener noreferrer' }
                  : { href: item.href };

                return (
                  <LinkComponent
                    key={item.name}
                    {...linkProps}
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
                  </LinkComponent>
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
            <div className="md:hidden flex-shrink-0">
              <button
                onClick={() => isMobileMenuOpen ? handleCloseMenu() : setIsMobileMenuOpen(true)}
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
        </nav>
      </header>

      {/* Mobile Menu Overlay - Outside header */}
      {isMobileMenuOpen && (
        <div className="md:hidden fixed inset-0 z-[100]">
          {/* Backdrop */}
          <div
            className={`fixed inset-0 bg-black/50 ${isClosing ? 'animate-fade-out' : 'animate-fade-in'}`}
            onClick={handleCloseMenu}
          />

          {/* Sidebar */}
          <div className={`fixed right-0 top-0 h-full w-80 max-w-[85vw] bg-white shadow-xl overflow-y-auto z-10 ${isClosing ? 'animate-slide-out-right' : 'animate-slide-in-right'}`}>
            {/* Close button */}
            <div className="flex items-center justify-between p-6 border-b border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900">Menu</h3>
              <button
                onClick={handleCloseMenu}
                className="p-2 rounded-lg text-gray-600 hover:text-gray-900 hover:bg-gray-100"
                aria-label="Close menu"
              >
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Navigation Links */}
            <div className="p-6 space-y-1">
              {navigation.map((item) => {
                const isActive = pathname === item.href || pathname.startsWith(item.href + '/');
                const LinkComponent = item.external ? 'a' : Link;
                const linkProps = item.external
                  ? { href: item.href, target: '_blank', rel: 'noopener noreferrer' }
                  : { href: item.href };

                return (
                  <LinkComponent
                    key={item.name}
                    {...linkProps}
                    className={`block px-4 py-3 rounded-lg text-base font-medium transition-colors duration-200 ${
                      isActive
                        ? 'text-primary-600'
                        : 'text-gray-600 hover:text-primary-600 hover:bg-gray-50'
                    }`}
                    onClick={handleCloseMenu}
                  >
                    {item.name}
                  </LinkComponent>
                );
              })}
            </div>

            {/* Action Button */}
            <div className="p-6 pt-0">
              <Link href="/contact" onClick={handleCloseMenu}>
                <Button size="sm" className="w-full bg-primary-600 hover:bg-primary-700 text-white">
                  Contact Us
                </Button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;