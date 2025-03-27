import { useSelector } from "react-redux";
import { useState, useEffect, useRef, useMemo } from "react";
import { useDebounce } from "@/hooks/useDebounce";
import { selectError, selectFilteredProducts, selectLikedProducts, selectLoading, selectShowLikedOnly } from "@/store/selectors/productsSelectors";

const ITEMS_PER_PAGE = 6;

export const useProductList = () => {
  const filteredProducts = useSelector(selectFilteredProducts);
  const likedProducts = useSelector(selectLikedProducts);
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);
  const showLikedOnly = useSelector(selectShowLikedOnly);

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

  const searchedProducts = useMemo(() => {
    return filteredProducts.filter(p => 
      !debouncedSearchQuery.trim() || 
      p.title.toLowerCase().includes(debouncedSearchQuery.toLowerCase())
    );
  }, [filteredProducts, debouncedSearchQuery]);

  const totalPages = Math.max(1, Math.ceil(searchedProducts.length / ITEMS_PER_PAGE));

  useEffect(() => {
    setCurrentPage((prev) => (prev > totalPages ? totalPages : prev));
  }, [totalPages]);

  const paginatedProducts = useMemo(() => {
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    return searchedProducts.slice(startIndex, startIndex + ITEMS_PER_PAGE);
  }, [searchedProducts, currentPage]);

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
    filteredProducts: searchedProducts,
    likedProducts,
  };
};