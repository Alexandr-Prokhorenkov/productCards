import { Routes, Route, Navigate } from "react-router-dom";
import { LayoutWithSidebar } from "@ui/LayoutWithSidebar/LayoutWithSidebar";
import { Sidebar } from "@components/Sidebar/Sidebar";
import { ProductDetails } from "@components/ProductDetails/ProductDetails";
import { CreateProduct } from "@components/CreateProduct/CreateProduct";
import { EditProduct } from "@components/EditProduct/EditProduct";
import { ProductList } from "@components/ProductList/ProductList";

export const AppRoutes = () => (
  <Routes>
     <Route path="/" element={<Navigate to="/products" replace />} />
    <Route
      path="/products"
      element={
        <LayoutWithSidebar sidebar={<Sidebar />}>
          <ProductList />
        </LayoutWithSidebar>
      }
    />
    <Route path="/product/:id" element={<ProductDetails />} />
    <Route path="/create-product" element={<CreateProduct />} />
    <Route path="/edit-product/:id" element={<EditProduct />} />
  </Routes>
);
