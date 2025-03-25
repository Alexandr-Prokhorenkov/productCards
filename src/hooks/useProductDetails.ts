import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/store/store";
import { toggleLike } from "@/store/productsSlice";

export const useProductDetails = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { id } = useParams();
  
  const product = useSelector((state: RootState) =>
    state.products.products.find((p) => p.id === Number(id))
  );

  const isLiked = useSelector((state: RootState) =>
    state.products.likedProducts.includes(Number(id))
  );

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