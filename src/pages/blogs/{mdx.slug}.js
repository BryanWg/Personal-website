import { graphql } from 'gatsby'
import * as React from 'react'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import Layout from '../../components/layout'

const BlogPost = ({data, ...props}) => {
    console.log(this);
    return (
        <Layout pageTitle="Super Cool Blog Posts">
            <MDXRenderer>{data.mdx.body}</MDXRenderer>
        </Layout>
    )
}
export const query = graphql`
query MyQuery($id: String) {
    mdx(id: {eq: $id}) {
        frontmatter {
            title
            
        }
        body
    }
}`
export default BlogPost