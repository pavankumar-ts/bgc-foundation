/**
 * BGC Foundation - Centralized Site Configuration
 *
 * This file contains all frequently updated and reused data across the website.
 * Update values here to reflect changes throughout the entire site.
 *
 * Last Updated: December 2024
 */

// ============================================================================
// ORGANIZATION INFORMATION
// ============================================================================

export const ORGANIZATION = {
  // Used in: Footer, Headers, SEO metadata, Legal pages
  name: 'BGC Foundation',
  fullName: 'Bangalore Gastro Centre Foundation',

  // Used in: Footer, Legal pages, Timeline
  foundingYear: 2024,

  // Used in: Layout metadata, Sitemap, Social sharing
  domain: 'https://bgcfoundation.org',

  // Used in: About page, Hero sections, SEO descriptions
  tagline: 'Transforming Rural Healthcare, One Patient at a Time',

  // Used in: About page, Layout metadata, Hero sections
  missionStatement: 'Bringing specialized digestive health programs directly to rural communities across Karnataka through our innovative Hospital on Wheels model',

  // Used in: About page, Programs section
  model: 'Hospital on Wheels',

  // Used in: Hero sections, About page
  subtitle: "Karnataka's First Rural Digestive Healthcare Initiative",
};

// ============================================================================
// CONTACT INFORMATION
// ============================================================================

export const CONTACT = {
  // Email Addresses
  emails: {
    // Used in: Contact page, Footer
    general: 'info@bgcfoundationtrust.org',

    // Used in: Privacy Policy page
    privacy: 'privacy@bgcfoundationtrust.org',

    // Used in: Terms of Service page
    legal: 'legal@bgcfoundationtrust.org',

    // Used in: Partnership section
    partnerships: 'partnerships@bgcfoundationtrust.org',
  },

  // Phone Numbers
  phones: {
    // Used in: Contact page, Footer
    hospital: '080 4688 8888',

    // Used in: Partnership section, WhatsApp links
    mobile: '+91 96637 15077',
  },

  // Physical Address
  address: {
    // Used in: Contact page, Footer, Legal pages, SEO
    city: 'Bengaluru',
    state: 'Karnataka',
    country: 'India',
    fullAddress: 'Bengaluru, Karnataka, India',

    // Used in: Schema.org metadata, Map integrations
    coordinates: {
      latitude: 12.9716,
      longitude: 77.5946,
    },
  },
};

// ============================================================================
// SOCIAL MEDIA LINKS
// ============================================================================

export const SOCIAL_MEDIA = {
  // Used in: Footer, Share buttons, Social meta tags
  facebook: 'https://facebook.com/bgcfoundation',
  twitter: 'https://twitter.com/bgcfoundation',
  linkedin: 'https://linkedin.com/company/bgcfoundation',
  instagram: null, // Add when available
  youtube: null,    // Add when available
};

// ============================================================================
// IMPACT STATISTICS
// ============================================================================

export const STATISTICS = {
  // Overall Impact Numbers
  // Used in: StatsSection, ImpactSection, Impact page, About page

  // Patients
  patientsConsulted: {
    value: 1500,
    display: '1500+',
    label: 'Patients Consulted',
  },

  // Camps & Communities
  healthCamps: {
    value: 5,
    display: '5+',
    label: 'Rural Health Camps',
  },

  villagesServed: {
    value: 50,
    display: '50+',
    label: 'Villages Served',
  },

  // Healthcare Professionals
  professionals: {
    value: 100,
    display: '100+',
    label: 'Healthcare Professionals',
  },

  // Healthcare Value
  // healthcareValue: {
  //   value: 3500000,
  //   display: '35L+',
  //   label: 'Healthcare Value Delivered',
  //   currency: 'INR',
  // },

  // Services Provided
  services: {
    // Used in: ImpactSection
    bloodTests: {
      value: 300,
      display: '300',
      label: 'Blood Tests',
    },

    endoscopies: {
      value: 100,
      display: '100+',
      label: 'Endoscopies',
    },

    fibroscans: {
      value: 100,
      display: '100+',
      label: 'Fibroscans',
    },

    specialistHours: {
      value: 100,
      display: '100+',
      label: 'Specialist Hours',
    },
  },

  // Impact Metrics
  metrics: {
    // Used in: ImpactSection
    earlyDetectionRate: {
      value: 95,
      display: '95%',
      label: 'Early Detection Rate',
    },

    livesImpacted: {
      value: 1500,
      display: '1.5k',
      label: 'Lives Impacted',
    },
  },

  // Team Composition
  // Used in: MeetDoctorsSection
  team: {
    total: 74,
    breakdown: {
      specialistGastroenterologists: 10,
      juniorDoctors: 10,
      qualifiedNurses: 15,
      endoscopyTechnicians: 4,
      labTechnicians: 5,
      nursingAssistants: 10,
      adminStaff: 15,
      pharmacists: 5,
    },
  },
};

