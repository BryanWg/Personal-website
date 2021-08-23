import React, { useState } from 'react';
import Layout from "../components/layout";
import Terminal from "../components/terminal";
import Astronaut from '../components/astronaut';
import Mountain from '../components/mountain';
import Wave from '../components/wave';
import Suffer from '../components/diver';
import Diver from '../components/diver';
import '../styles/animation.css';
import Wave2 from '../components/wave2';
import { FaLinkedin, FcDocument, SiGmail, FaDiscord, FaGithub } from 'react-icons/all';
import { Link } from 'gatsby';
const IndexPage = () => {
  return (
    <main className="bg-space-indigo text-white">
      <Layout pageTitle="Home">
        <div className="flex flex-col" >
          <h1 className=" text-5xl font-serif text-center mb-8">
            Welcome 🌠
          </h1>
          <div className="flex justify-evenly">
            <Terminal />
            <Astronaut className="hidden md:block w-2/5" />
          </div>
        </div>

        <div className="bg-ocean-blue -m-4 md:-mx-6 mt-8" id="about-me">
          <Wave />
          <div className="flex flex-col" >
            <h1 className=" text-5xl font-serif text-center my-8">
              About me 🌊
            </h1>
            <div className="flex justify-evenly">
              <div>
                <div class="bubbles">
                  <div class="bubble"></div>
                  <div class="bubble"></div>
                  <div class="bubble"></div>
                  <div class="bubble"></div>
                  <div class="bubble"></div>
                  <Diver />
                </div>
              </div>
              <div className="font-serif text-lg w-1/2">
                I am a final year software engineering student. 
                I love exploring and solving challenges in a creating manner. 
                Checkout some <Link to="/project" className="text-purple-200">project</Link> & <Link to="/blogs" className="text-purple-200">blogs</Link>. That's all for now but I will add more soon!
              </div>
            </div>
          </div>
          <div className="bg-mountain-green -m-4 md:-mx-6 mt-8 pb-8" id="contact">
            <Wave2 />
            <div className="flex flex-col" >
              <h1 className=" text-5xl font-serif text-center mt-8">
                Contact 🌲
              </h1>
              <div className="flex justify-evenly items-center mb-28">
                <div className="text-xl flex flex-col">
                  <div className="flex items-center">
                    <FaLinkedin className="text-blue-500 mr-2" />
                    <a target="_blank" href="https://www.linkedin.com/in/bryanwongweide/">linkedin.com/in/bryanwongweide/</a>
                  </div>
                  <div className="flex items-center">
                    <FaGithub className=" text-gray-300 mr-2" />
                    <a target="_blank" href="https://github.com/BryanWg">github.com/BryanWg</a>
                  </div>
                  <div className="flex items-center">
                    <SiGmail className="text-red-500 mr-2" />
                    <a href="mailto:wongbryan1@gmail.com">wongbryan1@gmail.com</a>
                  </div>
                  <div className="flex items-center">
                    <FcDocument className="text-red-500 mr-2" />
                    <a target="_blank" href="https://drive.google.com/file/d/1WP7iCEX1rzqF1Xu2hqjKb4yjMulETymE/view?usp=sharing">Resume</a>
                  </div>
                  <div className="flex items-center">
                    <FaDiscord className="text-blue-600 mr-2" />
                    <p>butterchicken#9125</p>
                  </div>
                </div>
                <Mountain/>
              </div>
            </div>
          </div>
        </div>

      </Layout>
    </main>
  );
};

export default IndexPage;