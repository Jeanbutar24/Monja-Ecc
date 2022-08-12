import { useState } from "react";
import "./Products.css";

const Products = ({ item }) => {
  const [title, setTitle] = useState(item.title);

  const onMouseEnter = () => {
    setTitle("Buy Now");
  };
  const onMouseLeave = () => {
    setTitle(item.title);
  };
  return (
    <div className="containerProducts">
      <img src={item.img} alt={item.title} />
      <h2
        className="title"
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}>
        {title}
      </h2>
      <p>Rp {item.price},00</p>
    </div>
  );
};

export default Products;
