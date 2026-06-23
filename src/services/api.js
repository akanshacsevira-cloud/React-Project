import axios from "axios";

const API = "https://dummyjson.com";

export const getProducts = () =>
  axios.get(`${API}/products?limit=100`);

export const getCategories = () =>
  axios.get(`${API}/products/categories`);

export const getProduct = (id) =>
  axios.get(`${API}/products/${id}`);