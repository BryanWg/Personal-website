import React, { useState } from 'react';
import Layout from "../components/layout";
import Terminal from "../components/terminal";


const IndexPage = () => {
  return (
    <main >
      <Layout>
        <Terminal />
      </Layout>
    </main>
  );
};


// const TerminalController = (props = {}) => {
//   const [terminalLineData, setTerminalLineData] = useState([
//     { type: LineType.Output, value: 'Heyo, my name is Bryan and I like to code! ✌' },
//     { type: LineType.Input, value: 'Some previous input received' },
//   ]);

//   const description = [
//     'coder'
//   ]
//   // Terminal has 100% width by default so it should usually be wrapped in a container div
//   return (
//     <div className="container">
//       <Terminal className="" name='Hello World!' colorMode={"ColorMode.Dark"} lineData={terminalLineData} onInput={terminalInput => console.log(`New terminal input received: '${terminalInput}'`)} />
//     </div>
//   );
// }
export default IndexPage;
