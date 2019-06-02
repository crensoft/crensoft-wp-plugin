import React from "react";
import { createStyles, Theme } from "@crensoft/mui-core";
import { theme } from "./config";
import CrensoftTopbar from "./components/CrensoftTopbar";
import Footer from "./components/Footer";
import { MarketSection } from "@crensoft/mui-marketing";

const useStyles = createStyles(
  {
    root: {
      backgroundColor: "#fff",
      minHeight: "100vh",
      display: "flex",
      flexDirection: "column"
    },
    content: {
      display: "flex",
      flexGrow: 1,
      paddingTop: 25,
      paddingBottom: 75
    }
  },
  {
    name: "MuiPageTemplate"
  }
);

export default function PageTemplate({
  title,
  children,
  activeKey
}: {
  title: string;
  children: React.ReactNode;
  activeKey?: string;
}) {
  const classes = useStyles();
  return (
    <Theme theme={theme}>
      <div className={classes.root}>
        <CrensoftTopbar activeKey={activeKey} />
        <MarketSection
          whitespaceSm
          bgColor="neutral"
          intro={{
            title,
            center: true
          }}
        />
        <div className={classes.content}>{children}</div>
        <Footer />
      </div>
    </Theme>
  );
}
