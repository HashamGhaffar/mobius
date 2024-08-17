import Image from "next/image";

import { Button } from "../../_component/index.js";
import styles from "./navbar.module.css";

import svgs from "@/app/_assets/svgs";

export default function Navbar() {
  return (
    <>
      <nav className={styles.parentNav}>
        <Image
          src={svgs.logo}
          width={51}
          height={51}
          alt="Picture of the author"
        />
        <ul className={styles.list}>
          <li className={styles.listItem}>Home</li>
          <li className={styles.listItem}>Case Studies</li>
          <li className={styles.listItem}>Careers</li>
          <li className={styles.button.listItem}>
            <Button
              text="Get in Touch"
              styles={{
                backgroundColor: "#A7A4AD1A",
              }}
            />
          </li>
        </ul>
        <Image
          className={styles.hamBurger}
          src={svgs.hamburger}
          width={25}
          height={19}
          alt="Picture of the author"
        />
      </nav>
    </>
  );
}
