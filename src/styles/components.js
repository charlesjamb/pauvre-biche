import styled from "styled-components"

export const Container = styled.div`
  position: relative;
  max-width: 1290px;
  padding: 60px 30px;
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const Title = styled.h1`
  line-height: 1.5;
  color: #e5ffff;
  font-weight: 900;
  text-align: center;
  margin-bottom: 60px;
  font-size: 6rem;
  text-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  @media (min-width: 320px) and (max-width: 500px) {
    font-size: 3rem;
  }
`

export const VideoContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  @media (min-width: 320px) and (max-width: 500px) {
    width: calc(100% + 60px);
  }
`

export const Video = styled.iframe`
  position: relative;
  z-index: 2;
  width: 560px;
  height: 315px;
  @media (min-width: 320px) and (max-width: 500px) {
    width: 100%;
  }
`
