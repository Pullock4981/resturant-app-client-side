
import { useContext, useEffect, useRef, useState } from "react";
import { AuthContext } from "../Contexts/AuthContext";
import Swal from "sweetalert2";
import { Link, NavLink } from "react-router";
import './Navbar.css';
import logo from '../assets/Rimberio.png';

const NavBar = () => {
    const { user, SignOutUser } = useContext(AuthContext);
    const [theme, setTheme] = useState("light");
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const dropdownRef = useRef();

    // Set initial theme on mount
    useEffect(() => {
        const savedTheme = localStorage.getItem("theme");
        const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
        const systemTheme = prefersDark ? "dark" : "light";
        const current = savedTheme || systemTheme;

        setTheme(current);
        document.documentElement.setAttribute("data-theme", current);
    }, []);

    // Close user dropdown if clicking outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsDropdownOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    const toggleTheme = () => {
        const newTheme = theme === "light" ? "dark" : "light";
        setTheme(newTheme);
        document.documentElement.setAttribute("data-theme", newTheme);
        localStorage.setItem("theme", newTheme);
    };

    const handleSignOut = () => {
        SignOutUser()
            .then(() => {
                Swal.fire({
                    icon: "success",
                    title: "Logged out successfully",
                    showConfirmButton: false,
                    timer: 1500,
                });
            })
            .catch((error) => {
                console.error("Sign out error:", error);
            });
    };

    const navLinks = (
        <div className="flex gap-4 md:flex-row flex-col font-semibold">
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/allFoods">All Foods</NavLink></li>
            <li><NavLink to="/gallery">Gallery</NavLink></li>
            <li><NavLink to="/myFoods">My Foods</NavLink></li>
            <li><NavLink to="/addFoods">Add Food</NavLink></li>
            <li><NavLink to="/myOrders">My Orders</NavLink></li>
        </div>
    );

    return (
        <div className="navbar bg-base-100 shadow-md text-base-content lg:px-28 px-4 sticky top-0 z-50">
            {/* Left (Brand & Mobile menu) */}
            <div className="navbar-start">
                <div className="dropdown">
                    <button tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none"
                            viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </button>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow rounded-box w-52 bg-base-100 text-base-content">
                        {navLinks}
                    </ul>
                </div>
                <div className="flex items-center gap-2">
                    <img className="w-10 rounded-full" src={logo} alt="" />
                    <a className="font-bold text-xl hidden md:block">ForkFlow</a>
                </div>
            </div>

            {/* Center (Nav links) */}
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">{navLinks}</ul>
            </div>

            {/* Right (User + Theme Toggle) */}
            <div className="navbar-end">
                {user ? (
                    <div className="relative flex items-center gap-3" ref={dropdownRef}>
                        <div className="tooltip tooltip-bottom" data-tip={user.displayName}>
                            <img
                                src={user.photoURL}
                                alt="User"
                                className="w-8 h-8 rounded-full border cursor-pointer"
                                onClick={() => setIsDropdownOpen((prev) => !prev)}
                            />
                        </div>

                        {isDropdownOpen && (
                            <div className="absolute right-20 top-14 bg-base-100 text-base-content shadow-lg rounded-md w-40 z-50">
                                <ul className="flex flex-col text-sm font-medium">
                                    {/* <li><Link to="/myFoods" className="block px-4 py-2 hover:bg-base-200" onClick={() => setIsDropdownOpen(false)}>My Foods</Link></li>
                                    <li><Link to="/addFoods" className="block px-4 py-2 hover:bg-base-200" onClick={() => setIsDropdownOpen(false)}>Add Food</Link></li>
                                    <li><Link to="/myOrders" className="block px-4 py-2 hover:bg-base-200" onClick={() => setIsDropdownOpen(false)}>My Orders</Link></li> */}
                                </ul>
                            </div>
                        )}

                        <button
                            onClick={handleSignOut}
                            className="md:px-4 px-2 md:py-2 py-1 cursor-pointer rounded bg-[#AA5A8C] text-white font-semibold">
                            Log out
                        </button>
                    </div>
                ) : (
                    <Link to="/login">
                        <button className="md:px-4 px-2 md:py-2 py-1 cursor-pointer rounded bg-[#AA5A8C] text-white font-semibold">
                            Log in
                        </button>
                    </Link>
                )}

                {/* 🌙 Theme toggle */}

                <label className="swap swap-rotate ml-3 md:p-2 p-1 rounded-full bg-primary text-white hover:bg-primary-focus cursor-pointer transition duration-200">
                    <input
                        type="checkbox"
                        onChange={toggleTheme}
                        checked={theme === "dark"}
                    />
                    {/* Sun icon (Light mode) */}
                    <svg
                        className="swap-off w-6 h-6 fill-current"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                    >
                        <path d="M5.64 17.66L4.22 19.07a1 1 0 001.42 1.42l1.41-1.41a1 1 0 10-1.41-1.42zM1 13h2a1 1 0 100-2H1a1 1 0 000 2zm10-9a1 1 0 00-1 1v2a1 1 0 102 0V5a1 1 0 00-1-1zm9 9h2a1 1 0 100-2h-2a1 1 0 100 2zm-2.05-7.36a1 1 0 00-1.42-1.42L17.66 5.64a1 1 0 001.42 1.42l-1.41-1.42zM12 7a5 5 0 100 10 5 5 0 000-10zm0 16a1 1 0 001-1v-2a1 1 0 10-2 0v2a1 1 0 001 1zm5.66-3.66l1.41 1.41a1 1 0 001.42-1.42l-1.41-1.41a1 1 0 00-1.42 1.42z" />
                    </svg>
                    {/* Moon icon (Dark mode) */}
                    <svg
                        className="swap-on w-6 h-6 fill-current"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                    >
                        <path d="M21.64 13a1 1 0 00-1.05-.14 8.05 8.05 0 01-3.37.73 8.15 8.15 0 01-8.14-8.1 8.59 8.59 0 01.25-2 1 1 0 00-1.33-1.13A10.14 10.14 0 1022 14.05a1 1 0 00-.36-1.05z" />
                    </svg>
                </label>

            </div>
        </div>
    );
};

export default NavBar;
