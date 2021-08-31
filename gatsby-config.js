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
                path: `${__dirname}/src/components/assets/images`,//ファイルの置き場所
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
                icon: "src/components/assets/images/logo.png"
              },
            },
            //image用
            `gatsby-plugin-image`,
            `gatsby-plugin-sharp`,
            `gatsby-transformer-sharp`,
          ],
}
