import { ButtonHTMLAttributes, FC, ReactNode } from "react";
import styles from "./Button.module.scss";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "danger";
  icon?: ReactNode;
  iconPosition?: "before" | "after";
}

export const Button: FC<ButtonProps> = ({
  variant = "primary",
  icon,
  iconPosition = "before",
  children,
  ...props
}) => {
  return (
    <button className={`${styles.button} ${styles[variant]}`} disabled={props.disabled} {...props}>
      {icon && iconPosition === "before" && <span className={styles.icon}>{icon}</span>}
      {children && <span className={styles.text}>{children}</span>}
      {icon && iconPosition === "after" && <span className={styles.icon}>{icon}</span>}
    </button>
  );
};