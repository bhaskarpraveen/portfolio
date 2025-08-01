'use client'
import React, { useEffect, useState } from 'react';
import { FaGithub, FaLinkedin, FaPhone } from 'react-icons/fa';
import { HiDocument } from 'react-icons/hi';
import { MdEmail } from 'react-icons/md';
import { getVisitorCount, updateVisitorCount } from '@/app/actions';

function Navbar() {
    const [count, setCount] = useState<number>(0);

    useEffect(() => {
        const initVisitors = async () => {
            await updateVisitorCount();
            const newCount = await getVisitorCount();
            setCount(newCount);
        };

        initVisitors();
    }, []);

    return (
        <nav className="fixed top-0 left-0 right-0 bg-gray-900/90 backdrop-blur-sm z-50 border-b border-gray-800">
            <div className="max-w-6xl mx-auto px-4">
                <div className="flex items-center justify-between h-14 sm:h-16">
                    <span className="text-sm sm:text-xl font-bold text-white">
                        Visitors: {count}
                    </span>
                    
                    <div className="flex items-center space-x-8">
                        <div className="hidden md:flex space-x-8">
                                                    <a 
                            href="#about"
                            className="text-gray-300 hover:text-white transition-colors"
                        >
                            About
                        </a>
                        <a 
                            href="#experience"
                            className="text-gray-300 hover:text-white transition-colors"
                        >
                            Experience
                        </a>
                        <a 
                            href="#skills"
                            className="text-gray-300 hover:text-white transition-colors"
                        >
                            Skills
                        </a>
                        </div>

                        <div className="flex items-center space-x-3 sm:space-x-4">
                            <a
                                href="mailto:bhaskarpraveen14@gmail.com"
                                className="text-gray-300 hover:text-white transition-colors"
                                title="Email"
                            >
                                <MdEmail className="w-4 h-4 sm:w-5 sm:h-5" />
                            </a>
                            <a
                                href="tel:+17372064341"
                                className="text-gray-300 hover:text-white transition-colors"
                                title="Phone"
                            >
                                <FaPhone className="w-4 h-4 sm:w-5 sm:h-5" />
                            </a>
                            <a
                                href="https://github.com/bhaskarpraveen"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-300 hover:text-white transition-colors"
                                title="GitHub"
                            >
                                <FaGithub className="w-4 h-4 sm:w-5 sm:h-5" />
                            </a>
                            <a
                                href="https://www.linkedin.com/in/bhaskar-praveen/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-300 hover:text-white transition-colors"
                                title="LinkedIn"
                            >
                                <FaLinkedin className="w-4 h-4 sm:w-5 sm:h-5" />
                            </a>
                            <a
                                href="/Bhaskar_Praveen_Resume.pdf"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-300 hover:text-white transition-colors"
                                title="Resume"
                            >
                                <HiDocument className="w-4 h-4 sm:w-5 sm:h-5" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Navbar; 