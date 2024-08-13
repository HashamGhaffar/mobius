import styles from "./typography.module.css";

export default function Typography({
  typography,
  textColor,
  variant,
  fontFamily,
  element = "p",
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
    <element
      style={{ color: textColor, fontFamily: fontFamily }}
      className={getVariant[variant]}
    >
      {typography}
    </element>
  );
}
