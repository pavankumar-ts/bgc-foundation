import GenericHeroSection from '../../components/sections/GenericHeroSection';
import AboutGoalSection from '../../components/sections/AboutGoalSection';
import AboutSection from '../../components/sections/AboutSection';

export default function About() {
  return (
    <>
      <GenericHeroSection
        badge="About BGC Foundation"
        title="Transforming Rural Digestive Healthcare in Karnataka"
        description="BGC Foundation brings specialized digestive healthcare directly to rural communities through our innovative 'Hospital on Wheels' model, ensuring world-class medical care reaches those who need it most."
        stats={[
          { value: "2024", label: "Foundation Established" },
          { value: "5+", label: "Villages Served" },
          { value: "1.5K+", label: "Lives Impacted" }
        ]}
        imageSrc='/assets/about-hero.webp'
        imageAlt="BGC Foundation rural digestive healthcare mission in Karnataka"
        fallbackIcon="🏥💚"
      />
      <AboutGoalSection />
      <AboutSection />
    </>
  );
}