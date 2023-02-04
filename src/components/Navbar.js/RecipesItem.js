import React from "react";
import styles from "../../styles/RecipesItem.module.css";
import AccessTimeIcon from "@mui/icons-material/AccessTime";

function RecipesItem({
  image,
  name,
  time,
  calories,
  carbs,
  proteins,
  fats,
  stats,
}) {
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
      <div className={styles.text}>
        <div className={styles.title}>
          <h2>{name}</h2>
          <div className={styles.time}>
            <AccessTimeIcon fontSize="small" />

            <p>{time}</p>
          </div>
        </div>
        <div className={styles.stats}>
          <p>{calories}</p>
          <p>{carbs}</p>
          <p>{proteins}</p>
          <p>{fats}</p>
          {/* <p>{stats.carbs}</p> */}
          {/* how to add object? */}
        </div>
      </div>
    </div>
  );
}

export default RecipesItem;
