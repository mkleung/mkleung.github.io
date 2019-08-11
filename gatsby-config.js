module.exports = {
  siteMetadata: {
    title: `Mike Leung`,
    description: `Ottawa Web Developer`,
    author: `Mike Leung`,
  },
  plugins: [
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-47877166-4",
        head: false,
        anonymize: true,
        respectDNT: true,
        exclude: ["/preview/**", "/do-not-track/me/too/"],
        pageTransitionDelay: 0,
        optimizeId: "YOUR_GOOGLE_OPTIMIZE_TRACKING_ID",
        experimentId: "YOUR_GOOGLE_EXPERIMENT_ID",
        variationId: "28p74Ri8I3j6vKMJQdqPKwcZBAHesdBtQsa7EszKqNk",
        sampleRate: 5,
        siteSpeedSampleRate: 10,
        cookieDomain: "mikeleung.ca",
      },
    },
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-transformer-remark`,
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
        icon: `src/images/favicon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,

    
  ],
}
