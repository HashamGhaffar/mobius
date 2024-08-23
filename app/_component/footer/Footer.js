import styles from "./Footer.module.css";

import svgs from "@/app/_assets/svgs/index"
import Image from "next/image";
import { Typography, Button } from "../../_component/index";

export default function Footer() {

  return (
    <>
      <section>
        <div className={styles.main}>
          <footer className={styles.footer}>
            <ul className={styles.list}>
              <li className={styles.hedder}>
                <Typography
                  style={{ fontWeight: 400, color: "white", }}
                  variant="tertiaryTypography"
                  typography="Get in Touch"
                />
              </li>
              <li>
                <hr className={styles.footerHr} />
              </li>
              <li className={styles.hedderDescription}>
                <Typography
                  variant="secondaryTypography"
                  textColor="#6E6E6B"
                  typography="Email us"
                />
                <Typography
                  variant="secondaryTypography"
                  textColor="#6E6E6B"
                  typography="hr@mobiusmotionstudio.com"
                />
              </li>
              <li style={{ marginBottom: "20px" }}>
                <Typography
                  variant="secondaryTypography"
                  textColor="#6E6E6B"
                  typography="Call us at"
                />
                <Typography
                  variant="secondaryTypography"
                  textColor="#6E6E6B"
                  typography="+92 307 4567890"
                />
              </li>
              <li className={styles.mobileSpecificAddress}>
                <Typography
                  variant="secondaryTypography"
                  textColor="#6E6E6B"
                  typography="392, F Block Johar Town,"
                />
                <Typography
                  variant="secondaryTypography"
                  textColor="#6E6E6B"
                  typography="Lahore, Punjab, Pakistan"
                />
              </li>
            </ul>

            <ul className={`${styles.list} ${styles.Address}`}>
              <li>
                <Typography
                  style={{ fontWeight: 400, color: "white", }}
                  variant="tertiaryTypography"
                  typography="Address"
                />
              </li>
              <li>
                <hr className={styles.footerHr} />
              </li>
              <li className={styles.hedderDescription}>
                <Typography
                  variant="secondaryTypography"
                  textColor="#6E6E6B"
                  typography="392, F Block Johar Town, Lahore, Punjab, Pakistan"
                />
              </li>
            </ul>

            <ul className={`${styles.list} ${styles.Studio}`}>
              <li>
                <Typography
                  style={{ fontWeight: 400, color: "white", }}
                  variant="tertiaryTypography"
                  typography="Studio"
                />
              </li>
              <li>
                <hr className={styles.footerHr} />
              </li>
              <li className={`${styles.hedderDescription} ${styles.desktopSpecificDescription}`}>
                <Typography
                  variant="secondaryTypography"
                  textColor="#6E6E6B"
                  typography="Terms of Condition privacy Policy"
                />
              </li>
              <ul className={styles.mobileSpecificDescription}>
                <li>Terms of Condition</li>
                <li>Privacy Policy</li>
                <li>Career</li>
                <li>Contact Us</li>
              </ul>
            </ul>

            <ul className={`${styles.list} ${styles.Newsletter}`}>
              <li>
                <Typography
                  style={{ fontWeight: 400, color: "white", }}
                  variant="tertiaryTypography"
                  typography="Newsletter"
                />
              </li>
              <li>
                <hr className={styles.footerHr} />
              </li>
              <li>
                <Typography />
              </li>
              <li className={styles.hedderDescription}>
                <Typography
                  variant="secondaryTypography"
                  textColor="#6E6E6B"
                  typography="Receive the latest trend updates directly in your inbox."
                />
              </li>
              <li>
                <input className={styles.emailInput} placeholder="Enter your email" type="email" />
              </li>
              <li style={{ float: "right", marginTop: "30px" }}><Button text="Submit" /></li>
            </ul>
          </footer>


          <div className={styles.mediaLinks}>
            <Image src={svgs.Behance} height={31} width={31} alt="Behance" />
            <Image src={svgs.Dribbble} height={31} width={31} alt="Dribbble" />
            <Image src={svgs.facebook} height={31} width={31} alt="facebook" />
            <Image src={svgs.instagram} height={31} width={31} alt="instagram" />
            <Image src={svgs.linkedIn} height={31} width={31} alt="linkedIn" />
          </div>

        </div>
        <p className={styles.Copyright}>© 2023 MMS | Mobius Motion Studio. All rights reserved. </p>
      </section>

    </>
  );
}
