import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { rhythm } from '../utils/typography';
import SocialLinks from './social-links';
import BioImage from './bio-image';
import ThemeColors from '../utils/theme';

const Bio = () => {
  const data = useStaticQuery(graphql`
    query BioQuery {
      avatar: file(absolutePath: { regex: "/profile-pic.png/" }) {
        childImageSharp {
          fixed(width: 100, height: 100) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      site {
        siteMetadata {
          author
          social {
            twitter
            github
          }
        }
      }
    }
  `);

  const { author, social } = data.site.siteMetadata;

  const titleStyles = {
    textAlign: 'center',
    marginBottom: rhythm(0.5),
  };
  const bioStyles = {
    marginTop: rhythm(2),
    borderTop: `${rhythm(0.07)} solid ${ThemeColors.light}`,
    paddingTop: rhythm(1),
  };
  const introStyles = {
    marginTop: rhythm(0.25),
    marginBottom: rhythm(0.5),
  };

  return (
    <div css={bioStyles}>
      <h3 css={titleStyles}>About Me</h3>

      <BioImage image={data.avatar.childImageSharp.fixed} alt={author} />

      <p css={introStyles}>
        I&apos;m Tegan. By day I&apos;m a web developer. By night, I&apos;m
        someone who&apos;s a web developer by day.
      </p>

      <SocialLinks twitterName={social.twitter} githubName={social.github} />
    </div>
  );
};

export default Bio;
