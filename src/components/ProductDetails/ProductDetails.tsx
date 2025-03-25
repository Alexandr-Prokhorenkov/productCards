import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../store/store";
import styles from "./ProductDetails.module.scss";
import { Button } from "../../shared/ui/Button/Button";
import {
  IconArrowBack,
  IconLikeFilled,
  IconLikeOutline,
} from "../../assets/icons/SvgIcons";
import { toggleLike } from "../../store/productsSlice";

export const ProductDetails = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { id } = useParams();
  const navigate = useNavigate();
  const product = useSelector((state: RootState) =>
    state.products.products.find((p) => p.id === Number(id))
  );

  const isLiked = useSelector((state: RootState) =>
    state.products.likedProducts.includes(Number(id))
  );

  const handleBackClick = () => {
    navigate(-1);
  };

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
          <button
            className={styles.LikeButton}
            onClick={() => dispatch(toggleLike(product.id))}
          >
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
