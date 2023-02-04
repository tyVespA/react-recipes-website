import React, { useState } from "react";
import Logo from "../../assets/logo.png";
import { Link } from "react-router-dom";
import styles from "../../styles/Navbar.module.css";
import MenuIcon from "@mui/icons-material/Menu";

function Navbar() {
  const [openLinks, setOpenLinks] = useState(true);

  const toggleNavbar = () => {
    // set to hide/show only the logo for testing purposes
    setOpenLinks(!openLinks);
  };

  return (
    <div className={styles.navbar}>
      <div className={styles.container}>
        <div className={styles.leftSide}>
          <Link to="/react-recipes-website-test">
            <img
              src={Logo}
              alt="logo"
              id={openLinks ? styles.open : styles.close}
            />
          </Link>
          <Link to="/react-recipes-website-test">Home</Link>
          <Link to="/react-recipes-website-test/recipes">Recipes</Link>
        </div>
        <div className={styles.rightSide}>
          <Link to="/react-recipes-website-test/about">About</Link>
          <Link to="/react-recipes-website-test/code">Code</Link>
          <button className="nav-btn" onClick={toggleNavbar}>
            <MenuIcon style={{ color: "white" }} />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
