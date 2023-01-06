import Header from "../components/header";
import WhatWeDo from "../components/WhatWeDo";
import WhoWeAre from "../components/whoWeAre";
import styles from "../styles/home.module.scss";

const Home = () => {
  return (
    <div className={styles.container}>
      <Header />
      <WhoWeAre />
      <WhatWeDo />
    </div>
  );
};

export default Home;
