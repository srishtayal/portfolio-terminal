import { useState, useEffect } from 'react';

const bootMessages = [
    "Booting Srishti's Portfolio",
    'Loading assets...',
    'Setting up environment...',
    'Ready!',
];

const BootSequence = ({ onEnter }) => {
    const [textIndex, setTextIndex] = useState(0);
    const [showCursor, setShowCursor] = useState(true);

    useEffect(() => {
        if (textIndex < bootMessages.length) {
            const timeout = setTimeout(() => setTextIndex(textIndex + 1), 1500);
            return () => clearTimeout(timeout);
        }
    }, [textIndex]);

    useEffect(() => {
        const cursorInterval = setInterval(() => setShowCursor(prev => !prev), 500);
        return () => clearInterval(cursorInterval);
    }, []);

    const handleKeyDown = (e) => {
        if (e.key === 'Enter' && textIndex === bootMessages.length) {
            onEnter(); 
        }
    };

    return (
        <div 
            className="h-screen flex items-center justify-center bg-gray-900 text-white"
            onKeyDown={handleKeyDown}
            tabIndex={0} 
            autoFocus
        >
            <div className="font-mono text-lg leading-relaxed">
                {bootMessages.slice(0, textIndex).map((message, index) => (
                    <div key={index}>{message}</div>
                ))}
                {textIndex === bootMessages.length && (
                    <div>
                        Press Enter{showCursor ? <span className="blink">_</span> : ''}
                    </div>
                )}
            </div>
        </div>
    );
};

export default BootSequence;
