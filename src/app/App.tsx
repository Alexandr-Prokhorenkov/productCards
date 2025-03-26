import { useEffect } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/store/store";
import { Header } from "@/components/Header/Header";
import { fetchProducts } from "@/store/productsSlice";
import { AppRoutes } from "@/app/routes/AppRoutes";
import styles from "./App.module.scss";

function App() {
  const dispatch = useDispatch<AppDispatch>();
  const { products, error } = useSelector((state: RootState) => state.products);

  useEffect(() => {
    if (!products.length) {
      dispatch(fetchProducts());
    }
  }, [dispatch, products.length]);

  return (
    <Router>
      <Header />
      <div className={styles.app}>
        {error && <p className={styles.error}>{error}</p>}
        <AppRoutes />
      </div>
    </Router>
  );
}

export default App;
