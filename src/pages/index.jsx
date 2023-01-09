import Header from "../components/Header";
import WhatsNext from "../components/WhatsNext";
import WhatWeDo from "../components/WhatWeDo";
import WhoWeAre from "../components/whoWeAre";
import styles from "../styles/home.module.scss";

const Home = () => {
  return (
    <div className={styles.container}>
      <Header />
      <WhoWeAre />
      <WhatWeDo />
      <WhatsNext />
    </div>
  );
};

export default Home;
