import { Link } from "react-router-dom";
import { cart, search } from "../../icons/index";
import "./Header.css";
const Header = () => {
  return (
    <div className="container">
      <div className="wrapper">
        <div className="left">
          <span className="language">EN</span>
          <div className="searchContainer">
            <input type="text" placeholder="Search" />
            <img src={search} alt="search" width={25} height={25} />
          </div>
        </div>
        <div className="center">
          <Link to="/" style={{ textDecoration: "none" }}>
            <h1 className="logo">Monja Collection</h1>
          </Link>
        </div>
        <div className="right">
          <Link to="/login" style={{ textDecoration: "none" }}>
            <div className="menuItem">SIGN UP</div>
          </Link>
          <Link to="/register" style={{ textDecoration: "none" }}>
            <div className="menuItem">SIGN IN</div>
          </Link>
          <div className="menuCart">
            <Link to="/cart" style={{ textDecoration: "none" }}>
              <img src={cart} alt="search" width={30} height={30} />
            </Link>
            <div className="count">1</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
