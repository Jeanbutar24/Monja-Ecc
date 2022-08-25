import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import StripeCheckout from "react-stripe-checkout";
import { userRequest } from "../../requestMethods";
import ChekoutSteps from "../ChekoutSteps/ChekoutSteps";
import "./PlaceOrder.css";

const KEY =
  "pk_test_51LOGjFKTe3edRc5tHC3nfOB54Bv00g13H14VoKoHNZBfYA7Aq05LBXtbFjtJu8RN25iMaKJ3NNndaFOM67WKudDq003k7yBPrJ";
const PlaceOrder = () => {
  const [stripeToken, setStripeToken] = useState(null);
  const [alamat, setAlamat] = useState([]);
  const navigate = useNavigate();
  const user = useSelector((state) => state.user.currentUser);
  const onToken = (token) => {
    setStripeToken(token);
  };
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const getCart = async () => {
      const response = await userRequest.get(`/cart/getCart/${user._id}`);
      setCart(response.data);
    };
    getCart();
  }, [user._id, cart]);
  const ongkir = cart.length > 0 ? 24000 : 0;
  const discount = cart.length > 0 ? 14000 : 0;
  useEffect(() => {
    const getAddress = async () => {
      try {
        const response = await userRequest.get(
          `/address/getAddress/${user._id}`
        );
        setAlamat(response.data);
      } catch (error) {
        alert(error);
      }
    };
    getAddress();
  }, [user._id, alamat]);
  useEffect(() => {
    const makeRequest = async () => {
      try {
        await userRequest.post("/checkout/payment", {
          tokenId: stripeToken.id,
          amount: 150,
        });
        navigate("/");
        alert("Payment Succes");
      } catch (error) {}
    };
    stripeToken && makeRequest();
  }, [stripeToken, navigate]);

  if (cart.length === 0) {
    return navigate("/product");
  }
  const handleRemove = (alamatId) => {
    const deleteAddress = async () => {
      await userRequest.delete(`/address/${user._id}/${alamatId}`);
    };
    deleteAddress();
  };
  const subTotal = cart.reduce((a, c) => a + c.quantity * c.price, 0);
  const total = subTotal + ongkir - discount;
  return (
    <div>
      <ChekoutSteps step1 step2 step3 step4 />
      <div className="placeorder">
        <div className="containerOrder">
          <div className="addressShiping">
            <h3>Shiping</h3>
            <p>
              {alamat.map((item, index) => (
                <p key={index}>
                  <b>Address :</b> jln.{item.jalan}, kel.{item.kelurahan}, kac.
                  {item.kecamatan}, kab.{item.kabupaten}, prov.{item.provinsi},{" "}
                  {item.negara}
                  <button
                    onClick={() => handleRemove(item._id)}
                    style={{ marginLeft: "15px" }}>
                    Hapus
                  </button>
                </p>
              ))}
            </p>
          </div>
          <div className="paymentOrder">
            <h3>Payment</h3>
            <p>
              <b>Payment Method :</b> Stripe
            </p>
          </div>
          <div className="orderItem">
            <h3>Order Item</h3>
            {cart.map((item, index) => (
              <ul>
                <li>
                  <img src={item.img} alt="" width={50} height={50} />
                </li>
                <li>{item.title}</li>
                <li>{item.quantity}</li>
                <li>{item.price}</li>
              </ul>
            ))}
          </div>
        </div>
        <div className="summaryOrder">
          <h1 className="summaryTitle">ORDER SUMMARY</h1>
          <div className="summaryItem">
            <span className="summaryItemText">Sub Total (2)</span>
            <span className="summaryItemPrice">
              Rp {subTotal.toLocaleString()} ,00
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
          <StripeCheckout
            name="Monja Collection"
            image="https://i.ibb.co/4dmvB52/key-hole.png"
            billingAddress
            shippingAddress
            description={`Your Total : Rp ${(
              cart.total +
              ongkir -
              discount
            ).toLocaleString()},00`}
            amount={(cart.total / 15000) * 100}
            token={onToken}
            stripeKey={KEY}>
            <button className="buttonOrder">CHECKOUT NOW </button>
          </StripeCheckout>
        </div>
      </div>
    </div>
  );
};

export default PlaceOrder;
