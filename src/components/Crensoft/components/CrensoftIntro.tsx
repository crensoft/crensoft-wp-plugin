import React from "react";
import { Spacer } from "@crensoft/mui-core";
import HeroSvg from "./svgs/Placeholder";
import { MarketSection, Highlight, PainPoint } from "@crensoft/mui-marketing";

const intro = {
  icon: "bolt",
  title: "Get an edge on the competition.",
  body: `We'll help bring your unique and important vision to \
  life. We focus on innovation, analysis, and rapid iteration to help you \
  stay ahead of ever changing user demand and emerging technology.`,
  main: true,
  center: true
};

const highlightShared = {
  divider: true,
  dividerColor: "primary.dark",
  lg: true
};
const highlights = [
  {
    padding: 5,
    title: "Brand tailored",
    body: `We design for your unique brand and business needs. Your website should \
    fully embrace your brand's identity, values and personality. Convert users \
    into loyalists by offering relatable and inspiring branding.`,
    ...highlightShared
  },
  {
    padding: 5,
    title: "Market focused",
    body: `Your customers have a problem and you have the solution. A functional \
    website should provide value to your target market in a timely, straight-forward, and \
    intuitive way.`,
    ...highlightShared
  },
  {
    padding: 5,
    title: "Performant",
    body: `We leverage the latest tech and best practices to ensure \
    your website is fast, mobile optimized, and scalable. Quick page loads \
    and a fluid experience mean happier users.`,
    ...highlightShared
  }
];

export default function CrensoftIntro() {
  return (
    <MarketSection whitespace intro={intro}>
      <Spacer val={10} />
      {highlights.map((highlight, key) => (
        <Highlight
          whitespaceXs
          key={key}
          centerItems
          flip={Boolean(key % 2)}
          illustration={<HeroSvg />}
        >
          <PainPoint {...highlight} />
        </Highlight>
      ))}
    </MarketSection>
  );
}
