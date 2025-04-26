import Navbar from "../component/JobSeekingNavBar"
import JobSeeker from "../component/JobseekerMain"
import JobDetails from "../component/Jobseekerdetail"
export default function HeroPage() {
  return (
    <main >
      <Navbar />
      <JobSeeker />
      <JobDetails />

    </main>
  );
}