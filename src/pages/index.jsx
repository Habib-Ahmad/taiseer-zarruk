import Header from "../components/header";
import WhoWeAre from "../components/whoWeAre";
import styles from "../styles/home.module.scss";

const Home = () => {
  return (
    <div className={styles.container}>
      <Header />
      <WhoWeAre />
    </div>
  );
};

export default Home;
