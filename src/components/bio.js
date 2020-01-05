import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Image from 'gatsby-image';
import { rhythm } from '../utils/typography';
import { TwitterIcon, GitHubIcon } from './social-icons';

const BioImage = ({ image, alt }) => {
  const styles = {
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

  return (
    <div css={styles.container}>
      <Image
        fixed={image}
        alt={alt}
        css={styles.component}
        imgStyle={styles.img}
      />
    </div>
  );
};

const SocialLinks = ({ twitterName, githubName }) => {
  const styles = {
    container: {
      display: 'flex',
      justifyContent: 'center',
    },
    socialIcon: {
      margin: `0 ${rhythm(0.25)}`,
    },
  };

  return (
    <div css={styles.container}>
      <a
        href={`https://twitter.com/${twitterName}`}
        title="Twitter"
        css={styles.socialIcon}
      >
        <TwitterIcon />
      </a>

      <a
        href={`https://github.com/${githubName}`}
        title="GitHub"
        css={styles.socialIcon}
      >
        <GitHubIcon />
      </a>
    </div>
  );
}

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

  return (
    <div css={bioStyles}>
      <h3 css={titleStyles}>About Me</h3>

      <BioImage
        image={data.avatar.childImageSharp.fixed}
        alt={author}
      />

      <p>
        I'm Tegan. By day I'm a web developer. By night, I'm someone who's a web
        developer by day.
      </p>

      <SocialLinks
        twitterName={social.twitter}
        githubName={social.github}
      />
    </div>
  );
};
