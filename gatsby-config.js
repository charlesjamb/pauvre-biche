module.exports = {
  siteMetadata: {
    title: `Pauvre Biche`,
    description: `Pauvre Biche est un groupe de hip-hop / electronica composé de Florent Blin et Jérémy Gleize.`,
    author: `Charles Jambon`,
    keywords: `Pauvre Biche, Pauvre, Biche, rap, EP, pauvre-biche, hip-hop, electronica`,
  },
  plugins: [
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `videos`,
        path: `${__dirname}/src/videos`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Pauvre Biche`,
        short_name: `pauvrebiche`,
        start_url: `/`,
        background_color: `#FF7C2C`,
        theme_color: `#FF7C2C`,
        display: `minimal-ui`,
        icon: `src/images/favicon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          {
            family: `Nunito Sans`,
            variants: [`400`, `700`, `900`],
          },
        ],
      },
    },
  ],
}
