import { useIsInView } from "../../../hooks/useIsInView";
import HoverCard from "../../cards/Hover_Card/HoverCard";
import styles from "./Organizer.module.css";
import Title from "../../ui/Title/Title";

import passy1 from "/images/passy-1.jpg";
import passy2 from "/images/passy-2.jpg";
import passy3 from "/images/passy-3.jpg";

export default function Organizer() {
  const [ref, isVisible] = useIsInView(0.4);

  return (
    <section
      ref={ref}
      className={`${styles["organizer-section"]} ${isVisible ? "fadeUp-animation" : ""}`}
      id="organizer"
    >
      <Title size="5rem" weight={900} color="black" lineHeight="4.5rem">
        <span className={styles["info-title"]}>
          Meet <span className={styles["break"]}>Natasha</span>
        </span>
      </Title>
      <div className={styles["organizer-info-cards"]}>
        <div
          className={`${styles["hover-card-box"]} ${styles["hover-card-box-1"]}`}
        >
          <HoverCard bgImgSrc={passy1}>
            <Title size="1.5rem" color="white" weight={900} lineHeight="1.8rem">
              Natasha has always believed that life's best moments are shared
              with others. Whether through meaningful conversations, laughter,
              or simple time spent outdoors, creating opportunities for people
              to connect has become something they genuinely enjoy. This picnic
              is a reflection of that passion for community and togetherness.
            </Title>
          </HoverCard>
        </div>
        <div
          className={`${styles["hover-card-box"]} ${styles["hover-card-box-2"]}`}
        >
          <p>
            In a world that often feels busy and rushed, the idea behind this
            picnic was to create a space where people could slow down and
            appreciate the little things. Good food, fresh air, fun activities,
            and genuine connections are at the heart of the experience, offering
            guests a chance to step away from their routines and simply enjoy
            the moment.
          </p>
        </div>
        <div
          className={`${styles["hover-card-box"]} ${styles["hover-card-box-3"]}`}
        >
          <HoverCard bgImgSrc={passy2}>
            <Title size="2rem" color="white" lineHeight="1.8rem" weight={800}>
              Inspired by Simple Moments
            </Title>
            <p className={styles["organizer-info-card-text"]}>
              This picnic was created as a chance to slow down, enjoy the
              outdoors, and appreciate life's simple joys through food, fun, and
              meaningful connections
            </p>
          </HoverCard>
        </div>
        <div
          className={`${styles["hover-card-box"]} ${styles["hover-card-box-4"]}`}
        >
          <HoverCard bgImgSrc={passy3}>
            <Title size="2rem" color="white" lineHeight="1.8rem" weight={800}>
              More Than Just a Day Out
            </Title>
            <p className={styles["organizer-info-card-text"]}>
              The goal is to create a welcoming space where people can make
              memories, build friendships, and leave with a smile long after the
              event ends.
            </p>
          </HoverCard>
        </div>
      </div>
    </section>
  );
}
