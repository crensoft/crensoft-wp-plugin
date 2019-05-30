import React from "react";
import { Row, Col } from "@crensoft/mui-core";
import { renderMap } from "@crensoft/mui-utils";
import { useTheme } from "@material-ui/styles";
import { AppTheme } from "@crensoft/mui-core/lib/components/Theme/muiTheme";
import { Intro } from "@crensoft/mui-marketing";

export default function ProjectProcess() {
  const theme = useTheme<AppTheme>();
  const sharedProps = {
    inline: true,
    iconSize: "lg",
    iconColor: theme.palette.actions.cta,
    md: true,
    condensed: true
  };
  const items = [
    {
      key: "plan",
      content: (
        <Intro
          {...sharedProps}
          icon="project-diagram"
          title="Plan"
          body="We conduct research and find the best way to proceed."
        />
      )
    },
    {
      key: "design",
      content: (
        <Intro
          {...sharedProps}
          icon="ruler-combined"
          title="Design"
          body="We iterate over mockups and prototypes to arrive at a final design."
        />
      )
    },
    {
      key: "build",
      content: (
        <Intro
          {...sharedProps}
          icon="tools"
          title="Build"
          body="We craft your site using latest tech and the best software principles."
        />
      )
    },
    {
      key: "deploy",
      content: (
        <Intro
          {...sharedProps}
          icon="rocket"
          title="Deploy"
          body="We launch your site and provide ongoing bug fixes and support."
        />
      )
    }
  ];

  const renderRows = renderMap<{ content: any; key: string }>(({ content, key }) => (
    <Row key={key} spacing={1}>
      <Col>{content}</Col>
    </Row>
  ));
  return <div>{renderRows(items)}</div>;
}

{
  /* <ul>
        <li>Plan</li>
        <li>Design</li>
        <li>Build</li>
        <li>Deploy</li>
      </ul> */
}
