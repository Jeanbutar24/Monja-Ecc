import React from "react";
import Home from "./Pages/Home/Home";
import Cart from "./Pages/Cart/Cart";
import ProductList from "./Pages/ProductList/ProductList";
import ProductId from "./Pages/ProductId/ProductId";
import Login from "./Pages/Login/Login";
import Register from "./Pages/Register/Register";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { useSelector } from "react-redux";
import Profile from "./Pages/Profile/Profile";
const App = () => {
  const user = useSelector((state) => state.user.currentUser);
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/">
            <Route index element={<Home />} />
            <Route path="cart" element={<Cart />} />
            {user ? (
              <Route path="profile" element={<Profile />} />
            ) : (
              <Route path="*" element={<Navigate to="/" replace />} />
            )}
            {user ? (
              <Route path="*" element={<Navigate to="/" replace />} />
            ) : (
              <Route path="login" element={<Login />} />
            )}
            {user ? (
              <Route path="*" element={<Navigate to="/" replace />} />
            ) : (
              <Route path="register" element={<Register />} />
            )}
            <Route path="product">
              <Route index element={<ProductList />} />
              <Route path=":productId" element={<ProductId />} />
            </Route>
            <Route path="products/:category">
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
