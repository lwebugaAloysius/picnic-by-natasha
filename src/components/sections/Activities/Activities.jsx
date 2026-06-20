import { useState, useRef } from "react";
import { useIsInView } from "../../../hooks/useIsInView";

import painting3 from "/images/event-painting-3.jpg";
import food7 from "/images/mat-food-7.jpg";
import friendsMat from "/images/friends-mat.jpg";
import coupleMoment from "/images/couple-moment-1.jpg";
import cards1 from "/images/event-cards-1.jpg";
import blocks2 from "/images/event-blocks-2.jpg";

import Title from "../../ui/Title/Title";
import Button from "../../ui/Button/Button";
import ActivitiesCard from "../../cards/Activities_Card/ActivitesCard";

import styles from "./Activities.module.css";

const activitiesData = [
  {
    id: 1,
    title: "Painting",
    discription:
      "Unwind with a brush in hand and let your creativity shine in a relaxed outdoor setting",
    backgroundImgSrc: painting3,
    bgColor: "#d88d3a",
    isHidden: false,
    status: "shown",
  },

  {
    id: 2,
    title: "Tasty Treats",
    discription:
      "Enjoy a selection of delicious snacks, sweet treats, and refreshing drinks throughout the day.",
    backgroundImgSrc: food7,
    bgColor: "#527634",
    isHidden: false,
    status: "shown",
  },
  {
    id: 3,
    title: "Friendly Connection",
    discription:
      "Enjoy a selection of delicious snacks, sweet treats, and refreshing drinks throughout the day.",
    backgroundImgSrc: friendsMat,
    bgColor: "#cd415f",
    isHidden: false,
    status: "shown",
  },
  {
    id: 4,
    title: "Couple Moments",
    discription:
      "Take a break from the bustle and enjoy meaningful conversations, laughter, and quiet moments together in a beautiful outdoor setting.",
    backgroundImgSrc: coupleMoment,
    bgColor: "#cd415f",
    isHidden: true,
    status: "hidden",
  },
  {
    id: 5,
    title: "Card Games",
    discription:
      "Bring your competitive spirit and enjoy a variety of fun card games, from casual favorites to exciting group challenges.",
    backgroundImgSrc: cards1,
    bgColor: "#d88d3a",
    isHidden: true,
    status: "hidden",
  },

  {
    id: 6,
    title: "Jumble Blocks",
    discription:
      "Test your focus and steady hands as you stack, balance, and remove blocks in this classic game full of suspense and laughter.",
    backgroundImgSrc: blocks2,
    bgColor: "#527634",
    isHidden: true,
    status: "hidden",
  },
];

export default function Activities() {
  const [activities, setActivities] = useState(activitiesData);
  const [allShown, setAllShown] = useState(false);
  const [ref, isVisible] = useIsInView(0.4);

  function toggleAll() {
    setActivities((prev) => {
      return prev.map((activity) => {
        if (activity.isHidden === false) {
          return activity;
        } else {
          return {
            ...activity,
            status: activity.status === "hidden" ? "shown" : "hidden",
          };
        }
      });
    });
    setAllShown((prev) => !prev);
  }

  return (
    <section
      ref={ref}
      className={`${styles["activities-section"]} ${isVisible ? "fadeUp-animation" : ""}`}
      id="activities"
    >
      <div className={styles["activities-title-text"]}>
        <Title color="black" size="4.5rem" weight={900} lineHeight="4rem">
          What To Expect
        </Title>
        <p className={styles["activities-text"]}>
          More than just a picnic, this is a chance to slow down, connect, and
          celebrate life's simple pleasures.Expect music, games, delicious food,
          meaningful conversations, and a welcoming atmosphere where everyone
          can feel at home.
        </p>
      </div>
      <div className={styles["activities-cards"]}>
        {activities.map((activity) => {
          if (activity.status === "shown") {
            return (
              <ActivitiesCard
                key={activity.id}
                imgSrc={activity.backgroundImgSrc}
              >
                <Title color="white" size="3rem" weight={600} lineHeight="3rem">
                  {activity.title}
                </Title>
                <div
                  style={{
                    backgroundColor: `${activity.bgColor}`,
                  }}
                  className={`
              ${styles["activities-card-text-box"]}
               ${styles["activities-card-1-text-box"]}
            `}
                >
                  <p>{activity.discription}</p>
                </div>
              </ActivitiesCard>
            );
          }
        })}
      </div>
      <div className={styles["activities-view-all-cta"]}>
        <Button type="filled" size="sm" action={toggleAll}>
          {allShown ? "View Less Activities" : "View All Activities"}
        </Button>
      </div>
    </section>
  );
}
