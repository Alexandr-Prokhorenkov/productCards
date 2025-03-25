import { FC } from "react";
import styles from "./Search.module.scss";
import { IconSearch } from "../../../assets/icons/SvgIcons";

interface SearchProps {
  placeholder?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const Search: FC<SearchProps> = ({
  placeholder = "Поиск...",
  value,
  onChange
}) => {
  return (
    <div className={styles.searchContainer}>
      <span className={styles.searchIcon}>
        <IconSearch />
      </span>
      <input
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className={styles.searchInput}
      />
    </div>
  );
};
