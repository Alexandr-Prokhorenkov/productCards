import { ProductResponse } from "@/shared/api/types";
import { deleteProductAsync, toggleLike } from "@/store/slices/productsSlice";
import { AppDispatch } from "@/store/store";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import {
  IconDelete,
  IconEdit,
  IconLikeFilled,
  IconLikeOutline,
} from "@icons/SvgIcons";
import styles from "./ProductCard.module.scss";
import { useState } from "react";
import { ConfirmModal } from "@/shared/ui/ConfirmModal/ConfirmModal";

interface ProductCardProps {
  product: ProductResponse;
  isLiked: boolean;
}

export const ProductCard = ({ product, isLiked }: ProductCardProps) => {
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [isDeleted, setIsDeleted] = useState<boolean>(false);

  const handleCardClick = (event: React.MouseEvent) => {
    if (isDeleted || isModalOpen) {
      event.stopPropagation();
      return;
    }
    navigate(`/product/${product.id}`);
  };

  const handleDelete = async () => {
    await dispatch(deleteProductAsync(product.id));
    setIsModalOpen(false);
    setIsDeleted(true);
    navigate("/");
  };

  return (
    <div className={styles.productCard} onClick={handleCardClick}>
      <div className={styles.imageWrapper}>
        <img
          className={styles.image}
          src={product?.image}
          alt={product?.title}
        />
        <div className={styles.buttonsWrapper}>
          <button
            className={styles.deleteButton}
            onClick={(event) => {
              event.stopPropagation();
              setIsModalOpen(true);
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
      <ConfirmModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onConfirm={handleDelete}
        title="Удаление товара"
        message="Вы точно хотите удалить этот товар?"
      />
    </div>
  );
};
