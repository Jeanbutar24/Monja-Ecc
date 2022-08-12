import "./ProductId.css";
import { plus, minus } from "../../icons";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
const ProductId = () => {
  return (
    <>
      <Header />

      <div className="containerProductId">
        <div className="wrapper">
          <div className="imageContainer">
            <img src="https://i.ibb.co/djNb12m/kaos-jean.png" alt="" />
          </div>
          <div className="infoContainer">
            <h1 className="title">Kaos Anti Air</h1>
            <p className="desc">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem,
              deleniti, ut facilis quibusdam laboriosam illum maxime ratione
              quasi similique quaerat iste ab provident earum eveniet.
            </p>
            <span className="price">Rp 60000,00</span>
            <div className="filterContainer">
              <div className="filter">
                <span className="filterTitle">Color</span>
                <div
                  className="filterColor"
                  style={{ backgroundColor: "black" }}
                />
                <div
                  className="filterColor"
                  style={{ backgroundColor: "darkblue" }}
                />
                <div
                  className="filterColor"
                  style={{ backgroundColor: "gray" }}
                />
              </div>
              <div className="filter">
                <span className="filterTitle">Size</span>
                <select>
                  <option>XS</option>
                  <option>S</option>
                  <option>M</option>
                  <option>L</option>
                  <option>XL</option>
                </select>
              </div>
            </div>
            <div className="addContainer">
              <div className="amountContainer">
                <img src={minus} alt="search" width={25} height={25} />
                <span className="amount">1</span>
                <img src={plus} alt="search" width={25} height={25} />
              </div>
              <button>ADD TO CART</button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ProductId;
