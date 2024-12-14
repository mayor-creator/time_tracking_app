import { Information } from "./Information.jsx";
import ellipsisImage from "../assets/images/icon-ellipsis.svg";
import styles from "./Card.module.css";

export function Card({ data }) {
  const weeklyData = data.timeframes.weekly;

  const changeBackGround = (title) => {
    switch (title) {
      case "Work":
        return styles.work;
      case "Play":
        return styles.play;
      case "Study":
        return styles.study;
      case "Exercise":
        return styles.exercise;
      case "Social":
        return styles.social;
      case "Self Care":
        return styles.self_care;
      default:
        return "";
    }
  };

  return (
    <>
      <div>
        <div
          className={`${styles.card_container} ${changeBackGround(data.title)}`}
        >
          <div className={styles.title_container}>
            <p className={styles.title}>{data.title}</p>
            <img src={ellipsisImage} alt="ellipsis icon" />
          </div>
          <Information infoData={weeklyData} />
        </div>
      </div>
    </>
  );
}

Card.propTypes;
