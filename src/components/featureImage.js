import React, { Component } from 'react';
import Img from 'gatsby-image';
import { useStaticQuery, graphql } from 'gatsby';

export default function FeatureImage({ imageName, fixed, className, width=300, ...props }) {
    const data = useStaticQuery(graphql`
    query featureImage($imageName: String, $width: Int) {
    imageSharp(fixed:{originalName: {eq: $imageName}}) {
        fixed(width: $width) {
            ...GatsbyImageSharpFixed
        }
    }
    }
    `);

    return (
        // <Img fixed={fixed ? fixed : data.imageSharp.fixed}/>
        <div className="flex items-center overflow-hidden">
            <Img fixed={data.imageSharp.fixed} objectFit="cover" className={className}/>
        </div>
    );
}