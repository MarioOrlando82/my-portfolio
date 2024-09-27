import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const greetings = [
    { language: 'English', text: 'Welcome' },
    { language: 'Indonesia', text: 'Halo' },
    { language: 'Japanese', text: 'Konnichiwa' },
    { language: 'Chinese', text: 'Nǐ hǎo' },
    { language: 'Spanish', text: 'Hola' },
];

const SplashScreen = ({ onFinish }) => {
    const [currentGreeting, setCurrentGreeting] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentGreeting((prev) => (prev + 1) % greetings.length);
        }, 500);

        const timer = setTimeout(() => {
            clearInterval(interval);
            onFinish();
        }, 2500);

        return () => {
            clearInterval(interval);
            clearTimeout(timer);
        };
    }, [onFinish]);

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 flex items-center justify-center bg-gray-300 z-50"
        >
            <AnimatePresence mode="wait">
                <motion.div
                    key={currentGreeting}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.2 }}
                    className="text-center"
                >
                    <h1 className="text-4xl font-bold text-black mb-2">
                        {greetings[currentGreeting].text}
                    </h1>
                    <p className="text-xl text-black opacity-75">
                        {greetings[currentGreeting].language}
                    </p>
                </motion.div>
            </AnimatePresence>
        </motion.div>
    );
};

export default SplashScreen;