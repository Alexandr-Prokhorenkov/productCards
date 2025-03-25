import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { Formik, Form, Field } from "formik";
import { useEffect, useState } from "react";
import { AppDispatch, RootState } from "@/store/store";
import { ProductResponse } from "@api/types";
import { fetchProductById, updateProductAsync } from "@/store/productsSlice";
import { TextAreaInput } from "@ui/TextAreaInput/TextAreaInput";
import { Input } from "@ui/Input/Input";
import { FormikSelect } from "@ui/FormikSelect/FormikSelect";
import { SELECT_OPTIONS_WITHOUT_ALL } from "@ui/Select/Select.options";
import { ButtonsActions } from "@ui/ButtonsActions/ButtonsActions";
import styles from "./EditProduct.module.scss";
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

export const EditProduct = () => {
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();
  const { id } = useParams();
  const [initialValues, setInitialValues] = useState<ProductResponse | null>(null);

  const product = useSelector((state: RootState) => {
    const productId = id ? Number(id) : undefined;
    return state.products.products.find((product) => product.id === productId);
  });

  useEffect(() => {
    if (id && !product) {
      dispatch(fetchProductById(id)).unwrap().then((fetchedProduct) => {
        setInitialValues(fetchedProduct);
      });
    } else if (product) {
      setInitialValues(product);
    }
  }, [id, dispatch, product]);

  const handleSubmit = (values: Omit<ProductResponse, "id" | "rating">) => {
    if (id) {
      dispatch(updateProductAsync({ id, product: values }))
        .unwrap()
        .then(() => navigate('/products'))
        .catch((error) => console.error(error));
    }
  };

  if (!initialValues) {
    return <div>Загрузка данных...</div>;
  }

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Редактировать продукт</h2>
      <Formik
        initialValues={{
          title: initialValues.title,
          description: initialValues.description,
          category: initialValues.category,
          image: initialValues.image,
          price: initialValues.price,
        }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ errors, touched, isSubmitting }) => (
          <Form className={styles.form}>
            <div className={styles.fieldWrapper}>
              <Field
                name="title"
                component={Input}
                label="Название товара"
                placeholder="Введите название товара"
              />
              {errors.title && touched.title && (
                <div className={styles.error}>{errors.title}</div>
              )}
            </div>
            <div className={styles.fieldWrapper}>
              <Field
                name="description"
                component={TextAreaInput}
                label="Описание товара"
              />
              {errors.description && touched.description && (
                <div className={styles.error}>{errors.description}</div>
              )}
            </div>
            <div className={styles.fieldWrapper}>
              <FormikSelect
                name="category"
                label="Выберите категорию"
                options={SELECT_OPTIONS_WITHOUT_ALL}
              />
            </div>
            <div className={styles.fieldWrapper}>
              <Field
                name="image"
                component={Input}
                label="Фотография товара"
                placeholder="Введите ссылку на фото"
              />
              {errors.image && touched.image && (
                <div className={styles.error}>{errors.image}</div>
              )}
            </div>
            <div className={styles.fieldWrapper}>
              <Field
                name="price"
                component={Input}
                label="Цена товара"
                placeholder="Введите цену"
                type="number"
              />
              {errors.price && touched.price && (
                <div className={styles.error}>{errors.price}</div>
              )}
              <ButtonsActions
                isSubmitting={isSubmitting}
                onCancel={() => navigate('/products')}
              />
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};
