import { AxiosInstance } from "axios";
import { ProductResponse } from "./types";

export const productService = (api: AxiosInstance) => ({
  getProducts: async () => {
    const res = await api.get<ProductResponse[]>("/products");
    return res.data;
  },
  getProduct: async (id: string) => {
    const res = await api.get<ProductResponse>(`/products/${id}`);
    return res.data
  },
  deleteProduct: async(id: string) => {
    const res = await api.delete<ProductResponse>(`/products/${id}`);
    return res.data
  },
  addProduct: async(product: Omit<ProductResponse, "id" | "rating">) => {
    const res = await api.post<ProductResponse>("/products", product);
    return res.data;
  }
});
