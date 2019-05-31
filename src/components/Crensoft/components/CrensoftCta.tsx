import React from "react";
import { CTA } from "@crensoft/mui-marketing";

const cta = {
  title: "Ready for a power up?",
  body: `The development process is free to the
  prototype stage. Prototype development usually takes 2-3 weeks.`,
  lg: true,
  actions: [
    {
      content: "Get started",
      to: "/contact",
      prominent: true,
      cta: true,
      large: true
    }
  ]
};

export default function CrensoftCta() {
  return <CTA center whitespace {...cta} />;
}
