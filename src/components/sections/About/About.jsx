import { useIsInView } from "../../../hooks/useIsInView";

import Title from "../../ui/Title/Title";
import matFood from "/images/mat-food-8.jpg";
import friends2 from "/images/friends-2.jpg";

import styles from "./About.module.css";

export default function About() {
  const [ref, isVisible] = useIsInView(0.4);

  return (
    <section
      ref={ref}
      className={`${styles["about-section"]} ${isVisible ? "fadeUp-animation" : ""}`}
      id="about"
    >
      <div className={styles["about-title-text"]}>
        <Title size="4.5rem" weight={800}>
          <span className={styles["about-title"]}>
            Where Moments Grow{" "}
            <span className={styles["break"]}>in the Open Air</span>
          </span>
        </Title>
        <p className={styles["about-text"]}>
          This picnic is a place to slow down and enjoy the simple things --
          music in the background, sunlight on your skin, and friends gathering
          on warm spring grass.
        </p>
      </div>
      <div className={styles["about-img-grid"]}>
        <div
          style={{
            backgroundImage: `url(${matFood})`,
          }}
          className={`${styles["about-img-card"]} ${styles["about-img-card-1"]}`}
        >
          <div
            className={`${styles["about-img-card-overlay"]} ${styles["about-img-card-overlay-1"]}`}
          >
            <Title color="white" size="4rem" weight={900} lineHeight="3rem">
              Picnic by Natasha
            </Title>
          </div>
        </div>

        <div
          style={{
            backgroundImage: `url(${friends2})`,
          }}
          className={`${styles["about-img-card"]} ${styles["about-img-card-2"]}`}
        >
          <div
            className={`${styles["about-img-card-overlay"]} ${styles["about-img-card-overlay-2"]}`}
          >
            <Title color="white" size="6rem" weight={500} lineHeight="3rem">
              “
            </Title>
            <Title color="white" size="4rem" weight={500} lineHeight="3rem">
              The best stage is the earth itself
            </Title>
          </div>
        </div>
      </div>
    </section>
  );
}
