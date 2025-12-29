import { Inter } from "next/font/google";
import "./globals.css";
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: {
    template: "%s | BGC Foundation",
    default: "BGC Foundation - Discover Our Mission and Values in Rural-Centered Healthcare"
  },
  description: "We are dedicated to providing exceptional healthcare through a compassionate, patient-centered approach, bringing specialized digestive health programs directly to rural communities across Karnataka through our innovative Hospital on Wheels model.",
  keywords: [
    "rural healthcare",
    "digestive health",
    "gastroenterology",
    "Karnataka healthcare",
    "mobile medical units",
    "healthcare foundation",
    "rural medical camps",
    "BGC Foundation",
    "Dr Yogananda Reddy",
    "endoscopy programs"
  ],
  authors: [
    {
      name: "BGC Foundation",
      url: "https://bgcfoundation.org",
    },
  ],
  creator: "BGC Foundation",
  publisher: "BGC Foundation",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://bgcfoundation.org'),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "BGC Foundation - Rural Healthcare Initiative",
    description: "Bringing specialized digestive healthcare to rural communities across Karnataka through mobile medical units and expert gastroenterologists.",
    url: "https://bgcfoundation.org",
    siteName: "BGC Foundation",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "BGC Foundation - Rural Healthcare Initiative",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "BGC Foundation - Rural Healthcare Initiative",
    description: "Bringing specialized digestive healthcare to rural communities across Karnataka.",
    images: ["/twitter-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "verification_token",
    yandex: "verification_token",
    yahoo: "verification_token",
  },
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#13b2c0' },
    { media: '(prefers-color-scheme: dark)', color: '#13b2c0' },
  ],
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        {/* Preconnect to external domains */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        
        {/* DNS prefetch for performance */}
        <link rel="dns-prefetch" href="//fonts.googleapis.com" />
        <link rel="dns-prefetch" href="//fonts.gstatic.com" />
        
        {/* Favicon and app icons */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="manifest" href="/manifest.json" />
        
        {/* Additional meta tags for better SEO */}
        <meta name="geo.region" content="IN-KA" />
        <meta name="geo.placename" content="Karnataka, India" />
        <meta name="geo.position" content="12.9716;77.5946" />
        <meta name="ICBM" content="12.9716, 77.5946" />
        
        {/* Schema.org structured data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "NGO",
              "name": "BGC Foundation",
              "alternateName": "Bangalore Gastro Centre Foundation",
              "url": "https://bgcfoundation.org",
              "logo": "https://bgcfoundation.org/logo.png",
              "description": "Karnataka's first comprehensive rural outreach program for digestive health",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Bengaluru",
                "addressRegion": "Karnataka",
                "addressCountry": "IN"
              },
              "founder": {
                "@type": "Person",
                "name": "Dr. Yogananda Reddy",
                "jobTitle": "Chief Gastroenterologist & Director"
              },
              "areaServed": "Karnataka, India",
              "knowsAbout": ["Rural Healthcare", "Gastroenterology", "Mobile Medical Units"],
              "sameAs": [
                "https://facebook.com/bgcfoundation",
                "https://twitter.com/bgcfoundation",
                "https://linkedin.com/company/bgcfoundation"
              ]
            }),
          }}
        />
      </head>
      <body
        className={`${inter.variable} font-sans antialiased bg-white text-gray-900`}
        suppressHydrationWarning={true}
      >
        {/* Skip to main content for accessibility */}
        <a 
          href="#main-content" 
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-primary-600 focus:text-white focus:rounded-lg focus:font-medium"
        >
          Skip to main content
        </a>
        
        {/* Screen reader announcement for page changes */}
        <div 
          id="page-announcement" 
          className="sr-only" 
          role="status" 
          aria-live="polite" 
          aria-atomic="true"
        ></div>
        
        <Header />
        <main id="main-content" className="focus:outline-none">
          {children}
        </main>
        <Footer />
        
        {/* Additional accessibility features */}
        <div id="focus-trap" tabIndex="-1" />
      </body>
    </html>
  );
}
