import styles from "./paragraph24px.module.css";

export default function Paragraph24px({ typography, textColor, varient }) {
  const getVariant = {
    h1: styles.paragraph,
    h2: styles.paragraph,
    h3: styles.paragraph,
  };

  if (varient === "h1") {
    return <h1 className={getVariant[varient]}></h1>;
  } else {
    return (
      <p style={{ color: textColor }} className={getVariant[varient]}>
        {typography}
      </p>
    );
  }
}
