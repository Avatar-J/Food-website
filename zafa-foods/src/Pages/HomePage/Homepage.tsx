import "./Homepage.css";
import Herosection from "./HeroSection/Herosection";
import Populardishes from "./PopularDishes/Populardishes";
import Menu from "./FoodMenu/Menu";

function Homepage() {
  return (
    <div className="Home-container">
      <Herosection />
      <Populardishes />
      <Menu />
      <div className="overlay"></div>
    </div>
  );
}

export default Homepage;
