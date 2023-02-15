import React from "react";

import Home from "./pages/Home";
import styles from "./App.module.css";
// import { RecipesList } from "./helpers/RecipesList";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Recipes from "./pages/Recipes";
import About from "./pages/About";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ScrollToTop from "./helpers/ScrollToTop";

import GroundTurkeyBurrito from "./pages/recipes/GroundTurkeyBurrito";
import ChickenStuffedSweetPotato from "./pages/recipes/ChickenStuffedSweetPotato";

function App() {
  return (
    <Router>
      <ScrollToTop>
        <Navbar />
        <div className={styles.container}>
          <Routes>
            <Route path="/react-recipes-website-test/" element={<Home />} />
            <Route
              path="/react-recipes-website-test/recipes"
              element={<Recipes />}
            />
            <Route
              path="/react-recipes-website-test/about"
              element={<About />}
            />
            <Route
              path="/react-recipes-website-test/recipes/ground-turkey-burrito"
              element={<GroundTurkeyBurrito />}
            />
            <Route
              path="/react-recipes-website-test/recipes/chicken-stuffed-sweet-potato"
              element={<ChickenStuffedSweetPotato />}
            />
          </Routes>
        </div>
        <Footer />
      </ScrollToTop>
    </Router>
  );
}

export default App;
