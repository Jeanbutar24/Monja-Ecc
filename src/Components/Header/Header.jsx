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
          <h1 className="logo">Monja Collection</h1>
        </div>
        <div className="right">
          <div className="menuItem">REGISTER</div>
          <div className="menuItem">SIGN IN</div>
          <div className="menuCart">
            <img src={cart} alt="search" width={30} height={30} />
            <div className="count">1</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
