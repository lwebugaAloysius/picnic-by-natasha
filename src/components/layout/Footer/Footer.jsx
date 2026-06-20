import Title from "../../ui/Title/Title";
import { useIsInView } from "../../../hooks/useIsInView";

import styles from "./Footer.module.css";

const navList = [
  {
    label: "About",
    link: "#about",
  },
  {
    label: "Activities",
    link: "#activities",
  },
  {
    label: "Event Info",
    link: "#event-Info",
  },
  {
    label: "Organizer",
    link: "#organizer",
  },
  {
    label: "Booking",
    link: "#booking",
  },
];

const socialsList = [
  {
    label: "TikTok",
    link: "#",
  },
  {
    label: "Instagram",
    link: "https://www.instagram.com/natashagatsinzi?igsh=bmhyenE5aWJIcGZs",
  },
  {
    label: "WhatsApp",
    link: "https://wa.me/256751554508",
  },
];

export default function Footer() {
  const [ref, isVisible] = useIsInView(0.4);
  return (
    <footer
      ref={ref}
      className={`${styles["footer-section"]} ${isVisible ? "fadeUp-animation" : ""}`}
    >
      <div className={`${styles["footer-content"]} wrapper`}>
        <div className={styles["logo-links-container"]}>
          <div className={styles["footer-logo-text"]}>
            <a href="#" className={styles["footer-logo"]}>
              Picnic by <span className={styles["break"]}>Natasha</span>
            </a>
            <p>
              This is an event that you don't want to miss. Come for some chill
              from the hustle of everyday life.
            </p>
          </div>
          <div className={styles["quick-links"]}>
            <Title color="black" weight={900} size="1.2rem">
              NAVIGATE
            </Title>
            <ul className={styles["footer-nav-list"]}>
              {navList.map((navItem, index) => (
                <li key={index} className={styles["footer-link-item"]}>
                  <a href={navItem.link} className={styles["footer-nav-link"]}>
                    {navItem.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className={styles["socials-links"]}>
            <Title color="black" weight={900} size="1.2rem">
              FOLLOW NATASHA
            </Title>
            <ul className={styles["footer-nav-list"]}>
              {socialsList.map((navItem, index) => (
                <li key={index} className={styles["footer-link-item"]}>
                  <a href={navItem.link} className={styles["footer-nav-link"]}>
                    {navItem.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="copy-right-author">
          <p className={styles["footer-copyright"]}>
            © {new Date().getFullYear()} Picnic by Natasha —{" "}
            <span className={styles["footer-copyright-country"]}>Uganda</span>.
            All rights reserved.
          </p>
          <p className={styles["footer-author"]}>
            Created by{" "}
            <a
              href="https://wa.me/256702160372"
              className={styles["footer-author-name"]}
            >
              Lwebuga Aloyzious
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
