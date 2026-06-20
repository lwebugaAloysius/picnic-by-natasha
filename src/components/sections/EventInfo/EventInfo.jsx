import { useIsInView } from "../../../hooks/useIsInView";
import styles from "./EventInfo.module.css";
import Title from "../../ui/Title/Title";

import matFood6 from "/images/mat-food-6.jpg";

const eventData = {
  date: "4th, July, 2026",
  time: "12pm - 6pm",
  venue: "Palm Resort",
  directions: {
    venue: "Palm Resort",
    location: "Bulenga",
    mapLink:
      "https://www.google.com/maps/dir/?api=1&destination=0.3173365,32.504208",
  },
};

export default function EventInfo() {
  const [ref, isVisible] = useIsInView(0.4);

  return (
    <section
      ref={ref}
      className={`${styles["eventInfo-section"]} ${isVisible ? "fadeUp-animation" : ""}`}
      id="event-Info"
    >
      <div
        style={{ backgroundImage: `url(${matFood6})` }}
        className={styles["info-container"]}
      >
        <div className={styles["info-container-overlay"]}>
          <Title size="5rem" weight={900} color="white" lineHeight="4.5rem">
            <span className={styles["info-title"]}>
              Lay back, Listen,{" "}
              <span className={styles["break"]}>feel the Grass</span>
            </span>
          </Title>
          <div className={styles["info-cards"]}>
            <div
              className={`${styles["info-card"]} ${styles["info-card-date"]}`}
            >
              <Title size="1.5rem" weight={900} color="black">
                Date:
              </Title>
              <p className={styles["info-cards-description"]}>
                {eventData.date}
              </p>
            </div>
            <div
              className={`${styles["info-card"]} ${styles["info-card-time"]}`}
            >
              <Title size="1.5rem" weight={900} color="black">
                Time:
              </Title>
              <p className={styles["info-cards-description"]}>
                {eventData.time}
              </p>
            </div>
            <div
              className={`${styles["info-card"]} ${styles["info-card-venu"]}`}
            >
              <Title size="1.5rem" weight={900} color="black">
                Venu:
              </Title>
              <p className={styles["info-cards-description"]}>
                {eventData.directions.venue}
              </p>
            </div>
            <div
              className={`${styles["info-card"]} ${styles["info-card-location"]}`}
            >
              <Title size="1.5rem" weight={900} color="black">
                Location:
              </Title>
              <p className={styles["info-cards-description"]}>
                {eventData.directions.location}
              </p>
              <a
                href={eventData.directions.mapLink}
                target="_blank"
                className={styles["info-directions-cta"]}
              >
                Get Directions
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
