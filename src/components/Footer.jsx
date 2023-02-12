import React from "react";
import styles from "../styles/Footer.module.css";
import GitHubIcon from "@mui/icons-material/GitHub";

function Footer() {
  return (
    <div className={styles.footer}>
      <p>
        Made by{" "}
        <a href="https://github.com/tyVespA" target="_blank" rel="noreferrer">
          TyVespA{" "}
        </a>
        <div className={styles.githubLogo}>
          <a href="https://github.com/tyVespA" target="_blank" rel="noreferrer">
            <GitHubIcon />
          </a>
        </div>
      </p>
    </div>
  );
}

export default Footer;
