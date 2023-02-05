import React, { useState } from "react";
import Logo from "../../assets/logo.png";
import { Link } from "react-router-dom";
import styles from "../../styles/Navbar.module.css";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";

function Navbar() {
  const [openLinks, setOpenLinks] = useState(true);

  const toggleNavbar = () => {
    // set to hide/show only the logo for testing purposes
    setOpenLinks(!openLinks);
  };

  return (
    <div className={styles.navbar}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <Link to="/react-recipes-website-test/">
            <img
              src={Logo}
              alt="logo"
              id={openLinks ? styles.open : styles.close}
            />
          </Link>
        </div>
        <div className={styles.links}>
          <Link to="/react-recipes-website-test/">Home</Link>
          <Link to="/react-recipes-website-test/recipes">Recipes</Link>
          <Link to="/react-recipes-website-test/about">About</Link>
        </div>
        <div className={styles.searchBtn}>
          <button onClick={toggleNavbar}>
            <SearchIcon />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
