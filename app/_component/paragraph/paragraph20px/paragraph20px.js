import styles from "./Paragraph20px.module.css";

export default function Paragraph20px({ typography }) {
  return (
    <>
      <p className={styles.paragraph}>{typography}</p>
    </>
  );
}
