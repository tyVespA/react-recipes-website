// rfce

import React from "react";
import styles from "../styles/Home.module.css";
import BannerImage from "../assets/KFrHLHp3irivMjgF8eHa6GZpdK-c7KZuzR2lnp7Q2A8-1.jpg";

function Home() {
  return (
    <div
      className={styles.gradient}
      style={{
        backgroundImage: `url(${BannerImage})`,
        backgroundRepeat: `no-repeat`,
        backgroundSize: `cover`,
      }}
    >
      <div className={styles.container}>
        <div className={styles.leftSide}></div>
        <div className={styles.rightSide}>
          <h1>Chris' recipes</h1>
          <p>
            Our goal is to provide nutritious and tasty food recipes to support
            your muscle-building journey. From high-protein breakfasts to
            post-workout snacks, we offer a variety of recipes for all levels
            and dietary needs, with detailed nutritional information.
            <br />
            Join us and start cooking delicious, muscle-fueling meals today!
          </p>
          <button className={styles.ctaBtn}>Start Cooking</button>
        </div>
      </div>
    </div>
  );
}

export default Home;
