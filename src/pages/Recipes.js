import React from "react";
import styles from "../styles/Recipes.module.css";
import { RecipesList } from "../helpers/RecipesList";
import RecipesItem from "../components/Navbar.js/RecipesItem";

function Recipes() {
  return (
    <div className={styles.background}>
      <div className={styles.recipes}>
        <h1>Recipes</h1>
        <div className={styles.recipesList}>
          {RecipesList.map((recipesItem, key) => {
            return (
              <RecipesItem
                key={key}
                link={recipesItem.link}
                page={recipesItem.page}
                image={recipesItem.image}
                name={recipesItem.name}
                time={recipesItem.time}
                calories={recipesItem.calories}
                carbs={recipesItem.carbs}
                proteins={recipesItem.proteins}
                fats={recipesItem.fats}
                // stats={recipesItem.stats.carbs}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Recipes;
