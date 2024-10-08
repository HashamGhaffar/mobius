import styles from "./Clients.module.css";
import Image from "next/image";
import Marquee from "react-fast-marquee";
import pngs from "@/app/_assets/pngs";
import { Typography, ClintCard } from "../../../_component/index";
import svgs from "@/app/_assets/pngs";

export default function Clients() {
  return (
    <>
      <section className={styles.main}>
        <div>
          <div className={styles.textCenter}>
            <Typography variant="tertiaryTypography" typography="Clients" />
          </div>
          <div className={`${styles.textCenter} ${styles.heddingYspacing}`}>
            <Typography
              element="h1"
              variant="tertiaryHeading"
              textColor="#FFFFFF"
              typography="Here are our some Favorite Clients"
            />
          </div>

          {/* markey */}
          <Marquee className={styles.marquee}>
            <Image className={styles.logoWrap} src={pngs.MAvancus} alt="icon" />
            <Image className={styles.logoWrap} src={pngs.MElivate} alt="icon" />
            <Image
              className={styles.logoWrap}
              src={pngs.MFoneStar}
              alt="icon"
            />
            <Image
              className={styles.logoWrap}
              src={pngs.MFormulaZ}
              alt="icon"
            />
            <Image
              className={styles.logoWrap}
              src={pngs.MLightOne}
              alt="icon"
            />
            <Image className={styles.logoWrap} src={pngs.MLuna} alt="icon" />
            <Image
              className={styles.logoWrap}
              src={pngs.MMetaleon}
              alt="icon"
            />
            <Image
              className={styles.logoWrap}
              src={pngs.MPillPuncher}
              alt="icon"
            />
            <Image className={styles.logoWrap} src={pngs.MAvancus} alt="icon" />
            <Image className={styles.logoWrap} src={pngs.MSony} alt="icon" />
          </Marquee>

          <div className={styles.textCenter}>
            <Typography variant="tertiaryTypography" typography="Testimonial" />
          </div>
          <div className={`${styles.textCenter} ${styles.heddingYspacing}`}>
            <Typography
              element="h1"
              variant="tertiaryHeading"
              textColor="#FFFFFF"
              typography="What they say about us"
            />
          </div>
        </div>
        <div className={styles.cardBox}>
          <ClintCard name="Angelina Molnar" status="COORDINATOR" />
          <ClintCard name="Cehan alee" status="COORDINATOR" />
          <ClintCard name="Hale Allon" status="COORDINATOR" />
        </div>
      </section>
    </>
  );
}
