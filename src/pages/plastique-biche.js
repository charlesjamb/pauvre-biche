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

const LandingPage = styled.div`
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

const Container = styled.div`
  position: relative;
  max-width: 1290px;
  padding: 60px 30px;
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const MainTitle = styled.h1`
  line-height: 1.5;
  color: #e5ffff;
  font-weight: bolder;
  text-align: center;
  font-style: italic;
  margin: 20px 0;
  font-size: 4em;
  text-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  @media (min-width: 320px) and (max-width: 500px) {
    font-size: 2em;
  }
`

const SecondaryTitle = styled(MainTitle)`
  font-style: normal;
  font-size: 3em;
  @media (min-width: 320px) and (max-width: 500px) {
    font-size: 1.5em;
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

const Video = styled.iframe`
  position: relative;
  width: 560px;
  height: 315px;
  @media (min-width: 320px) and (max-width: 500px) {
    width: 100%;
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
  font-weight: bold;
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
      bicheBoys: file(relativePath: { eq: "biche-boys-cover.jpg" }) {
        childImageSharp {
          fixed(width: 80) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)

  return (
    <Layout>
      <SEO title="Plastique Biche" />
      <LandingPage>
        <Nav to="bicheBoys" />
        <Container>
          <PauvreBicheContainer>
            <Img alt="Pauvre Biche" fluid={data.title.childImageSharp.fluid} />
          </PauvreBicheContainer>
          <Present>présente le</Present>
          <SecondaryTitle>Plastique Biche EP</SecondaryTitle>
          <CommandLink
            href="https://pauvrebiche.bandcamp.com/"
            alt="pauvre-biche-bandcamp"
          >
            Acheter le CD-ROM édition limitée
          </CommandLink>
          <MusicLinks album="plastiqueBiche" />
          <Video
            title="pauvre-biche-deso-clip"
            src="https://www.youtube.com/embed/4zFPg6aygd4"
            frameBorder="0"
            allowFullScreen
          />
          <Footer />
        </Container>
      </LandingPage>
    </Layout>
  )
}

export default PlastiqueBichePage
