import { useNavigate } from "react-router-dom";
import ChekoutSteps from "../ChekoutSteps/ChekoutSteps";
import "./Payment.css";

const Payment = () => {
  const navigate = useNavigate();
  const handleSubmit = () => {
    navigate("/profile/placeorder");
  };
  return (
    <div className="payment">
      <ChekoutSteps step1 step2 step3 />
      <form onSubmit={handleSubmit}>
        <div>
          <h1>Payment Method</h1>
        </div>
        <div className="input">
          <input type="radio" name="payment" id="stripe" required />
          <label htmlFor="stripe">Stripe</label>
        </div>
        <button>Continue</button>
      </form>
    </div>
  );
};

export default Payment;
