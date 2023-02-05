import React from "react";
import { Link } from "react-router-dom";
import styles from "../../styles/RecipesItem.module.css";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import LocalFireDepartmentOutlinedIcon from "@mui/icons-material/LocalFireDepartmentOutlined";
import OpacityIcon from "@mui/icons-material/Opacity";
import FitnessCenterIcon from "@mui/icons-material/FitnessCenter";
import RamenDiningIcon from "@mui/icons-material/RamenDining";
import GroundTurkeyBurrito from "../../pages/recipes/GroundTurkeyBurrito";

function RecipesItem({
  image,
  link,
  page,
  name,
  time,
  calories,
  carbs,
  proteins,
  fats,
  stats,
}) {
  return (
    <Link to={`/react-recipes-website-test/recipes/${link}`}>
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
          <div className={styles.statsContainer}>
            <div className={styles.stats}>
              <div className={styles.statsLeftSide}>
                <div className={styles.statsIcon}>
                  <LocalFireDepartmentOutlinedIcon fontSize="small" />
                </div>
                <p>
                  {calories} <br />
                  Kcal
                </p>
              </div>
              <div className={styles.statsRightSide}>
                <div className={styles.statsIcon}>
                  <RamenDiningIcon fontSize="small" />
                </div>
                <p>
                  {carbs} <br />
                  carbs
                </p>
              </div>
              <div className={styles.statsLeftSide}>
                <div className={styles.statsIcon}>
                  <FitnessCenterIcon fontSize="small" />
                </div>
                <p>
                  {proteins} <br />
                  proteins
                </p>
              </div>
              <div className={styles.statsRightSide}>
                <div className={styles.statsIcon}>
                  <OpacityIcon fontSize="small" />
                </div>
                <p>
                  {fats} <br />
                  fats
                </p>
              </div>
              {/* <p>{stats.carbs}</p> */}
              {/* how to add object? */}
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default RecipesItem;