// ============================================================================
// LEADERSHIP & KEY PERSONNEL
// ============================================================================

export const LEADERSHIP = {
  chiefGastroenterologist: {
    // Used in: About page, Leadership section, Meet Doctors section, Schema.org
    name: 'Dr. Yogananda Reddy',

    titles: [
      'Chief Gastroenterologist & Program Director',
      'Medical Director',
      'Founder',
    ],

    credentials: [
      'MBBS',
      'FRCP (London)',
      'MRCP (UK)',
      'CCT Gastroenterology',
      'NHS Excellence Award',
    ],

    experience: {
      years: 20,
      display: '20+ years',
      combinedDisplay: '50+ Years Combined Experience',
    },

    description: "From London's NHS hospitals to Karnataka's villages - Dr. Reddy chose to leave his comfortable UK practice to serve those who need it most. With two decades of international expertise, he now leads our Hospital on Wheels mission",

    formerPositions: [
      'Former Chief of Gastroenterology at Manchester University Hospitals, UK',
      'Medical Director at Bangalore Gastro Centre',
    ],

    image: '/assets/dr-yogananda.webp',
  },
};

// ============================================================================
// CORE PROGRAMS (8 Programs)
// ============================================================================

export const PROGRAMS = [
  // Used in: ProgramsSection, Programs page
  {
    id: 'gastro-consultations',
    name: 'Gastroenterology Consultations',
    description: 'Expert consultations for digestive health issues',
    icon: 'Stethoscope', // React Icons name
  },
  {
    id: 'endoscopy',
    name: 'Endoscopy Services',
    description: 'Advanced diagnostic procedures',
    icon: 'Activity',
  },
  {
    id: 'blood-tests',
    name: 'Blood Tests & Laboratory',
    description: 'Comprehensive laboratory services',
    icon: 'TestTube',
  },
  {
    id: 'fibroscan',
    name: 'Fibroscan Technology',
    description: 'Non-invasive liver assessment',
    icon: 'Scan',
  },
  {
    id: 'hepatitis-screening',
    name: 'Viral Hepatitis Screening',
    description: 'Early detection of hepatitis B & C',
    icon: 'Shield',
  },
  {
    id: 'cancer-screening',
    name: 'Cancer Screening',
    description: 'Early detection saves lives',
    icon: 'Heart',
  },
  {
    id: 'nutrition',
    name: 'Nutritional Counselling',
    description: 'Dietary guidance for digestive health',
    icon: 'Apple',
  },
  {
    id: 'medicine',
    name: 'Medicine Distribution',
    description: 'Free essential medications',
    icon: 'Pill',
  },
];

// ============================================================================
// COMMON DIGESTIVE DISEASES TREATED
// ============================================================================

export const DISEASES_TREATED = [
  // Used in: Camp details, Programs page, SEO content
  'Malabsorption Disorders',
  'Chronic Diarrhoea',
  'Chronic Hepatitis B & Hepatitis C',
  'Alcohol-Related Liver Disease',
  'Inflammatory GUT Disease',
  'GI Cancers',
  'Abdominal TB',
];

// ============================================================================
// LOCATIONS SERVED
// ============================================================================

export const LOCATIONS = [
  // Used in: Camps page, Impact map, Timeline
  {
    name: 'Sarjapura',
    state: 'Karnataka',
    region: 'Bengaluru Rural',
  },
  {
    name: 'Harohalli',
    state: 'Karnataka',
    region: 'Ramanagara District',
  },
  {
    name: 'Kanakapura',
    state: 'Karnataka',
    region: 'Ramanagara District',
  },
  {
    name: 'Ramnagara',
    state: 'Karnataka',
    region: 'Ramanagara District',
  },
  {
    name: 'Anekal',
    state: 'Karnataka',
    region: 'Bengaluru Urban',
  },
];

// ============================================================================
// PARTNERSHIP INFORMATION
// ============================================================================

export const PARTNERSHIPS = {
  current: {
    // Used in: Partnership section, About page
    organization: 'Rotary Cubbon Park Trust',
    district: 'RI District 3191, Bengaluru',
    focus: 'Mobile Endoscopy Initiative',
    status: 'Active collaboration for funding acquisition',
  },
};

