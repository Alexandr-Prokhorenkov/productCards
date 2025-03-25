import { useSelector } from "react-redux";
import { useState, useMemo, useEffect, useRef } from "react";
import { RootState } from "@/store/store";
import { useDebounce } from "@/hooks/useDebounce";

const ITEMS_PER_PAGE = 6;

export const useProductList = () => {
  const {
    products,
    likedProducts,
    loading,
    error,
    showLikedOnly,
    selectedCategory,
  } = useSelector((state: RootState) => state.products);

  const [currentPage, setCurrentPage] = useState<number>(1);
  const [searchQuery, setSearchQuery] = useState<string>("");

  const debouncedSearchQuery = useDebounce(searchQuery, 300);


  const normalPageRef = useRef<number>(1);
  const likedPageRef = useRef<number>(1);

  const prevFilters = useRef({ selectedCategory, debouncedSearchQuery, showLikedOnly });

  useEffect(() => {
    if (prevFilters.current.showLikedOnly !== showLikedOnly) {
      if (prevFilters.current.showLikedOnly) {
        likedPageRef.current = currentPage;
      } else {
        normalPageRef.current = currentPage;
      }
  
      setCurrentPage(showLikedOnly ? likedPageRef.current : normalPageRef.current);
    }
  
    prevFilters.current.showLikedOnly = showLikedOnly;
  }, [showLikedOnly, currentPage]);

  useEffect(() => {

    if (prevFilters.current.showLikedOnly !== showLikedOnly) {
      if (prevFilters.current.showLikedOnly) {
        likedPageRef.current = currentPage;
      } else {
        normalPageRef.current = currentPage;
      }

      setCurrentPage(showLikedOnly ? likedPageRef.current : normalPageRef.current);
    }

    prevFilters.current.showLikedOnly = showLikedOnly;
  }, [showLikedOnly, currentPage]);

  const filteredProducts = useMemo(() => {
    let result = [...products];

    if (selectedCategory) {
      result = result.filter((p) => p.category === selectedCategory);
    }

    if (showLikedOnly) {
      result = result.filter((p) => likedProducts.includes(p.id));
    }

    if (debouncedSearchQuery.trim()) {
      result = result.filter((p) =>
        p.title.toLowerCase().includes(debouncedSearchQuery.toLowerCase())
      );
    }

    return result;
  }, [products, likedProducts, showLikedOnly, selectedCategory, debouncedSearchQuery]);

  const totalPages = Math.max(1, Math.ceil(filteredProducts.length / ITEMS_PER_PAGE));

  useEffect(() => {
    setCurrentPage((prev) => Math.min(prev, totalPages));
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
