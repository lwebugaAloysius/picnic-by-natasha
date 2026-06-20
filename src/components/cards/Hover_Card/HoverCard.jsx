import { useState } from "react";
import styles from "./HoverCard.module.css";
import closeIcon from "/images/icon-close.svg";

export default function HoverCard({ children, bgImgSrc }) {
  const [isVisible, setIsVisible] = useState(false);

  // function toggleOverlay() {
  //   setIsVisible((prev) => !prev);
  //   console.log(isVisible);
  // }

  function openOverlay() {
    setIsVisible(true);
  }
  function hideOverlay() {
    setIsVisible(false);
  }

  return (
    <div
      className={styles["card-container"]}
      style={{ backgroundImage: `url(${bgImgSrc})` }}
      onClick={openOverlay}
    >
      <div
        className={`${styles["card-overlay"]} ${isVisible ? styles["shown"] : styles["hidden"]}`}
      >
        <button
          className={styles["card-overlay-close-btn"]}
          onClick={(e) => {
            e.stopPropagation();
            hideOverlay();
          }}
        >
          <img src={closeIcon} alt="overlay close icon" />
        </button>
        <div className={styles["card-overlay-info-container"]}>{children}</div>
      </div>
    </div>
  );
}
