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
  ],
}
