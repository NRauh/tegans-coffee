import React from 'react';
import PropTypes from 'prop-types';
import { rhythm } from '../utils/typography';
import Bio from './bio';
import SiteHeader from './site-header';

const Layout = props => {
  const { children } = props;

  const layoutStyle = {
    marginLeft: 'auto',
    marginRight: 'auto',
    maxWidth: rhythm(24),
    padding: `${rhythm(1.25)} ${rhythm(0.3)}`,
  };

  return (
    <div>
      <SiteHeader />

      <div css={layoutStyle}>
        <main>{children}</main>

        <Bio />
      </div>
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.element),
    PropTypes.element,
  ]).isRequired,
};

export default Layout;
