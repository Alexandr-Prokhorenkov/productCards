import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "@/store/store";
import { toggleLike } from "@/store/slices/productsSlice";
import { selectLikedProducts, selectProducts } from "@/store/selectors/productsSelectors";

export const useProductDetails = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { id } = useParams();

  const products = useSelector(selectProducts);
  const product = products.find((p) => p.id === Number(id));
  
  const likedProducts = useSelector(selectLikedProducts);
  const isLiked = likedProducts.includes(Number(id));

  const handleToggleLike = () => {
    if (product) {
      dispatch(toggleLike(product.id));
    }
  };

  return {
    product,
    isLiked,
    handleToggleLike,
  };
};