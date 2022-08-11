import "./Product.css";
import { product } from "../../data";
import Products from "./Products";
const Product = () => {
  return (
    <div className="containerProduct">
      <div className="wrapper">
        {product.map((item, index) => (
          <Products item={item} key={index} />
        ))}
      </div>
    </div>
  );
};

export default Product;
