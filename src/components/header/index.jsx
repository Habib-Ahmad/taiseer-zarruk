import Navbar from "../navbar";
import styles from "./styles.module.scss";

const Header = () => {
  return (
    <header className={styles.container}>
      <div className={styles.headingWrapper}>
        <h1>
          We are a <span>futuristic</span> Design Agency
        </h1>

        <p>Creative / Talented / Effective</p>
      </div>
    </header>
  );
};

export default Header;
