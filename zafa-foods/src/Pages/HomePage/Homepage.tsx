import "./Homepage.css";
import HeroSection from "./HeroSection/HeroSection";
import PopularDishes from "./PopularDishes/PopularDishes";
import Menu from "./FoodMenu/Menu";

function Homepage() {
  return (
    <div className="Home-container">
      <HeroSection />
      <PopularDishes />
      <Menu />
      <div className="overlay"></div>
    </div>
  );
}

export default Homepage;
