import { useState } from "react";
import Image from "next/image";
import logo from "../../assets/logo.svg";
import menu from "../../assets/menu.svg";
import styles from "./styles.module.scss";
import { SwipeableDrawer } from "@mui/material";

const links = [
  {
    name: "Home",
    to: "/",
  },
  {
    name: "About us",
    to: "/about",
  },
  {
    name: "Projects",
    to: "/projects",
  },
  {
    name: "Contact",
    to: "/contact",
  },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div className={styles.container}>
      <Image src={logo} alt="Taiseer Zarruk" className={styles.logo} />

      <nav className={styles.nav}>
        {links.map((link) => (
          <a href={link.to} key={link.name} className={styles.btn}>
            {link.name}
          </a>
        ))}
      </nav>

      <div onClick={handleOpen} className={styles.menu}>
        <Image src={menu} alt="menu" />
      </div>

      <SwipeableDrawer
        anchor="right"
        open={open}
        onClose={handleClose}
        onOpen={handleOpen}
        className={styles.drawer}
      >
        <nav className={styles.navMobile}>
          {links.map((link) => (
            <a href={link.to} key={link.name} className={styles.btn}>
              {link.name}
            </a>
          ))}
        </nav>
      </SwipeableDrawer>
    </div>
  );
};

export default Navbar;
