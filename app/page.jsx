import HeroSection from "../src/components/home/HeroSection";
import BestSellers from "../src/components/home/BestSellers";
import JournalSection from "../src/components/home/JournalSection";

export default function HomePage() {
  return (
    // The <Header /> component has been removed from here
    <main>
      <HeroSection />
      <BestSellers />
      <JournalSection />
    </main>
  );
}
