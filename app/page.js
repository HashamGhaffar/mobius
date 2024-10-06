// import styles from "./home.module.css";
import {
  HeroSection,
  AboutUs,
  OurServices,
  RecentProjects,
  Discover,
  FavoriteClients,
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
        <RecentProjects />
        <Discover />
        <FavoriteClients />
        <JoinUs />
        <Footer />
      </div>
    </>
  );
}
