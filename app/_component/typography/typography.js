import styles from "./Typography.module.css";

export default function Typography({
  style = {},
  typography,
  textColor = "#A7A4AD",
  variant,
  fontFamily,
  element: Element = "p",
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
      style={{ color: textColor, fontFamily: fontFamily, ...style }}//...styles these three douts are spread operator
      className={getVariant[variant]}
    >
      {typography}
    </Element>
  );
}
