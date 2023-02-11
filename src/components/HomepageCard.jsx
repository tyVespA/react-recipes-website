import React from "react";
import s from "../styles/HomepageCard.module.css";

function HomepageCard({ children, image, brightnessValue }) {
  return (
    <div className={s.card}>
      <div>
        <img
          src={image}
          alt=""
          style={{ filter: `brightness(${brightnessValue})` }}
        />
      </div>
      <p>{children}</p>
    </div>
  );
}

export default HomepageCard;
