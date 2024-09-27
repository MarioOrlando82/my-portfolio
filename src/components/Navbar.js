import React, { useState } from "react";
import { Link, animateScroll as scroll } from 'react-scroll';
import ThemeToggle from "./ThemeToggle";
import Assets from "../assets/logoMO.png";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const scrollToTop = () => {
        scroll.scrollToTop();
    };

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const menuItems = [
        { to: "about", label: "About Me" },
        { to: "projects", label: "Projects" },
        { to: "experiences", label: "Experiences" },
        { to: "skills", label: "Skills" },
        { to: "educations", label: "Educations" }
    ];

    return (
        <div className="navbar bg-base-100 shadow-md fixed top-0 left-0 right-0 z-50">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden" onClick={toggleMenu}>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    {isOpen && (
                        <ul tabIndex={0} className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                            {menuItems.map((item) => (
                                <li key={item.to}>
                                    <Link
                                        to={item.to}
                                        smooth={true}
                                        duration={500}
                                        onClick={() => setIsOpen(false)}
                                    >
                                        {item.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    )}
                </div>
                <img src={Assets} alt="Logo" className="h-10 ml-3 cursor-pointer" onClick={scrollToTop} />
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {menuItems.map((item) => (
                        <li key={item.to}>
                            <Link
                                to={item.to}
                                smooth={true}
                                duration={500}
                            >
                                {item.label}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
            <div className="navbar-end">
                <ThemeToggle />
            </div>
        </div>
    );
};

export default Navbar;
