const path = require('path')

module.exports = {
  // Gatsby default trailing slash behavior is 'always', which breaks `createPage` of our markdown pages
  // because the markdown frontmatter `path` does not have trailingSlash ==> Set to "ignore"
  trailingSlash: "ignore",
  siteMetadata: {
    title: 'Momentum Developer Conference',
    authors: [
      'Michael Richardson',
      'Ryan Lynn',
      'Brandon Culp',
      'Jason Miazga',
    ],
    description:
      'Momentum is a Cincinnati developer conference dedicated to providing developers with great content for learning and success',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'Momentum Developer Conference',
        short_name: 'momentum',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/assets/images/favicon.png', // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-sass',
    'gatsby-plugin-remove-serviceworker',
    {
      resolve: 'gatsby-plugin-gtag',
      options: {
        // your google analytics tracking id
        trackingId: 'UA-129266653-1',
        // Puts tracking script in the head instead of the body
        head: true,
        // enable ip anonymization
        anonymize: true,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/assets/markdown`,
        name: 'markdown',
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/assets/blog`,
        name: 'blog',
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'sponsors',
        path: path.join(__dirname, 'src', 'assets', 'images', 'sponsors'),
      },
    },
    'gatsby-plugin-image',
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    'gatsby-transformer-remark',
  ],
}
