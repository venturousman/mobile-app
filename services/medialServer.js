import axios from "axios";
// import { medialServer } from "../app.config";

const medialServer = "http://192.168.1.13:3000"; // could not use http://localhost:3000 or 127.0.0.1, should use a local ip address

const instance = axios.create({
  baseURL: medialServer,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

export async function post(url, headers, data) {
  // console.log("data: ", data);
  const response = await instance.post(url, data, { headers });
  // console.log("response: ", response);
  return response;
}

export async function get(url) {
  const response = await instance.get(url);
  return response;
}
