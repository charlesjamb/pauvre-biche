import React from "react"
import Img from "gatsby-image"
import styled from "styled-components"
import { Link } from "gatsby"
import { useStaticQuery, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import MusicLinks from "../components/musicLinks"
import videoPlaceholder from "../images/video-placeholder.jpg"
import background from "../videos/background.mp4"

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

const BackgroundVideo = styled.video`
  object-fit: cover;
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  z-index: -1;
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

const Title = styled.h1`
  line-height: 1.5em;
  color: #e5ffff;
  font-size: 8rem;
  font-weight: bold;
  margin-bottom: 60px;
  text-align: center;

  @media (min-width: 320px) and (max-width: 500px) {
    font-size: 4rem;
  }
`

const CoverImage = styled.div`
  width: 30%;
  box-shadow: 0 2.8px 2.2px rgba(0, 0, 0, 0.034),
    0 6.7px 5.3px rgba(0, 0, 0, 0.048), 0 12.5px 10px rgba(0, 0, 0, 0.06),
    0 22.3px 17.9px rgba(0, 0, 0, 0.072), 0 41.8px 33.4px rgba(0, 0, 0, 0.086),
    0 100px 80px rgba(0, 0, 0, 0.12);

  @media (min-width: 320px) and (max-width: 500px) {
    width: 65%;
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

const Home = () => {
  const data = useStaticQuery(graphql`
    query {
      cover: file(relativePath: { eq: "biche-boys-cover.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 600) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      plastiqueCover: file(relativePath: { eq: "plastique-biche-cover.jpg" }) {
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
      <SEO title="Biche Boys" />
      <BackgroundVideo autoPlay muted loop poster={videoPlaceholder}>
        <source src={background} type="video/mp4" />
      </BackgroundVideo>
      <Nav>
        <Link to="/plastique-biche">
          <Img
            fixed={data.plastiqueCover.childImageSharp.fixed}
            alt="link to plastique biche EP page"
          />
        </Link>
      </Nav>
      <Container>
        <Title>BICHE BOYS EP</Title>
        <CoverImage>
          <Img
            alt="Biche boys EP cover art"
            fluid={data.cover.childImageSharp.fluid}
          />
        </CoverImage>
        <MusicLinks album="bicheBoys" />
        <Video
          title="pauvre-biche-deso-clip"
          src="https://www.youtube.com/embed/jOPuDfCEauQ"
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
      </Container>
    </Layout>
  )
}

export default Home
