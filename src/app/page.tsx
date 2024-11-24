import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import SectionOne from "./components/SectionOne";
import SectionTwo from "./components/SectionTwo";
import Header from "./components/Header";
import SectionExtension from "./components/SectionExtension";
import SectionCustomize from "./components/SectionCustomize";
import SectionWork from "./components/SectionWork";
import SectionSponser from "./components/SectionSponser";


export default function Home() {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <SectionOne />
      <SectionTwo />
      <Header />
      <SectionExtension />
      <SectionCustomize />
      <SectionWork />
      <SectionSponser />
    </div>
  );
}
