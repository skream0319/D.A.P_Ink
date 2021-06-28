/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  plugins: [
            {
              resolve: `gatsby-source-filesystem`,
              options: {
                name: `images`,//ソース名
                path: `${__dirname}/src/images`,//ファイルの置き場所
              },
            },
            `gatsby-plugin-sass`,
            `gatsby-plugin-react-helmet`,
            //favicon用
            {
              resolve: `gatsby-plugin-manifest`,
              options: {
                name: "D.A.P_Ink",
                start_url: "/",
                background: "#808080",
                display: "standalone",
                icon: "src/images/favicon.png"
              },
            },
            //image用
            `gatsby-plugin-image`,
            `gatsby-plugin-sharp`,
            `gatsby-transformer-sharp`,
          ],
}
