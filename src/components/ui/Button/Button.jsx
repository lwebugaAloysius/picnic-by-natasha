import { Children } from "react";
import styles from "./Button.module.css";

export default function Button({
  children,
  type,
  size = "default",
  action = null,
}) {
  return (
    <>
      <button
        onClick={action}
        className={`
        ${styles["btn-general"]} 
        ${styles[type]} 
        ${styles[size]}`}
      >
        {children}
      </button>
    </>
  );
}
