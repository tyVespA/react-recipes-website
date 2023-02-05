import styles from "./App.module.css";
import Navbar from "./components/Navbar.js/Navbar";
import Footer from "./components/Navbar.js/Footer";
import Home from "./pages/Home";
import Recipes from "./pages/Recipes";
import About from "./pages/About";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import GroundTurkeyBurrito from "./pages/recipes/GroundTurkeyBurrito";
import { RecipesList } from "./helpers/RecipesList";

function App() {
  return (
    <div className={styles.App}>
      <Router>
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

            {/* this doesnt work */}
            {RecipesList.map((route, index) => (
              <Route
                key={index}
                path={`/react-recipes-website-test/recipes/${route.link}`}
                // exact={route.exact}
                element={route.page}
              />
            ))}
          </Routes>
        </div>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
