import { Button } from "@mui/material";
import styles from "./styles.module.scss";

const WhatsNext = () => {
  return (
    <div className={styles.container}>
      <div className={styles.heading}>
        <h2>What's Next?</h2>
        <p>Interested in working with us?</p>
      </div>

      <div className={styles.btnWrapper}>
        <p>
          A Mini wireless sound systems concept product; Portable speakers for
          mobile and home usage, a unique design of different emoji smiles and
          color expressions, Possible to connect multiple speakers via its
          wireless NoiseConnector feature, for stereo left and right full
          experience, even expandable to max of 12 speakers as mini home
          theaters.
        </p>

        <Button variant="contained" size="large">
          Lets work together
        </Button>
      </div>
    </div>
  );
};

export default WhatsNext;
