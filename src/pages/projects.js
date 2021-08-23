import * as React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/layout';

const ProjectPage = ({ data, ...props }) => {
    return (
        <Layout pageTitle="My Projects">
            {data.allFile.nodes.map((node) => <p>{node.name}</p>)}
        </Layout>
    );
};

export const query = graphql`
query{
    allFile {
        nodes{
            name
        }
    }
}`;

export default ProjectPage;