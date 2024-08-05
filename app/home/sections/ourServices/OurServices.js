// import styles from "./OurServices.modile.css";
import Image from "next/image";

// import pngs from "@/app/_assets/pngs";
import pngs from "@/app/_assets/pngs";
import svgs from "@/app/_assets/svgs";
import styles from "./OurServices.module.css";
import {
  Paragraph20px,
  Paragraph24px,
  Hedding38px,
} from "../../../_component/index";

export default function OurServices() {
  return (
    <>
      <section className={styles.parent}>
        <Image
          className={styles.topShade}
          src={pngs.ChameleonBlur}
          width={362}
          height={800}
          alt="topShade"
        />
        <div>
          <div className={styles.ourServices}>
            <Paragraph20px typography="Our Services" />
          </div>
          <div className={styles.hedding}>
            <Hedding38px typography="We Provide 3D Services" />
          </div>

          <div className={styles.horizontalLine}>
            <hr />
          </div>
          <div className={styles.boxServicesList}>
            <Image
              className={styles.bulletsServicesList}
              src={pngs.BulletsServicesList}
              width={14}
              height={120}
              alt="bulletsServicesList"
            />
            <div>
              <div className={`${styles.mb12} ${styles.flex}`}>
                <Paragraph24px typography="3D Modeling" textColor="#ffffff" />
                <Image
                  src={svgs.Modeling}
                  width={24}
                  height={21}
                  alt="Modeling"
                />
              </div>
              <div className={`${styles.mb12} ${styles.flex}`}>
                <Paragraph24px typography="3D Simulation" textColor="#A7A4AD" />
                <Image
                  src={svgs.Simulation}
                  width={22}
                  height={24}
                  alt="Modeling"
                />
              </div>
              <div className={styles.flex}>
                <Paragraph24px
                  typography="Video Animation"
                  textColor="#A7A4AD"
                />
                <Image
                  src={svgs.Animation}
                  width={26}
                  height={24}
                  alt="Modeling"
                />
              </div>
            </div>
          </div>
        </div>
        <div className={styles.lenzBox} style={{ position: "relative" }}>
          <Image
            className={styles.lenz}
            src={pngs.Lenz}
            width={381}
            height={361}
            alt="Lenz"
          />
          <Image
            className={styles.mobileShade}
            src={pngs.ChameleonBlur}
            alt="rightShade"
          />
        </div>
        <Image
          className={styles.bottomShade}
          src={pngs.ChameleonBlur}
          width={362}
          height={800}
          alt="bottomShade"
        />
      </section>
    </>
  );
}
