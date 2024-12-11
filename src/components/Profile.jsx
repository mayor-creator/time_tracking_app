import { Button } from "./Button.jsx";
import profileImage from "../assets/images/image-jeremy.png";
import styles from "../components/Profile.module.css";

export function Profile() {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.profile_container}>
          <img
            className={styles.profile_image}
            src={profileImage}
            alt="a person listening to music"
            height={64}
            width={64}
          />
          <div>
            <p className={styles.profile_report}>
              Report for{" "}
              <span className={styles.profile_name}>Jeremy Robson</span>
            </p>
          </div>
        </div>
        <div className={styles.profile_report_container}>
          <Button style={styles.profile_buttons}>Daily</Button>
          <Button style={styles.profile_buttons}>Weekly</Button>
          <Button style={styles.profile_buttons}>Monthly</Button>
        </div>
      </div>
    </>
  );
}
