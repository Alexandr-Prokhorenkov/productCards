import { Field, FieldProps } from "formik";
import { CustomErrorMessage } from "@/shared/ui/ErrorMessage/ErrorMessage";
import { Input } from "@ui/Input/Input";
import { TextAreaInput } from "@ui/TextAreaInput/TextAreaInput";
import { FormikSelect } from "@ui/FormikSelect/FormikSelect";
import styles from "./FormField.module.scss";

interface FormFieldProps {
  name: string;
  label: string;
  type?: string;
  placeholder?: string;
  options?: { label: string; value: string }[];
}

export const FormField = ({ name, label, type = "text", placeholder, options }: FormFieldProps) => {
  const renderField = (field: FieldProps) => {
    if (type === "textarea") {
      return <TextAreaInput {...field} />;
    }
    if (type === "select") {
      return <FormikSelect name={name} {...field} options={options!} />;
    }
    return <Input {...field} type={type} placeholder={placeholder} label={label} />;
  };

  return (
<div className={`${styles.fieldWrapper} ${type === "number" ? styles.halfWidth : ""}`}>
  <label className={styles.label} htmlFor={name}>{label}</label>
  <Field name={name}>
    {({ field, meta, form }: FieldProps) => {
      return renderField({ field, meta, form });
    }}
  </Field>
  <CustomErrorMessage name={name} />
</div>
  );
};
