import { useState } from "react";

import humbergerIcon from "/images/icon-hamburger.svg";
import closeIcon from "/images/icon-close.svg";

import Button from "../../ui/Button/Button";

import styles from "./Navbar.module.css";
import { CSSConstants } from "pdfjs-dist";

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

export default function Navbar() {
  const [isVisible, setIsVisible] = useState(false);

  function toggleHiddenNav() {
    setIsVisible((prev) => !prev);
  }

  return (
    <section className="wrapper ">
      <header className={`${styles["header"]} fadeIn`}>
        <div className={styles["header-logo-btn"]}>
          <a href="#" className={styles["header-logo"]}>
            Picnic by <span className={styles["break"]}>Natasha</span>
          </a>

          <button
            className={styles["nav-control-btn"]}
            onClick={toggleHiddenNav}
          >
            <img
              src={isVisible ? closeIcon : humbergerIcon}
              alt={isVisible ? "menu close icon" : "menu humberger icon"}
            />
          </button>
        </div>
        <nav
          className={`${styles["header-nav"]} ${isVisible ? styles["is-visible"] : ""}`}
        >
          <ul className={styles["header-nav-list"]}>
            {navList.map((navItem, index) => (
              <li key={index} className={styles["nav-link-item"]}>
                <a href={navItem.link} className={styles["nav-link"]}>
                  {navItem.label}
                </a>
              </li>
            ))}
          </ul>

          <a href="#booking" className={styles["nav-booking-cta-link"]}>
            <Button type="outline" size="sm">
              Join Picnic
            </Button>
          </a>
        </nav>
      </header>
    </section>
  );
}
