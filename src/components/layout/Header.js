'use client';

import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import Button from '../ui/Button';
import Image from 'next/image';
import Loading from '../ui/Loading';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const [selectedLanguage, setSelectedLanguage] = useState('en');
  const [isTranslating, setIsTranslating] = useState(false);
  const pathname = usePathname();

  // Load saved language preference on mount
  useEffect(() => {
    const savedLang = localStorage.getItem('selectedLanguage');
    if (savedLang && savedLang !== 'en') {
      setSelectedLanguage(savedLang);
      setIsTranslating(true);
      translatePage(savedLang).finally(() => {
        setIsTranslating(false);
      });
    }
  }, []);

  // Re-translate when pathname changes (navigation)
  useEffect(() => {
    const savedLang = localStorage.getItem('selectedLanguage');
    if (savedLang && savedLang !== 'en') {
      setIsTranslating(true);
      // Small delay to ensure page content is loaded
      setTimeout(() => {
        translatePage(savedLang).finally(() => {
          setIsTranslating(false);
        });
      }, 100);
    }
  }, [pathname]);

  const translatePage = async (targetLang) => {
    if (targetLang === 'en') {
      localStorage.removeItem('selectedLanguage');
      window.location.reload();
      return;
    }

    // Save language preference
    localStorage.setItem('selectedLanguage', targetLang);

    // Translate texts individually but with controlled batching
    const translateBatch = async (texts) => {
      const results = [];
      const batchSize = 10; // Process 10 at a time for better reliability

      for (let i = 0; i < texts.length; i += batchSize) {
        const batch = texts.slice(i, i + batchSize);
        const batchPromises = batch.map(async (text) => {
          try {
            const response = await fetch(
              `https://translate.googleapis.com/translate_a/single?client=gtx&sl=auto&tl=${targetLang}&dt=t&q=${encodeURIComponent(text)}`
            );
            const data = await response.json();
            return data[0][0][0];
          } catch (error) {
            console.error('Translation error:', error);
            return text; // Return original on error
          }
        });

        const batchResults = await Promise.all(batchPromises);
        results.push(...batchResults);

        // Small delay between batches to avoid rate limiting
        if (i + batchSize < texts.length) {
          await new Promise(resolve => setTimeout(resolve, 100));
        }
      }

      return results;
    };

    const excludedTags = ['SCRIPT', 'STYLE', 'NOSCRIPT', 'IFRAME', 'OBJECT', 'EMBED'];
    const textNodes = [];
    const textContents = [];

    // Collect all text nodes
    const collectTextNodes = (element) => {
      if (excludedTags.includes(element.tagName)) return;

      for (let node of element.childNodes) {
        if (node.nodeType === Node.TEXT_NODE && node.textContent.trim() !== '') {
          textNodes.push(node);
          textContents.push(node.textContent);
        } else if (node.nodeType === Node.ELEMENT_NODE) {
          collectTextNodes(node);
        }
      }
    };

    collectTextNodes(document.body);

    // Translate all text in batches
    const translatedTexts = await translateBatch(textContents);

    // Apply translations
    textNodes.forEach((node, index) => {
      node.textContent = translatedTexts[index];
    });

    // Translate attributes (smaller batch)
    const attributeElements = [];
    const attributeTexts = [];
    const attributeInfo = [];

    document.querySelectorAll('[title], [alt], [placeholder], [aria-label]').forEach(element => {
      ['title', 'alt', 'placeholder', 'aria-label'].forEach(attr => {
        if (element.hasAttribute(attr)) {
          const value = element.getAttribute(attr);
          if (value.trim()) {
            attributeElements.push(element);
            attributeTexts.push(value);
            attributeInfo.push(attr);
          }
        }
      });
    });

    if (attributeTexts.length > 0) {
      const translatedAttributes = await translateBatch(attributeTexts);
      attributeElements.forEach((element, index) => {
        element.setAttribute(attributeInfo[index], translatedAttributes[index]);
      });
    }
  };

  const handleLanguageChange = async (langCode) => {
    setSelectedLanguage(langCode);
    setIsTranslating(true);
    await translatePage(langCode);
    setIsTranslating(false);
  };

  const handleCloseMenu = () => {
    setIsClosing(true);
    setTimeout(() => {
      setIsMobileMenuOpen(false);
      setIsClosing(false);
    }, 300);
  };


  const navigation = [
    {
      name: 'About Us',
      href: '/about',
      submenu: [
        { name: 'Our Team', href: '/team' },
        { name: 'Programs', href: '/programs' },
        { name: 'Vision & Mission', href: '/about#vision-mission' },
      ]
    },
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

                // If item has submenu
                if (item.submenu) {
                  return (
                    <div
                      key={item.name}
                      className="relative group"
                      onMouseEnter={() => setOpenDropdown(item.name)}
                      onMouseLeave={() => setOpenDropdown(null)}
                    >
                      <Link
                        href={item.href}
                        className={`px-3 py-2 text-sm font-medium transition-colors duration-200 relative flex items-center gap-1 ${
                          isActive
                            ? 'text-primary-600'
                            : 'text-gray-600 hover:text-primary-600'
                        }`}
                      >
                        {item.name}
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                        <span className={`absolute inset-x-0 bottom-0 h-0.5 bg-primary-500 transform transition-transform duration-200 ${
                          isActive
                            ? 'scale-x-100'
                            : 'scale-x-0 group-hover:scale-x-100'
                        }`} />
                      </Link>

                      {/* Dropdown Menu */}
                      <div className={`absolute top-full left-0 mt-2 w-56 bg-white rounded-lg shadow-lg border border-gray-200 py-2 transition-all duration-200 ${
                        openDropdown === item.name ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2'
                      }`}>
                        {item.submenu.map((subItem) => (
                          <Link
                            key={subItem.name}
                            href={subItem.href}
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-primary-600 transition-colors"
                          >
                            {subItem.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  );
                }

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

            {/* Language Selector & Right CTA Button */}
            <div className="hidden md:flex items-center gap-3 flex-shrink-0">
              {/* Language Dropdown */}
              <div className="relative">
                <select
                  value={selectedLanguage}
                  onChange={(e) => handleLanguageChange(e.target.value)}
                  className="appearance-none bg-white border border-gray-300 rounded-lg px-4 py-2 pr-10 text-sm font-medium text-gray-700 hover:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent cursor-pointer transition-all duration-200"
                  aria-label="Select Language"
                >
                  <option value="en">English</option>
                  <option value="kn">ಕನ್ನಡ</option>
                </select>
                <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                  <svg className="h-4 w-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </div>

              {/* Contact Button */}
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

                // If item has submenu
                if (item.submenu) {
                  return (
                    <div key={item.name} className="space-y-1">
                      <Link
                        href={item.href}
                        className={`block px-4 py-3 rounded-lg text-base font-medium transition-colors duration-200 ${
                          isActive
                            ? 'text-primary-600'
                            : 'text-gray-600 hover:text-primary-600 hover:bg-gray-50'
                        }`}
                        onClick={handleCloseMenu}
                      >
                        {item.name}
                      </Link>
                      <div className="pl-4 space-y-1">
                        {item.submenu.map((subItem) => {
                          const isSubItemActive = pathname === subItem.href || pathname.startsWith(subItem.href.split('#')[0] + '/');
                          return (
                            <Link
                              key={subItem.name}
                              href={subItem.href}
                              className={`block px-4 py-2 rounded-lg text-sm transition-colors duration-200 ${
                                isSubItemActive
                                  ? 'text-primary-600'
                                  : 'text-gray-600 hover:text-primary-600 hover:bg-gray-50'
                              }`}
                              onClick={handleCloseMenu}
                            >
                              {subItem.name}
                            </Link>
                          );
                        })}
                      </div>
                    </div>
                  );
                }

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

            {/* Language Selector - Mobile */}
            <div className="px-6 pb-4">
              <label className="block text-sm font-medium text-gray-700 mb-2">Language</label>
              <div className="relative">
                <select
                  value={selectedLanguage}
                  onChange={(e) => handleLanguageChange(e.target.value)}
                  className="appearance-none w-full bg-white border border-gray-300 rounded-lg px-4 py-3 pr-10 text-sm font-medium text-gray-700 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent cursor-pointer"
                  aria-label="Select Language"
                >
                  <option value="en">English</option>
                  <option value="kn">ಕನ್ನಡ (Kannada)</option>
                </select>
                <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                  <svg className="h-5 w-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </div>
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

      {/* Translation Loading Screen */}
      {isTranslating && <Loading message="Translating page..." />}
    </>
  );
};

export default Header;