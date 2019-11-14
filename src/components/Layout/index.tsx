/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react";
// import { useStaticQuery, graphql } from "gatsby";
import { ThemeProvider } from "styled-components";

import NavbarParent from "../NavbarParent";
import FooterParent from "../FooterParent";

import theme from "../../styles/theme.json";

export interface LayoutProps extends React.HTMLAttributes<HTMLElement> {
  defaultIsTop?: boolean;
}

const nav = [
  {
    label: "Home",
    href: "/",
    disabled: false,
    hover: false
  },
  {
    label: "Portfolio",
    href: "https://www.github.com/haldunanil-portfolio/",
    disabled: false,
    hover: false
  },
  {
    label: "Blog",
    href: "#",
    disabled: true,
    hover: false
  },
  {
    label: "DJ",
    href: "#",
    disabled: true,
    hover: false
  },
  {
    label: "About",
    href: "/about",
    disabled: false,
    hover: false
  }
];

const Layout: React.SFC<LayoutProps> = ({
  children,
  defaultIsTop
}: LayoutProps) => {
  // const data = useStaticQuery(graphql`
  //   query SiteTitleQuery {
  //     site {
  //       siteMetadata {
  //         title
  //       }
  //     }
  //   }
  // `);

  return (
    <ThemeProvider theme={theme}>
      <NavbarParent data={nav} defaultIsTop={defaultIsTop} />
      <main>{children}</main>
      <FooterParent data={nav} />
    </ThemeProvider>
  );
};

export default Layout;
