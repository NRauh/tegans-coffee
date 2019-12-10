import React from 'react';
import { Link } from 'gatsby';

export const PostTitle = props => {
  let content;

  if (props.link) {
    content = <Link to={props.link}>{props.children}</Link>;
  } else {
    content = props.children;
  }

  return <h2>{content}</h2>;
};

export const PostSubtitle = props => {
  return <h3>{props.children}</h3>;
};

export const ShortPost = props => {
  return (
    <article>
      <header>
        <PostTitle link={props.slug}>{props.title}</PostTitle>

        <PostSubtitle>{props.date}</PostSubtitle>
      </header>
    </article>
  );
};
