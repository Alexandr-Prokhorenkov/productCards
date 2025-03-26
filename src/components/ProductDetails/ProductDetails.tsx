import { useNavigate } from "react-router-dom";
import {
  IconArrowBack,
  IconDelete,
  IconEdit,
  IconLikeFilled,
  IconLikeOutline,
} from "@icons/SvgIcons";
import { Button } from "@ui/Button/Button";
import { useProductDetails } from "@/hooks/useProductDetails";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/store/store";
import { deleteProductAsync } from "@/store/productsSlice";
import { ConfirmModal } from "@/shared/ui/ConfirmModal/ConfirmModal";
import { useState } from "react";
import styles from "./ProductDetails.module.scss";

export const ProductDetails = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();
  const { product, isLiked, handleToggleLike } = useProductDetails();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleBackClick = () => navigate("/");

  const handleDelete = async () => {
    if(product?.id !== undefined) {
      await dispatch(deleteProductAsync(product.id));
      setIsModalOpen(false);
      navigate("/");
    }
  };

  const handleEditClick = () => navigate(`/edit-product/${product?.id}`);

  if (!product) {
    return <p className={styles.error}>Товар не найден</p>;
  }

  return (
    <div className={styles.productDetails}>
      <div>
        <img src={product.image} alt={product.title} className={styles.image} />
      </div>
      <div className={styles.productDetailsDescription}>
        <h2 className={styles.title}>{product?.title}</h2>
        <p className={styles.description}>{product?.description}</p>
        <div className={styles.categoryWrapper}>
          <span className={styles.category}>
            {product.category.toUpperCase()}
          </span>
          <button className={styles.LikeButton} onClick={handleToggleLike}>
            {isLiked ? <IconLikeFilled /> : <IconLikeOutline />}
          </button>
          <button className={styles.EditButton} onClick={handleEditClick}>
            <IconEdit />
          </button>
          <button
            className={styles.DeleteButton}
            onClick={(event) => {
              event.stopPropagation();
              setIsModalOpen(true);
            }}
          >
            <IconDelete />
          </button>
        </div>
        <p className={styles.count}>
          Кол-во отзывов: <span>{product?.rating?.count}</span>
        </p>
        <p className={styles.count}>
          Рейтинг: <span>{product?.rating?.rate}</span>
        </p>
        <p className={styles.price}>
          <span>цена:</span> {product?.price}
          <span>$</span>
        </p>

        <Button onClick={handleBackClick} icon={<IconArrowBack />}>
          Вернуться к списку
        </Button>
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
