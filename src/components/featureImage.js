import React, { Component } from 'react';
import Img from 'gatsby-image';
import { useStaticQuery, graphql } from 'gatsby';

export default function FeatureImage({ imageName, fixed, className, ...props }) {
    const data = useStaticQuery(graphql`
    query featureImage($imageName: String) {
    imageSharp(fixed:{originalName: {eq: $imageName}}) {
        fixed {
            ...GatsbyImageSharpFixed
        }
    }
    }
    `);

    return (
        // <Img fixed={fixed ? fixed : data.imageSharp.fixed}/>
        <Img fixed={data.imageSharp.fixed} objectFit="cover" className={className}/>
    );
}