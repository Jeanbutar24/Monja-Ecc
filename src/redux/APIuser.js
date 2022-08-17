import axios from "axios";
import { userRequest } from "../requestMethods";
import { addProducts, removeProduct } from "./CartSlice";
import { loginFailure, loginStart, loginSucces } from "./UserSlice";

export const login = async (dispatch, user) => {
  dispatch(loginStart());
  try {
    const response = await axios.post(
      "http://localhost:5000/api/auth/login",
      user
    );
    dispatch(loginSucces(response.data));
  } catch (error) {
    dispatch(loginFailure(error));
  }
};

export const postCart = async (dispatch, productId) => {
  try {
    const response = await userRequest.post("/cart/addProduct", productId);
    dispatch(addProducts(response.data));
  } catch (error) {}
};
export const deleteCart = async (dispatch, id) => {
  try {
    await userRequest.delete(`/cart/${id}`, id);
    dispatch(removeProduct(id));
  } catch (error) {}
};
