import { useSelector } from "react-redux";
import { useState, useMemo } from "react";
import styles from "./ProductList.module.scss";
import { RootState } from "../../store/store";
import { ProductCard } from "./ProductCard.tsx/ProductCard";
import { Button } from "../../shared/ui/Button/Button";
import { IconArrow } from "../../assets/icons/SvgIcons";

const ITEMS_PER_PAGE = 6;

export const ProductList = () => {
  const {
    products,
    likedProducts,
    loading,
    error,
    showLikedOnly,
    selectedCategory,
  } = useSelector((state: RootState) => state.products);

  const [currentPage, setCurrentPage] = useState(1);

  const filteredProducts = useMemo(() => {
    let result = products;

    if (selectedCategory) {
      result = result.filter((p) => p.category === selectedCategory);
    }

    if (showLikedOnly) {
      result = result.filter((p) => likedProducts.includes(p.id));
    }

    return result;
  }, [products, likedProducts, showLikedOnly, selectedCategory]);

  const totalPages = Math.ceil(filteredProducts.length / ITEMS_PER_PAGE);

  const paginatedProducts = useMemo(() => {
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    return filteredProducts.slice(startIndex, startIndex + ITEMS_PER_PAGE);
  }, [filteredProducts, currentPage]);

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

  return (
    <div>
      <div className={styles.productList}>
        {paginatedProducts.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            isLiked={likedProducts.includes(product.id)}
          />
        ))}
      </div>
      {totalPages > 1 && (
        <div className={styles.pagination}>
          <Button
            icon={<IconArrow rotate={90}/>}
            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
            disabled={currentPage === 1}
          >
            Назад
          </Button>
          <Button
            icon={<IconArrow rotate={-90}/>}
            iconPosition="after"
            onClick={() =>
              setCurrentPage((prev) => Math.min(prev + 1, totalPages))
            }
            disabled={currentPage === totalPages}
          >
            Вперед
          </Button>
        </div>
      )}
    </div>
  );
};
