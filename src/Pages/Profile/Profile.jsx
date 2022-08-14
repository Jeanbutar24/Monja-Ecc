import "./Profile.css";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
const Profile = () => {
  return (
    <div>
      <Header />
      <div className="containerProfile">
        <div className="left">
          <div className="sideBar">
            <ul className="list">
              <h1 className="name">Ucok</h1>
              <li className="listItem">Profile</li>
              <li className="listItem">Wallet</li>
              <li className="listItem">My Order</li>
              <li className="listItem">Cart List</li>
            </ul>
            <div className="ends">
              <span className="endItem">Service</span>
              <span className="endItem">Logout</span>
            </div>
          </div>
        </div>
        <div className="right">User Info</div>
      </div>
      <Footer />
    </div>
  );
};

export default Profile;