import Image from "next/image";

import { Navbar } from "../../../_component/index";
import { Button, Typography } from "../../../_component/index";
import styles from "./HeroSection.module.css";

import pngs from "@/app/_assets/pngs";

export default function HeroSection() {
  return (
    <>
      <section className={styles.parentBox}>
        <Navbar />

        <div className={styles.parent}>
          <div>
            <Image
              className={styles.heddingImage}
              src={pngs.Heading}
              width={533}
              height={86}
              alt="Picture of the author"
            />
            <div className={styles.boxParagraph}>
              <Typography
                variant="tertiaryTypography"
                typography="We provide expert animation services, bringing your ideas to life
              with creativity and flair.Elevate your storytelling with our
              exceptional team at your service."
              />
            </div>
            <Button
              text="Watch our Showreel"
            // styles={{
            //   inline styling prop
            // }}
            />
          </div>
        </div>
      </section>
    </>
  );
}
