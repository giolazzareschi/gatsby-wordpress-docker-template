import type { GatsbyConfig } from "gatsby";

const config: GatsbyConfig = {
  siteMetadata: {
    title: `gatsby-ts`,
    siteUrl: `https://www.yourdomain.tld`
  },
  plugins: [
    "gatsby-plugin-sharp", "gatsby-transformer-sharp",
    "gatsby-plugin-sass", "gatsby-plugin-image",
    "gatsby-plugin-react-helmet",
    {
      resolve: 'gatsby-source-wordpress',
      options: {
        "url": process.env.WORDPRESS_URL
      }
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        "icon": "src/images/icon.png"
      }
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        "name": "images",
        "path": "./src/images/"
      },
    },
  ],
};

export default config;
