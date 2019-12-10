import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/layout';

const BlogPostTemplate = (props) => {
  const post = props.data.markdownRemark;

  return (
    <Layout>
      <article>
        <header>
          <h1>
            {post.frontmatter.title}
          </h1>

          <h2>
            {post.frontmatter.date}
          </h2>
        </header>

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
