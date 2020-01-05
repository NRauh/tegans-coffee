import React from 'react';
import { Link } from 'gatsby';
import { themeColors } from '../utils/theme';
import { rhythm } from '../utils/typography';

const PostTitle = props => {
  const { titleTag: TitleTag, link, children, center } = props;

  let content;

  if (link) {
    content = <Link to={link}>{children}</Link>;
  } else {
    content = children;
  }

  const titleStyles = {
    marginBottom: rhythm(0.5),
    color: themeColors.link,
  };

  if (center) {
    titleStyles.textAlign = 'center';
  }

  return <TitleTag css={titleStyles}>{content}</TitleTag>;
};

export const PostHeader = props => {
  const { titleTag, slug, title, center, subtitleTag: SubtitleTag } = props;

  const headerStyles = {
    marginBottom: rhythm(1.25),
  };

  const subtitleStyles = {
    color: themeColors.muted,
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

      <SubtitleTag css={subtitleStyles}>{props.date}</SubtitleTag>
    </header>
  );
};
