module.exports = {
  siteMetadata: {
    title: `Erin McGrath`,
    description: `Hi, I'm Erin, a front-end developer. I love all things web and computers. Welcome to my site :)`,
    author: `Erin McGrath`,
    siteUrl: `https://www.erinmcg.com`,
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
    `gatsby-plugin-netlify`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Erin McGrath: Front-end Developer`,
        short_name: `Erin McGrath`,
        start_url: `/`,
        background_color: `#701dc9`,
        theme_color: `#701dc9`,
        display: `minimal-ui`,
        icon: `src/images/female-technologist-favicon.png`, // This path is relative to the root of the site.
        crossOrigin: `use-credentials`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `markdown-pages`,
        path: `${__dirname}/src/markdown-pages`,
      },
    },
    `gatsby-transformer-remark`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    `gatsby-plugin-offline`,
  ],
}
