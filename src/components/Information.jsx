import styles from "../components/Information.module.css";

export function Information({ infoData }) {
  return (
    <>
      <div className={styles.info_container}>
        <p className={styles.info_text}>{`${infoData.current}hrs`}</p>
        <p
          className={styles.previous_info_text}
        >{`Last Week - ${infoData.previous}hrs`}</p>
      </div>
    </>
  );
}

Information.propTypes;
