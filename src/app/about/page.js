import GenericHeroSection from '../../components/sections/GenericHeroSection';
import AboutGoalSection from '../../components/sections/AboutGoalSection';
import AboutSection from '../../components/sections/AboutSection';
import { ORGANIZATION, STATISTICS, CONTACT } from '@/config/siteConfig';

export default function About() {
  return (
    <>
      <GenericHeroSection
        badge={`About ${ORGANIZATION.name}`}
        title={`Transforming Rural Digestive Healthcare in ${CONTACT.address.state}`}
        description={`${ORGANIZATION.name} brings specialized digestive healthcare directly to rural communities through our innovative '${ORGANIZATION.model}' model, ensuring world-class medical care reaches those who need it most.`}
        stats={[
          { value: ORGANIZATION.foundingYear, label: "Foundation Established" },
          { value: STATISTICS.healthCamps.display, label: STATISTICS.healthCamps.label },
          { value: STATISTICS.metrics.livesImpacted.display, label: STATISTICS.metrics.livesImpacted.label }
        ]}
        imageSrc='/assets/about-hero.webp'
        imageAlt={`${ORGANIZATION.name} rural digestive healthcare mission in ${CONTACT.address.state}`}
        fallbackIcon="🏥💚"
      />
      <AboutGoalSection />
      <AboutSection />
    </>
  );
}