import "./Cart.css";
import { plus, minus } from "../../icons";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
const Cart = () => {
  return (
    <>
      <Header />
      <div className="containerCart">
        <h1 className="title">YOUR BAG</h1>
        <div className="top">
          <button className="topButton">CONTINUE SHOPPING</button>
          <div className="topTexts">
            <span className="toptext">Shopping bag(2)</span>
            <span className="toptext">Your Whislist(0)</span>
          </div>
          <button className="topButton">CHECKOUT NOW</button>
        </div>
        <div className="bottom">
          <div className="info">
            <div className="product">
              <div className="productDetail">
                <img src="https://i.ibb.co/djNb12m/kaos-jean.png" alt="" />
                <div className="details">
                  <span className="productName">
                    <b>Product:</b> KAOS ANTI AIR
                  </span>
                  <span className="productId">
                    <b>ID:</b> 23423
                  </span>
                  <div className="productColor" />
                  <span className="productSize">
                    <b>Size:</b> 37,5
                  </span>
                </div>
              </div>
              <div className="priceDetail">
                <div className="productAmountContainer">
                  <img src={minus} alt="search" width={25} height={25} />
                  <div className="productAmount">2</div>
                  <img src={plus} alt="search" width={25} height={25} />
                </div>
                <div className="productPrice">$ 30</div>
              </div>
            </div>
            <div className="product">
              <div className="productDetail">
                <img src="https://i.ibb.co/djNb12m/kaos-jean.png" alt="" />
                <div className="details">
                  <span className="productName">
                    <b>Product:</b> KAOS ANTI AIR
                  </span>
                  <span className="productId">
                    <b>ID:</b> 23423
                  </span>
                  <div className="productColor" />
                  <span className="productSize">
                    <b>Size:</b> 37,5
                  </span>
                </div>
              </div>
              <div className="priceDetail">
                <div className="productAmountContainer">
                  <img src={minus} alt="search" width={25} height={25} />
                  <div className="productAmount">2</div>
                  <img src={plus} alt="search" width={25} height={25} />
                </div>
                <div className="productPrice">$ 30</div>
              </div>
            </div>
          </div>
          <div className="summary">
            <h1 className="summaryTitle">ORDER SUMMARY</h1>
            <div className="summaryItem">
              <span className="summaryItemText"> Sub Total</span>
              <span className="summaryItemPrice">Rp 65000,00</span>
            </div>
            <div className="summaryItem">
              <span className="summaryItemText"> Estimated Shipping</span>
              <span className="summaryItemPrice">Rp 5000,00</span>
            </div>
            <div className="summaryItem">
              <span className="summaryItemText">Shipping Discount</span>
              <span className="summaryItemPrice">Rp 0,00</span>
            </div>
            <div className="summaryItem">
              <span className="summaryItemText">Total</span>
              <span className="summaryItemPrice">Rp 70000,00</span>
            </div>
            <button>CHECKOUT NOW </button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Cart;
