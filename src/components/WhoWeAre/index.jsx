import Image from "next/image";
import { useRouter } from "next/router";
import { useMediaQuery } from "@mui/material";
import arrow from "../../assets/arrow.svg";
import boardroom from "../../assets/boardroom.png";
import helicopter from "../../assets/helicopter.png";
import styles from "./styles.module.scss";

const WhoWeAre = () => {
  const isDesktop = useMediaQuery("(min-width:1200px)");
  const router = useRouter();
  const currentRoute = router.pathname.split("/").pop();

  const handleClick = (route) => {
    if (!isDesktop) return;

    router.push(route);
  };

  return (
    <div className={styles.container}>
      <div
        className={`${styles.about} ${!currentRoute ? styles.hover : null}`}
        onClick={() => handleClick("about")}
      >
        <div className={styles.arrow}>
          <Image src={arrow} alt="" />
        </div>
        <h2>Who we are</h2>
        <p className={styles.tag}>A little bit about us</p>
        <p className={styles.text}>
          Lorem ipsum dolor sit amet consectetur. Sit massa arcu scelerisque
          consequat phasellus rhoncus euismod. Maecenas diam leo cum
          ullamcorper. Odio porttitor sit aliquam ultricies senectus
          pellentesque enim vestibulum. Id vulputate neque ultrices nisl
          facilisis.
        </p>
      </div>

      <div
        className={`${styles.projects} ${!currentRoute ? styles.hover : null}`}
        onClick={() => handleClick("projects")}
      >
        <Image
          src={currentRoute === "about" ? boardroom : helicopter}
          alt=""
          className={
            currentRoute === "about" ? styles.boardroom : styles.helicopter
          }
        />

        {currentRoute === "" && (
          <div className={styles.overlay}>
            <div className={styles.textWrapper}>
              <h2>Our projects</h2>
              <p>Explore all our projects</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default WhoWeAre;
