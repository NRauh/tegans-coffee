import React from 'react';
import { rhythm } from '../utils/typography';
import { Bio } from './bio';
import { SiteHeader } from './site-header';

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

      <div style={layoutStyle}>
        <main>{children}</main>

        <Bio />
      </div>
    </div>
  );
};

export default Layout;
