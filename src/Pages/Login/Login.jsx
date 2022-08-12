import { Link } from "react-router-dom";
import "./Login.css";
import { padlock, person } from "../../icons/index";
const Login = () => {
  return (
    <div className="containerLogin">
      <h1>Login </h1>
      <div className="wrapper">
        <div className="username">
          <img src={person} alt="" width={25} height={25} />
          <input type="text" placeholder="username" />
        </div>
        <div className="password">
          <img src={padlock} alt="" width={25} height={25} />
          <input type="password" placeholder="password" />
        </div>
        <button>Login</button>
        <Link to="/register">
          <p className="link">Silahkan, Register</p>
        </Link>
      </div>
    </div>
  );
};

export default Login;
