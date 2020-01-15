import React from 'react';
import PropTypes from 'prop-types';
import ThemeColors from '../utils/theme';
import { rhythm } from '../utils/typography';
import PostTitle from './post-title';

const PostHeader = props => {
  const {
    titleTag,
    slug,
    title,
    center,
    date,
    subtitleTag: SubtitleTag,
  } = props;

  const headerStyles = {
    marginBottom: rhythm(1.25),
  };

  const subtitleStyles = {
    color: ThemeColors.muted,
    fontSize: rhythm(5 / 9),
    marginBottom: rhythm(0),
  };

  if (center) {
    subtitleStyles.textAlign = 'center';
  }

  return (
    <header css={headerStyles}>
      <PostTitle link={slug} titleTag={titleTag} center={center}>
        {title}
      </PostTitle>

      <SubtitleTag css={subtitleStyles}>{date}</SubtitleTag>
    </header>
  );
};

PostHeader.propTypes = {
  titleTag: PropTypes.string.isRequired,
  slug: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  center: PropTypes.bool,
};

PostHeader.defaultProps = {
  center: false,
};

export default PostHeader;
