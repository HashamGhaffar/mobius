import styles from "./paragraph22px.module.css";

export default function Paragraph22px({ typography, fontSize }) {
  return (
    <>
      <p className={styles.paragraph} style={{ fontSize }}>
        {typography}
      </p>
    </>
  );
}
