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
    readingTime,
    subtitleTag: SubtitleTag,
  } = props;

  const headerStyles = {
    marginBottom: rhythm(1.75),
  };

  const subtitleStyles = {
    color: ThemeColors.gray300,
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

      <SubtitleTag css={subtitleStyles}>
        {date}
        &mdash;
        {readingTime}
      </SubtitleTag>
    </header>
  );
};

PostHeader.propTypes = {
  titleTag: PropTypes.string.isRequired,
  slug: PropTypes.string,
  title: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  readingTime: PropTypes.string.isRequired,
  center: PropTypes.bool,
};

PostHeader.defaultProps = {
  center: false,
  slug: null,
};

export default PostHeader;
