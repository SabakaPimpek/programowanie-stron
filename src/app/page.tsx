import PrimarySection from "../components/primarySection";
import SponsorsSection from "../components/sponspors";
import GuideDogsSection from "../components/guideDogSection";
import FAQSection from "../components/faqSection";

export default function Home() {

  return (
    <div className="bg-white dark:text-black">
      <PrimarySection/>
      <SponsorsSection />
      <GuideDogsSection/>
      <FAQSection />
    </div>
  );
}
