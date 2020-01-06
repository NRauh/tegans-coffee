import React from 'react';
import { Link } from 'gatsby';
import { rhythm } from '../utils/typography';
import ThemeColors from '../utils/theme';

const SiteHeader = () => {
  const styles = {
    headerFrame: {
      backgroundColor: ThemeColors.light,
      padding: `${rhythm(0.35)} ${rhythm(0.5)}`,
    },
    name: {
      marginBottom: rhythm(0),
      fontSize: rhythm(0.75),
    },
    nameLink: {
      color: ThemeColors.muted,
      textDecoration: 'none',
    },
  };

  return (
    <header css={styles.headerFrame}>
      <h2 css={styles.name}>
        <Link to="/" css={styles.nameLink}>
          Tegan Rauh
        </Link>
      </h2>
    </header>
  );
};

export default SiteHeader;
