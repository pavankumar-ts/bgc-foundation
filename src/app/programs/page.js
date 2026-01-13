import PartnerCTASection from '@/components/sections/PartnerCTASection';
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
      <ProgramsSection />
      <RuralHealthcareSection />
      <PartnerCTASection />
    </>
  );
}