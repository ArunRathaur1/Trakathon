import React, { useState } from "react";
import img from './logo1.png';
import { Link } from "react-router-dom";

const Navbar = (props) => {
    const [open, setOpen] = useState(false);
    const [isHindi, setIsHindi] = useState(true);  // State to toggle language

    function openlist() {
        if (props.list === true)
            props.setlist(false);
        if (props.list === false)
            props.setlist(true);
    }

    function closelist() {
        if (props.list === true) {
            props.setlist(false);
        }
    }

    const toggleLanguage = () => {
        setIsHindi(!isHindi);
    }

    return (
        <>
            <header className={`absolute left-0 top-0 z-20 flex w-full items-center`} style={{ background: "black" }}>
                <div className="container">
                    <div className="relative -mx-4 flex items-center justify-between">
                        <div className="w-60 max-w-full px-4">
                            <a href="/#" className="block w-full py-5">
                                <Link to='/'><img
                                    src={img}
                                    alt="logo"
                                    className="w-full"
                                    style={{width:"100px"}}
                                /></Link>
                            </a>
                        </div>
                        <div className="flex w-full items-center justify-between px-4">
                            <button
                                onClick={() => setOpen(!open)}
                                id="navbarToggler"
                                className={`${
                                    open && "navbarTogglerActive"
                                } absolute right-4 top-1/2 block -translate-y-1/2 rounded-lg px-3 py-[6px] ring-primary focus:ring-2 lg:hidden`}
                            >
                                <span className="relative my-[6px] block h-[2px] w-[30px] bg-yellow-500 "></span>
                                <span className="relative my-[6px] block h-[2px] w-[30px] bg-yellow-500 "></span>
                                <span className="relative my-[6px] block h-[2px] w-[30px] bg-yellow-500 "></span>
                            </button>
                            <nav
                                id="navbarCollapse"
                                className={`${
                                    open ? "block" : "hidden"
                                } lg:block`}
                            >
                                <ul className="block lg:flex">
                                    <div className="flex py-2 text-base font-medium text-yellow-500 hover:text-primary lg:ml-10 lg:inline-flex" onClick={closelist}>
                                        {isHindi ? "रणनीतियाँ चुनें" : "Choose strategies"}
                                    </div>
                                    <Link to='/NonLoggedFeatures'>
                                        <div className="flex py-2 text-base font-medium text-yellow-500 hover:text-primary lg:ml-10 lg:inline-flex" onClick={closelist}>
                                            {isHindi ? "विशेषताएँ" : "Features"}
                                        </div>
                                    </Link>
                                    <div className="flex py-2 text-base font-medium text-yellow-500 hover:text-primary lg:ml-10 lg:inline-flex" onClick={openlist}>
                                        {isHindi ? "संसाधन" : "Resources"}
                                    </div>
                                    <div className="flex justify-center mt-4" style={{marginLeft:"50px",top:"-10px"}}>
                                    <button
                                        onClick={toggleLanguage}
                                        className="px-6 py-2 rounded-lg bg-yellow-500 text-black hover:bg-opacity-80"
                                    >
                                        {isHindi ? "Switch to English" : "हिंदी में स्विच करें"}
                                    </button>
                                </div>
                                </ul>
                            </nav>
                            <div className="hidden justify-end pr-16 sm:flex lg:pr-0">
                                <Link to='/login'>
                                    <span className="px-7 py-3 text-base font-medium text-yellow-500 hover:text-primary ">
                                        {isHindi ? "साइन इन करें" : "Sign in"}
                                    </span>
                                </Link>
                                <Link to='/signup'>
                                    <a
                                        className="rounded-lg bg-yellow-500 px-7 py-3 text-base font-medium text-black hover:bg-opacity-90"
                                    >
                                        {isHindi ? "साइन अप करें" : "Sign Up"}
                                    </a>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
            {/* Button to toggle language */}
           
        </>
    );
};

export default Navbar;
