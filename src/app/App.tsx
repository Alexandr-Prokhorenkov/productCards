import { useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { LayoutWithSidebar } from "@ui/LayoutWithSidebar/LayoutWithSidebar";
import { AppDispatch, RootState } from "@/store/store";
import { Header } from "@/components/Header/Header";
import { Sidebar } from "@components/Sidebar/Sidebar";
import { ProductDetails } from "@components/ProductDetails/ProductDetails";
import { CreateProduct } from "@components/CreateProduct/CreateProduct";
import { EditProduct } from "@components/EditProduct/EditProduct";
import { fetchProducts } from "@/store/productsSlice";
import { ProductList } from "@/components/ProductList/ProductList";
import styles from "./App.module.scss";

function App() {
  const dispatch = useDispatch<AppDispatch>();
  const { error } = useSelector((state: RootState) => state.products);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  return (
    <Router>
      <Header />
      <div className={styles.app}>
        {error && <p className={styles.error}>{error}</p>}
        <Routes>
          <Route path="/" element={<Navigate to="/products" replace />} />
          <Route
            path="/products"
            element={
              <LayoutWithSidebar
                sidebar={<Sidebar />}
                children={<ProductList />}
              />
            }
          />
          <Route path="/product/:id" element={<ProductDetails />} />
          <Route path="/create-product" element={<CreateProduct />} />
          <Route path="/edit-product/:id" element={<EditProduct />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
