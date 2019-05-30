import React from "react";
import {
  Container,
  Row,
  Col,
  createStyles,
  Spacer,
  IconList,
  LinkList,
  ScrollTop
} from "@crensoft/mui-core";
import { Typography, IconButton, Divider } from "@material-ui/core";
import { useTheme } from "@material-ui/styles";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faEnvelope, faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
import { faFacebookF, faInstagram, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ContainerProps } from "@crensoft/mui-core/lib/components/Layout/Container";
import { AppTheme } from "@crensoft/mui-core/lib/components/Theme/muiTheme";
import { useMobile } from "@crensoft/mui-core/lib/hooks";

library.add(faFacebookF, faInstagram, faTwitter, faEnvelope, faMapMarkerAlt);

const makeSocialBtn = (icon: any, className: string, link: string) => (
  <IconButton className={className} href={link} target="_blank" rel="noopener noreferrer">
    <FontAwesomeIcon color="#333" icon={["fab", icon]} size="xs" fixedWidth aria-hidden />
  </IconButton>
);

const useStyles = createStyles(
  theme => ({
    root: {
      paddingTop: theme.spacing(5.4),
      paddingBottom: 0,
      position: "relative",
      color: "rgba(255,255,255,.81)",
      display: "flex",
      flexDirection: "column",
      minHeight: 300,
      "& button": {
        color: theme.palette.primary.light
      },
      "& svg": {
        color: theme.palette.primary.light
      }
    },
    SocialBtn: {
      width: 36,
      height: 36,
      padding: 0,
      border: "1.2px solid rgba(255, 255, 255, 0.33)",
      borderColor: theme.palette.primary.light,
      "&:hover": {
        borderColor: theme.palette.primary.main,
        color: theme.palette.primary.main
      },
      "& + &": {
        marginLeft: 15
      }
    },
    heading: {
      marginBottom: theme.spacing(1.5)
    },
    scrollTop: {},
    divider: {
      backgroundColor: "rgba(255,255,255,.3)"
    },
    layout: {
      margin: "auto",
      textAlign: "center"
    },
    content: {
      "& + &": {
        marginTop: theme.spacing(3),
        [theme.breakpoints.up("sm")]: {
          marginTop: 0
        }
      }
    },
    legal: {
      paddingTop: theme.spacing(2),
      [theme.breakpoints.up("sm")]: {
        paddingTop: 0
      }
    },
    copyright: {
      paddingTop: theme.spacing(2),
      paddingBottom: theme.spacing(3),
      [theme.breakpoints.up("sm")]: {
        paddingTop: 0,
        paddingBottom: 0
      }
    }
  }),
  {
    name: "MuiFooter"
  }
);

export default function Footer({}) {
  const classes = useStyles();
  const theme = useTheme<AppTheme>();
  const isMobile = useMobile();
  const style = {
    backgroundColor: theme.palette.neutral.dark
  };

  const contactItems = [
    {
      icon: "envelope",
      content: <Typography variant="body2">hello@crensoft.com</Typography>
    },
    {
      icon: "map-marker-alt",
      content: <Typography variant="body2">East Cleveland, OH</Typography>
    }
  ];

  const legalLinks = [
    {
      to: "/privacy",
      content: "Privacy Policy"
    },
    {
      to: "/terms",
      content: "Terms of Service"
    }
  ];

  const containerProps: ContainerProps = {
    center: true,
    maxWidth: "lg"
  };

  const footerLinks = [
    <div key="copyright" className={`${classes.layout} ${classes.copyright}`}>
      <Typography variant="caption">
        &copy; {new Date().getFullYear()} Crensoft.com All rights reserved.
      </Typography>
    </div>,
    <div key="legal" className={`${classes.layout} ${classes.legal}`}>
      <LinkList links={legalLinks} />
    </div>
  ];
  if (isMobile) {
    footerLinks.reverse();
  }
  return (
    <footer style={style} className={classes.root}>
      <Container {...containerProps}>
        <ScrollTop className={classes.scrollTop} />
        <Spacer val={3} />
        <Row>
          <Col className={classes.content} xs={12} sm={6}>
            <Row>
              <div className={classes.layout}>
                <Typography className={classes.heading} variant="h4">
                  Contact us
                </Typography>
                <IconList items={contactItems} />
              </div>
            </Row>
          </Col>
          <Col className={classes.content} xs={12} sm={6}>
            <Row>
              <div className={classes.layout}>
                <Typography className={classes.heading} variant="h4">
                  Follow us
                </Typography>
                <Spacer val={1} />
                <div>
                  {makeSocialBtn(
                    "facebook-f",
                    classes.SocialBtn,
                    "https://www.facebook.com/crensoft/"
                  )}
                  {makeSocialBtn("twitter", classes.SocialBtn, "https://twitter.com/crensoftware")}
                  {makeSocialBtn(
                    "instagram",
                    classes.SocialBtn,
                    "https://www.instagram.com/crensoftware/"
                  )}
                </div>
              </div>
            </Row>
          </Col>
        </Row>
      </Container>
      <FooterDivider className={classes.divider} />
      <Container {...containerProps} style={{ display: "flex", flexGrow: 1 }}>
        <Row alignItems="center">
          <Col xs={12}>
            <Row justify="space-between">{footerLinks}</Row>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

type FooterDividerProps = {
  light?: boolean;
  className?: string;
};
function FooterDivider({ light, className }: FooterDividerProps) {
  return (
    <div>
      <Spacer val={4} />
      <Divider className={className} light={light} />
    </div>
  );
}
