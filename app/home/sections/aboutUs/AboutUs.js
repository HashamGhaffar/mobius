import Image from "next/image";
import styles from "./ImpracticalityToReality.module.css";
import { Typography } from "../../../_component/index";

import pngs from "@/app/_assets/pngs";

export default function AboutUs() {
  return (
    <>
      <section className={styles.parent}>
        <div className={styles.parentImgTypo}>
          <Image
            className={styles.ChameleonInSuit}
            src={pngs.ChameleonInSuit}
            alt="ChameleonInSuit"
          />
          <div style={{ zIndex: "2" }}>
            <div className={styles.paragraph1}>
              <Typography typography="About us" variant="tertiaryTypography" />
            </div>
            <div style={{ color: "#ffffff !important" }}>
              <Typography
                typography="We Create Impracticality To Reality"
                variant="tertiaryHeading"
                element="h1"
                textColor="#FFFFFF"
              />
            </div>
            <div className={styles.hrLine}>
              <hr />
            </div>
            <div>
              <Typography
                typography="We provide expert animation services, With a dedicated team of
                 skilled animators, we infuse creativity and flair into every frame. Our 
                 mission is to elevate your storytelling, making it both engaging and memorable. 
                 Let's embark on a creative journey together and bring your vision to life"
                variant="secondaryTypography"
              />
            </div>
          </div>
        </div>
        <Image
          className={styles.blur}
          src={pngs.ChameleonBlur}
          width={500}
          height={261}
          alt="ChameleonInSuit"
        />
      </section>
    </>
  );
}
