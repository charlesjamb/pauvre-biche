import React from "react"
import Img from "gatsby-image"
import styled from "styled-components"
import { useStaticQuery, graphql } from "gatsby"

import Layout from "../components/layout"
import Footer from "../components/footer"
import Nav from "../components/nav"
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

const VideoContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  @media (min-width: 320px) and (max-width: 500px) {
    width: calc(100% + 60px);
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

const Title = styled.h1`
  line-height: 1.5em;
  color: #e5ffff;
  font-size: 6rem;
  font-weight: 900;
  margin-bottom: 60px;
  text-align: center;
  text-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  @media (min-width: 320px) and (max-width: 500px) {
    font-size: 3rem;
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
    }
  `)

  return (
    <Layout>
      <SEO title="Biche Boys" />
      <BackgroundVideo autoPlay muted loop poster={videoPlaceholder}>
        <source src={background} type="video/mp4" />
      </BackgroundVideo>
      <Nav to="plastiqueBiche" />
      <Container>
        <Title>BICHE BOYS EP</Title>
        <CoverImage>
          <Img
            alt="Biche boys EP cover art"
            fluid={data.cover.childImageSharp.fluid}
          />
        </CoverImage>
        <MusicLinks album="bicheBoys" />
        <VideoContainer>
          <Video
            title="pauvre-biche-deso-clip"
            src="https://www.youtube.com/embed/jOPuDfCEauQ"
            frameBorder="0"
            allowFullScreen
          />
        </VideoContainer>
        <Footer />
      </Container>
    </Layout>
  )
}

export default Home
