import { FC } from "react";
import { FieldProps } from "formik";
import styles from "./TextAreaInput.module.scss";

interface TextAreaInputProps {
  label?: string;
  placeholder?: string;
  rows?: number;
}

export const TextAreaInput: FC<TextAreaInputProps & Partial<FieldProps>> = ({ 
  placeholder = "Введите описание", 
  rows = 4, 
  field 
}) => {
  return (
    <div className={styles.wrapper}>
      <textarea
        id={field?.name}
        className={styles.textarea}
        placeholder={placeholder}
        {...field} 
        rows={rows}
      />
    </div>
  );
};
