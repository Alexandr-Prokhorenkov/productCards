import { FC } from "react";
import { Button } from "../Button/Button";
import { Divider } from "../Divider/Divider";
import styles from "./ButtonsActions.module.scss";

interface ButtonsActionsProps {
  isSubmitting: boolean;
  onCancel: () => void;
}

export const ButtonsActions: FC<ButtonsActionsProps> = ({
  isSubmitting,
  onCancel,
}) => {
  return (
    <>
      <Divider />
      <div className={styles.buttonsWrapper}>
        <Button type="submit" disabled={isSubmitting}>
          {isSubmitting ? "Сохраняем..." : "Сохранить"}
        </Button>
        <Button type="button" onClick={onCancel} color="secondary">
          Отменить
        </Button>
      </div>
    </>
  );
};
