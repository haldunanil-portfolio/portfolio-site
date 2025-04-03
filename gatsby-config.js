module.exports = {
  siteMetadata: {
    title: `Haldun Anil`,
    description: `Personal website and portfolio for Haldun Anil, software developer, DJ / EDM enthusiast, and world traveler.`,
    author: `@halsdunes`,
  },
  pathPrefix: `/portfolio-site`,
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `haldunanil-dot-com`,
        short_name: `ha`,
        start_url: `/`,
        background_color: `#0267C1`,
        theme_color: `#0267C1`,
        display: `minimal-ui`,
        icon: `src/images/ha-icon.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-typescript`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
};
