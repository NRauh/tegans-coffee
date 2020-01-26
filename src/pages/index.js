import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/layout';
import PostHeader from '../components/post-header';
import SEO from '../components/seo';

const BlogIndex = ({ data }) => {
  const { edges: posts } = data.allMarkdownRemark;

  return (
    <Layout>
      <SEO />

      {posts.map(({ node: post }) => (
        <article key={post.fields.slug}>
          <PostHeader
            title={post.frontmatter.title}
            slug={post.fields.slug}
            date={post.frontmatter.date}
            readingTime={post.fields.readingTime.text}
            titleTag="h2"
            subtitleTag="h3"
          />
        </article>
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
            readingTime {
              text
            }
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
