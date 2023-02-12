import React from "react";
import s from "../styles/About.module.css";
import PepeLift from "../assets/pepeLift.png";

function About() {
  return (
    <div className={s.aboutContainer}>
      <h1>About us</h1>
      <p>
        Welcome to Gym Gourmet, your source for the best and tastiest recipes
        from top gym influencers. We believe that eating healthy and staying fit
        go hand in hand, and our goal is to make it easy and delicious for you
        to achieve your fitness goals.
      </p>
      <p>
        Our team has scoured the fitness community to bring you the most
        nutritious and delicious recipes from influencers who understand the
        importance of fueling your body with the right ingredients. From
        high-protein breakfasts to post-workout snacks, we've got you covered.
      </p>
      <p>
        We know that everyone's needs and preferences are unique, which is why
        we've curated a collection of recipes that cater to different dietary
        restrictions and preferences. Whether you're vegan, gluten-free, or just
        looking for low-carb options, we have something for everyone.
      </p>
      <p>
        Thank you for choosing Gym Gourmet as your go-to source for healthy and
        delicious recipes. Get ready to cook and eat your way to a healthier and
        happier you!
      </p>
      <img src={PepeLift} alt="" />
    </div>
  );
}

export default About;
