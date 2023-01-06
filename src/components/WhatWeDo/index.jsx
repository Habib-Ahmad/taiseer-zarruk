import Image from "next/image";
import cuboid from "../../assets/cuboid.svg";
import styles from "./styles.module.scss";

const WhatWeDo = () => {
  return (
    <div className={styles.container}>
      <div className={styles.heading}>
        <h2>What we do</h2>
        <p className={styles.tag}>A little bit about us</p>
      </div>

      <div className={styles.services}>
        {services.map((service, index) => (
          <div key={index} className={styles.imgWrapper}>
            <Image src={cuboid} alt="" />

            <div className={styles.service}>
              <p className={styles.title}>{service.title}</p>
              <ul>
                {service.bullets.map((bullet, idx) => (
                  <li key={idx}>{bullet}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhatWeDo;

const services = [
  {
    title: "Product Design / Development",
    bullets: [
      "Consultation / Research",
      "Industrial design / Manufacturing Design",
      "Building physical product prototypes (MVP)",
      "Developing our own products",
      "Hardware and Software procurement",
    ],
  },
  {
    title: "Type of projects",
    bullets: [
      " Consumer Products and Accessories",
      "Automotive ",
      "Furniture",
      "Machine Parts",
      "Buildings",
    ],
  },
  {
    title: "3D Visualization and Animation",
    bullets: [
      "Concept designs",
      "Virtual Reality Experience for products",
      "Augmented Reality Contents for products",
      "Interactive Web contents for products",
      "Product Reviews and Adverts",
      "3D Architectural animations ",
      "Motion Graphics and Ads",
      "App Animation",
    ],
  },
  {
    title: "Graphics design and Branding",
    bullets: [
      "Company branding",
      "Company Profiles",
      "Graphic designs ( prints )",
      "Product naming and Narratives",
    ],
  },
  {
    title: "Software & Web contents",
    bullets: ["Software Prototypes", "App design", "Websites design"],
  },
];
