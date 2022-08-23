import axios from "axios";
// import { removeProduct } from "./CartSlice";
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

// export const postCart = async (userId, productId) => {
//   try {
//     const response = await userRequest.post(
//       `/cart/addProduct/${userId}`,
//       productId
//     );
//   } catch (error) {}
// };
// export const deleteCart = async (id) => {
//   try {
//     await userRequest.delete(`/cart/${id}`, id);
//   } catch (error) {}
// };
