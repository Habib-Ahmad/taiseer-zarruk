import Header from "../components/Header";
import Projects from "../components/Projects";
import WhatsNext from "../components/WhatsNext";
import WhatWeDo from "../components/WhatWeDo";
import WhoWeAre from "../components/whoWeAre";

const Home = () => {
  return (
    <>
      <Header />
      <WhoWeAre />
      <WhatWeDo />
      <Projects />
      <WhatsNext />
    </>
  );
};

export default Home;
