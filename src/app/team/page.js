import GenericHeroSection from '../../components/sections/GenericHeroSection';
import MeetDoctorsSection from '../../components/sections/MeetDoctorsSection';
import { STATISTICS, LEADERSHIP } from '@/config/siteConfig';

export default function Team() {
  return (
    <>
      <GenericHeroSection
        badge={`${STATISTICS.team.total} Dedicated Digestive Healthcare Professionals`}
        title="Meet Our Team of Rural Digestive Healthcare"
        description="They could practice anywhere. They chose here. Meet the extraordinary doctors, nurses, and healthcare professionals who left comfortable urban practices to bring world-class digestive healthcare to Karnataka's most remote villages."
        stats={[
          { value: LEADERSHIP.chiefGastroenterologist.experience.combinedDisplay, label: "Combined Experience" },
          { value: STATISTICS.villagesServed.display, label: STATISTICS.villagesServed.label },
          { value: STATISTICS.healthCamps.display, label: STATISTICS.healthCamps.label }
        ]}
        imageSrc='/assets/team-hero.webp'
        imageAlt="BGC Foundation medical team serving rural communities"
        fallbackIcon="👩‍⚕️👨‍⚕️"
      />
      <MeetDoctorsSection />
    </>
  );
}