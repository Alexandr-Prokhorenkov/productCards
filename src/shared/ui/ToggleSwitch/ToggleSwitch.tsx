import { useState } from "react";
import styles from './ToggleSwitch.module.scss'

interface ToggleSwitchProps {
  label: string;
  checked?: boolean;
  onChange?: (checked: boolean) => void;
}

export const ToggleSwitch: React.FC<ToggleSwitchProps> = ({
  label,
  checked = false,
  onChange,
}) => {
  const [isChecked, setIsChecked] = useState(checked);

  const handleToggle = () => {
    setIsChecked((prev) => !prev);
    if (onChange) {
      onChange(!isChecked);
    }
  };

  return (
    <label className={styles.toggleSwitch}>
      <input
        type="checkbox"
        className={styles.toggleSwitch__input}
        checked={isChecked}
        onChange={handleToggle}
      />
      <div
        className={`${styles.toggleSwitch__track} ${
          isChecked ? styles["toggleSwitch__track--checked"] : ""
        }`}
      >
        <div
          className={`${styles.toggleSwitch__thumb} ${
            isChecked ? styles["toggleSwitch__thumb--checked"] : ""
          }`}
        />
      </div>
      <span className={styles.toggleSwitch__label}>{label}</span>
    </label>
  );
};
