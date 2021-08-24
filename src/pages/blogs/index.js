import * as React from 'react'
import { graphql } from 'gatsby'
import Layout from '../../components/layout'
import Card from '../../components/card'

const BlogPage = ({ data, ...props }) => {
    return (
        <Layout pageTitle="Blog Posts">
            <div className="flex flex-wrap">
                {data.allMdx.nodes.map((node) =>
                    <Card frontmatter={{ ...node.frontmatter }} key={node.key} />
                )}
            </div>
            
        </Layout>
    )
}

export const query = graphql`
query{
  allMdx {
    nodes {
      frontmatter {
        excerpt
        slug
        title
      }
      id
    }
  }
}`

export default BlogPage