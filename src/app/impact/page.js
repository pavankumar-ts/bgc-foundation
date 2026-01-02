import GenericHeroSection from '../../components/sections/GenericHeroSection';
import ImpactSection from '../../components/sections/ImpactSection';
import { ORGANIZATION, STATISTICS } from '@/config/siteConfig';

export default function Impact() {
  return (
    <>
      <GenericHeroSection
        badge="Our Impact in Rural Karnataka"
        title="Transforming Lives One Village at a Time"
        description={`Since ${ORGANIZATION.foundingYear}, ${ORGANIZATION.name} has delivered life-changing healthcare to remote communities across Karnataka. From early cancer detection to preventive care, our impact reaches far beyond medical treatment.`}
        stats={[
          { value: STATISTICS.patientsConsulted.display, label: STATISTICS.patientsConsulted.label },
          { value: STATISTICS.healthCamps.display, label: STATISTICS.healthCamps.alternateLabels[0] },
          { value: STATISTICS.services.specialistHours.display, label: STATISTICS.services.specialistHours.label }
        ]}
          imageSrc='/assets/impact-hero.webp'
        imageAlt={`${ORGANIZATION.name} impact in rural Karnataka healthcare`}
        fallbackIcon="📊💝"
      />
      <ImpactSection />
    </>
  );
}