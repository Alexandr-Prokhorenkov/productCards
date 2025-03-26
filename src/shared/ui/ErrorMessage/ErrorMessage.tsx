import { ErrorMessage } from "formik";
import styles from "./ErrorMessage.module.scss";
import { FC } from "react";

interface CustomErrorMessageProps {
  name: string;
}

export const CustomErrorMessage: FC<CustomErrorMessageProps> = ({ name }) => (
  <div className={styles.error}>
    <ErrorMessage name={name} />
  </div>
);
