import React from "react";
import { GridList, GridListTile } from "@material-ui/core";
import { Img, Link, createStyles } from "@crensoft/mui-core";
import { renderMap } from "@crensoft/mui-utils";
import MongoDB from "./svgs/MongoDB";
import Docker from "./svgs/Docker";
import GoogleCloud from "./svgs/GoogleCloud";
import MySQL from "./svgs/MySQL";
import NodeJs from "./svgs/NodeJs";
import PHP from "./svgs/PHP";
import ReactSvg from "./svgs/ReactJs";
import WordPress from "./svgs/Wordpress";
import Redis from "./svgs/Redis";

const useStyles = createStyles(
  theme => ({
    item: {
      marginTop: theme.spacing(1),
      marginBottom: theme.spacing(3)
    }
  }),
  {
    name: "MuiTechList"
  }
);

export default function TechList() {
  const items = [
    {
      cols: 5,
      title: "Wordpress",
      url: "https://wordpress.org/",
      logo: <WordPress />
    },
    {
      cols: 3,
      title: "React",
      url: "https://reactjs.org/",
      logo: <ReactSvg />
    },
    {
      title: "NodeJS",
      url: "https://nodejs.org/",
      logo: <NodeJs />
    },
    {
      title: "PHP",
      url: "https://php.net/",
      logo: <PHP />
    },
    {
      title: "MySQL",
      url: "https://www.mysql.com/",
      logo: <MySQL />
    },
    {
      title: "Redis",
      url: "https://redis.io/",
      logo: <Redis />
    },
    {
      title: "GoogleCloud",
      url: "https://cloud.google.com/",
      logo: <GoogleCloud />
    },
    {
      title: "Docker",
      url: "https://www.docker.com/",
      logo: <Docker />
    },
    {
      title: "MongoDB",
      url: "https://www.mongodb.com/",
      logo: <MongoDB />
    }
  ];
  const classes = useStyles();
  const height = 45;
  const renderLogos = renderMap(({ title, url, logo, cols }) => (
    <GridListTile className={classes.item} cols={cols || 4} key={title}>
      <Link title={title} to={url}>
        <Img svg={logo} alt={title} height={height} />
      </Link>
    </GridListTile>
  ));
  return (
    <GridList cellHeight={height} cols={12} spacing={15}>
      {renderLogos(items)}
    </GridList>
  );
}

{
  /* <ul>
      <li>ReactJs</li>
      <li>Wordpress</li>
      <li>NodeJs</li>
      <li>PHP</li>
      <li>Laravel</li>
      <li>VueJs</li>
      <li>Sass</li>
      <li>MySQL</li>
      <li>Redis</li>
      <li>MongoDB</li>
      <li>PostgreSQL</li>
      <li>CodeIgniter</li>
      <li>WooCommerce</li>
      <li>Ruby on Rails</li>
      <li>Docker</li>
      <li>Google Cloud</li>
      <li>Git</li>
      <li>Paypal</li>
    </ul> */
}
