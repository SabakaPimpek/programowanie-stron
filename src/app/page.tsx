import PrimarySection from "../components/primarySection";
import SponsorsSection from "../components/sponspors";
import Footer from "../components/footer";
import Header from "../components/headerSection";
import GuideDogsSection from "../components/guideDogSection";
import FAQSection from "../components/faqSection";

export default function Home() {

  return (
    <div className="bg-white">
      
      <Header />
      <PrimarySection/>
      <SponsorsSection />
      <GuideDogsSection/>
      <FAQSection />
      <Footer />
    </div>
  );
}
