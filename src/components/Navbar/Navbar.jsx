import { useState } from "react";

const Navbar = () => {
    // State to track the current theme
    const [isDarkMode, setIsDarkMode] = useState(false);
    const toggleTheme = () => {
        setIsDarkMode(prevMode => !prevMode);
    };
    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        <li>Books</li>
                        <li>Libraries</li>
                        <li>Store</li>
                    </ul>
                </div>
                <p className=" text-2xl">LibarayHub</p>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 text-2xl">
                    <li className="mx-2">Books</li>
                    <li className="mx-2">Libraries</li>
                </ul>
            </div>
            <div className="navbar-end">
                <input type="checkbox" className="toggle" checked={isDarkMode} />
                <a className="btn btn-2xl text-2xl">Login</a>
            </div>
        </div>
    );
};

export default Navbar;