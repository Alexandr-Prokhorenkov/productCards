import { FC } from "react";
import { Button } from "../Button/Button";
import styles from "./Modal.module.scss";
import { Divider } from "../Divider/Divider";

interface ModalActionsProps {
  isSubmitting: boolean;
  onCancel: () => void;
}

export const ModalActions: FC<ModalActionsProps> = ({
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