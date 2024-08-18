import styles from "./JoinUs.module.css";

import Image from "next/image";
import pngs from "@/app/_assets/pngs";
import { Typography, Button } from "../../../_component/index";

export default function JoinUs() {
  return (
    <>
      <section className={styles.main}>
        {/* card work togather  */}
        <div>
          <div className={styles.boxText}>
            <div className={styles.contentBox}>
              <Typography
                variant="tertiaryHeading"
                textColor="#FFFFFF"
                typography="Want to Work Together?"
              />
              <div className={styles.boxButton}>
                <Button text="Join Us Now" />
              </div>
            </div>
          </div>
        </div>
        <Image
          className={styles.ToadWithBeer}
          src={pngs.ToadWithBeer}
          alt="ToadWithBeer"
          height="511px"
          width="294px"
        />
      </section>
    </>
  );
}
