import React from "react";
import styles from "../../styles/RecipePage.module.css";
import { RecipesList } from "../../helpers/RecipesList";
import Image from "../../assets/ground-turkey-burrito-2.png";
import AuthorPfp from "../../components/AuthorPfp";

function GroundTurkeyBurrito() {
  return (
    <>
      <div
        className={styles.bannerImage}
        style={{
          backgroundImage: `url(${Image})`,
          backgroundSize: `cover`,
          backgroundPosition: `center`,
        }}
      ></div>
      <div className={styles.container}>
        <h1>Ground Turkey Burrito</h1>
        <div className={styles.creator}>
          <AuthorPfp></AuthorPfp>
        </div>
        <div className={styles.stats}>
          <p>{RecipesList[0].calories} kcal</p>
          <p>{RecipesList[0].carbs} carbs</p>
          <p>{RecipesList[0].proteins} proteins</p>
          <p>{RecipesList[0].fats} fats</p>
        </div>
        <div className={styles.grid}>
          <div className={styles.ingredients}>
            <h2>Ingredients:</h2>
            <ul>
              <li>1 pound ground turkey</li>
              <li>1 medium onion, diced</li>
              <li>2 cloves garlic, minced</li>
              <li>1 red bell pepper, diced</li>
              <li>1 tablespoon chili powder</li>
              <li>1 teaspoon cumin</li>
              <li>1 teaspoon paprika</li>
            </ul>
          </div>
          <div className={styles.directions}>
            <h2>Instructions:</h2>
            <ol>
              <li>
                Heat a large skillet over medium heat and add the ground turkey.
                Cook, breaking up the meat with a spatula, until it's browned
                and cooked through, about 7-10 minutes.
              </li>
              <br />
              <li>
                Add the diced onion, minced garlic, and diced red bell pepper to
                the skillet and cook until the vegetables are soft, about 5
                minutes.
              </li>
              <br />
              <li>
                Stir in the chili powder, cumin, paprika, salt, and pepper and
                cook for an additional minute.
              </li>
              <br />
              <li>
                Warm the flour tortillas in the microwave or in a dry skillet
                until they are pliable.
              </li>
              <br />
              <li>
                Lay the tortillas on a flat surface and sprinkle shredded cheese
                over each one. Spoon the ground turkey mixture on top of the
                cheese, leaving a border of about 1 inch around the edges.
              </li>
            </ol>
          </div>
        </div>
        <p className={styles.videoDescription}>
          Recipe from min 4.39 to min 7.18
        </p>
        <iframe
          width="1200"
          height="415"
          src="https://www.youtube.com/embed/eEBRmma-TCI"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
      </div>
    </>
  );
}

export default GroundTurkeyBurrito;
