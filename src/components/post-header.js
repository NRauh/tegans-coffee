import React from 'react';
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

export default PostHeader;
