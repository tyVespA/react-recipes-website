import React from "react";
import styles from "../styles/Footer.module.css";
import GitHubIcon from "@mui/icons-material/GitHub";

function Footer() {
  return (
    <div className={styles.footer}>
      <p>
        Made for fun by{" "}
        <a href="https://github.com/tyVespA" target="_blank" rel="noreferrer">
          TyVespA{" "}
        </a>
        <a href="https://github.com/tyVespA" target="_blank" rel="noreferrer">
          <GitHubIcon style={{ color: "white" }} />
        </a>
      </p>
    </div>
  );
}

export default Footer;
