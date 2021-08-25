module.exports = {
  siteMetadata: {
    siteUrl: "https://www.yourdomain.tld",
    title: "Personal Website",
  },
  plugins: [
    "gatsby-plugin-gatsby-cloud",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: `blog`,
        path: `${__dirname}/src/blog`,
      }
    },
    // {
    //   resolve: "gatsby-source-filesystem",
    //   options: {
    //     name: `project`,
    //     path: `${__dirname}/src/project`,
    //   }
    // },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: `image`,
        path: `${__dirname}/src/images`,
      }
    },
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: [`.md`,`.mdx`],
        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 1200,
            }
          }
        ]
      }
    },
    'gatsby-plugin-postcss',
    'gatsby-plugin-react-svg',
  ],
};

