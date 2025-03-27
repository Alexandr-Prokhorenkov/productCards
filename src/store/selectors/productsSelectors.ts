import { RootState } from "../store";
import { createSelector } from "@reduxjs/toolkit";

export const selectProducts = (state: RootState) => state.products.products;
export const selectLikedProducts = (state: RootState) => state.products.likedProducts;
export const selectShowLikedOnly = (state: RootState) => state.products.showLikedOnly;
export const selectSelectedCategory = (state: RootState) => state.products.selectedCategory;
export const selectLoading = (state: RootState) => state.products.loading;
export const selectError = (state: RootState) => state.products.error;

export const selectFilteredProducts = createSelector(
  [selectProducts, selectShowLikedOnly, selectLikedProducts, selectSelectedCategory],
  (products, showLikedOnly, likedProducts, selectedCategory) => {
    return products.filter(product => 
      (!showLikedOnly || likedProducts.includes(product.id)) &&
      (selectedCategory === "" || product.category === selectedCategory)
    );
  }
);