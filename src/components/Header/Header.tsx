import styles from "./Header.module.scss";

export const Header = () => {
  return (
    <div className={styles.container}>
      <div className={styles.headerWrapper}>
      <div className={styles.logo}>Product Cards</div>
      </div>
    </div>
  );
};
