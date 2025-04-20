import LandingPage from "./component/LandingPage";
import TimeCard from "./component/TimeCard";
import HireCard from "./component/HireCard";
import TrustedCard from "./component/TrustedCard";
import FooterPage from "./component/FooterPage";
import FeatureCard from "./component/FeatureCard";
import TalentCard from "./component/TalentCard";
import CandidateCard from "./component/CandidateCard";
import InterviewCard from "./component/InterviewCard";
import RecruitmentCard from "./component/RecruitmentCard";
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