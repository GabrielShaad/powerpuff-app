import axios from "axios";

// Definition of the API BASE URL
export const api = axios.create({
  baseURL: "https://api.tvmaze.com",
});
