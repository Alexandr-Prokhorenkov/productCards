import { useDispatch, useSelector } from "react-redux";
import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { IconAdd } from "@icons/SvgIcons";
import { Button } from "@ui/Button/Button";
import { Divider } from "@ui/Divider/Divider";
import { ToggleSwitch } from "@ui/ToggleSwitch/ToggleSwitch";
import { AppDispatch } from "@/store/store";
import { SELECT_OPTIONS } from "@/shared/ui/Select/Select.options";
import { Select } from "@/shared/ui/Select/Select";
import { setCategory, setShowLikedOnly } from "@/store/slices/productsSlice";
import styles from "./Sidebar.module.scss";
import { selectSelectedCategory, selectShowLikedOnly } from "@/store/selectors/productsSelectors";

export const Sidebar = () => {
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();
  const selectedCategory = useSelector(selectSelectedCategory);
  const showLikedOnly = useSelector(selectShowLikedOnly);

  const handleNavigate = useCallback(() => {
    navigate("/create-product");
  }, [navigate]);

  const handleToggleLiked = useCallback(
    (checked: boolean) => {
      dispatch(setShowLikedOnly(checked));
    },
    [dispatch]
  );

  const handleCategoryChange = useCallback(
    (category: string) => {
      dispatch(setCategory(category));
    },
    [dispatch]
  );

  return (
    <div className={styles.container}>
      <Button
        variant="primary"
        icon={<IconAdd />}
        iconPosition="after"
        onClick={handleNavigate}
      >
        Добавить продукт
      </Button>
      <Divider />
      <ToggleSwitch
        label="Только избранные"
        checked={showLikedOnly}
        onChange={handleToggleLiked}
      />
      <Divider />
      <Select
        options={SELECT_OPTIONS}
        value={selectedCategory}
        onChange={handleCategoryChange}
      />
    </div>
  );
};
