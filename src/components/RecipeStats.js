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
          fontSize="small"
          className={styles.statsIcon}
        />
        <p>
          {calories} <br /> Kcal
        </p>
      </div>
      <div className={styles.carbs}>
        <RamenDiningIcon fontSize="small" className={styles.statsIcon} />
        <p>
          {carbs} <br /> carbs
        </p>
      </div>

      <div className={styles.proteins}>
        <FitnessCenterIcon fontSize="small" className={styles.statsIcon} />
        <p>
          {proteins} <br /> proteins
        </p>
      </div>
      <div className={styles.fats}>
        <OpacityIcon fontSize="small" className={styles.statsIcon} />
        <p>
          {fats} <br /> fats
        </p>
      </div>
    </div>
  );
}

export default RecipeStats;
