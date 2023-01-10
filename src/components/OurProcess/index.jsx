import styles from "./styles.module.scss";

const OurProcess = () => {
  return (
    <div className={styles.container}>
      <h2>Our process</h2>
      <p className={styles.tag}>A little bit about us</p>

      <div className={styles.processes}>
        <div className={styles.process}>
          <p className={`${styles.number} ${styles.grey}`}>1</p>

          <div className={styles.step}>
            <p className={styles.title}>Idea</p>
            <p className={styles.description}>
              Lorem ipsum dolor sit amet consectetur. Sit massa arcu scelerisque
              consequat phasellus rhoncus euismod.
            </p>
          </div>
        </div>

        <div className={styles.process}>
          <p className={styles.number}>2</p>

          <div className={styles.step}>
            <p className={styles.title}>Visualization</p>
            <p className={styles.description}>
              Lorem ipsum dolor sit amet consectetur. Sit massa arcu scelerisque
              consequat phasellus rhoncus euismod.
            </p>
          </div>
        </div>

        <div className={styles.process}>
          <p className={styles.number}>3</p>

          <div className={styles.step}>
            <p className={styles.title}>Visualization</p>
            <p className={styles.description}>
              Lorem ipsum dolor sit amet consectetur. Sit massa arcu scelerisque
              consequat phasellus rhoncus euismod.
            </p>
          </div>
        </div>

        <div className={styles.process}>
          <p className={`${styles.number} ${styles.grey}`}>4</p>

          <div className={styles.step}>
            <p className={styles.title}>Visualization</p>
            <p className={styles.description}>
              Lorem ipsum dolor sit amet consectetur. Sit massa arcu scelerisque
              consequat phasellus rhoncus euismod.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurProcess;
