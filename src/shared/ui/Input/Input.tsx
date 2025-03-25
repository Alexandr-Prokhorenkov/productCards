import { FC } from "react";
import { FieldProps } from "formik";
import styles from "./Input.module.scss";

interface InputProps {
  label: string;
  layout?: "row" | "column";
  type?: "text" | "email" | "password" | "number";
  placeholder?: string;
  size?: "small" | "medium" | "large";
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const Input: FC<InputProps & Partial<FieldProps>> = ({
  label,
  type = "text",
  placeholder = "Введите текст",
  size = "medium",
  field,
}) => {
  return (
    <div className={`${styles.wrapper} ${styles[size]}`}>
      {label && (
        <label className={styles.label} htmlFor={field?.name}>
          {label}
        </label>
      )}
      <input
        id={field?.name}
        className={`${styles.input} ${styles[size]}`}
        type={type}
        placeholder={placeholder}
        {...field}
      />
    </div>
  );
};
