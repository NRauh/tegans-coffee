import React from 'react';
import { Link } from 'gatsby';
import { rhythm } from '../utils/typography';

const ShortPost = (props) => {
  const titleStyles = {
    marginBottom: rhythm(0.4),
  };

  const dateStyles = {
    fontSize: rhythm(0.75),
  };

  return (
    <article>
      <header>
        <h2 style={titleStyles}>
          <Link to={props.slug}>
            {props.title}
          </Link>
        </h2>

        <small style={dateStyles}>
          {props.date}
        </small>
      </header>
    </article>
  )
};

export default ShortPost;
