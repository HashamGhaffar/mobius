// import styles from "./OurServices.modile.css";
import Image from "next/image";

// import pngs from "@/app/_assets/pngs";
import pngs from "@/app/_assets/pngs";
import svgs from "@/app/_assets/svgs";
import styles from "./OurServices.module.css";
import { Typography } from "../../../_component/index";

export default function OurServices() {
  return (
    <>
      <section className={styles.parent}>
        <div>
          <div className={styles.ourServices}>
            <Typography
              typography="Our Services"
              variant="tertiaryTypography"
            />
          </div>
          <div className={styles.hedding}>
            <Typography
              typography="We Provide 3D Services"
              variant="tertiaryHeading"
              textColor="#ffffff"
            />
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
                <Typography
                  typography="3D Modeling"
                  variant="primaryTypography"
                  textColor="#ffffff"
                />
                <Image
                  src={svgs.Modeling}
                  width={24}
                  height={21}
                  alt="Modeling"
                />
              </div>
              <div className={`${styles.mb12} ${styles.flex}`}>
                <Typography
                  typography="3D Simulation"
                  variant="primaryTypography"
                />
                <Image
                  src={svgs.Simulation}
                  width={22}
                  height={24}
                  alt="Modeling"
                />
              </div>
              <div className={styles.flex}>
                <Typography
                  typography="Video Animation"
                  variant="primaryTypography"
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

      </section>
    </>
  );
}
