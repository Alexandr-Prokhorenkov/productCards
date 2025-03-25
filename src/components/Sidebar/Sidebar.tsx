import { useDispatch, useSelector } from "react-redux";
import { Select } from "../../shared/ui/Select/Select";
import { SELECT_OPTIONS } from "../../shared/ui/Select/Select.options";
import { AppDispatch, RootState } from "../../store/store";
import { setCategory, setShowLikedOnly } from "../../store/productsSlice";
import { ToggleSwitch } from "../../shared/ui/ToggleSwitch/ToggleSwitch";
import styles from "./Sidebar.module.scss";
import { Button } from "../../shared/ui/Button/Button";
import { IconAdd } from "../../assets/icons/SvgIcons";
import { Divider } from "../../shared/ui/Divider/Divider";
import { useNavigate } from "react-router-dom";

export const Sidebar = () => {
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();
  const selectedCategory = useSelector(
    (state: RootState) => state.products.selectedCategory
  );
  const showLikedOnly = useSelector(
    (state: RootState) => state.products.showLikedOnly
  );

  return (
    <div className={styles.container}>
      <Button
        variant="primary"
        icon={<IconAdd />}
        onClick={() => navigate("/create-product")}
      >
        Добавить продукт
      </Button>
      <Divider />
      <ToggleSwitch
        label="Только избранные"
        checked={showLikedOnly}
        onChange={(checked) => dispatch(setShowLikedOnly(checked))}
      />
      <Divider />
      <Select
        options={SELECT_OPTIONS}
        value={selectedCategory}
        onChange={(category) => dispatch(setCategory(category))}
      />
    </div>
  );
};
