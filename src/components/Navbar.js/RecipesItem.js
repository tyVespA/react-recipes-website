import React from "react";
import styles from "../../styles/RecipesItem.module.css";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import LocalFireDepartmentOutlinedIcon from "@mui/icons-material/LocalFireDepartmentOutlined";
import OpacityIcon from "@mui/icons-material/Opacity";
import FitnessCenterIcon from "@mui/icons-material/FitnessCenter";
import RamenDiningIcon from "@mui/icons-material/RamenDining";

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
          <div className={styles.statsLeftSide}>
            <div className={styles.statsIcon}>
              <LocalFireDepartmentOutlinedIcon fontSize="small" />
            </div>
            <p>{calories}</p>
          </div>
          <div className={styles.statsRightSide}>
            <div className={styles.statsIcon}>
              <RamenDiningIcon fontSize="small" />
            </div>
            <p>{carbs}</p>
          </div>
          <div className={styles.statsLeftSide}>
            <div className={styles.statsIcon}>
              <FitnessCenterIcon fontSize="small" />
            </div>
            <p>{proteins}</p>
          </div>
          <div className={styles.statsRightSide}>
            <div className={styles.statsIcon}>
              <OpacityIcon fontSize="small" />
            </div>
            <p>{fats}</p>
          </div>
          {/* <p>{stats.carbs}</p> */}
          {/* how to add object? */}
        </div>
      </div>
    </div>
  );
}

export default RecipesItem;