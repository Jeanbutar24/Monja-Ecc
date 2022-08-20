import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { trash } from "../../icons";
import { userRequest } from "../../requestMethods";
import "./Address.css";
const Address = () => {
  const [jalan, setJalan] = useState("");
  const [kelurahan, setKelurahan] = useState("");
  const [kecamatan, setKecamatan] = useState("");
  const [kabupaten, setKabupaten] = useState("");
  const [provinsi, setProvinsi] = useState("");
  const [negara, setNegara] = useState("");
  const [alamat, setAlamat] = useState([]);
  const user = useSelector((state) => state.user.currentUser);
  const handleSubmit = (e) => {
    e.preventDefault();
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
  };
  useEffect(() => {
    const getAddress = async () => {
      try {
        const response = await userRequest.get(
          `/address/getAddress/${user._id}`
        );
        setAlamat(response.data);
      } catch (error) {
        alert(error);
      }
    };
    getAddress();
  }, [user._id, alamat]);
  const handleRemove = (alamatId) => {
    const deleteAddress = async () => {
      await userRequest.delete(`/address/${user._id}/${alamatId}`);
    };
    deleteAddress();
  };
  return (
    <div className="address">
      <div className="containerAddres">
        <h1 className="title">Tambahkan Alamat</h1>
        <form onSubmit={handleSubmit}>
          <div className="addressInput">
            <label htmlFor="">jalan</label>
            <input
              type="text"
              placeholder="jalan"
              onChange={(e) => setJalan(e.target.value)}
            />
          </div>
          <div className="addressInput">
            <label htmlFor="">kelurahan/desa</label>
            <input
              type="text"
              placeholder="kelurahan/desa"
              onChange={(e) => setKelurahan(e.target.value)}
            />
          </div>
          <div className="addressInput">
            <label htmlFor="">kecamatan</label>
            <input
              type="text"
              placeholder="kecamatan"
              onChange={(e) => setKecamatan(e.target.value)}
            />
          </div>
          <div className="addressInput">
            <label htmlFor="">kabupaten/kota</label>
            <input
              type="text"
              placeholder="kabupaten/kota"
              onChange={(e) => setKabupaten(e.target.value)}
            />
          </div>
          <div className="addressInput">
            <label htmlFor="">Provinsi</label>
            <input
              type="text"
              placeholder="Provinsi"
              onChange={(e) => setProvinsi(e.target.value)}
            />
          </div>
          <div className="addressInput">
            <label htmlFor="">negara</label>
            <input
              type="text"
              placeholder="negara"
              onChange={(e) => setNegara(e.target.value)}
            />
          </div>
          <button className="buttonAddress">Submit</button>
        </form>
      </div>
      <div className="addresOption">
        {alamat.map((item, index) => (
          <p key={index}>
            {item.jalan},{item.kelurahan},{item.kecamatan},{item.kabupaten},
            {item.provinsi},{item.negara}
            <button onClick={() => handleRemove(item._id)}>Hapus</button>
          </p>
        ))}
      </div>
    </div>
  );
};

export default Address;
