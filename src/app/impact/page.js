import GenericHeroSection from '../../components/sections/GenericHeroSection';
import ImpactSection from '../../components/sections/ImpactSection';

export default function Impact() {
  return (
    <>
      <GenericHeroSection
        badge="Our Impact in Rural Karnataka"
        title="Transforming Lives One Village at a Time"
        description="Since 2018, BGC Foundation has delivered life-changing healthcare to remote communities across Karnataka. From early cancer detection to preventive care, our impact reaches far beyond medical treatment."
        stats={[
          { value: "1000+", label: "Patients Consulted" },
          { value: "4+", label: "Villages Served" },
          { value: "1k", label: "Lives Impacted" }
        ]}
          imageSrc='/assets/impact-hero.webp'
        imageAlt="BGC Foundation impact in rural Karnataka healthcare"
        fallbackIcon="📊💝"
      />
      <ImpactSection />
    </>
  );
}