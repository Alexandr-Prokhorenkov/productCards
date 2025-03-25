import { ButtonHTMLAttributes, FC, ReactNode } from "react";
import styles from "./Button.module.scss";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "danger";
  icon?: ReactNode;
}

export const Button: FC<ButtonProps> = ({ variant = "primary", icon, children, ...props }) => {
  return (
    <button className={`${styles.button} ${styles[variant]}`} {...props}>
      {children && <span className={styles.text}>{children}</span>}
      {icon && <span className={styles.icon}>{icon}</span>}
    </button>
  );
};