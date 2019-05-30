import React from "react";
import { createStyles, Theme } from "@crensoft/mui-core";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faCheckCircle,
  faBolt,
  faProjectDiagram,
  faRulerCombined,
  faTools,
  faRocket,
  faCloud
} from "@fortawesome/free-solid-svg-icons";
import { theme } from "./config";
import { Hero1 as CrensoftHero } from "./components/CrensoftHero";
import CrensoftTopbar from "./components/CrensoftTopbar";
import CrensoftIntro from "./components/CrensoftIntro";
import CrensoftFeatures from "./components/CrensoftFeatures";
import Footer from "./components/Footer";
import CrensoftCta from "./components/CrensoftCta";

library.add(faCheckCircle, faBolt, faProjectDiagram, faRulerCombined, faTools, faRocket, faCloud);

type Props = any;
const useStyles = createStyles(
  {
    root: {
      backgroundColor: "#fff"
    }
  },
  {
    name: "MuiCrensoft"
  }
);

export default function Crensoft({ logo }: Props) {
  const logoProps: any = {};
  if (typeof logo === "string") {
    logoProps.img = logo;
  } else {
    logoProps.svg = logo;
  }
  const classes = useStyles();
  return (
    <Theme theme={theme}>
      <div className={classes.root}>
        <CrensoftTopbar {...logoProps} />
        <CrensoftHero />
        <CrensoftIntro />
        <CrensoftFeatures />
        <CrensoftCta />
        <Footer />
      </div>
    </Theme>
  );
}
