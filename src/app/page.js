import HeroSection from '../components/sections/HeroSection';
import StatsSection from '../components/sections/StatsSection';
import RuralOutreachVideoSection from '../components/sections/RuralOutreachVideoSection';
import AboutGoalSection from '../components/sections/AboutGoalSection';
import ExpertEndorsementSection from '../components/sections/ExpertEndorsementSection';
import LeadershipSection from '@/components/sections/LeadershipSection';
import YouTubeSection from '../components/sections/YouTubeSection';
import TimelineSection from '../components/sections/TimelineSection';
import ImpactSection from '../components/sections/ImpactSection';

export default function Home() {
  return (
    <>
      <HeroSection />
      <StatsSection />
      <RuralOutreachVideoSection />
      <AboutGoalSection />
      <ExpertEndorsementSection />
      <LeadershipSection />
      <YouTubeSection />
      <TimelineSection />
      <ImpactSection />
    </>
  );
}
