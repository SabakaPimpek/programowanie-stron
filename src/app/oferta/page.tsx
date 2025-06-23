import PricingSection from "./PricingSection";
import AboutSection from "./AboutSection";

export default function Home() {

  return (
    <div className="bg-white dark:text-black">
        <PricingSection />
        <AboutSection />
        {/* <TrySection /> */}
    </div>
  );
}
