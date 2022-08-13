import { publicRequest } from "../requestMethods";
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
