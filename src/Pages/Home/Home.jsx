import React, { useEffect, useState } from 'react';
import Banner from './Banner'
import { Link } from 'react-router';
import TopFoodCard from './TopFoodCard';

const Home = () => {
    const [topFoods, setTopFoods] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3000/foods')
            .then(res => res.json())
            .then(data => {
                const sorted = data
                    .sort((a, b) => (b.purchaseCount || 0) - (a.purchaseCount || 0))
                    .slice(0, 6);
                setTopFoods(sorted);
            });
    }, []);
    return (
        <div>
            <div className='mb-10'>
                <Banner></Banner>
            </div>
            <section className="my-12 px-4 md:px-16">
                <h2 className="text-3xl font-bold text-center mb-6">Top Selling Foods</h2>
                <div className="grid gap-6 md:grid-cols-3">
                    {topFoods.map(food => (
                        <TopFoodCard key={food._id} food={food} />
                    ))}
                </div>
                <div className="text-center mt-8">
                    <Link to="/allFoods" className="btn bg-[#8D4974] text-white hover:bg-[#6c375c]">
                        See All
                    </Link>
                </div>
            </section>
            <div className="bg-pink-100 p-10 mt-10 rounded-xl text-center md:mx-16 mx-4">
                <h3 className="text-2xl font-bold mb-4 text-[#37324C]">Why Choose Us?</h3>
                <p className="max-w-3xl mx-auto text-black">We offer a curated selection of the best-selling dishes with guaranteed freshness, flavor, and fast delivery. Join thousands of happy customers!</p>
            </div>
            <div className="p-10 mt-10 text-center">
                <h3 className="text-2xl font-bold mb-4">Tips from Our Chefs</h3>
                <p className="max-w-2xl mx-auto">Want to know how we make our dishes special? Get behind-the-scenes tips and tricks directly from our top chefs.</p>
            </div>
        </div>

    );
};

export default Home;