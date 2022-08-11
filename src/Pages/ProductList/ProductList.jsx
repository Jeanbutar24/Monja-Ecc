import Product from "../../Components/Product/Product";
import "./ProductList.css";

const ProductList = () => {
  return (
    <div className="containerProductList">
      <h1 className="title">Man</h1>
      <div className="filterContainer">
        <div className="filter">
          <span className="filterText">Filter Products:</span>
          <select>
            <option disabled selected>
              Color
            </option>
            <option>White</option>
            <option>Black</option>
            <option>Red</option>
            <option>Blue</option>
            <option>Yellow</option>
            <option>Green</option>
          </select>
          <select>
            <option disabled selected>
              Size
            </option>
            <option>XS</option>
            <option>S</option>
            <option>M</option>
            <option>L</option>
            <option>XL</option>
          </select>
        </div>
        <div className="filter">
          <span className="filterText">Sort Products:</span>
          <select>
            <option selected>Newest</option>
            <option>Price (asc)</option>
            <option>Price (desc)</option>
          </select>
        </div>
      </div>
      <Product />
    </div>
  );
};

export default ProductList;
