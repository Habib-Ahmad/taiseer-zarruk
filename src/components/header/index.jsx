import Navbar from "../navbar";
import styles from "./styles.module.scss";

const Header = () => {
  return (
    <div className={styles.container}>
      <div className={styles.headingWrapper}>
        <h1>
          We are a <span>futuristic</span> Design Agency
        </h1>

        <p>Creative / Talented / Effective</p>
      </div>
    </div>
  );
};

export default Header;
