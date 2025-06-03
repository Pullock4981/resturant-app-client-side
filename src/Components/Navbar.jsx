import React from 'react';
import { Link, NavLink } from 'react-router';
import './Navbar.css'

const Navbar = () => {

    // nav links
    const navLinks = <>
        <div className='flex gap-3 md:flex-row flex-col'>
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/allFoods">All Foods</NavLink></li>
            <li><NavLink to="/gallery">Gallery</NavLink></li>
            <li><NavLink to="/myFoods">My Foods</NavLink></li>
            <li><NavLink to="/addFoods">Add food</NavLink></li>
            <li><NavLink to="/myOrders">My Orders</NavLink></li>
        </div>
    </>

    return (
        <div className="navbar lg:px-28 text-gray-200 shadow-sm bg-[#312C31]">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content text-gray-200 bg-[#312C31] rounded-box z-1 mt-3 w-52 p-2 shadow">
                        {
                            navLinks
                        }
                    </ul>
                </div>
                <a className="btn btn-ghost font-bold text-xl">ForkFlow</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {
                        navLinks
                    }
                </ul>
            </div>
            <div className="navbar-end">
                <Link to="/logIn">
                    <button className='px-5 py-2 cursor-pointer rounded-sm mr-3 bg-[#BE7878] text-white border-0'>Login</button>
                </Link>
                <Link to="logOut">
                    <button className='px-5 py-2 cursor-pointer rounded-sm bg-[#BE7878] text-white border-0'>Log out</button>
                </Link>
            </div>
        </div>
    );
};

export default Navbar;