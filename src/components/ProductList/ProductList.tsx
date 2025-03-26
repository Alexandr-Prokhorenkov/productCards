import { Search } from "@ui/Search/Search";
import { ProductCard } from "./ProductCard/ProductCard";
import { Pagination } from "./Pagination/Pagination";
import { useProductList } from "@/hooks/useProductList";
import styles from "./ProductList.module.scss";

export const ProductList = () => {
  const {
    loading,
    error,
    showLikedOnly,
    searchQuery,
    setSearchQuery,
    paginatedProducts,
    totalPages,
    currentPage,
    goToPrevPage,
    goToNextPage,
    filteredProducts,
    likedProducts,
  } = useProductList();

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
    <div className={styles.container}>
      <Search
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      {totalPages > 1 && (
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPrev={goToPrevPage}
          onNext={goToNextPage}
        />
      )}
      <div className={styles.productList}>
        {paginatedProducts.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            isLiked={likedProducts.includes(product.id)}
          />
        ))}
      </div>
    </div>
  );
};
