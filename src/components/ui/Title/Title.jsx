import styles from "./Title.module.css";

export default function Title({ children, size, weight, color, lineHeight }) {
  const style = {
    fontSize: size,
    fontWeight: weight,
    lineHeight: lineHeight,
  };

  return (
    <>
      <p style={style} className={`${styles["title"]} ${styles[color]} `}>
        {children}
      </p>
    </>
  );
}
