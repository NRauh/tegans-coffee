import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Image from 'gatsby-image';

export const Bio = () => {
  const data = useStaticQuery(graphql`
    query BioQuery {
      avatar: file(absolutePath: { regex: "/profile-pic.jpg/" }) {
        childImageSharp {
          fixed(width: 50, height: 50) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      site {
        siteMetadata {
          author
          social {
            twitter
          }
        }
      }
    }
  `);

  const { author, social } = data.site.siteMetadata;

  return (
    <div>
      <h3>About Me</h3>

      <Image
        fixed={data.avatar.childImageSharp.fixed}
        alt={author}
        imgStyle={{
          borderRadius: '50%',
        }}
      />

      <p>
        I'm Tegan.
        By day I'm a web developer.
        By night, I'm someone who's a web developer by day.
      </p>

      <p>
        <a href={`https://twitter.com/${social.twitter}`}>
          Twitter
        </a>
      </p>
    </div>
  );
}
