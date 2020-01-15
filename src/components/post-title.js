import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import ThemeColors from '../utils/theme';
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
    color: ThemeColors.link,
  };

  if (center) {
    titleStyles.textAlign = 'center';
  }

  return <TitleTag css={titleStyles}>{content}</TitleTag>;
};

PostTitle.propsTypes = {
  titleTag: PropTypes.string.isRequired,
  link: PropTypes.string,
  children: PropTypes.element.isRequired,
  center: PropTypes.bool,
};

PostTitle.defaultProps = {
  link: null,
  center: false,
};

export default PostTitle;
