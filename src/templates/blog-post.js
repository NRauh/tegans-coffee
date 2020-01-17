import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/layout';
import PostHeader from '../components/post-header';
import { rhythm } from '../utils/typography';

const BlogPostTemplate = ({ data }) => {
  const post = data.markdownRemark;

  const postStyles = {
    '.gatsby-highlight': {
      marginBottom: rhythm(1),
    },
  };

  return (
    <Layout>
      <article>
        <PostHeader
          title={post.frontmatter.title}
          date={post.frontmatter.date}
          titleTag="h1"
          subtitleTag="h2"
          center
        />

        <section
          css={postStyles}
          dangerouslySetInnerHTML={{ __html: post.html }}
        />
      </article>
    </Layout>
  );
};

export default BlogPostTemplate;

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
      }
    }
  }
`;

// export const pageQuery = graphql`
//   query BlogPostBySlug($slug: String!) {
//     site {
//       siteMetadata {
//         title
//       }
//     }
//     markdownRemark(fields: { slug: { eq: $slug } }) {
//       id
//       excerpt(pruneLength: 160)
//       html
//       frontmatter {
//         title
//         date(formatString: "MMMM DD, YYYY")
//         description
//       }
//     }
//   }
// `;
