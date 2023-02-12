import React from "react";
import styles from "../styles/RecipeStats.module.css";
import LocalFireDepartmentOutlinedIcon from "@mui/icons-material/LocalFireDepartmentOutlined";
import OpacityIcon from "@mui/icons-material/Opacity";
import FitnessCenterIcon from "@mui/icons-material/FitnessCenter";
import RamenDiningIcon from "@mui/icons-material/RamenDining";

function RecipeStats({ calories, carbs, proteins, fats }) {
  return (
    <div className={styles.statsContainer}>
      <div className={styles.calories}>
        <LocalFireDepartmentOutlinedIcon
          fontSize="medium"
          className={styles.statsIcon}
        />
        <p>{calories} Kcal</p>
      </div>
      <div className={styles.carbs}>
        <RamenDiningIcon fontSize="medium" className={styles.statsIcon} />
        <p>{carbs} carbs</p>
      </div>

      <div className={`${styles.proteins}`}>
        <FitnessCenterIcon fontSize="medium" className={styles.statsIcon} />
        <p>{proteins} proteins</p>
      </div>
      <div className={styles.fats}>
        <OpacityIcon fontSize="medium" className={styles.statsIcon} />
        <p>{fats} fats</p>
      </div>
    </div>
  );
}

export default RecipeStats;
