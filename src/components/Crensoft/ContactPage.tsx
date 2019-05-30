import React from "react";
import { createStyles, Theme, Content, Container } from "@crensoft/mui-core";
import { theme } from "./config";
import CrensoftTopbar from "./components/CrensoftTopbar";
import Footer from "./components/Footer";
import { MarketSection } from "@crensoft/mui-marketing";
import ContactForm from "./components/ContactForm";

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
    name: "MuiContact"
  }
);

export default function ContactPage() {
  const classes = useStyles();
  return (
    <Theme theme={theme}>
      <div className={classes.root}>
        <CrensoftTopbar activeKey="contact" />
        <MarketSection
          whitespaceSm
          bgColor="neutral"
          intro={{
            title: "Contact Us",
            center: true
          }}
        />
        <div className={classes.content}>
          <Container maxWidth="sm" center>
            <Content>
              <ContactForm />
            </Content>
          </Container>
        </div>
        <Footer />
      </div>
    </Theme>
  );
}
