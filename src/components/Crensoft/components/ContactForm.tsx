import React from "react";
import { Button, Grid } from "@material-ui/core";
import { Formik } from "formik";
import Formfield from "./forms/FormField";
import makeCommonProps from "./forms/makeCommonProps";

export default function ContactForm() {
  const initialValues = {
    name: "",
    email: "",
    phone: "",
    message: ""
  };

  return (
    <Formik
      initialValues={initialValues}
      validate={values => {
        let errors: any = {};
        if (!values.email) {
          errors.email = "Email is required";
        } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
          errors.email = "Invalid email address";
        }
        if (!values.name) {
          errors.name = "Name is required";
        }
        if (values.name.length > 300) {
          errors.company = "Max length exceeded";
        }
        return errors;
      }}
      onSubmit={() => true}
    >
      {formProps => {
        const commonProps = makeCommonProps(formProps, {});
        return (
          <form>
            <Formfield label="Name" id="name" name="name" required {...commonProps} />
            <Formfield
              label="Email"
              id="email"
              name="email"
              required
              type="email"
              {...commonProps}
            />
            <Formfield label="Phone" id="phone" name="phone" type="tel" {...commonProps} />
            <Formfield
              label="Message"
              id="message"
              name="message"
              multiline
              required
              {...commonProps}
            />
            <Grid container justify="flex-end">
              <Button type="submit" variant="contained" color="primary" size="large">
                Send message
              </Button>
            </Grid>
          </form>
        );
      }}
    </Formik>
  );
}
