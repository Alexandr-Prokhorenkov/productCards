import { useNavigate } from "react-router-dom";
import {
  IconArrowBack,
  IconLikeFilled,
  IconLikeOutline,
} from "@icons/SvgIcons";
import { Button } from "@ui/Button/Button";
import styles from "./ProductDetails.module.scss";
import { useProductDetails } from "@/hooks/useProductDetails";

export const ProductDetails = () => {
  const navigate = useNavigate();
  const { product, isLiked, handleToggleLike } = useProductDetails();

  const handleBackClick = () => navigate("/products");

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
    </div>
  );
};
