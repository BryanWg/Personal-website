import * as React from 'react'
import { graphql } from 'gatsby'
import Layout from '../../components/layout'

const BlogPage = ({data, ...props}) => {
    return (
        <Layout pageTitle="My Blog Posts">
            {data.allFile.nodes.map((node) => <p>{node.name}</p>)}
        </Layout>
    )
}

export const query = graphql`
query{
    allFile {
        nodes{
            name
        }
    }
}`

export default BlogPage