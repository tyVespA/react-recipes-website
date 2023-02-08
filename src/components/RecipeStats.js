import React from "react";
import styles from "../styles/RecipeStats.module.css";
import LocalFireDepartmentOutlinedIcon from "@mui/icons-material/LocalFireDepartmentOutlined";
import OpacityIcon from "@mui/icons-material/Opacity";
import FitnessCenterIcon from "@mui/icons-material/FitnessCenter";
import RamenDiningIcon from "@mui/icons-material/RamenDining";

function RecipeStats({ calories, carbs, proteins, fats }) {
  return (
    <div className={styles.statsContainer}>
      <LocalFireDepartmentOutlinedIcon fontSize="small" />
      <p>{calories} Kcal</p>
      <RamenDiningIcon fontSize="small" />
      <p>
        {carbs}
        carbs
      </p>
      <FitnessCenterIcon fontSize="small" />
      <p>
        {proteins}
        proteins
      </p>
      <OpacityIcon fontSize="small" />
      <p>
        {fats}
        fats
      </p>
    </div>
  );
}

export default RecipeStats;
