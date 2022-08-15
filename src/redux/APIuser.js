import { publicRequest, userRequest } from "../requestMethods";
import { addProducts, removeProduct } from "./CartSlice";
import { loginFailure, loginStart, loginSucces } from "./UserSlice";

export const login = async (dispatch, user) => {
  dispatch(loginStart());
  try {
    const response = await publicRequest.post("/auth/login", user);
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
    const response = await userRequest.delete(`/cart/${id}`, id);
    dispatch(removeProduct(id));
  } catch (error) {}
};
