import React from 'react';
import { Link } from 'react-router';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';


const bannerData = [
    {
        image: 'https://i.ibb.co/W4gvd3xK/Screenshot-2025-06-11-011121.png',
        title: 'Discover Delicious Dishes',
        description: 'Your favorite food is just a click away — Explore the best sellers now!',
    },
    {
        image: 'https://i.ibb.co/KHx4Nqv/Screenshot-2025-06-11-011201.png',
        title: 'Fresh & Tasty Meals',
        description: 'Satisfy your cravings with our top-rated meals curated for you.',
    },
    {
        image: 'https://i.ibb.co/S7XWr47Z/Screenshot-2025-06-11-011244.png',
        title: 'Global Cuisines at Your Doorstep',
        description: 'From Italy to Japan — explore a variety of world flavors.',
    },
];


const Banner = () => {

    const settings = {
        dots: true,
        infinite: true,
        speed: 800,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000,
        arrows: false,
        pauseOnHover: false,
    };

    return (
        <Slider {...settings}>
            {bannerData.map((item, index) => (
                <div key={index}>
                    <div
                        className="hero min-h-[60vh] bg-cover bg-center bg-no-repeat"
                        style={{ backgroundImage: `url(${item.image})` }}
                    >
                        <div className="hero-overlay bg-opacity-60"></div>
                        <div className="text-center text-white p-6">
                            <h1 className="text-4xl md:text-6xl font-bold">{item.title}</h1>
                            <p className="mt-4 text-lg">{item.description}</p>
                            <Link to="/allFoods" className="btn bg-[#8A4771] mt-6 text-white hover:bg-[#6c375c]">
                                Explore Foods
                            </Link>
                        </div>
                    </div>
                </div>
            ))}
        </Slider>
    );
};

export default Banner;