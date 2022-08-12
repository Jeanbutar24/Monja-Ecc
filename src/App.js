import React from "react";
import Home from "./Pages/Home/Home";
import Cart from "./Pages/Cart/Cart";
import ProductList from "./Pages/ProductList/ProductList";
import ProductId from "./Pages/ProductId/ProductId";
import Login from "./Pages/Login/Login";
import Register from "./Pages/Register/Register";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/">
            <Route index element={<Home />} />
            <Route path="cart" element={<Cart />} />
            <Route path="login" element={<Login />} />
            <Route path="register" element={<Register />} />
            <Route path="product">
              <Route index element={<ProductList />} />
              <Route path=":productId" element={<ProductId />} />
            </Route>
          </Route>
        </Routes>
      </Router>
    </div>
  );
};

export default App;
