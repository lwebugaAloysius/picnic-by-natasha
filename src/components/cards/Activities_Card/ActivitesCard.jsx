import Title from "../../ui/Title/Title";

import styles from "./ActivitiesCard.module.css";

export default function ActivitiesCard({ children, imgSrc }) {
  return (
    <div
      style={{
        backgroundImage: `url(${imgSrc})`,
      }}
      className={styles["card"]}
    >
      <div className={`${styles["card-overlay"]}`}>{children}</div>
    </div>
  );
}

// {/* <Title color="white" size="3rem" weight={600}>
//         <span
//           style={{
//             width: "10px",
//             color: "red",
//           }}
//         >
//           {" "}
//           {title}
//         </span>
//       </Title>
//       <div>
//         <p>{discription}</p>
//       </div> */}
