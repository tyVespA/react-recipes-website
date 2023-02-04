import React from "react";
import styles from "../styles/Recipes.module.css";
import { RecipesList } from "../helpers/RecipesList";
import RecipesItem from "../components/Navbar.js/RecipesItem";

function Recipes() {
  return (
    <div className={styles.recipes}>
      <h1 className={styles.recipesTitle}>Recipes</h1>
      <div className={styles.recipesList}>
        {RecipesList.map((recipesItem, key) => {
          return (
            <RecipesItem
              key={key}
              image={recipesItem.image}
              name={recipesItem.name}
              price={recipesItem.price}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Recipes;
