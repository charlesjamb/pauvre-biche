import React from "react"
import styled from "styled-components"
import Img from "gatsby-image"
import { useStaticQuery, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const Container = styled.div`
  background-color: black;
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: auto;
`

const ImageContainer = styled.div`
  margin-top: 2rem;
  width: 20vw;

  @media (min-width: 320px) and (max-width: 500px) {
    width: 50vw;
  }
`

const NotFoundPage = () => {
  const data = useStaticQuery(graphql`
    query {
      head: file(relativePath: { eq: "biche-head.jpg" }) {
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
      <SEO title="404: Not found" />
      <Container>
        <h1 style={{ color: "white" }}>404</h1>
        <ImageContainer>
          <Img
            fluid={data.head.childImageSharp.fluid}
            alt="une tete de biche"
            style={{ objectFit: "contain" }}
          />
        </ImageContainer>
      </Container>
    </Layout>
  )
}

export default NotFoundPage
