import { FC, useState } from "react";
import { IconArrowSelect } from "../../../assets/icons/SvgIcons";

import styles from "./Select.module.scss";

interface SelectProps {
  label?: string;
  options: { label: string; value: string }[];
  placeholder?: string;
  value: string;
  onChange: (value: string) => void;
}

export const Select: FC<SelectProps> = ({
  label,
  options,
  placeholder = "Категория",
  value,
  onChange,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const selectedLabel =
    options.find((option) => option.value === value)?.label || placeholder;

  const handleSelect = (
    e: React.MouseEvent<HTMLLIElement>,
    selectedValue: string
  ) => {
    e.stopPropagation();
    onChange(selectedValue);
    setIsOpen(false);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key === "Escape") {
      setIsOpen(false);
    }
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      setIsOpen((prev) => !prev);
    }
  };

  return (
    <div className={styles.wrapper}>
      {label && <label className={styles.label}>{label}</label>}
      <div
        className={styles.select}
        tabIndex={0}
        role="combobox"
        aria-expanded={isOpen}
        onClick={() => setIsOpen((prev) => !prev)}
        onBlur={() => setIsOpen(false)}
        onKeyDown={handleKeyDown}
      >
        <span className={styles.placeholder}>{selectedLabel}</span>
        <IconArrowSelect className={styles.icon} />

        {isOpen && (
          <ul className={styles.list}>
            {options.map((option) => (
              <li
                key={option.value}
                className={styles.item}
                onClick={(e) => handleSelect(e, option.value)}
              >
                {option.label}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};
