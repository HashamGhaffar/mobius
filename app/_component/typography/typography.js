import styles from "./typography.module.css";

export default function Typography({
  typography,
  textColor,
  variant,
  fontFamily,
  element,
}) {
  const getVariant = {
    primaryHeading: styles.primaryHeading,
    secondaryHeading: styles.secondaryHeading,
    tertiaryHeading: styles.tertiaryHeading,
    primaryTypography: styles.primaryTypography,
    secondaryTypography: styles.secondaryTypography,
    tertiaryTypography: styles.tertiaryTypography,
  };

  if (element === "p") {
    return (
      <p
        style={{ color: textColor, fontFamily: fontFamily }}
        className={getVariant[variant]}
      >
        {typography}
      </p>
    );
  } else element === "h1";
  {
    return (
      <h1
        style={{ color: textColor, fontFamily: fontFamily }}
        className={getVariant[variant]}
      >
        {typography}
      </h1>
    );
  }
}
