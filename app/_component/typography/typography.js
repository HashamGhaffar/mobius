import styles from "./typography.module.css";

export default function Typography({
  typography,
  textColor = "#A7A4AD",
  variant,
  fontFamily,
  element: Element = "p"
}) {
  const getVariant = {
    primaryHeading: styles.primaryHeading,
    secondaryHeading: styles.secondaryHeading,
    tertiaryHeading: styles.tertiaryHeading,
    primaryTypography: styles.primaryTypography,
    secondaryTypography: styles.secondaryTypography,
    tertiaryTypography: styles.tertiaryTypography,
  };

  return (
    <Element
      style={{ color: textColor, fontFamily: fontFamily }}
      className={getVariant[variant]}
    >
      {typography}
    </Element>
  );
}
