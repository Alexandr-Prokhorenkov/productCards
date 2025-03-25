import { ProductResponse } from "../../../shared/api/types";
import { deleteProductAsync, toggleLike } from "../../../store/productsSlice";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import styles from "./ProductCard.module.scss";
import {
  IconDelete,
  IconEdit,
  IconLikeFilled,
  IconLikeOutline,
} from "../../../assets/icons/SvgIcons";
import { AppDispatch } from "../../../store/store";

interface ProductCardProps {
  product: ProductResponse;
  isLiked: boolean;
}

export const ProductCard = ({ product, isLiked }: ProductCardProps) => {
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();

  const handleCardClick = () => {
    navigate(`/product/${product.id}`);
  };

  return (
    <div className={styles.productCard} onClick={handleCardClick}>
      <div className={styles.imageWrapper}>
        <img
          className={styles.image}
          src={product?.image}
          alt={product?.title}
        />

        {/* Кнопки управления продуктом */}
        <div className={styles.buttonsWrapper}>
          <button
            className={styles.deleteButton}
            onClick={(event) => {
              event.stopPropagation();
              dispatch(deleteProductAsync(product.id));
            }}
          >
            <IconDelete />
          </button>
          <button
            className={styles.editButton}
            onClick={(event) => {
              event.stopPropagation();
              navigate(`/edit-product/${product.id}`);
            }}
          >
            <IconEdit />
          </button>
        </div>
      </div>

      <h3 className={styles.cardTitle}>{product?.title}</h3>
      <p className={styles.description}>{product?.description}</p>
      <p className={styles.category}>{product?.category?.toUpperCase()}</p>
      <div className={styles.priceBlock}>
        <p className={styles.price}>
          {product?.price}
          <span>$</span>
        </p>
        <button
          className={styles.LikeButton}
          onClick={(event) => {
            event.stopPropagation();
            dispatch(toggleLike(product.id));
          }}
        >
          {isLiked ? <IconLikeFilled /> : <IconLikeOutline />}
        </button>
      </div>
    </div>
  );
};
