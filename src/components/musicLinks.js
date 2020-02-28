import React from "react"
import styled from "styled-components"

import spotify from "../images/spotify.svg"
import appleMusic from "../images/apple-music.svg"
import napster from "../images/napster.png"
import amazon from "../images/amazon.svg"
import tidal from "../images/tidal.svg"
import googlePlay from "../images/google-play.svg"
import deezer from "../images/deezer.svg"

const LinksContainer = styled.div`
  background-color: #e5ffff;
  padding: 0.5em;
  margin: 60px 0;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  color: white;
  z-index: 2;
  font-weight: bold;
  text-align: center;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  align-items: center;
  @media (min-width: 320px) and (max-width: 500px) {
    font-size: 1em;
    justify-content: center;
  }
`

const Available = styled.p`
  width: 100%;
  text-align: center;
  margin: 0.5em;
  z-index: 2;
  font-size: 1em;
  color: black;
`

const Icon = styled.img`
  height: 10vh;
  width: 10vh;
  margin: 2vh;
`

const MusicLinks = () => (
  <LinksContainer>
    <Available>Disponible sur</Available>
    <a
      href="https://open.spotify.com/artist/3ti8XH0LZvkDg2oDWg16w5?si=71J-L2sYTKajNqNFON56Hw"
      alt="pauvre-biche-spotify"
    >
      <Icon src={spotify} alt="spotify-logo" />
    </a>
    <a
      href="https://www.deezer.com/fr/album/74002742"
      alt="pauvre-biche-deezer"
    >
      <Icon src={deezer} alt="deezer-logo" />
    </a>
    <a
      href="https://itunes.apple.com/us/album/plastique-biche-ep/1437244691?app=itunes&fbclid=IwAR3fJXsOUDuNpK8wIz5orr3IBQlqTPp7EJqLnzq8xxFSz9JbixsepKNVrdA&ign-mpt=uo%3D4"
      alt="pauvre-biche-apple-music"
    >
      <Icon src={appleMusic} alt="apple-music" />
    </a>
    <a
      href="https://play.google.com/store/music/album/Pauvre_Biche_Plastique_Biche?id=Bwgw5335474ioohayuctazxwrxy"
      alt="pauvre-biche-google-play"
    >
      <Icon src={googlePlay} alt="google-play-logo" />
    </a>
    <a
      href="https://www.amazon.fr/Plastique-Biche-Explicit-Pauvre/dp/B07HMX98GV/ref=sr_1_1?ie=UTF8&qid=1540811090&sr=8-1&keywords=pauvre+biche"
      alt="pauvre-biche-amazon"
    >
      <Icon src={amazon} alt="amazon-logo" />
    </a>
    <a href="https://tidal.com/browse/album/95651729" alt="tidal">
      <Icon src={tidal} alt="tidal-logo" />
    </a>
    <a
      href="https://us.napster.com/artist/pauvre-biche/album/plastique-biche"
      alt="pauvre-biche-napster"
    >
      <Icon src={napster} alt="napster-logo" />
    </a>
  </LinksContainer>
)

export default MusicLinks
