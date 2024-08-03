export default function Button({
  fontSize,
  fontWeight,
  color,
  padding,
  borderRadius,
  backgroundColor,
  text,
  border,
}) {
  return (
    <button
      style={{
        fontSize: fontSize,
        fontWeight: fontWeight,
        color: color,
        padding: padding,
        borderRadius: borderRadius,
        backgroundColor: backgroundColor,
        border: border,
      }}
    >
      {text}
    </button>
  );
}
