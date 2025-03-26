import { useSelector } from "react-redux";
import { useState, useMemo, useEffect, useRef } from "react";
import { RootState } from "@/store/store";
import { useDebounce } from "@/hooks/useDebounce";

const ITEMS_PER_PAGE = 6;

export const useProductList = () => {
  const { products, likedProducts, loading, error, showLikedOnly, selectedCategory } =
    useSelector((state: RootState) => state.products);

  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");

  const debouncedSearchQuery = useDebounce(searchQuery, 300);

  const normalPageRef = useRef(1);
  const likedPageRef = useRef(1);

  const prevShowLikedOnly = useRef(showLikedOnly);

  useEffect(() => {
    if (prevShowLikedOnly.current !== showLikedOnly) {
      if (prevShowLikedOnly.current) {
        likedPageRef.current = currentPage;
      } else {
        normalPageRef.current = currentPage;
      }

      setCurrentPage(showLikedOnly ? likedPageRef.current : normalPageRef.current);
      prevShowLikedOnly.current = showLikedOnly;
    }
  }, [showLikedOnly, currentPage]);

  const filteredProducts = useMemo(() => {
    return products
      .filter((p) => !selectedCategory || p.category === selectedCategory)
      .filter((p) => !showLikedOnly || likedProducts.includes(p.id))
      .filter((p) => !debouncedSearchQuery.trim() || p.title.toLowerCase().includes(debouncedSearchQuery.toLowerCase()));
  }, [products, likedProducts, showLikedOnly, selectedCategory, debouncedSearchQuery]);

  const totalPages = Math.max(1, Math.ceil(filteredProducts.length / ITEMS_PER_PAGE));

  useEffect(() => {
    setCurrentPage((prev) => (prev > totalPages ? totalPages : prev));
  }, [totalPages]);

  const paginatedProducts = useMemo(() => {
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    return filteredProducts.slice(startIndex, startIndex + ITEMS_PER_PAGE);
  }, [filteredProducts, currentPage]);

  const goToPrevPage = () => setCurrentPage((prev) => Math.max(prev - 1, 1));
  const goToNextPage = () => setCurrentPage((prev) => Math.min(prev + 1, totalPages));

  return {
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
  };
};
