import React from "react"
import styled from "styled-components"
import Img from "gatsby-image"
import { Link } from "gatsby"
import { useStaticQuery, graphql } from "gatsby"

const Container = styled.nav`
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

const Nav = ({ to }) => {
  const data = useStaticQuery(graphql`
    query {
      bicheBoys: file(relativePath: { eq: "biche-boys-cover.jpg" }) {
        childImageSharp {
          fixed(width: 80) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      plastiqueBiche: file(relativePath: { eq: "plastique-biche-cover.jpg" }) {
        childImageSharp {
          fixed(width: 80) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)

  const linkMapping = {
    bicheBoys: "/",
    plastiqueBiche: "/plastique-biche",
  }

  return (
    <Container>
      <Link to={linkMapping[to]}>
        <Img
          fixed={data[to].childImageSharp.fixed}
          alt="link to plastique biche EP page"
        />
      </Link>
    </Container>
  )
}

export default Nav
