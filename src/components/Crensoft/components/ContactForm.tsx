import React from "react";
import { Button, Grid, Card, CardContent } from "@material-ui/core";
import axios from "axios";
import { Formik } from "formik";
import Formfield from "./forms/FormField";
import makeCommonProps from "./forms/makeCommonProps";
import { green, red } from "@material-ui/core/colors";

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
      onSubmit={(values, { setSubmitting, setStatus, resetForm }) => {
        axios
          .post("/wp-json/crensoft/v1/contact", values)
          .then(function({ status }) {
            setSubmitting(false);
            if (status !== 200) {
              setStatus({ err: true, msg: "Something went wrong. Try again later" });
              throw new Error("unexpected error");
            }
            setStatus({
              msg: "Thank you for your submission! We usually respond within 48 hours."
            });
            // resetForm();
          })
          .catch(function(error) {
            setSubmitting(false);
            setStatus({ err: true, msg: "Something went wrong. Try again later" });
            console.log(error);
          });
      }}
    >
      {({ status, ...formProps }) => {
        const commonProps = makeCommonProps(formProps, {});
        return (
          <form onSubmit={formProps.handleSubmit}>
            {status && <FormMessage {...status} />}
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
              <Button
                type="submit"
                disabled={formProps.isSubmitting}
                variant="contained"
                color="primary"
                size="large"
              >
                {formProps.isSubmitting ? "Sending..." : "Send message"}
              </Button>
            </Grid>
          </form>
        );
      }}
    </Formik>
  );
}

function FormMessage({ msg, err }: { msg?: string; err?: boolean }) {
  const style = {
    backgroundColor: err ? red[500] : green[500],
    color: "#fff"
  };
  return (
    <Card elevation={0} style={style}>
      <CardContent>{msg}</CardContent>
      {/* fix padding */}
      <div />
    </Card>
  );
}
