import React from 'react';
import { Link } from 'gatsby';

const PostTitle = props => {
  const {
    titleTag: TitleTag,
    link,
    children
  } = props;

  let content;

  if (link) {
    content = <Link to={link}>{children}</Link>;
  } else {
    content = children;
  }

  return (
    <TitleTag>
      {content}
    </TitleTag>
  );
};

export const PostHeader = props => {
  const {
    titleTag,
    slug,
    title,
    subtitleTag: SubtitleTag
  } = props;

  return (
    <header>
      <PostTitle link={slug} titleTag={titleTag}>
        {title}
      </PostTitle>

      <SubtitleTag>
        {props.date}
      </SubtitleTag>
    </header>
  );
};
