import styles from "./paragraph22px.module.css";

export default function Paragraph22px({ typography }) {
  return (
    <>
      <p className={styles.paragraph}>{typography}</p>
    </>
  );
}
