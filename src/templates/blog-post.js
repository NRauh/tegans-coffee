import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/layout';
import PostHeader from '../components/post-header';

const BlogPostTemplate = ({ data }) => {
  const post = data.markdownRemark;

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

        <section dangerouslySetInnerHTML={{ __html: post.html }} />
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
