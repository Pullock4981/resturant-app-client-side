import React from 'react';
import { FaFacebook, FaGithub, FaInstagram, FaYoutube } from 'react-icons/fa';
import logo from "../assets/Rimberio.png"

const Hero = () => {
    return (
        <div className='bg-[#8A4771] py-8'>
            <div className='max-w-7xl mx-auto lg:px-10 flex justify-between items-center lg:flex-row flex-col'>
                <div className='text-gray-200 text-center w-[100%] lg:w-[33%] lg:text-left'>
                    <p>
                        NHB-10, Mirpur 14, Dhaka, Bangladesh, Dhaka, Bangladesh
                    </p>
                    <p>+880 1624 334044, ashikpullock99@gmail.com</p>
                    <p>Monday - Sunday: 8 AM - 9 PM</p>
                </div>
                <div className='w-[100%] lg:w-[33%] mt-5 lg:mt-0 flex justify-center items-center'>
                    <img className='w-40 rounded-full' src={logo} alt="" />
                </div>
                <div className='w-[100%] lg:w-[33%] mt-5 lg:mt-0 flex gap-4 text-2xl justify-center items-center text-gray-200'>
                    <div className='p-3 border rounded-full cursor-pointer'>
                        <a target='_blank' href="https://www.facebook.com/mahmudashik.pullock/"><FaFacebook /></a>
                    </div>
                    <div className='p-3 border rounded-full cursor-pointer'>
                        <a target='_blank' href="https://github.com/Pullock4981"><FaGithub /></a>
                    </div>
                    <div className='p-3 border rounded-full cursor-pointer'>
                        <a target='_blank' href="https://www.youtube.com/@mrashik4911"><FaYoutube /></a>
                    </div>
                    <div className='p-3 border rounded-full cursor-pointer'>
                        <a target='_blank' href="https://www.instagram.com/"><FaInstagram /></a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;