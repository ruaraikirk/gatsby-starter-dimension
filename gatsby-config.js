module.exports = {
  siteMetadata: {
    title: "Crosskeys Healing Center",
    author: "Hunter Chang",
    description: "A Gatsby.js V2 Starter based on Dimension by HTML5 UP"
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'gatsby-starter-default',
        short_name: 'starter',
        start_url: '/',
        //background_color: '#663399',
        //theme_color: '#663399',
        background_color: 'cda6f4',
        theme_color: 'cda6f4',
        display: 'minimal-ui',
        icon: 'src/images/small-diamond.png', // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-sass',
    'gatsby-plugin-offline'
  ],
}
