import Image from "next/image";
import styles from "./ImpracticalityToReality.module.css";
import {
  Paragraph20px,
  Paragraph22px,
  Hedding38px,
} from "../../../_component/index";

import pngs from "@/app/_assets/pngs";

const getFontSize = () => {
  return 12;
};

export default function ImpracticalityToReality() {
  return (
    <>
      <section className={styles.parent}>
        <div className={styles.parentImgTypo}>
          <div>
            <Image
              className={styles.ChameleonInSuit}
              src={pngs.ChameleonInSuit}
              width={289}
              height={515}
              alt="ChameleonInSuit"
            />
          </div>
          <div style={{ zIndex: "2" }}>
            <div className={styles.paragraph1}>
              <Paragraph20px typography="About us" />
            </div>
            <div style={{ color: "#ffffff !important" }}>
              <Hedding38px typography="We Create Impracticality To Reality" />
            </div>
            <div className={styles.hrLine}>
              <hr />
            </div>
            <div>
              <Paragraph22px
                fontSize={getFontSize()}
                typography="We provide expert animation services, With a dedicated team of
                 skilled animators, we infuse creativity and flair into every frame. Our 
                 mission is to elevate your storytelling, making it both engaging and memorable. 
                 Let's embark on a creative journey together and bring your vision to life"
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
