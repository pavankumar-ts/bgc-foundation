import GenericHeroSection from '../../components/sections/GenericHeroSection';
import MeetDoctorsSection from '../../components/sections/MeetDoctorsSection';

export default function Team() {
  return (
    <>
      <GenericHeroSection
        badge="35 Dedicated Digestive Healthcare Professionals"
        title="Meet Our Team of Rural Digestive Healthcare Heroes"
        description="They could practice anywhere. They chose here. Meet the extraordinary doctors, nurses, and healthcare professionals who left comfortable urban practices to bring world-class digestive healthcare to Karnataka's most remote villages."
        stats={[
          { value: "50+", label: "Years Combined Experience" },
          { value: "5+", label: "Villages Served" },
          { value: "5K+", label: "Lives Touched Annually" }
        ]}
        imageSrc='/assets/team-hero.webp'
        imageAlt="BGC Foundation medical team serving rural communities"
        fallbackIcon="👩‍⚕️👨‍⚕️"
      />
      <MeetDoctorsSection />
    </>
  );
}