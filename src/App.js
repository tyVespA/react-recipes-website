import "./App.css";
import Navbar from "./components/Navbar.js/Navbar";
import Footer from "./components/Navbar.js/Footer";
import Home from "./pages/Home";
import Recipes from "./pages/Recipes";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/react-recipes-website-test" exact element={<Home />} />
          <Route
            path="/react-recipes-website-test/recipes"
            exact
            element={<Recipes />}
          />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
