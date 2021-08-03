import React, { useState, useEffect } from 'react';

export default function Terminal() {
    const [description, setDescription] = useState('');
    const [index, setIndex] = useState(0);
    const [subIndex, setSubIndex] = useState(0);
    const [reverse, setReverse] = useState(false);
    const [blink, setBlink] = useState(true);
    const words = ["student", 'software engineer'];
    const [input, setInput] = useState('');
    useEffect(() => {
        if (index === words.length) {
            return;
        };

        if (subIndex === words[index].length + 1 &&
            !reverse) {
            setReverse(true);
            return;
        }

        if (subIndex === 0 && reverse) {
            setReverse(false);
            setIndex((prev) => (prev + 1) % words.length);
            return;
        }

        const timeout = setTimeout(() => {
            setSubIndex((prev) => prev + (reverse ? -1 : 1));
        }, Math.max(reverse ? 75 : subIndex === words[index].length ? 1000 :
            150, parseInt(Math.random() * 350)));

        return () => clearTimeout(timeout);
    }, [subIndex, index, reverse]);

    useEffect(() => {
        const timeout2 = setTimeout(() => {
            setBlink((prev) => !prev);
        }, 700);
        return () => clearTimeout(timeout2);
    }, [blink]);

    const handleInput = (e) => {
        e.preventDefault();
        console.log(input)
    };
    return (
        <div className="flex flex-col bg-terminal-gray rounded-md px-4 py-4">
            <div className="flex justify-center content-start items-center h-3 mb-5 md:mb-9">
                <div className="flex items-center space-x-2 md:space-x-3 h-3 w-14">
                    <Circle style="text-red-500" />
                    <Circle style="text-yellow-500" />
                    <Circle style="text-green-500" />
                </div>
                <p className=" text-gray-300 mx-auto font-mono">Hello world</p>
                <div className="w-14" />
            </div>
            <div className="flex flex-col h-auto mx-3 md:mx-9">
                <p className="text-white font-mono">Heyoo, My name is Bryan 😊</p>
                <div className="flex items-center mb-3">
                    <p className="text-white font-mono">I'm a</p>
                    <p className="text-white font-mono text-lg">&nbsp;</p>
                    <p className="text-terminal-special font-mono text-lg font-extralight">{" " + words[index].substring(0, subIndex)}</p>
                    {blink && <Blinker />}
                </div>
                <p className="text-white font-mono ">Usage:</p>
                <div className="flex flex-col bg-gray-600 rounded-sm p-2 mb-2">
                    <p className="text-yellow-500 font-mono">cd &lt;option&gt;</p>
                </div>
                <p className="text-white font-mono">Options:</p>
                <div className="flex flex-col bg-gray-600 rounded-sm p-2 mb-3">
                    <p className="text-yellow-500 font-mono"><span className="text-gray-400">&gt;</span> about</p>
                    <p className="text-yellow-500 font-mono"><span className="text-gray-400">&gt;</span> blogs</p>
                    <p className="text-yellow-500 font-mono"><span className="text-gray-400">&gt;</span> projects</p>
                    <p className="text-yellow-500 font-mono"><span className="text-gray-400">&gt;</span> contact</p>
                </div>
                {/* <div className="flex items-center">
                    <p className="text-yellow-500 font-mono"><span className="text-gray-400">$</span> </p>
                    {blink && <Blinker />}
                </div> */}
                <form className="bg-terminal-gray font-mono text-white" onSubmit={handleInput}>
                    <label>$ </label>
                    <input type="text" className="bg-terminal-gray focus:outline-none" value={input} onChange={(e) => { setInput(e.target.value); }}/>
                </form>
            </div>
        </div>
    );
}

const Circle = ({ style, ...props }) => {
    return (
        <svg className={`fill-current ${style}`} viewBox="0 0 100 100" width="10" height="10" xmlns="http://www.w3.org/2000/svg">
            <circle cx="50" cy="50" r="50" />
        </svg>
    );
};

const Blinker = () => {
    return (
        <svg className="fill-current text-white text-xs w-2 h-4">
            <rect className="w-2 h-4" />
        </svg>
    );
};