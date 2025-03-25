import { FC } from "react";
import styles from "./Preloader.module.scss";

interface PreloaderProps {
  size?: "small" | "medium" | "large";
}

export const Preloader: FC<PreloaderProps> = ({
  size = "medium",
}) => {
  const sizeMap = {
    small: 24,
    medium: 40,
    large: 56,
  };

  return (
    <div className={styles.preloaderContainer}>
      <div 
        className={styles.loader} 
        style={{ width: sizeMap[size], height: sizeMap[size] }}
      />
    </div>
  );
};