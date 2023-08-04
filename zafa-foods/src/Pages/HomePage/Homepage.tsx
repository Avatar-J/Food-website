import "./Homepage.css";
import HeroSection from "./HeroSection/HeroSection";
import PopularDishes from "./PopularDishes/PopularDishes";
import Branches from "./Branches";

function Homepage() {
  return (
    <div className="Home-container">
      <HeroSection />
      <PopularDishes />
      <Branches />

      <div className="overlay"></div>
    </div>
  );
}

export default Homepage;
