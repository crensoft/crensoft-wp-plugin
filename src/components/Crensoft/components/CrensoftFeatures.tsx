import React from "react";
import { Spacer, IconList, Content } from "@crensoft/mui-core";
import { FeaturedList, MarketSection } from "@crensoft/mui-marketing";
import TechList from "./TechList";
import ProjectProcess from "./ProjectProcess";
import { theme } from "../config";

const featureIntro = {
  title: "At a glance",
  body: "",
  center: true,
  titleColor: "rgba(255,255,255,.9)"
};

const features = [
  {
    title: "Services",
    body: "Simple & affordable.",
    children: (
      <Content verticalList>
        <IconList
          bullet="check-circle"
          bulletColor={theme.palette.actions.cta}
          items={[
            {
              content: "Web design & development"
            },
            {
              content: "Ecommerce"
            },
            {
              content: "Custom web applications"
            },
            {
              content: "Complementary branding"
            },
            {
              content: "Digital marketing & SEO"
            },
            {
              content: "Business emails"
            }
          ]}
        />{" "}
      </Content>
    )
  },
  {
    title: "Tech",
    body: "An evolving software stack.",
    children: (
      <Content>
        <TechList />
      </Content>
    )
  },
  {
    title: "Process",
    body: "Plans are worthless, but planning is everything.",
    children: (
      <Content body>
        <ProjectProcess />
      </Content>
    )
  }
];

export default function CrensoftFeatures() {
  return (
    <MarketSection
      bgImage="/photos/cleveland.jpg"
      bgColor="#ddd"
      bgFixed
      overlay
      whitespace
      maxWidth="lg"
      mobileCollapse
      intro={featureIntro}
    >
      <Spacer val={5} />
      <FeaturedList cards features={features} />
    </MarketSection>
  );
}
