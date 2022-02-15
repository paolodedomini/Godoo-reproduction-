module.exports = {
  siteMetadata: {
    title: `Gatsby Default Starter`,
    description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
    author: `@gatsbyjs`,
    siteUrl: `https://gatsbystarterdefaultsource.gatsbyjs.io/`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    `gatsby-plugin-sass`,
         {  
        resolve: "gatsby-source-graphql",
        options: {
          // Arbitrary name for the remote schema Query type
          typeName: "ODOO",
          // Field under which the remote schema will be accessible. You'll use this in your Gatsby query
          fieldName: "odoo",
          // Url to query from
          url: "https://store.monema.cloud/graphql/demo",
          },
        }, 
        {
          resolve: `gatsby-graphql-sharp`,
          options: {
            image_url_fields: [
              //your graphql schema hierarchy
              'ODOO.allProductTemplates.productVariantId.imageMedium',
            ],
          
            debug_mode: true, //optional, default is false
          },
        }, 
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
        // This will impact how browsers show your PWA/website
        // https://css-tricks.com/meta-theme-color-and-trickery/
        // theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}


