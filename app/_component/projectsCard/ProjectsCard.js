import styles from "./ProjectsCard.module.css";
import Image from "next/image";
export default function RecentProjectsCard({ typography, imagePath }) {
  return (
    <>
      <div className={styles.card}>
        <Image className={styles.image} src={imagePath} alt="Avancus" />
        <div className={styles.boxTypography}>
          <p className={styles.typography}>{typography}</p>
        </div>
      </div>
    </>
  );
}
