import React from 'react';
import Carousel from '../Components/Carousel';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div>
            <motion.div
                initial={{ opacity: 0, y: -100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.5 }}
                className="bg-gray-200 py-20 text-center"
            >
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-800 mb-4">Welcome to Our Baking App</h1>
                <p className="text-lg md:text-xl text-gray-600 mb-8">Discover delicious recipes, baking tips, and more!</p>
                <button className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg shadow-lg font-semibold uppercase tracking-wide">
                    <Link to="/signup">
                        Get Started
                    </Link>
                </button>
            </motion.div>
            <div className="bg-gray-300 py-2 mt-5">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-center text-gray-800 mb-2">Featured Recipes</h2>
                </div>
            </div>
            <Carousel />
            <div className="bg-gray-200 container mx-auto px-4 py-5">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-center text-gray-800 mb-8">About Us</h2>
                <p className="text-lg md:text-xl text-gray-600 mb-8">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod lorem sit amet justo tempor, sit amet dapibus purus ultricies.
                </p>
                <p className="text-lg md:text-xl text-gray-600">
                    Vivamus venenatis magna velit, sit amet auctor justo tincidunt et. Duis aliquam condimentum nisi, at efficitur neque rhoncus ut.
                </p>

            </div>
        </div>
    );
};

export default Home;

