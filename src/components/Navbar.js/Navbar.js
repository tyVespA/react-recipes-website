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
          <Link to="/">
            <img
              src={Logo}
              alt="logo"
              id={openLinks ? styles.open : styles.close}
            />
          </Link>
          <Link to="/">Home</Link>
          <Link to="/recipes">Recipes</Link>
        </div>
        <div className={styles.rightSide}>
          <Link to="/about">About</Link>
          <Link to="/code">Code</Link>
          <button className="nav-btn" onClick={toggleNavbar}>
            <MenuIcon style={{ color: "white" }} />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
