import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"

import spotify from "../images/logos/spotify.svg"
import appleMusic from "../images/logos/apple-music.svg"
import googlePlay from "../images/logos/google-play.svg"
import deezer from "../images/logos/deezer.svg"
import youtube from "../images/logos/youtube.svg"

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
  font-weight: bold;
`

const Icon = styled.img`
  height: 10vh;
  width: 10vh;
  margin: 2vh;
`

const LINKS_MAPPING = {
  plastiqueBiche: {
    spotify:
      "https://open.spotify.com/album/6totiOO0mUM78bGRXbstx4?si=k2tCDl3HRA223OBlky9-JA",
    deezer: "https://www.deezer.com/fr/album/74002742",
    apple:
      "https://itunes.apple.com/us/album/plastique-biche-ep/1437244691?app=itunes&fbclid=IwAR3fJXsOUDuNpK8wIz5orr3IBQlqTPp7EJqLnzq8xxFSz9JbixsepKNVrdA&ign-mpt=uo%3D4",
    google:
      "https://play.google.com/store/music/album/Pauvre_Biche_Plastique_Biche?id=Bwgw5335474ioohayuctazxwrxy",
    youtube:
      "https://www.youtube.com/watch?v=wF_z3AQ53ro&list=OLAK5uy_nTtIk5n5t7Qj0628YA0l4v7dYznWiAFq4",
  },
  bicheBoys: {
    spotify:
      "https://open.spotify.com/album/1GWD1MzojEMUhSVhqlQ17R?si=aQnne9zVQQ2rX6aMVq5gVA",
    deezer: "https://www.deezer.com/album/124641222",
    apple:
      "https://music.apple.com/us/album/biche-boys-ep/1493019804?uo=4&app=music&at=1001lry3&ct=dashboard",
    google:
      "https://play.google.com/store/music/album/Pauvre_Biche_Biche_Boys?id=Bqk63ao5lboxe5kbbz7za3kcpqm",
    youtube:
      "https://www.youtube.com/watch?v=-yiaxGgkdIA&list=PLZ_g_-1t1p7uymaUG0u1X5cwI13zPVghs",
  },
}

const MusicLinks = ({ album }) => (
  <LinksContainer>
    <Available>Disponible sur</Available>
    <a href={LINKS_MAPPING[album].spotify} alt="pauvre-biche-spotify">
      <Icon src={spotify} alt="spotify-logo" />
    </a>
    <a href={LINKS_MAPPING[album].deezer} alt="pauvre-biche-deezer">
      <Icon src={deezer} alt="deezer-logo" />
    </a>
    <a href={LINKS_MAPPING[album].apple} alt="pauvre-biche-apple-music">
      <Icon src={appleMusic} alt="apple-music" />
    </a>
    <a href={LINKS_MAPPING[album].google} alt="pauvre-biche-google-play">
      <Icon src={googlePlay} alt="google-play-logo" />
    </a>
    <a href={LINKS_MAPPING[album].youtube} alt="pauvre-biche-youtube">
      <Icon src={youtube} alt="youtube-logo" />
    </a>
  </LinksContainer>
)

MusicLinks.propTypes = {
  album: PropTypes.oneOf(["plastiqueBiche", "bicheBoys"]).isRequired,
}

export default MusicLinks
