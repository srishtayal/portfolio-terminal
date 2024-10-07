import React, { useState } from 'react';

function Terminal() {
    const [userInput, setUserInput] = useState('');
    const [output, setOutput] = useState([]);

    const handleKeyPress = (event) => {
        if (event.key === 'Enter') {
            event.preventDefault();
            processInput(userInput);
            setUserInput(''); // Clear the input after processing
        }
    };

    const processInput = (input) => {
        if (input.toLowerCase() === "help") {
            setOutput(prevOutput => [...prevOutput, "available commands: about"]);
        } else {
            setOutput(prevOutput => [...prevOutput, `Command not found: ${input}`]);
        }
    };

    return (
        <div className='bg-gray-700 w-screen h-screen text-white'>
            <header className='bg-gray-800 flex items-center justify-between p-2'>
                <div className='flex items-center gap-2'>
                    <div className='bg-red-600 w-3 h-3 rounded-full'></div>
                    <div className='bg-yellow-400 w-3 h-3 rounded-full'></div>
                    <div className='bg-green-400 w-3 h-3 rounded-full'></div>
                </div>
                <h1 className='text-white font-bold mx-auto text-center flex-grow'>Srishti's Portfolio</h1>
                <div className='toggle-btn'>
                    <button>Dark</button>
                </div>
            </header>
            <p className='font-semibold mt-4 mx-3'>
                <span className='text-yellow-500'>visitor</span>@<span className='text-green-500'>terminal.srishtayal.me</span>:-$ welcome
            </p>
            <p className='font-semibold mx-3'>Welcome to my terminal portfolio.  (Version 1.0.0)</p>
            <p className='font-semibold mx-3'>....</p>
            <p className='font-semibold mx-3 mt-1'>This project's source code can be seen in this <span className='text-yellow-500'>GitHub repo</span></p>
            <p className='font-semibold mx-3'>....</p>
            <p className='font-semibold mx-3 mt-1'>For a list of available commands, type <span className='text-green-500'>'help'</span></p>

            <div className='font-semibold mt-4 mx-3'>
                <span className='text-yellow-500'>visitor</span>@<span className='text-green-500'>terminal.srishtayal.me</span>:-$ 
                <input
                    className='bg-gray-700 border-none focus:outline-none'
                    value={userInput}
                    onChange={(e) => setUserInput(e.target.value)}
                    onKeyPress={handleKeyPress}
                />
            </div>

            <div className='mt-4 mx-3'>
                {output.map((line, index) => (
                    <p key={index} className='font-semibold'>{line}</p>
                ))}
            </div>
        </div>
    );
}

export default Terminal;
