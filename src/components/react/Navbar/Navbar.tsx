import { useState } from "react";
import styles from "./Navbar.module.css";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className={styles.header}>
      <pre>
        <a>
          {"<"}samueldsr{" />"}
        </a>
      </pre>
      <nav className={styles.navDesktop}>
        <a href="#">Home</a>
        <a href="#showcase">Showcase</a>
        <a href="#experience">Experience</a>
      </nav>
    </header>
  );
};

export default Navbar;
