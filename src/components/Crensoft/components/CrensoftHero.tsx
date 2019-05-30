import React from "react";
import { Hero } from "@crensoft/mui-marketing";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { createStyles } from "@crensoft/mui-core";
import HeroSvg from "./svgs/Placeholder";

// Spark your vision/dream

const hero = {
  centerItems: true,
  page: true,
  title: "Spark your dreams.",
  body: "Premium, modern and scalable software design & development. \nWebsites start at $1,500.",
  actions: [
    {
      content: "Get started",
      url: "#contact",
      prominent: true,
      cta: true,
      large: true
    }
  ],
  illustration: <HeroSvg />
};

export const Hero1 = () => (
  <div>
    {/* <Clouds /> */}
    <Hero {...hero} />
  </div>
);

const useStyles = createStyles(
  {
    clouds: {
      position: "absolute",
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      overflow: "hidden",
      transform: "translateZ(0)"
    },
    cloud: {
      position: "absolute",
      top: "20%",
      width: "300px",
      left: 15,
      opacity: 1,
      animationName: "$clouds",
      animationTimingFunction: "linear",
      animationDirection: "forwards",
      animationIterationCount: "infinite",
      animationDuration: "30s",
      willChange: "transform",
      transitionDelay: "1.5s"
    },
    cloud1: {
      // big front
      zIndex: 9,
      width: 500,
      top: "22%",
      left: 0
      // marginLeft: 250,
    },
    cloudSm1: {
      // small distant
      zIndex: 1,
      // marginLeft: 500,
      top: "50%",
      left: 12,
      width: 150,
      animationDuration: "24s",
      transitionDelay: ".9s"
    },
    cloudXs1: {
      // smaller background
      top: "20%",
      zIndex: 1,
      animationDuration: "18s",
      transitionDelay: ".6s"
    },
    "@keyframes clouds": {
      from: {
        opacity: 0.7,
        transform: "translateX(-3vh)"
      },
      to: {
        opacity: 0,
        transform: "translateX(100vw)"
      }
    }
  },
  {
    name: "MuiCloud"
  }
);

function Clouds() {
  const style: any = {
    backgroundImage: "url(/illustrations/cloudbg.svg)",
    backgroundSize: "100%",
    position: "absolute",
    top: "-20vh",
    /* bottom: 0; */
    left: 0,
    right: 0,
    height: "100vw",
    width: "100%",
    backgroundPosition: "center center",
    backgroundRepeat: "no-repeat",
    opacity: 0.5
  };
  const classes = useStyles();
  return (
    <div style={style}>
      <div className={classes.clouds}>
        <FontAwesomeIcon size="8x" className={`${classes.cloud} ${classes.cloud1}`} icon="cloud" />
        <FontAwesomeIcon
          size="6x"
          className={`${classes.cloud} ${classes.cloudSm1}`}
          icon="cloud"
        />
        <FontAwesomeIcon
          size="4x"
          className={`${classes.cloud} ${classes.cloudXs1}`}
          icon="cloud"
        />
      </div>
    </div>
  );
}
