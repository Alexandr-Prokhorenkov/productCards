import { useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { Formik, Form } from "formik";
import { useEffect, useState } from "react";
import { AppDispatch } from "@/store/store";
import { ProductResponse } from "@/shared/api/types";
import {
  addProductAsync,
  fetchProductById,
  updateProductAsync,
} from "@/store/slices/productsSlice";
import { SELECT_OPTIONS_WITHOUT_ALL } from "@ui/Select/Select.options";
import { ButtonsActions } from "@ui/ButtonsActions/ButtonsActions";
import { useSelector } from "react-redux";
import { selectProducts } from "@/store/selectors/productsSelectors";
import { FormField } from "@/shared/ui/FormField/FormField";
import styles from "./ProductForm.module.scss";
import * as Yup from "yup";

const validationSchema = Yup.object().shape({
  title: Yup.string().required("Введите название товара"),
  description: Yup.string().required("Введите описание"),
  category: Yup.string().required("Выберите категорию"),
  image: Yup.string().url("Некорректный URL").required("Введите ссылку"),
  price: Yup.number()
    .typeError("Цена должна быть числом")
    .positive("Цена должна быть положительной")
    .required("Введите цену"),
});

interface ProductFormProps {
  mode: "create" | "edit";
}

const initialEmptyValues = {
  title: "",
  description: "",
  category: "",
  image: "",
  price: 0,
};

export const ProductForm = ({ mode }: ProductFormProps) => {
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();
  const { id } = useParams();
  const [initialValues, setInitialValues] =
    useState<Omit<ProductResponse, "id" | "rating">>(initialEmptyValues);

  const products = useSelector(selectProducts);
  const product = products.find((p) => p.id === Number(id));

  useEffect(() => {
    if (mode === "edit" && id) {
      if (product) {
        setInitialValues(product);
      } else {
        dispatch(fetchProductById(id));
      }
    } else {
      setInitialValues(initialEmptyValues);
    }
  }, [id, dispatch, product, mode]);

  const handleSubmit = (values: Omit<ProductResponse, "id" | "rating">) => {
    if (mode === "create") {
      dispatch(addProductAsync(values))
        .unwrap()
        .then(() => navigate("/"))
        .catch((error) => console.error(error));
    } else if (mode === "edit" && id) {
      dispatch(updateProductAsync({ id, product: values }))
        .unwrap()
        .then(() => navigate("/"))
        .catch((error) => console.error(error));
    }
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>
        {mode === "create" ? "Добавить продукт" : "Редактировать продукт"}
      </h2>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
        enableReinitialize
      >
        {({ isSubmitting }) => (
          <Form className={styles.form}>
            <FormField
              name="title"
              label="Название товара"
              placeholder="Введите название товара"
              type="text"
            />
            <FormField
              name="description"
              label="Описание товара"
              placeholder="Описание товара"
              type="textarea"
            />
            <FormField
              name="category"
              label="Выберите категорию"
              type="select"
              options={SELECT_OPTIONS_WITHOUT_ALL}
            />
            <FormField
              name="image"
              label="Фотография товара"
              placeholder="Введите ссылку на фото"
              type="text"
            />
            <FormField
              name="price"
              label="Цена товара"
              placeholder="Введите цену"
              type="number"
            />
            <ButtonsActions
              isSubmitting={isSubmitting}
              onCancel={() => navigate("/")}
            />
          </Form>
        )}
      </Formik>
    </div>
  );
};
