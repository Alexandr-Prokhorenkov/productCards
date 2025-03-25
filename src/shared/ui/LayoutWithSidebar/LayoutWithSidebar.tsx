import { FC } from "react";
import styles from './LayoutWithSidebar.module.scss'

interface LayoutWithSidebarProps {
  sidebar: React.ReactNode;
  children: React.ReactNode;
}

export const LayoutWithSidebar:FC<LayoutWithSidebarProps> = ({ sidebar, children }) => {
  return (
    <div className={styles.container}>
      <aside className={styles.sidebar}>
        {sidebar}
      </aside>
      <main className={styles.main}>
        {children}
      </main>
    </div>
  );
};
