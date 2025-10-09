import GenericHeroSection from '../../components/sections/GenericHeroSection';
import ProgramsSection from '../../components/sections/ProgramsSection';
import RuralHealthcareSection from '../../components/sections/RuralHealthcareSection';

export const metadata = {
  title: 'Healthcare Programs | BGC Foundation',
  description: 'Discover BGC Foundation\'s comprehensive healthcare programs serving rural communities across Karnataka. Gastroenterology, endoscopy, blood tests, and specialized digestive health programs.',
  keywords: [
    'rural healthcare programs',
    'gastroenterology programs',
    'digestive health services',
    'endoscopy programs',
    'rural medical camps',
    'Karnataka healthcare',
    'mobile health units',
    'BGC Foundation programs',
    'rural health outreach'
  ],
};

export default function Programs() {
  return (
    <>
      <GenericHeroSection
        badge="Comprehensive Healthcare Programs"
        title="8 Essential Programs Delivering Life-Saving Care"
        description="From advanced endoscopy to preventive screening, our mobile units deliver complete digestive healthcare solutions directly to rural communities across Karnataka."
        stats={[
          { value: "8+", label: "Core Programs" },
          { value: "100%", label: "Free Treatment" },
          { value: "4+", label: "Villages Served" }
        ]}
        imageSrc='/assets/about-hero.webp'
        imageAlt="BGC Foundation healthcare programs in rural Karnataka"
        fallbackIcon="🏥🚐"
      />
      <ProgramsSection />
      <RuralHealthcareSection />
    </>
  );
}