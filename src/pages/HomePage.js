import EditorialSection from "../sections/editorial/EditorialSection";
import FeaturedSection from "../sections/featured/FeaturedSection";
import Hero from "../sections/hero/Hero";
import IssueSection from "../sections/issue/IssueSection";

const HomePage = () => {
  return (
    <>
      <Hero />
      <IssueSection />
      <EditorialSection />
      <FeaturedSection />
    </>
  );
};

export default HomePage;
