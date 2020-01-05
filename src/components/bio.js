import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Image from 'gatsby-image';
import { rhythm } from '../utils/typography';
import { TwitterIcon, GitHubIcon } from './social-icons';

export const Bio = () => {
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
  };
  const imageStyles = {
    container: {
      display: 'flex',
      justifyContent: 'center',
    },
    component: {
      marginBottom: rhythm(0.5),
    },
    img: {
      borderRadius: '50%',
      marginBottom: rhythm(0.5),
    },
  };

  const socialLinks = {
    container: {
      display: 'flex',
      justifyContent: 'center',
    },
    socialIcon: {
      margin: `0 ${rhythm(0.25)}`,
    },
  };

  return (
    <div css={bioStyles}>
      <h3 css={titleStyles}>About Me</h3>

      <div css={imageStyles.container}>
        <Image
          fixed={data.avatar.childImageSharp.fixed}
          alt={author}
          css={imageStyles.component}
          imgStyle={imageStyles.img}
        />
      </div>

      <p>
        I'm Tegan. By day I'm a web developer. By night, I'm someone who's a web
        developer by day.
      </p>

      <div css={socialLinks.container}>
        <a
          href={`https://twitter.com/${social.twitter}`}
          title="Twitter"
          css={socialLinks.socialIcon}
        >
          <TwitterIcon />
        </a>

        <a
          href={`https://github.com/${social.github}`}
          title="GitHub"
          css={socialLinks.socialIcon}
        >
          <GitHubIcon />
        </a>
      </div>
    </div>
  );
};
