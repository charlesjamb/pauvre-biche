import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import "@fontsource/nunito-sans"

import GlobalStyle from "../styles/globalStyles"

const Main = styled.main`
  margin: 0 auto;
  min-width: 100vw;
  min-height: 100vh;
`

const Layout = ({ children }) => (
  <>
    <GlobalStyle />
    <Main>{children}</Main>
  </>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
