import React, { useState, useEffect } from 'react';
import Typewriter from 'react-typewriter-effect';

const TypeWriter = () => {
    const [texts, setTexts] = useState([
        "Hello, world!",
        "This is a typing effect!",
        "Try it out!",
    ]);
    const [currentTextIndex, setCurrentTextIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentTextIndex((prevIndex) => (prevIndex + 1) % texts.length);
        }, 5000); // Change text every 5 seconds

        return () => clearInterval(interval);
    }, [texts]);

    return (
        <div style={{ width: '100%', height: '100px' }}>
            <Typewriter
                text={texts[currentTextIndex]}
                options={{
                    loop: true, // Set loop to true for infinite looping
                    delay: 30, // Adjust typing speed
                    deleteSpeed: 10, // Adjust deleting speed
                }}
            />
        </div>
    );
};

export default TypeWriter;
