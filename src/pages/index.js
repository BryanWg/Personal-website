import React, { useState } from 'react';
import Layout from "../components/layout";
import Terminal from "../components/terminal";
import Astronaut from '../images/astronaut'

const IndexPage = () => {
  return (
    <main >
      <Layout>
        <div className="flex justify-evenly">
          <Terminal/>
          <Astronaut/>
        </div>
      </Layout>
    </main>
  );
};

export default IndexPage;
