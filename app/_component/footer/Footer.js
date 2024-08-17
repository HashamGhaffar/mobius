import styles from "./Footer.module.css";
import { Typography } from "../../_component/index";

export default function Footer() {
  return (
    <>
      <section className={styles.main}>
        <footer className={styles.footer}>
          <ul className={styles.list}>
            <li className={styles.hedder}>
              <Typography
                styles={`fontWeight: 400 ; color : #ffffff ;`}
                variant="tertiaryTypography"
                typography="Get in Touch"
              />
            </li>
            <li>
              <hr />
            </li>
            <li>
              <Typography
                variant="secondaryTypography"
                textColor="#6E6E6B"
                typography="Email us"
              />
              <Typography
                variant="secondaryTypography"
                textColor="#6E6E6B"
                typography="athr@mobiusmotionstudio.com"
              />
            </li>
            <li>
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
          </ul>

          <ul className={styles.list}>
            <li>
              <Typography />
            </li>
            <li>
              <hr />
            </li>
            <li>
              <Typography />
            </li>
          </ul>

          <ul className={styles.list}>
            <li>
              <Typography />
            </li>
            <li>
              <hr />
            </li>
            <li>
              <Typography />
            </li>
          </ul>

          <ul className={styles.list}>
            <li>
              <Typography />
            </li>
            <li>
              <hr />
            </li>
            <li>
              <Typography />
            </li>
            <li>
              <input type="email" />
            </li>
          </ul>
        </footer>
      </section>
    </>
  );
}
