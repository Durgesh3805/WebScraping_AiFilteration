import HeroSection from "../component/HeroAllJobSearch";
import JobCategoryCard from "../component/HeroJobSearch";
import HeroTopCompany from "../component/HeroTopCompany";
import HeroFindJobVacancy from "../component/HeroFindJobVacancy";
import HeroFreshersJob from "../component/HeroFreshersJob";
import HeroTestimonial from "../component/HeroTestimonial";
import  GrabJobsFooter  from "../component/FooterPage";
export default function HeroPage() {
  return (
    <main >
      <HeroSection />
      <JobCategoryCard />
      <HeroTopCompany />
      <HeroFindJobVacancy />
      <HeroFreshersJob />
      <HeroTestimonial />
      <GrabJobsFooter  />
    </main>
  );
}