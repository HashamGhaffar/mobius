// import Image from "next/image";
import styles from "./HeroSection.module.css";
import pngs from "@/app/_assets/pngs";

import { Navbar, Button, Typography } from "../../_component/index";
// import { Button, Typography } from "../../../_component/index";
export default function HeroSection() {
  return (
    <>
      <section className={styles.parentBox}>
        <Navbar />
        <div className={styles.parent}>
        </div>
      </section>
    </>
  );
}
