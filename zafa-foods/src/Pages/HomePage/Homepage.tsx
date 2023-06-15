import Herosection from "../../Components/HeroSection/Herosection";
import Populardishes from "../../Components/PopularDishes/Populardishes";
import "./Homepage.css";

function Homepage() {
  return (
    <div className="Home-container">
      <Herosection />
      <Populardishes />
      <div className="overlay"></div>
    </div>
  );
}

export default Homepage;
