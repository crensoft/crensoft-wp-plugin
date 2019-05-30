import { FormikProps } from "formik";

/**
 * creates common props
 * @param param0
 */
export default function makeCommonProps(
  { handleChange, handleBlur, values, errors, touched }: FormikProps<any>,
  classes: any
) {
  return {
    onChange: handleChange,
    onBlur: handleBlur,
    className: classes ? classes.textField : "",
    values,
    errors,
    touched
  };
}
