import "./Profile.css";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import Sidebar from "../../Components/Sidebar/Sidebar";
import ProfileComponent from "../../Components/Profile/ProfileComponent";
import Address from "../../Components/Address/Address";
import { Routes, Route } from "react-router-dom";
import Payment from "../../Components/Payment/Payment";
import PlaceOrder from "../../Components/PlaceOrder/PlaceOrder";
const Profile = () => {
  return (
    <>
      <Header />
      <div className="containerProfile">
        <div className="left">
          <div className="sideBar">
            <Sidebar />
          </div>
        </div>
        <div className="right">
          <Routes>
            <Route path="/" element={<ProfileComponent />} />
            <Route path="address" element={<Address />} />
            <Route path="payment" element={<Payment />} />
            <Route path="placeorder" element={<PlaceOrder />} />
          </Routes>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Profile;
