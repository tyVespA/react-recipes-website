import React, { useState } from "react";
import Logo from "../assets/logo.png";
import { Link } from "react-router-dom";
import styles from "../styles/Navbar.module.css";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import GigaPepe from "../assets/gigapepe.png";
import CloseIcon from "@mui/icons-material/Close";

function Navbar() {
  const [openLinks, setOpenLinks] = useState(false);

  const toggleNavbar = () => {
    setOpenLinks(!openLinks);
  };

  return (
    <div className={styles.navbar}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <Link to="/react-recipes-website-test/">
            <img src={GigaPepe} alt="logo" />
          </Link>
        </div>

        <div
          className={styles.links}
          id={openLinks ? styles.open : styles.close}
        >
          <Link to="/react-recipes-website-test/" onClick={toggleNavbar}>
            Home
          </Link>
          <Link to="/react-recipes-website-test/recipes" onClick={toggleNavbar}>
            Recipes
          </Link>
          <Link to="/react-recipes-website-test/about" onClick={toggleNavbar}>
            About
          </Link>
          <div className={styles.closeMenuBtn}>
            <button onClick={toggleNavbar}>
              <CloseIcon style={{ color: `#f8f9fa` }} />
            </button>
          </div>
        </div>

        <div className={styles.searchBtn}>
          <button onClick={() => window.alert("lol")}>
            <SearchIcon />
          </button>
        </div>

        <div className={styles.menuBtn}>
          <button onClick={toggleNavbar}>
            <MenuIcon style={{ color: `#f8f9fa` }} />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
