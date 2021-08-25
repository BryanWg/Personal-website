import { Link } from 'gatsby';
import React, { Component } from 'react';

export default function Card({ frontmatter, ...props}) {
    console.log(frontmatter);
    return (
        <Link to={`/blogs/${frontmatter.slug}`}>
            <div className="rounded-md bg-indigo-900 p-4 hover:bg-indigo-800">
                <h1 className=" text-3xl">{frontmatter.title}</h1>
                <p className="text-xl font-thin">{frontmatter.excerpt}</p>
            </div>
        </Link>
    );
}