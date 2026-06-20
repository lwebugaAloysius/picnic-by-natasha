import Title from "../../ui/Title/Title";
import Button from "../../ui/Button/Button";
import field from "/images/field.jpg";

import { useRotate } from "../../../hooks/useRotate";

import styles from "./Hero.module.css";

export default function Hero() {
  const rotateRef = useRotate();

  return (
    <section className={`${styles["hero"]} fadeUp-animation`}>
      <div className={styles["hero-title-cta"]}>
        <Title size="5rem" weight={900} color="black">
          <span className={styles["hero-title"]}>
            A day of Sound, Sun,{" "}
            <span className={styles["break"]}>and Slow Living</span>
          </span>
        </Title>

        <span className={`${styles["hero-cta"]}`}>
          <a href="#booking" className={styles["hero-cta-link"]}>
            <Button type="filled" size="sm">
              Book a Mat
            </Button>
          </a>

          <a href="#organizer" className={styles["hero-cta-link"]}>
            <Button type="outline" size="sm">
              Meet The Organizer
            </Button>
          </a>
        </span>
      </div>
      <div
        className={`${styles["hero-img-card"]}`}
        style={{
          backgroundImage: `url(${field})`,
        }}
      >
        <div ref={rotateRef} className={`${styles["hero-card"]} rotate`}>
          <Title size="2rem" weight={700} color="white">
            <span className={["hero-card-text"]}>
              This is more than an Event
            </span>
          </Title>
          <p className={["hero-card-text"]}>
            It's a moment to pause, listen and simply be.
          </p>
        </div>
      </div>
    </section>
  );
}
