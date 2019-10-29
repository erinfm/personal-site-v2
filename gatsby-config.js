module.exports = {
  siteMetadata: {
    title: `Erin McGrath`,
    description: `Hi, I'm Erin McGrath! I'm a front-end developer based in Europe. Welcome to my personal site, the land of dreams`,
    author: `Erin McGrath`,
    social: [
      {
        name: "twitter",
        url: "https://twitter.com/erinfranmc",
      },
      {
        name: "github",
        url: "https://github.com/erinfm",
      },
    ],
  },
  plugins: [
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-dark-mode`,
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
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          {
            family: `Quicksand`,
            variants: [`400`, `700`],
          },
          {
            family: `Quicksand`,
            subsets: [`latin`],
          },
        ],
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
