import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const user = useSelector((store) => store.user)
    console.log(user);
    const toggleNavbar = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="bg-gray-100 ">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16">
                    <div className="flex">
                        <div className="flex-shrink-0 flex items-center">
                            <Link to="/" className="text-gray-900 font-bold text-lg">
                                Logo
                            </Link>
                        </div>
                        <div className="hidden w-[91vw] sm:block sm:ml-6">
                            <div className="flex items-center justify-around sm:space-x-4 h-full w-full px-auto ">
                                {[{ name: "Home", path: "/" }, { name: "About", path: "/about" }, { name: "Contact Us", path: '/contactUs' }, { name: "Shop Now", path: '/shopNow' }].map((item, index) => (
                                    <Link key={index} to={item.path} className="text-gray-900 px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-200 focus:outline-none focus:bg-gray-200">
                                        {item.name}
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className="flex items-center sm:hidden">
                        <button onClick={toggleNavbar} className="text-gray-900 hover:text-gray-900 focus:outline-none focus:text-gray-900">
                            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                {isOpen ? (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                ) : (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                                )}
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
            {isOpen && (
                <div className="sm:hidden">
                    <div className="px-2 pt-2 pb-3 space-y-1">
                        {[{ name: "Home", path: "/" }, { name: "About", path: "/about" }, { name: "Shop Now", path: '/shopNow' }].map((item, index) => (
                            <Link key={index} to={item.path} className="block px-3 py-2 rounded-md text-base font-medium text-gray-900 hover:bg-gray-200 focus:outline-none focus:bg-gray-200">
                                {item.name}
                            </Link>
                        ))}
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
