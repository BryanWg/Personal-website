import { graphql } from 'gatsby'
import * as React from 'react'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import Layout from '../../components/layout'
import { MDXProvider } from "@mdx-js/react"
import './blog.css';

const BlogPost = ({ data, ...props }) => {
    console.log(data);

    return (
        <Layout pageTitle="Super Cool Blog Posts">
            <div className="blog flex flex-col items-center">
                <div className="md:w-2/3">
                    <MDXRenderer>{data.mdx.body}</MDXRenderer>
                </div>
            </div>
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