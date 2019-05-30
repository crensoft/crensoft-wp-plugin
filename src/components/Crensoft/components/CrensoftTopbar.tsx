import React from "react";
import AppBar from "@crensoft/mui-core/lib/components/AppBar/AppBar";
import AppBarLogo from "@crensoft/mui-core/lib/components/AppBar/components/AppBarLogo";
import AppMenu from "@crensoft/mui-core/lib/components/AppBar/components/AppMenu";
import Logo from "./svgs/Logo";
import { filter } from "ramda";
import { Link } from "@crensoft/mui-core";

const menus = [
  [
    // {
    //   title: 'Pricing',
    // },
    // {
    //   title: 'Portfolio',
    // },
    // {
    //   title: 'About',
    // },
    {
      key: "contact",
      title: "contact us",
      btn: {
        cta: true,
        prominent: true
      }
    }
  ]
];

export default function CrensoftTopbar(props: any) {
  const filterMenus = filter((item: any) => item.key !== props.activeKey, menus[0]);
  return (
    <AppBar large scrollTarget="site-wrapper">
      <Link style={{ display: "flex", flexGrow: 1 }} to="/">
        <AppBarLogo {...props} svg={<Logo />} />
      </Link>
      <AppMenu menu={filterMenus} />
    </AppBar>
  );
}