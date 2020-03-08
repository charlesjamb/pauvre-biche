import React from "react"
import Img from "gatsby-image"
import styled from "styled-components"
import { useStaticQuery, graphql } from "gatsby"

import Layout from "../components/layout"
import Footer from "../components/footer"
import Nav from "../components/nav"
import SEO from "../components/seo"
import background from "../images/background.jpg"
import silhouetteArbres from "../images/silhouetteArbres.png"
import MusicLinks from "../components/musicLinks"

import { Container, Title, VideoContainer, Video } from "../styles/components"

const Background = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  min-height: 100vh;
  width: 100%;
  background-image: url(${silhouetteArbres}), url(${background});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  @media (min-width: 320px) and (max-width: 500px) {
    justify-content: space-between;
  }
`

const MainTitle = styled(Title)`
  margin: 20px 0;
  font-size: 4rem;
  @media (min-width: 320px) and (max-width: 500px) {
    font-size: 2rem;
  }
`

const Present = styled.p`
  margin: 0;
  color: #e5ffff;
  font-family: "Cedarville Cursive", cursive;
  font-size: 1em;
  @media (min-width: 320px) and (max-width: 500px) {
    font-size: 1em;
  }
`

const CommandLink = styled.a`
  margin: 10px;
  background-color: red;
  box-shadow: 0 5px 0 darkred;
  color: white;
  padding: 1em 1.5em;
  position: relative;
  text-decoration: none;
  text-align: center;
  text-transform: uppercase;
  font-weight: 900;
  &:hover {
    background-color: #ce0606;
    cursor: pointer;
  }
  &:active {
    box-shadow: none;
    top: 5px;
  }
`

const PauvreBicheContainer = styled.div`
  width: 30%;

  @media (min-width: 320px) and (max-width: 500px) {
    width: 50%;
  }
`

const PlastiqueBichePage = () => {
  const data = useStaticQuery(graphql`
    query {
      title: file(relativePath: { eq: "title.png" }) {
        childImageSharp {
          fluid(maxWidth: 600) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <Layout>
      <SEO title="Plastique Biche" />
      <Background>
        <Nav to="bicheBoys" />
        <Container>
          <PauvreBicheContainer>
            <Img alt="Pauvre Biche" fluid={data.title.childImageSharp.fluid} />
          </PauvreBicheContainer>
          <Present>présente le</Present>
          <MainTitle>Plastique Biche EP</MainTitle>
          <CommandLink
            href="https://pauvrebiche.bandcamp.com/"
            alt="pauvre-biche-bandcamp"
          >
            Acheter le CD-ROM édition limitée
          </CommandLink>
          <MusicLinks album="plastiqueBiche" />
          <VideoContainer>
            <Video
              title="pauvre-biche-deso-clip"
              src="https://www.youtube.com/embed/4zFPg6aygd4"
              frameBorder="0"
              allowFullScreen
            />
          </VideoContainer>
          <Footer />
        </Container>
      </Background>
    </Layout>
  )
}

export default PlastiqueBichePage
