import { Link } from "react-router-dom";
import "./Register.css";
import { padlock, person, email } from "../../icons/index";
const Register = () => {
  return (
    <div className="containerRegister">
      <h1>Register </h1>
      <div className="wrapper">
        <div className="username">
          <img src={person} alt="" width={25} height={25} />
          <input type="text" placeholder="username" />
        </div>
        <div className="email">
          <img src={email} alt="" width={25} height={25} />
          <input type="text" placeholder="Email" />
        </div>
        <div className="password">
          <img src={padlock} alt="" width={25} height={25} />
          <input type="password" placeholder="password" />
        </div>
        <button>Register</button>
        <Link to="/register">
          <p className="link">Silahkan, Register</p>
        </Link>
      </div>
    </div>
  );
};

export default Register;
