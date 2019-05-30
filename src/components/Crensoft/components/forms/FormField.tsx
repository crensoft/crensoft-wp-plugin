import React from "react";
import TextField, { TextFieldProps } from "@material-ui/core/TextField";
import { createStyles } from "@crensoft/mui-core";
import MaskedInput from "react-text-mask";

const useStylesReddit = createStyles(
  theme => ({
    "@global": {
      ".Mui-focused.MuiInputLabel-root": {
        color: "#999 !important"
      },
      textarea: {
        minHeight: 90
      }
    },
    root: {
      border: "1px solid #e2e2e1",
      overflow: "hidden",
      borderRadius: 4,
      transition: theme.transitions.create(["border-color", "box-shadow"]),
      backgroundColor: "#ffffff",
      "&:hover": {
        backgroundColor: "#fff"
      },
      "&$focused": {
        backgroundColor: "#fff"
        // // @ts-ignore
        // boxShadow: `${fade(darken(theme.palette.getColor("neutral"), 0.3), 0.25)} 0 0 0 2px`,
        // borderColor: darken(theme.palette.getColor("neutral"), 0.3)
      }
    },
    focused: {}
  }),
  {
    name: "MuiRedditText"
  }
);

/**
 * Creates text field
 * @param param0
 */
export default function FormField({ values, errors, touched, name, className, ...props }: any) {
  const showErr = touched[name] && errors[name];

  const calcProps: any = {};
  if (props.type === "tel") {
    calcProps.InputProps = {
      inputComponent: PhoneField
    };
  }
  return (
    <RedditTextField
      {...props}
      {...calcProps}
      name={name}
      error={touched[name] && Boolean(errors[name])}
      value={values[name]}
      margin="normal"
      fullWidth
      FormHelperTextProps={{
        component: showErr || typeof props.helperText === "string" ? "p" : "div"
      }}
      helperText={showErr ? errors[name] : props.helperText}
    />
  );
}

function RedditTextField({ style, InputProps, ...props }: any) {
  const classes = useStylesReddit();
  return (
    <TextField
      InputProps={{ classes, style, disableUnderline: true, ...InputProps }}
      {...props}
      fullWidth
      variant="filled"
      margin="normal"
    />
  );
}

function PhoneField(props: any) {
  const { inputRef, ...other } = props;

  return (
    <MaskedInput
      {...other}
      ref={(ref: any) => {
        inputRef(ref ? ref.inputElement : null);
      }}
      mask={[
        "+",
        "1",
        " ",
        "(",
        /[1-9]/,
        /\d/,
        /\d/,
        ")",
        " ",
        /\d/,
        /\d/,
        /\d/,
        "-",
        /\d/,
        /\d/,
        /\d/,
        /\d/
      ]}
      placeholderChar={"\u2000"}
      // showMask
    />
  );
}
