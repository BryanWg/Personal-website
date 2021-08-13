import React, { useState } from 'react';
import Layout from "../components/layout";
import Terminal from "../components/terminal";
import Astronaut from '../images/astronaut';

const IndexPage = () => {
  return (
    <main >
      <Layout>
        <div className="flex flex-col">
          <h1 className=" text-5xl text-white font-serif text-center mb-5">
            Welcome 👋
          </h1>
          <div className="flex justify-evenly">
            <Terminal />
            <Astronaut />
          </div>
        </div>

      </Layout>
    </main>
  );
};

export default IndexPage;
