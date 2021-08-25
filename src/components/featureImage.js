import React, { Component } from 'react';
import Img from 'gatsby-image';
import { useStaticQuery } from 'gatsby';
export default function FeatureImage({ imageName, fixed, ...props }) {

    // const data = graphql`
    // query{
    //     imageSharp(fixed:{originalName: {eq: imageName}}) {
    //             fixed {
    //                 ...GatsbyImageSharpFixed
    //             }
    //         }
    // }`;
    
    return (
        // <Img fixed={fixed ? fixed : data.imageSharp.fixed}/>
        <Img fixed={fixed }/>
    );
}