import React from 'react'
import Link from 'gatsby-link'
import biche from './biche.svg'
import title from './title.png'

// VidÈo Youtube ‡ Embed
// https://www.youtube.com/watch?v=4zFPg6aygd4

// Texte :
// Plastique Biche EP
// PrÈ-Commandes ‡ partir du 17 Octobre 2018

const IndexPage = () => (
  <div
    className="landing-page"
    style={{
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'flex-start',
      alignItems: 'center',
    }}
  >
    <h1 style={{ color: 'white' }}>Plastique Biche EP</h1>
    <h2 style={{ color: 'white' }}>
      Pré-Commandes à partir du 17 Octobre 2018
    </h2>
    <iframe
      width="560"
      height="315"
      src="https://www.youtube.com/embed/4zFPg6aygd4"
      frameborder="0"
      allow="autoplay; encrypted-media"
      allowfullscreen
    />
    <img
      src={biche}
      style={{
        position: 'absolute',
        bottom: '0',
        right: '0',
        zIndex: '-1',
      }}
      alt="biche"
      width="75%"
      heigth="75%"
    />
    <img
      src={title}
      style={{
        position: 'absolute',
        bottom: '0',
        left: '0',
        zIndex: '-1',
      }}
      alt="title"
      width="50%"
      heigth="50%"
    />
    {
      // <Link to="/page-2/">Go to page 2</Link>
    }
  </div>
)

export default IndexPage
