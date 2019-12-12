import React from 'react';
import { Link } from 'gatsby';
import { themeColors } from '../utils/theme';
import { rhythm } from '../utils/typography';

const PostTitle = props => {
  const { titleTag: TitleTag, link, children } = props;

  let content;

  if (link) {
    content = <Link to={link}>{children}</Link>;
  } else {
    content = children;
  }

  const titleStyles = {
    marginBottom: rhythm(0.5),
  };

  return <TitleTag style={titleStyles}>{content}</TitleTag>;
};

export const PostHeader = props => {
  const { titleTag, slug, title, subtitleTag: SubtitleTag } = props;

  const headerStyles = {
    marginBottom: rhythm(1.25),
  };

  const subtitleStyles = {
    color: themeColors.muted,
    fontSize: rhythm(5 / 9),
    marginBottom: rhythm(0),
  };

  return (
    <header style={headerStyles}>
      <PostTitle link={slug} titleTag={titleTag}>
        {title}
      </PostTitle>

      <SubtitleTag style={subtitleStyles}>{props.date}</SubtitleTag>
    </header>
  );
};
