import "./ProductId.css";
import { plus, minus } from "../../icons";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { publicRequest } from "../../requestMethods";
import NewsLetter from "../../Components/NewsLetter/NewsLetter";

const ProductId = () => {
  const location = useLocation();
  const id = location.pathname.split("/")[2];
  const [product, setProduct] = useState({});
  const [quantity, setQuantity] = useState(1);

  const handleQuantity = (item) => {
    if (item === "plus") {
      setQuantity(quantity + 1);
    } else if (item === "minus" && quantity > 1) {
      setQuantity(quantity - 1);
    } else {
      return false;
    }
  };

  useEffect(() => {
    const getProduct = async () => {
      const response = await publicRequest.get(`/product/${id}`);
      try {
        setProduct(response.data);
      } catch (error) {}
    };
    getProduct();
  }, [id]);

  return (
    <>
      <Header />

      <div className="containerProductId">
        <div className="wrapper">
          <div className="imageContainer">
            <img src={product.img} alt="" />
          </div>
          <div className="infoContainer">
            <h1 className="title">{product.title}</h1>
            <p className="desc">{product.desc}</p>
            <span className="price">Rp {product.price},00</span>
            <div className="filterContainer">
              <div className="filter">
                <span className="filterTitle">Color</span>
                <select>
                  {product.color?.map((color, index) => (
                    <option key={index}>{color}</option>
                  ))}
                </select>
              </div>
              <div className="filter">
                <span className="filterTitle">Size</span>
                <select>
                  {product.size?.map((size, index) => (
                    <option key={index}>{size}</option>
                  ))}
                </select>
              </div>
            </div>
            <div className="addContainer">
              <div className="amountContainer">
                <div onClick={() => handleQuantity("minus")}>
                  <img src={minus} alt="search" width={25} height={25} />
                </div>
                <span className="amount">{quantity}</span>
                <div onClick={() => handleQuantity("plus")}>
                  <img src={plus} alt="search" width={25} height={25} />
                </div>
              </div>
              <button>ADD TO CART</button>
            </div>
          </div>
        </div>

        <NewsLetter />
      </div>
      <Footer />
    </>
  );
};

export default ProductId;
