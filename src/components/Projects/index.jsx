import Image from "next/image";
import img from "../../assets/project.png";
import styles from "./styles.module.scss";

const Projects = () => {
  return (
    <div className={styles.container}>
      <h2>Our projects</h2>

      <p className={styles.desc}>
        Lorem ipsum dolor sit amet consectetur. Sit massa arcu scelerisque
        consequat phasellus rhoncus euismod. Maecenas diam leo cum ullamcorper.
        Odio porttitor sit aliquam ultricies senectus pellentesque enim
        vestibulum. Id vulputate neque ultrices nisl facilisis.
      </p>

      <div className={styles.projects}>
        {new Array(12).fill("").map((item, index) => (
          <div key={index} className={styles.project}>
            <p className={styles.tag}>Concept</p>
            <Image src={img} alt="" />

            <p className={styles.title}>Whift Travel</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
