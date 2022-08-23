import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { userRequest } from "../../requestMethods";
import ChekoutSteps from "../ChekoutSteps/ChekoutSteps";
import "./Address.css";

const Address = () => {
  const navigate = useNavigate();
  const [jalan, setJalan] = useState("");
  const [kelurahan, setKelurahan] = useState("");
  const [kecamatan, setKecamatan] = useState("");
  const [kabupaten, setKabupaten] = useState("");
  const [provinsi, setProvinsi] = useState("");
  const [negara, setNegara] = useState("");

  const user = useSelector((state) => state.user.currentUser);
  const handleSubmit = (e) => {
    const postAddress = async () => {
      try {
        await userRequest.post(`/address/addAddress/${user._id}`, {
          jalan,
          kelurahan,
          kecamatan,
          kabupaten,
          provinsi,
          negara,
        });
      } catch (error) {}
    };
    postAddress();
    navigate("/profile/payment");
  };

  return (
    <div className="address">
      <div className="containerAddres">
        <ChekoutSteps step1 step2 />
        <h1 className="title">Shiping Address</h1>
        <form onSubmit={handleSubmit}>
          <div className="addressInput">
            <label htmlFor="">jalan</label>
            <input
              type="text"
              required
              placeholder="jalan"
              onChange={(e) => setJalan(e.target.value)}
            />
          </div>
          <div className="addressInput">
            <label htmlFor="">kelurahan/desa</label>
            <input
              type="text"
              required
              placeholder="kelurahan/desa"
              onChange={(e) => setKelurahan(e.target.value)}
            />
          </div>
          <div className="addressInput">
            <label htmlFor="">kecamatan</label>
            <input
              type="text"
              required
              placeholder="kecamatan"
              onChange={(e) => setKecamatan(e.target.value)}
            />
          </div>
          <div className="addressInput">
            <label htmlFor="">kabupaten/kota</label>
            <input
              type="text"
              required
              placeholder="kabupaten/kota"
              onChange={(e) => setKabupaten(e.target.value)}
            />
          </div>
          <div className="addressInput">
            <label htmlFor="">Provinsi</label>
            <input
              type="text"
              required
              placeholder="Provinsi"
              onChange={(e) => setProvinsi(e.target.value)}
            />
          </div>
          <div className="addressInput">
            <label htmlFor="">negara</label>
            <input
              type="text"
              required
              placeholder="negara"
              onChange={(e) => setNegara(e.target.value)}
            />
          </div>
          <button className="buttonAddress">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Address;
