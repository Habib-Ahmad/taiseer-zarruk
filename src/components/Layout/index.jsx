import Navbar from "../navbar";
import styles from "./styles.module.scss";

const Layout = ({ children }) => {
  return (
    <div className={styles.container}>
      <Navbar />
      {children}
    </div>
  );
};

export default Layout;