// ============================================================================
// LEGAL INFORMATION
// ============================================================================

export const LEGAL = {
  // Used in: Footer, Legal pages
  copyright: {
    year: 2024,
    holder: 'BGC Foundation',
    text: '© 2024 BGC Foundation. All rights reserved.',
  },

  // Used in: Privacy Policy, Terms of Service
  jurisdiction: {
    country: 'India',
    state: 'Karnataka',
    courts: 'Courts of Bangalore, Karnataka',
  },

  // Used in: Privacy Policy, Terms of Service
  lastUpdated: 'December 2024',
};

// ============================================================================
// SEO KEYWORDS
// ============================================================================

export const SEO_KEYWORDS = [
  // Used in: All page metadata
  'rural healthcare',
  'digestive health',
  'gastroenterology',
  'Karnataka healthcare',
  'mobile medical units',
  'BGC Foundation',
  'Dr Yogananda Reddy',
  'endoscopy programs',
  'Hospital on Wheels',
  'rural India healthcare',
  'Bengaluru gastroenterology',
];

// ============================================================================
// IMAGE ASSETS (Commonly Reused)
// ============================================================================

export const IMAGES = {
  // Logos
  logo: '/assets/logo.svg',

  // Leadership
  drYogananda: '/assets/dr-yogananda.webp',

  // Hero Images
  hero: {
    hero1: '/assets/home/hero1.webp',
    hero2: '/assets/home/hero2.webp',
    hero3: '/assets/home/hero3.webp',
    hero4: '/assets/home/hero4.webp',
  },

  // Feature Images
  features: {
    about: '/assets/home/about.webp',
    bloodTest: '/assets/home/blood-test.webp',
    fibroscan: '/assets/home/fibroscan.webp',
    specialistHours: '/assets/home/specialist-hours.webp',
    value: '/assets/home/value.webp',
  },

  // Program Images
  programs: {
    consultations: '/assets/programs/consultations.webp',
    endoscopy: '/assets/programs/endoscopy.webp',
    bloodTest: '/assets/programs/blood-test.webp',
    fibroscan: '/assets/programs/fibroscan.webp',
    hepatitis: '/assets/programs/hepatitis.webp',
    cancer: '/assets/programs/cancer.webp',
    nutrition: '/assets/programs/nutrition.webp',
    medicine: '/assets/programs/medicine.webp',
  },
};

// ============================================================================
// IMPORTANT DATES & MILESTONES
// ============================================================================

export const TIMELINE = {
  // Used in: Timeline section, Camp details
  milestones: [
    {
      date: '2024-05-29',
      displayDate: 'May 29, 2024',
      event: 'First Camp - Anekal',
      significance: 'World Digestive Health Day',
    },
    {
      date: '2024-10-17',
      displayDate: 'October 17, 2024',
      event: 'Harohalli Camp',
    },
    {
      date: '2024-12-19',
      displayDate: 'December 19, 2024',
      event: 'Kanakapura Camp',
    },
    {
      date: '2025-05-29',
      displayDate: 'May 29, 2025',
      event: 'Sarjapura Camp',
    },
    {
      date: '2025-09-25',
      displayDate: 'September 25, 2025',
      event: 'Ramnagara Camp',
    },
    {
      date: '2025',
      displayDate: '2025',
      event: "Karnataka's First Endoscopy Unit on Wheels",
      significance: 'Major milestone',
    },
  ],
};

// ============================================================================
// HELPER FUNCTIONS
// ============================================================================

/**
 * Format phone number for display
 * @param {string} phone - Phone number
 * @returns {string} Formatted phone number
 */
export const formatPhone = (phone) => {
  return phone.replace(/\s/g, '');
};

/**
 * Format phone number for tel: links
 * @param {string} phone - Phone number
 * @returns {string} Tel link
 */
export const getTelLink = (phone) => {
  return `tel:${phone.replace(/\s/g, '')}`;
};

/**
 * Format email for mailto: links
 * @param {string} email - Email address
 * @returns {string} Mailto link
 */
export const getMailtoLink = (email) => {
  return `mailto:${email}`;
};

/**
 * Get full credentials string for a person
 * @param {Array} credentials - Array of credentials
 * @returns {string} Comma-separated credentials
 */
export const formatCredentials = (credentials) => {
  return credentials.join(', ');
};

/**
 * Get current year for copyright
 * @returns {number} Current year
 */
export const getCurrentYear = () => {
  return new Date().getFullYear();
};
