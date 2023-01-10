import Image from "next/image";
import Link from "next/link";
import logo from "../../assets/logo.svg";
import styles from "./styles.module.scss";

const Footer = () => {
  return (
    <>
      <footer className={styles.container}>
        <Image src={logo} alt="taiseer zarruk" className={styles.logo} />

        <div className={styles.col}>
          <p className={styles.title}>Menu</p>

          <div className={styles.items}>
            {menuItems.map((item, index) => (
              <Link key={index} href={item.to}>
                {item.name}
              </Link>
            ))}
          </div>
        </div>

        <div className={`${styles.col} ${styles.follow}`}>
          <p className={styles.title}>Follow</p>

          <div className={styles.items}>
            {followItems.map((item, index) => (
              <Link key={index} href={item.to}>
                {item.name}
              </Link>
            ))}
          </div>
        </div>

        <div className={`${styles.col} ${styles.contact}`}>
          <p className={styles.title}>Contact</p>

          <div className={styles.details}>
            <Link
              className={styles.detail}
              href="https://goo.gl/maps/X3MiPf9JTB9XtsHF9"
            >
              <span>Address:</span> Elevators and Escalators Nigeria Limited
              Mabushi Abuja Nigeria.
            </Link>
            <Link className={styles.detail} href="tel:+2348064402562">
              <span>Phone:</span> +2348064402562
            </Link>
            <Link
              className={styles.detail}
              href="mailTo:info@taiseerzarrukltd.com"
            >
              <span>Email:</span> info@taiseerzarrukltd.com
            </Link>
          </div>
        </div>
      </footer>

      <p className={styles.copyright}>
        © 2022 Taiseerzarrukltd / All Rights Reserved.
      </p>
    </>
  );
};

export default Footer;

const menuItems = [
  {
    name: "Home",
    to: "/",
  },
  {
    name: "About us",
    to: "about",
  },
  {
    name: "Projects",
    to: "projects",
  },
  {
    name: "Contact us",
    to: "contact",
  },
];

const followItems = [
  {
    name: "Artstation",
    to: "#",
  },
  {
    name: "Facebook",
    to: "#",
  },
  {
    name: "Twitter",
    to: "#",
  },
  {
    name: "Dribble",
    to: "#",
  },
];
