import styles from "./paragraph24px.module.css";

export default function Paragraph24px({ typography, textColor }) {
  return (
    <>
      <p style={{ color: textColor }} className={styles.paragraph}>
        {typography}
      </p>
    </>
  );
}
