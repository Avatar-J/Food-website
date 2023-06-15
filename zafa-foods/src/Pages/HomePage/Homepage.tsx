import Herosection from "../../Components/HeroSection/Herosection";
import Populardishes from "../../Components/PopularDishes/Populardishes";

function Homepage() {
  return (
    <div>
      <Herosection />
      <Populardishes />
      <div className="overlay"></div>
    </div>
  );
}

export default Homepage;
