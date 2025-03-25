import { useSelector } from "react-redux";
import styles from "./ProductList.module.scss";
import { RootState } from "../../store/store";
import { ProductCard } from "./ProductCard.tsx/ProductCard";

export const ProductList = () => {
  const {
    products,
    likedProducts,
    loading,
    error,
    showLikedOnly,
    selectedCategory,
  } = useSelector((state: RootState) => state.products);

  let filteredProducts = products;

  if (selectedCategory) {
    filteredProducts = filteredProducts.filter(
      (p) => p.category === selectedCategory
    );
  }

  if (showLikedOnly) {
    filteredProducts = filteredProducts.filter((p) =>
      likedProducts.includes(p.id)
    );
  }

  if (showLikedOnly && filteredProducts.length === 0) {
    return (
      <div className={styles.emptyMessage}>
        У вас пока нет избранных товаров.
      </div>
    );
  }

  if (loading)
    return <div className={styles.emptyMessage}>Загрузка товаров...</div>;
  if (error) return <p className={styles.error}>{error}</p>;

  console.log(products);

  return (
    <div className={styles.productList}>
      {filteredProducts.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
          isLiked={likedProducts.includes(product.id)}
        />
      ))}
    </div>
  );
};
