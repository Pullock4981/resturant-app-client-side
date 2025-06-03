import React from 'react';
import { FaFacebook, FaGithub, FaInstagram, FaYoutube } from 'react-icons/fa';
import { NavLink } from 'react-router';

const Footer = () => {
    return (
        <footer className="footer footer-horizontal footer-center bg-[#322D32] text-gray-200 rounded p-10">

            <nav>
                <div className='mt-5 lg:mt-0 flex gap-4 text-2xl justify-center items-center text-gray-200'>
                    <div className='p-3 border rounded-full cursor-pointer'>
                        <FaFacebook />
                    </div>
                    <div className='p-3 border rounded-full cursor-pointer'>
                        <FaGithub />
                    </div>
                    <div className='p-3 border rounded-full cursor-pointer'>
                        <FaYoutube />
                    </div>
                    <div className='p-3 border rounded-full cursor-pointer'>
                        <FaInstagram />
                    </div>
                </div>
            </nav>

            <nav className="grid grid-flow-col gap-4">
                <NavLink to="/" clssName="link link-hover">Home</NavLink>
                <NavLink to="/allFoods" clssName="link link-hover">All Foods</NavLink>
                <NavLink to="/gallery" clssName="link link-hover">Gallery</NavLink>
            </nav>

            <aside>
                <p>Copyright © {new Date().getFullYear()} - All right reserved by ACME Industries Ltd</p>
            </aside>
        </footer>
    );
};

export default Footer;