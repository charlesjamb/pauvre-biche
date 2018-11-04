import React from 'react';
import styled from 'styled-components';
// import biche from './img/biche.svg';
// import title from './img/title.png';
import spotify from './img/spotify.svg';
import appleMusic from './img/apple-music.svg';
import napster from './img/napster.png';
// import soundcloud from './img/soundcloud.svg';
import amazon from './img/amazon.svg';
import tidal from './img/tidal.svg';
import googlePlay from './img/google-play.svg';
import deezer from './img/deezer.svg';

const LandingPage = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  min-height: 100vh;
  width: 100%;
  @media (min-width: 320px) and (max-width: 500px) {
    justify-content: space-between;
  }
`;

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
`;

const SecondaryTitle = styled(MainTitle)`
  font-style: normal;
  z-index: 2;
  font-size: 3em;
  @media (min-width: 320px) and (max-width: 500px) {
    font-size: 1.5em;
  }
`;

const Present = styled.p`
  margin: 0;
  color: #e5ffff;
  font-family: 'Cedarville Cursive', cursive;
  z-index: 2;
  font-size: 1em;
  @media (min-width: 320px) and (max-width: 500px) {
    font-size: 1em;
  }
`;

const Available = styled.p`
  width: 100%;
  text-align: center;
  margin: 0.5em;
  z-index: 2;
  font-size: 1em;
  color: black;
`;

const SubTitle = styled.div`
  background-color: #e5ffff;
  padding: 1em;
  margin: 1em;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  color: white;
  z-index: 2;
  font-weight: bold;
  text-align: center;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  align-items: center;
  @media (min-width: 320px) and (max-width: 500px) {
    font-size: 1em;
    justify-content: center;
  }
`;

const Video = styled.iframe`
  position: relative;
  z-index: 2;
  width: 560px;
  height: 315px;
  @media (min-width: 320px) and (max-width: 500px) {
    width: 100%;
  }
`;

const Biche = styled.img`
  position: absolute;
  bottom: 0;
  right: 0;
  margin: 0;
  @media (min-width: 320px) and (max-width: 500px) {
    display: none;
  }
`;

// const PauvreBiche = styled.img`

// `;

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
`;

const Icon = styled.img`
  height: 10vh;
  width: 10vh;
  margin: 2vh;
`;

/*
Commander le CD-ROM édition limitée
  • https://pauvrebiche.bandcamp.com/
Spotify
  • https://open.spotify.com/artist/3ti8XH0LZvkDg2oDWg16w5?si=71J-L2sYTKajNqNFON56Hw
 iTunes
 https://itunes.apple.com/us/album/plastique-biche-ep/1437244691?app=itunes&fbclid=IwAR3fJXsOUDuNpK8wIz5orr3IBQlqTPp7EJqLnzq8xxFSz9JbixsepKNVrdA&ign-mpt=uo%3D4
Deezer
  • https://www.deezer.com/fr/album/74002742
AppleMusic
  • https://itunes.apple.com/us/album/plastique-biche-ep/1437244691?app=itunes&fbclid=IwAR3fJXsOUDuNpK8wIz5orr3IBQlqTPp7EJqLnzq8xxFSz9JbixsepKNVrdA&ign-mpt=uo%3D4
Google Play 
  • https://play.google.com/store/music/album/Pauvre_Biche_Plastique_Biche?id=Bwgw5335474ioohayuctazxwrxy
Amazon
  • https://www.amazon.fr/Plastique-Biche-Explicit-Pauvre/dp/B07HMX98GV/ref=sr_1_1?ie=UTF8&qid=1540811090&sr=8-1&keywords=pauvre+biche
Tidal
  • https://tidal.com/browse/album/95651729
Napster
  • https://us.napster.com/artist/pauvre-biche/album/plastique-biche

    <PauvreBiche
      src={title}
      alt="pauvre-biche-title"
      width="50%"
      heigth="50%"
    />
*/

const IndexPage = () => (
  <LandingPage>
    <MainTitle>
      PAUVRE<br />BICHE
    </MainTitle>
    <Present>présente le</Present>
    <SecondaryTitle>Plastique Biche EP</SecondaryTitle>
    <CommandLink href="https://pauvrebiche.bandcamp.com/" alt="bandcamp">
      Commander le CD-ROM édition limitée
    </CommandLink>
    <SubTitle>
      <Available>Disponible sur</Available>
      <a
        href="https://open.spotify.com/artist/3ti8XH0LZvkDg2oDWg16w5?si=71J-L2sYTKajNqNFON56Hw"
        alt="spotify"
      >
        <Icon src={spotify} alt="spotify-logo" />
      </a>
      <a href="https://www.deezer.com/fr/album/74002742" alt="deezer">
        <Icon src={deezer} alt="deezer-logo" />
      </a>
      <a
        href="https://itunes.apple.com/us/album/plastique-biche-ep/1437244691?app=itunes&fbclid=IwAR3fJXsOUDuNpK8wIz5orr3IBQlqTPp7EJqLnzq8xxFSz9JbixsepKNVrdA&ign-mpt=uo%3D4"
        alt="apple-music"
      >
        <Icon src={appleMusic} alt="apple-music" />
      </a>
      <a
        href="https://play.google.com/store/music/album/Pauvre_Biche_Plastique_Biche?id=Bwgw5335474ioohayuctazxwrxy"
        alt="google-play"
      >
        <Icon src={googlePlay} alt="google-play-logo" />
      </a>
      <a
        href="https://www.amazon.fr/Plastique-Biche-Explicit-Pauvre/dp/B07HMX98GV/ref=sr_1_1?ie=UTF8&qid=1540811090&sr=8-1&keywords=pauvre+biche"
        alt="amazon"
      >
        <Icon src={amazon} alt="amazon-logo" />
      </a>
      <a href="https://tidal.com/browse/album/95651729" alt="tidal">
        <Icon src={tidal} alt="tidal-logo" />
      </a>
      <a
        href="https://us.napster.com/artist/pauvre-biche/album/plastique-biche"
        alt="napster"
      >
        <Icon src={napster} alt="napster-logo" />
      </a>
    </SubTitle>
    <Video
      title="pauvre-biche-deso-clip"
      src="https://www.youtube.com/embed/4zFPg6aygd4"
      frameBorder="0"
      allowFullScreen
    />
    {
      // <Biche src={biche} alt="pauvre-biche-biche" width="40%" />
    }
  </LandingPage>
);

export default IndexPage;
