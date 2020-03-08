import React from "react"
import styled from "styled-components"

const Container = styled.footer`
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
    font-weight: bold;
    :hover {
      transform: scale(1.1);
    }
  }
`

const Footer = () => (
  <Container>
    <a href="https://www.facebook.com/pauvrebiche/">Facebook</a>
    <a href="https://www.instagram.com/pauvrebiche/">Instagram</a>
    <a href="https://www.youtube.com/channel/UCFwVjtYoo5wO_HmiC42RG0A">
      Youtube
    </a>
  </Container>
)

export default Footer
