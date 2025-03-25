import styles from "./Divider.module.scss";
import clsx from "clsx";

interface DividerProps {
  className?: string;
  style?: React.CSSProperties;
}

export const Divider: React.FC<DividerProps> = ({ className, style }) => {
  return <hr className={clsx(styles.divider, className)} style={style} />;
};