import React from 'react';
import Link from 'gatsby-link';
import biche from './img/biche.svg';
import title from './img/title.png';
import styled from 'styled-components';

const LandingPage = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  height: 100vh;
  width: 100%;
  @media (min-width: 320px) and (max-width: 500px) {
    justify-content: space-between;
  }
`;

const MainTitle = styled.h1`
  color: white;
  font-weight: bold;
  text-align: center;
  margin-bottom: 0;
  @media (min-width: 320px) and (max-width: 500px) {
    font-size: 2em;
  }
`;

const SubTitle = styled.h2`
  color: white;
  font-weight: bold;
  text-align: center;
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media (min-width: 320px) and (max-width: 500px) {
    flex-direction: column;
    font-size: 1em;
    margin-top: 0;
  }
`;

const Video = styled.iframe`
  position: relative;
  z-index: 99;
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

const PauvreBiche = styled.img`
  position: absolute;
  bottom: 0;
  left: 0;
  margin: 0;
  @media (min-width: 320px) and (max-width: 500px) {
    display: none;
  }
`;

const CommandLink = styled.a`
  margin: 10px;
  background-color: red;
  box-shadow: 0 5px 0 darkred;
  color: white;
  padding: 1em 1.5em;
  position: relative;
  text-decoration: none;
  text-transform: uppercase;
  z-index: 999999;
  &:hover {
    background-color: #ce0606;
    cursor: pointer;
  }
  &:active {
    box-shadow: none;
    top: 5px;
  }
`;

const IndexPage = () => (
  <LandingPage>
    <MainTitle>Plastique Biche EP</MainTitle>
    <SubTitle>
      <CommandLink href="https://pauvrebiche.bandcamp.com/" alt="bandcamp">
        Commandes CD-ROM édition limitée
      </CommandLink>
      <CommandLink
        href="https://distrokid.com/hyperfollow/pauvrebiche/eM3E"
        alt="spotify"
      >
        Pre-save sur Spotify
      </CommandLink>
      <CommandLink
        href="https://itunes.apple.com/fr/album/plastique-biche-ep/1437244691"
        alt="itunes"
      >
        Précommandes sur iTunes
      </CommandLink>
    </SubTitle>
    <Video
      title="pauvre-biche-deso-clip"
      src="https://www.youtube.com/embed/4zFPg6aygd4"
      frameBorder="0"
      allowFullScreen
    />
    <Biche src={biche} alt="pauvre-biche-biche" width="70%" heigth="70%" />
    <PauvreBiche
      src={title}
      alt="pauvre-biche-title"
      width="40%"
      heigth="40%"
    />
    {
      // <Link to="/page-2/">Go to page 2</Link>
    }
  </LandingPage>
);

export default IndexPage;
