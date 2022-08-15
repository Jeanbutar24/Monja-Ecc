import axios from "axios";

const user = JSON.parse(localStorage.getItem("persist:root")).user;
const token = JSON.parse(user).currentUser.accessToken;

const BASE_URL = "http://localhost:5000/api";

export const publicRequest = axios.create({
  baseURL: BASE_URL,
});

export const userRequest = axios.create({
  baseURL: BASE_URL,
  headers: { token: `Bearer ${token}` },
});
