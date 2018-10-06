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
  height: 100%;
  width: 100%;
`;

const MainTitle = styled.h1`
  color: white;
  font-weight: bold;
  text-align: center;
`;

const SubTitle = styled.h2`
  color: white;
  font-weight: bold;
  text-align: center;
`;

const Video = styled.iframe`
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
`;

const PauvreBiche = styled.img`
  position: absolute;
  bottom: 0;
  left: 0;
  margin: 0;
`;

const IndexPage = () => (
  <LandingPage>
    <MainTitle>Plastique Biche EP</MainTitle>
    <SubTitle>Pré-Commandes à partir du 17 Octobre 2018</SubTitle>
    <Video
      title="pauvre-biche-deso-clip"
      src="https://www.youtube.com/embed/4zFPg6aygd4"
      frameBorder="0"
      allowFullScreen
    />
    <Biche src={biche} alt="pauvre-biche-biche" width="70%" heigth="70%" />
    <PauvreBiche src={title} alt="pauvre-biche-title" width="40%" heigth="40%" />
    {
      // <Link to="/page-2/">Go to page 2</Link>
    }
  </LandingPage>
);

export default IndexPage;
