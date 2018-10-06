import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import styled from 'styled-components';

import './index.css';
import background from './img/background.svg';
import silhouetteArbres from './img/silhouetteArbres.svg';

const PageContainer = styled.div`
  min-height: 100vh;
  background-image: url(${silhouetteArbres}), url(${background});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;

const Layout = ({ children, data }) => (
  <PageContainer>
    <Helmet
      title={data.site.siteMetadata.title}
      meta={[
        { name: 'description', content: 'Sample' },
        { name: 'keywords', content: 'sample, something' },
      ]}
    />
    {children()}
  </PageContainer>
);

Layout.propTypes = {
  children: PropTypes.func,
};

export default Layout;

export const query = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`;
