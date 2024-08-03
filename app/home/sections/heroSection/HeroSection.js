import Image from "next/image";

import { Navbar } from "../../../_component/index";
import { Paragraph20px, Button } from "../../../_component/index";
import styles from "./heroSection.module.css";

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
              <Paragraph20px
                typography="We provide expert animation services, bringing your ideas to life
              with creativity and flair.Elevate your storytelling with our
              exceptional team at your service."
              />
            </div>
            <Button
              text="Watch our Showreel"
              fontSize="11px"
              fontWeight="300"
              color="rgb(255, 255, 255)"
              padding="5px 20px"
              borderRadius="4px"
              border="none"
              backgroundColor="rgba(167, 164, 173, 0.2)"
            />
          </div>
        </div>
      </section>
    </>
  );
}
