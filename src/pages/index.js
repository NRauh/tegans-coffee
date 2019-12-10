import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/layout';
import { ShortPost } from '../components/posts';

const BlogIndex = props => {
  const { edges: posts } = props.data.allMarkdownRemark;

  return (
    <Layout>
      {posts.map(({ node: post }) => (
        <ShortPost
          key={post.fields.slug}
          title={post.frontmatter.title}
          slug={post.fields.slug}
          date={post.frontmatter.date}
        />
      ))}
    </Layout>
  );
};

export default BlogIndex;

export const pageQuery = graphql`
  query {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
            date(formatString: "MMMM DD, YYYY")
          }
        }
      }
    }
  }
`;

// export const pageQuery = graphql`
//   query {
//     site {
//       siteMetadata {
//         title
//       }
//     }
//     allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
//       edges {
//         node {
//           excerpt
//           fields {
//             slug
//           }
//           frontmatter {
//             date(formatString: "MMMM DD, YYYY")
//             title
//             description
//           }
//         }
//       }
//     }
//   }
// `;
