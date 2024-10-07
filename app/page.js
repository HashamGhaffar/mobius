// import styles from "./home.module.css";
import {
  HeroSection,
  AboutUs,
  OurServices,
  Projects,
  Discover,
  Clients,
  JoinUs,
} from "./home/sections/index";
import { Footer } from "./_component";

export default function Home() {
  return (
    <>
      <div>
        <HeroSection />
        <AboutUs />
        <OurServices />
        <Projects />
        <Discover />
        <Clients />
        <JoinUs />
        <Footer />
      </div>
    </>
  );
}
