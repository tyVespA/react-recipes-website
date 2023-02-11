import React from "react";
import s from "../styles/Home.module.css";
import PeaceImg from "../assets/erobb-peace.gif";
import GigaPepe from "../assets/gigapepe.png";
import { Link } from "react-router-dom";
import LatestRecipe from "../assets/ground-turkey-burrito-home.jpg";

function Home() {
  return (
    <div className={s.hero}>
      <div className={s.heroOne}>
        <h1>Gym Gourmet</h1>
        <img src={GigaPepe} alt="" />
        {/* <img src={PeaceImg} alt="" style={{ width: `100%` }} /> */}
        <p>
          Get inspired to cook and workout with our collection of influencer
          approved recipes.
        </p>
        <p>
          Our team has scoured the fitness community to bring you the best and
          tastiest recipes from top fitness influencers.
        </p>
        <p className={s.lastP}>
          Whether you're a seasoned fitness enthusiast or just starting out, our
          website is your go-to source for nutritious, delicious, and easy to
          follow recipes that will help you reach your fitness goals.
        </p>

        <Link to="/react-recipes-website-test/recipes" className={s.ctaBtn}>
          Browse our recipes
        </Link>
      </div>
      <div className={s.heroTwo}>
        <div className={`${s.card} ${s.cardOne}`}>
          <Link to="/react-recipes-website-test/about">
            <p>Learn about our philosophy</p>
            <img src={PeaceImg} alt="" />
          </Link>
        </div>
        <div className={`${s.card} ${s.cardTwo}`}>
          <Link to="/react-recipes-website-test/recipes/ground-turkey-burrito">
            <p>Try the latest recipe</p>
            <img src={LatestRecipe} alt="" />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Home;
