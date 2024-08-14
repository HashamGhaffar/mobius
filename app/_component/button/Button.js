import style from "./Button.module.css"

export default function Button({
  styles = {},
  text
}) {



  return (
    <button className={style.button}
      style={{ ...styles }}
    >
      {text}
    </button>
  );
}
