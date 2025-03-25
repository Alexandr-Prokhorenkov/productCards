import { useField } from "formik";
import { Select } from "../Select/Select";
import styles from "./FormikSelect.module.scss";

interface FormikSelectProps {
  name: string;
  label?: string;
  options: { label: string; value: string }[];
}

export const FormikSelect: React.FC<FormikSelectProps> = ({ label, options, ...props }) => {
  const [field, meta, helpers] = useField(props);

  return (
    <div className={styles.fieldWrapper}>
      <Select
        label={label}
        options={options}
        value={field.value}
        onChange={(value) => helpers.setValue(value)}
      />
      {meta.touched && meta.error && <div className={styles.error}>{meta.error}</div>}
    </div>
  );
};
