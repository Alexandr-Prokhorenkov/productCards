import axios from "axios";
import { productService } from "./ProductService";

const api = axios.create({
  baseURL: "https://fakestoreapi.com/",
  headers: {
    "Content-Type": "application/json",
  },
});

export const apiService = {
  products: productService(api),
};
