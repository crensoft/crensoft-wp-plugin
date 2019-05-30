import React from "react";
import { storiesOf, addDecorator } from "@storybook/react";
// @ts-ignore
import { Button } from "@storybook/react/demo";
import Crensoft from "../src/components/Crensoft/Crensoft";
import Logo from "../src/components/Crensoft/components/svgs/Logo";
import ContactPage from "../src/components/Crensoft/ContactPage";

// addDecorator(storyFn => <AppLayout>{storyFn()}</AppLayout>);

const menus = [
  [
    {
      title: "Pricing"
    },
    {
      title: "Portfolio"
    },
    {
      title: "About"
    },
    {
      title: "contact us",
      btn: {
        variant: "contained",
        color: "primary"
      }
    }
  ]
];

storiesOf("Crensoft", module).add("Welcome Page", () => {
  return <Crensoft logo={<Logo />} />;
});

storiesOf("Crensoft", module).add("Contact Page", () => {
  return <ContactPage />;
});

// storiesOf("WelcomePage", module).add("default", () => <WelcomeLayout />);

storiesOf("Button", module)
  .add("with text", () => <Button>Hello Button</Button>)
  .add("with emoji", () => (
    <Button>
      <span role="img" aria-label="so cool">
        😀 😎 👍 💯
      </span>
    </Button>
  ));
