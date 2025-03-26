import { FC } from "react";
import { FieldProps } from "formik";
import styles from "./Input.module.scss";

interface InputProps {
  label?: string;
  layout?: "row" | "column";
  type?: string;
  placeholder?: string;
  size?: "small" | "medium" | "large";
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const Input: FC<InputProps & Partial<FieldProps>> = ({
  type = "text",
  placeholder = "Введите текст",
  size = "medium",
  field,
}) => {
  return (
    <div className={`${styles.wrapper} ${styles[size]}`}>
      <input
        id={field?.name}
        className={`${styles.input} ${styles[size]}`}
        type={type}
        placeholder={placeholder}
        value={field?.value}
        {...field}
      />
    </div>
  );
};
