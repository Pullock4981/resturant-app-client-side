import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Banner from './Banner';
import { Link } from 'react-router';
import TopFoodCard from './TopFoodCard';

const Home = () => {
    const [topFoods, setTopFoods] = useState([]);

    useEffect(() => {
        fetch('https://resturent-management-system-server.vercel.app/foods')
            .then(res => res.json())
            .then(data => {
                const sorted = data
                    .sort((a, b) => (b.purchaseCount || 0) - (a.purchaseCount || 0))
                    .slice(0, 6);
                setTopFoods(sorted);
            });
    }, []);

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
        >
            {/* Banner */}
            <motion.div
                className="mb-10"
                initial={{ y: -50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8 }}
            >
                <Banner />
            </motion.div>

            {/* Top Selling Foods */}
            <section className="my-12 px-4 md:px-16">
                <motion.h2
                    className="text-3xl font-bold text-center mb-6"
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.5 }}
                >
                    Top Selling Foods
                </motion.h2>

                <motion.div
                    className="grid gap-6 md:grid-cols-3"
                    initial="hidden"
                    animate="visible"
                    variants={{
                        hidden: { opacity: 0 },
                        visible: {
                            opacity: 1,
                            transition: { staggerChildren: 0.15 }
                        }
                    }}
                >
                    {topFoods.map((food) => (
                        <motion.div
                            key={food._id}
                            variants={{
                                hidden: { opacity: 0, y: 30 },
                                visible: { opacity: 1, y: 0 }
                            }}
                        >
                            <TopFoodCard food={food} />
                        </motion.div>
                    ))}
                </motion.div>

                {/* See All button */}
                <motion.div
                    className="text-center mt-8"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.8 }}
                >
                    <Link to="/allFoods" className="btn bg-[#8D4974] text-white hover:bg-[#6c375c]">
                        See All
                    </Link>
                </motion.div>
            </section>

            {/* Why Choose Us */}
            <motion.div
                className="bg-pink-100 p-10 mt-10 rounded-xl text-center md:mx-16 mx-4"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
            >
                <h3 className="text-2xl font-bold mb-4 text-[#37324C]">Why Choose Us?</h3>
                <p className="max-w-3xl mx-auto text-black">
                    We offer a curated selection of the best-selling dishes with guaranteed freshness,
                    flavor, and fast delivery. Join thousands of happy customers!
                </p>
            </motion.div>

            {/* Tips Section */}
            <motion.div
                className="p-10 mt-10 text-center"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.3 }}
            >
                <h3 className="text-2xl font-bold mb-4">Tips from Our Chefs</h3>
                <p className="max-w-2xl mx-auto">
                    Want to know how we make our dishes special? Get behind-the-scenes tips and tricks directly from our top chefs.
                </p>
            </motion.div>
        </motion.div>
    );
};

export default Home;
