import NewsLetter from "../../Components/NewsLetter/NewsLetter";
import Promo from "../../Components/ProductPromo/Promo";
import Slider from "../../Components/Slider/Slider";
import "./Home.css";

const Home = () => {
  return (
    <div>
      <Slider />
      <Promo />
      <NewsLetter />
    </div>
  );
};

export default Home;
