import React from "react"
import Img from "gatsby-image"
import { Link } from "gatsby"
import styled from "styled-components"
import { useStaticQuery, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import background from "../images/background.jpg"
import silhouetteArbres from "../images/silhouetteArbres.png"
import Links from "../components/links"

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

const MainTitle = styled.h1`
  line-height: 0.9;
  color: #e5ffff;
  font-weight: bold;
  text-align: center;
  font-style: italic;
  z-index: 2;
  margin: 20px 0;
  font-size: 4em;
  text-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  @media (min-width: 320px) and (max-width: 500px) {
    font-size: 2em;
  }
`

const SecondaryTitle = styled(MainTitle)`
  font-style: normal;
  z-index: 2;
  font-size: 3em;
  @media (min-width: 320px) and (max-width: 500px) {
    font-size: 1.5em;
  }
`

const Present = styled.p`
  margin: 0;
  color: #e5ffff;
  font-family: "Cedarville Cursive", cursive;
  z-index: 2;
  font-size: 1em;
  @media (min-width: 320px) and (max-width: 500px) {
    font-size: 1em;
  }
`

const Video = styled.iframe`
  position: relative;
  z-index: 2;
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
  z-index: 2;
  text-transform: uppercase;
  &:hover {
    background-color: #ce0606;
    cursor: pointer;
  }
  &:active {
    box-shadow: none;
    top: 5px;
  }
`

const Nav = styled.nav`
  padding: 30px 30px 0 0;
  width: 100%;
  display: flex;
  justify-content: flex-end;
  box-sizing: border-box;

  a {
    color: #e5ffff;
    cursor: pointer;
    text-decoration: none;
    line-height: 1.5rem;
    font-size: 1rem;
    transition: transform 150ms ease;

    :hover {
      transform: scale(1.1);
      text-decoration: underline;
    }
  }
`

const Footer = styled.footer`
  padding-top: 120px;
  padding-bottom: 60px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;

  @media (min-width: 320px) and (max-width: 500px) {
    flex-direction: column;
  }

  a {
    color: #e5ffff;
    cursor: pointer;
    text-decoration: none;
    line-height: 1.5rem;
    margin: 2rem;
    font-size: 1rem;
    transition: transform 150ms ease;

    :hover {
      transform: scale(1.1);
    }
  }
`

const PauvreBicheContainer = styled.div`
  width: 50%;
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
      <LandingPage>
        <Nav>
          <Link to="/">Biche Boys</Link>
        </Nav>
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
        <Links />
        <Video
          title="pauvre-biche-deso-clip"
          src="https://www.youtube.com/embed/4zFPg6aygd4"
          frameBorder="0"
          allowFullScreen
        />

        <Footer>
          <a href="https://www.facebook.com/pauvrebiche/">Facebook</a>
          <a href="https://www.instagram.com/pauvrebiche/">Instagram</a>
          <a href="https://www.youtube.com/channel/UCFwVjtYoo5wO_HmiC42RG0A">
            Youtube
          </a>
        </Footer>
      </LandingPage>
    </Layout>
  )
}

export default PlastiqueBichePage
