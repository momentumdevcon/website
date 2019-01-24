module.exports = {
  siteMetadata: {
    title: 'Gatsby Starter - Forty V2',
    author: 'Hunter Chang',
    description: 'A Gatsby.js V2 Starter based on Forty by HTML5 UP',
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
        icon: 'src/assets/images/Chevrons.png', // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-sass',
    'gatsby-plugin-offline',
    {
      resolve: 'gatsby-source-apiserver',
      options: {
        entitiesArray: [
          {
            url: 'https://sessionize.com/api/v2/ea0qkz1p/view/all',
            method: 'get',
            headers: {
              'Content-Type': 'application/json',
            },
            typePrefix: 'sessionize__',
            name: 'data',
          },
          {
            url: 'https://sessionize.com/api/v2/ea0qkz1p/view/sessions',
            method: 'get',
            headers: {
              'Content-Type': 'application/json',
            },
            typePrefix: 'sessions__',
            name: 'data',
          }
        ]
      },
    },
    {
      resolve: `gatsby-plugin-gtag`,
      options: {
        // your google analytics tracking id
        trackingId: `UA-129266653-1`,
        // Puts tracking script in the head instead of the body
        head: true,
        // enable ip anonymization
        anonymize: true,
      },
    }
  ],
};
