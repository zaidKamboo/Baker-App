import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-gray-800 text-gray-300 py-8">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* About Section */}
                    <div>
                        <h2 className="text-lg font-semibold mb-4">About Us</h2>
                        <p className="mb-2">We are passionate bakers dedicated to sharing our love for baking with the world.</p>
                        <p>Follow us on social media for more baking tips and inspiration!</p>
                    </div>

                    {/* Quick Links Section */}
                    <div>
                        <h2 className="text-lg font-semibold mb-4">Quick Links</h2>
                        <ul className="list-none p-0">
                            <li><a href="#recipes" className="text-gray-300 hover:text-white">Recipes</a></li>
                            <li><a href="#blog" className="text-gray-300 hover:text-white">Blog</a></li>
                            <li><a href="#contact" className="text-gray-300 hover:text-white">Contact Us</a></li>
                        </ul>
                    </div>

                    {/* Contact Section */}
                    <div>
                        <h2 className="text-lg font-semibold mb-4">Contact Us</h2>
                        <p className="mb-2">123 Bakery Lane</p>
                        <p>City, State, ZIP</p>
                        <p className="mt-4">Phone: (123) 456-7890</p>
                        <p>Email: info@bakingwebsite.com</p>
                    </div>
                </div>
            </div>

            {/* Attribution Section */}
            <div className="text-center mt-8">
                <p>&copy; {new Date().getFullYear()} Baking Website. All rights reserved.</p>
                <p>Designed and developed by Your Name.</p>
            </div>
        </footer>
    );
};

export default Footer;
