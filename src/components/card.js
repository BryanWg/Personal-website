import { Link } from 'gatsby';
import React, { Component } from 'react';
import FeatureImage from './featureImage';

export default function Card({ frontmatter, className, ...props}) {
    console.log(frontmatter);
    return (
        <Link to={`/blogs/${frontmatter.slug}`}>
            <div className={`rounded-md bg-indigo-900 hover:bg-indigo-800 hover:shadow-2xl hover:opacity-95 ${className}`}>
                <FeatureImage fixed={frontmatter.featureImage} className="rounded-t-md "/>
                <div className="p-4">
                <h1 className=" text-3xl">{frontmatter.title}</h1>
                <p className="text-xl font-thin">{frontmatter.excerpt}</p>

                </div>
            </div>
        </Link>
    );
}