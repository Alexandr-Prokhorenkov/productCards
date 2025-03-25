import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { IconAdd } from "@icons/SvgIcons";
import { Button } from "@ui/Button/Button";
import { Divider } from "@ui/Divider/Divider";
import { ToggleSwitch } from "@ui/ToggleSwitch/ToggleSwitch";
import { AppDispatch, RootState } from "@/store/store";
import { SELECT_OPTIONS } from "@/shared/ui/Select/Select.options";
import { Select } from "@/shared/ui/Select/Select";
import { setCategory, setShowLikedOnly } from "@/store/productsSlice";
import styles from "./Sidebar.module.scss";

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
        iconPosition="after"
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
