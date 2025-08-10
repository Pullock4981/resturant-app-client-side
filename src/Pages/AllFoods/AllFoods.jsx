import { useContext, useState } from "react";
import { AuthContext } from "../../Contexts/AuthContext";
import { Link, useLoaderData } from "react-router";
import { motion } from "framer-motion";

const AllFoods = () => {
    const { user } = useContext(AuthContext);
    const foods = useLoaderData();
    const [searchText, setSearchText] = useState('');

    const filteredFoods = foods.filter(food =>
        food.foodName.toLowerCase().includes(searchText.toLowerCase())
    );

    return (
        <div>
            {/* Title Section */}
            <motion.div
                initial={{ opacity: 0, y: -30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="bg-[#37324C] text-white py-10 flex justify-center items-center text-center"
            >
                <h1 className="md:text-4xl text-2xl font-bold">All Foods</h1>
            </motion.div>

            {/* Search Bar */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.5 }}
                className="mx-4 md:mx-16 my-10"
            >
                <div className="form-control mb-6 flex justify-center">
                    <input
                        type="text"
                        placeholder="Search by food name..."
                        className="input input-bordered w-full max-w-xs border-[#8A4771]"
                        value={searchText}
                        onChange={(e) => setSearchText(e.target.value)}
                    />
                </div>
            </motion.div>

            {/* Display Foods */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mx-4 md:mx-16 my-10">
                {filteredFoods.length > 0 ? (
                    filteredFoods.map((food, index) => {
                        const quantity = Number(food.quantity?.$numberInt || food.quantity);
                        const isOutOfStock = quantity === 0;
                        const isOwnItem = food.email === user?.email;

                        return (
                            <motion.div
                                key={food._id?.$oid || food._id}
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1, duration: 0.4 }}
                                whileHover={{ scale: 1.03 }}
                                className="card bg-base-100 shadow-xl"
                            >
                                <figure>
                                    <motion.img
                                        src={food.foodImage}
                                        alt={food.foodName}
                                        className="w-full h-48 object-cover"
                                        whileHover={{ scale: 1.05 }}
                                        transition={{ duration: 0.3 }}
                                    />
                                </figure>
                                <div className="card-body">
                                    <h2 className="card-title text-lg font-bold">{food.foodName}</h2>
                                    <p>{food.description}</p>
                                    <p><strong>Quantity:</strong> {quantity}</p>
                                    <p><strong>Price:</strong> ${food.price?.$numberInt || food.price}</p>
                                    <p><strong>Origin:</strong> {food.foodOrigin}</p>
                                    <p><strong>Added By:</strong> {food.name} ({food.email})</p>

                                    {isOutOfStock && (
                                        <div className="badge badge-error text-white mt-2">Out of Stock</div>
                                    )}
                                    {isOwnItem && (
                                        <div className="badge badge-warning text-white mt-2">Your Item</div>
                                    )}

                                    <div className="card-actions justify-end">
                                        {(isOutOfStock || isOwnItem) ? (
                                            <button
                                                className="btn btn-disabled bg-gray-400 text-white cursor-not-allowed"
                                                disabled
                                            >
                                                Not Available
                                            </button>
                                        ) : (
                                            <Link
                                                to={`/foodDetails/${food._id?.$oid || food._id}`}
                                                className="btn btn-outline hover:bg-[#8D4974] hover:text-white"
                                            >
                                                View Details
                                            </Link>
                                        )}
                                    </div>
                                </div>
                            </motion.div>
                        );
                    })
                ) : (
                    <p className="text-center col-span-full text-gray-500">
                        No foods found matching "{searchText}".
                    </p>
                )}
            </div>
        </div>
    );
};

export default AllFoods;
