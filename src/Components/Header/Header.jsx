import { Link } from "react-router-dom";
import { cart, search } from "../../icons/index";
import "./Header.css";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../redux/UserSlice";

const Header = () => {
  const quantity = useSelector((state) => state.cart.quantity);
  const user = useSelector((state) => state.user.currentUser);
  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(logout(null));
  };
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
          {user ? (
            <>
              <div className="menuUser">
                <ul className="list">
                  <li className="listItem">Home</li>
                  <Link to="/profile">
                    <li className="listItem">Profile</li>
                  </Link>
                  {user.isAdmin ? <li className="listItem">Dashboard</li> : ""}
                  <li className="listItem">About</li>
                </ul>
              </div>

              <div className="menuCart">
                <Link to="/cart" style={{ textDecoration: "none" }}>
                  <img src={cart} alt="search" width={30} height={30} />
                </Link>
                {quantity > 0 ? <div className="count">{quantity}</div> : ""}
              </div>
              <div
                style={{ color: "white", cursor: "pointer" }}
                onClick={handleLogout}>
                Logout
              </div>
            </>
          ) : (
            <>
              <Link to="/register" style={{ textDecoration: "none" }}>
                <div className="menuItem">SIGN UP</div>
              </Link>
              <Link to="/login" style={{ textDecoration: "none" }}>
                <div className="menuItem">SIGN IN</div>
              </Link>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
