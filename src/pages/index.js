import React, { useState } from 'react';
import Layout from "../components/layout";
import Terminal from "../components/terminal";
import Astronaut from '../components/astronaut';
import Wave from '../components/wave';
import Suffer from '../components/diver';
import Diver from '../components/diver';
const IndexPage = () => {
  return (
    <main className="bg-space-indigo ">
      <Layout pageTitle="Home">
        <div className="flex flex-col" >
          <h1 className=" text-5xl text-white font-serif text-center mb-8">
            Welcome 🌠
          </h1>
          <div className="flex justify-evenly">
            <Terminal />
            <Astronaut className="hidden md:block w-2/5" />
          </div>
        </div>
        
        <div className="bg-space-blue -m-4 md:-mx-6 mt-8">
          <Wave />
          <div className="flex flex-col" >
            <h1 className=" text-5xl text-white font-serif text-center my-8">
              About me 🌊
            </h1>
            <div className="flex justify-evenly">
              
              <Diver/>
              <Astronaut className="hidden md:block w-2/5" />
            </div>
          </div>
        </div>

      </Layout>
    </main>
  );
};

export default IndexPage;