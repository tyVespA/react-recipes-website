import React from "react";
import styles from "../../styles/RecipesItem.module.css";

function RecipesItem({ image, name, price }) {
  return (
    <div className={styles.recipeItem}>
      <div
        className={styles.image}
        style={{
          backgroundImage: `url(${image})`,
          backgroundRepeat: `no-repeat`,
          backgroundSize: `cover`,
        }}
      ></div>
      <h1>{name}</h1>
      <p>{price}</p>
    </div>
  );
}

export default RecipesItem;
