import { graphql } from 'gatsby'
import * as React from 'react'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import Layout from '../../components/layout'
import { MDXProvider } from "@mdx-js/react"
import './blog.css';
import FeatureImage from '../../components/featureImage';

const BlogPost = ({ data, ...props }) => {
    console.log(data);

    return (
        <Layout pageTitle="Super Cool Blog Posts">
            <div className="blog flex flex-col items-center">
                    <FeatureImage imageName={data.mdx.frontmatter.featureImage}/>
                <div className=" w-5/6 md:w-2/3 2xl:w-1/2">
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
            featureImage 
        }
        body
    }
}`
export default BlogPost