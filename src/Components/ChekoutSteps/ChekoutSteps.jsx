import "./ChekoutSteps.css";

const ChekoutSteps = ({ step1, step2, step3, step4 }) => {
  return (
    <div className="chekoutSteps">
      <div className={step1 ? "active" : ""}>Sign-In</div>
      <div className={step2 ? "active" : ""}>Shiping Address</div>
      <div className={step3 ? "active" : ""}>Payment </div>
      <div className={step4 ? "active" : ""}>Place Order</div>
    </div>
  );
};

export default ChekoutSteps;
