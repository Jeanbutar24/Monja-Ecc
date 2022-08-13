import axios from "axios";

const token =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyZDk3OGY5OTZlYThkMWVkNjdmYTFlMSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY2MDM1Mzk3MSwiZXhwIjoxNjYwNDQwMzcxfQ.S_n5bB9wyHKRFRgFpCGMp1n3WjGGIeV_rImgFmfsIF0";
const BASE_URL = "http://localhost:5000/api";

export const publicRequest = axios.create({
  baseURL: BASE_URL,
});

export const userRequest = axios.create({
  baseURL: BASE_URL,
  headers: { token: `Bearer ${token}` },
});
