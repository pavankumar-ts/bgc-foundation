import PartnerCTASection from '@/components/sections/PartnerCTASection';
import GenericHeroSection from '../../components/sections/GenericHeroSection';
import MissionVisionSection from '../../components/sections/MissionVisionSection';
import ValuesSection from '../../components/sections/ValuesSection';
import { ORGANIZATION, STATISTICS, CONTACT } from '@/config/siteConfig';

export default function About() {
  return (
    <>
      <GenericHeroSection
        badge={`About ${ORGANIZATION.name}`}
        title={`Karnataka's First-of-its-Kind Rural Outreach Programme`}
        description={`Bringing specialized digestive healthcare directly to rural communities through early detection, preventive education, and access to expert gastroenterology care.`}
        stats={[
          { value: ORGANIZATION.foundingYear, label: "Foundation Established" },
          { value: STATISTICS.healthCamps.display, label: STATISTICS.healthCamps.label },
          { value: STATISTICS.metrics.livesImpacted.display, label: STATISTICS.metrics.livesImpacted.label }
        ]}
        imageSrc='/assets/about-hero.webp'
        imageAlt={`${ORGANIZATION.name} rural digestive healthcare mission in ${CONTACT.address.state}`}
        fallbackIcon="🏥💚"
      />
      <MissionVisionSection />
      <ValuesSection />
      <PartnerCTASection />
    </>
  );
}