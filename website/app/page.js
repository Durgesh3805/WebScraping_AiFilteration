import LandingPage from "./component/ui/LandingPage";
import TimeCard from "./component/ui/TimeCard";
import HireCard from "./component/ui/HireCard";
import TrustedCard from "./component/ui/TrustedCard";
import FooterPage from "./component/ui/FooterPage";
import FeatureCard from "./component/ui/FeatureCard";
import TalentCard from "./component/ui/TalentCard";
import CandidateCard from "./component/ui/CandidateCard";
import InterviewCard from "./component/ui/InterviewCard";
import RecruitmentCard from "./component/ui/RecruitmentCard";
export default function Home() {
  return (
    <main>
      <LandingPage />
      <div>
        <TimeCard />
      </div>
      <div>
        <FeatureCard />
      </div>
      <div>
        <TalentCard />
      </div>
      <div>
        <CandidateCard />
      </div>
      <div>
        <InterviewCard/>
      </div>
      <div>
        <RecruitmentCard />
      </div>
      <div>
        <HireCard />
      </div>
      <div>
        <TrustedCard />
      </div>
      <div>
        <FooterPage />
      </div>
    </main>
    
  );
}