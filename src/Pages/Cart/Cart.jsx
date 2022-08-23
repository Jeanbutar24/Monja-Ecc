import "./Cart.css";
import { plus, minus, trash } from "../../icons";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { userRequest } from "../../requestMethods";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const user = useSelector((state) => state.user.currentUser);
  const [cart, setCart] = useState([]);
  const ongkir = cart.length > 0 ? 24000 : 0;
  const discount = cart.length > 0 ? 14000 : 0;
  const navigate = useNavigate();
  useEffect(() => {
    const getCart = async () => {
      const response = await userRequest.get(`/cart/getCart/${user._id}`);
      setCart(response.data);
    };
    getCart();
  }, [user._id, cart]);

  const removeProductItem = (cartId) => {
    const deleteCart = async () => {
      await userRequest.delete(`/cart/${user._id}/${cartId}`);
    };
    deleteCart();
  };
  const navigateTo = () => {
    navigate("/profile/address");
  };
  const subTotal = cart.reduce((a, c) => a + c.quantity * c.price, 0);
  const total = subTotal + ongkir - discount;
  return (
    <>
      <Header />
      <div className="containerCart">
        <h1 className="title">YOUR BAG</h1>
        <div className="top">
          <Link to="/product">
            <button className="topButton">CONTINUE SHOPPING</button>
          </Link>
          <div className="topTexts">
            <span className="toptext">Shopping bag(2)</span>
            <span className="toptext">Your Whislist(0)</span>
          </div>
          <button className="topButton">CHECKOUT NOW</button>
        </div>
        <div className="bottom">
          <div className="info">
            {cart.map((item) => (
              <div key={item._id}>
                <hr style={{ width: "75%", marginBottom: "20px" }} />

                <div className="product">
                  <div className="productDetail">
                    <img src={item.img} alt="" className="image" />
                    <div className="details">
                      <span className="productName">
                        <b>Product:</b> {item.title}
                      </span>
                      <span className="productId">
                        <b>ProductId:</b> {item.productID}
                      </span>
                      <span className="productColor">
                        <b>Color: </b> {item.color}
                      </span>
                      <span className="productSize">
                        <b>Size:</b> {item.size}
                      </span>
                      <span className="productPrice">
                        <b>Price:</b> Rp
                        {(item.price * item.quantity).toLocaleString()},00
                      </span>
                      <div className="priceDetail">
                        <div className="productAmountContainer">
                          <img
                            src={minus}
                            alt="search"
                            width={25}
                            height={25}
                          />
                          <div className="productAmount">{item.quantity}</div>
                          <img src={plus} alt="search" width={25} height={25} />
                        </div>
                        <div onClick={() => removeProductItem(item._id)}>
                          <img
                            src={trash}
                            alt="search"
                            width={25}
                            height={25}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="summary">
            <h1 className="summaryTitle">ORDER SUMMARY</h1>
            <div className="summaryItem">
              <span className="summaryItemText">
                {" "}
                Sub Total ({cart.reduce((a, c) => a + c.quantity, 0)})
              </span>
              <span className="summaryItemPrice">
                Rp {cart.reduce((a, c) => a + c.quantity * c.price, 0)}
                ,00
              </span>
            </div>
            <div className="summaryItem">
              <span className="summaryItemText"> Estimated Shipping</span>
              <span className="summaryItemPrice">
                Rp {ongkir.toLocaleString()},00
              </span>
            </div>
            <div className="summaryItem">
              <span className="summaryItemText">Shipping Discount</span>
              <span className="summaryItemPrice">
                - Rp {discount.toLocaleString()},00
              </span>
            </div>
            <div className="summaryItem">
              <span className="summaryItemText">Total</span>
              <span className="summaryItemPrice">
                Rp {total.toLocaleString()},00
              </span>
            </div>

            <button onClick={navigateTo} className="buttonCart">
              CHECKOUT NOW{" "}
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Cart;
