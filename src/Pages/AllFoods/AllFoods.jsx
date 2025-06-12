import React, { useState } from 'react';
import { Link, useLoaderData } from 'react-router';

const AllFoods = () => {
    // load data from an API or context provider
    const foods = useLoaderData();
    console.log('All Foods:', foods);
    

    // state for search input
    const [searchText, setSearchText] = useState('');

    // Filter foods based on search input
    const filteredFoods = foods.filter(food =>
        food.foodName.toLowerCase().includes(searchText.toLowerCase())
    );

    return (
        <div>
            <div className="bg-[#8A4771] text-white py-16 flex justify-center items-center text-center">
                <h1 className="text-5xl font-bold">Find All The Foods</h1>
            </div>
            {/* Search bar */}
            <div className="mx-4 md:mx-16 my-10">
                <h1 className="text-2xl md:text-4xl font-bold text-center text-[#37324C] mb-6">All Foods</h1>
                <div className="form-control mb-6 flex justify-center">
                    <input
                        type="text"
                        placeholder="Search by food name..."
                        className="input input-bordered w-full max-w-xs border-[#8A4771]"
                        value={searchText}
                        onChange={(e) => setSearchText(e.target.value)}
                    />
                </div>
            </div>

            {/* Display filtered foods */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mx-4 md:mx-16 my-10">
                {filteredFoods.length > 0 ? (
                    filteredFoods.map((food) => (
                        <div key={food._id?.$oid || food._id} className="card bg-base-100 shadow-xl">
                            <figure>
                                <img src={food.foodImage} alt={food.foodName} className="w-full h-48 object-cover" />
                            </figure>
                            <div className="card-body">
                                <h2 className="card-title text-lg font-bold">{food.foodName}</h2>
                                <p>{food.description}</p>
                                {/* <p><strong>Category:</strong> {food.foodCategory}</p> */}
                                <p><strong>Quantity:</strong> {food.quantity?.$numberInt || food.quantity}</p>
                                <p><strong>Price:</strong> ${food.price?.$numberInt || food.price}</p>
                                <p><strong>Origin:</strong> {food.foodOrigin}</p>
                                <p><strong>Added By:</strong> {food.name} ({food.email})</p>
                                <div className="card-actions justify-end">
                                    <Link to={`/foodDetails/${food._id?.$oid || food._id}`} className="btn btn-primary">View Details</Link>
                                </div>
                            </div>
                        </div>
                    ))
                ) : (
                    <p className="text-center col-span-full text-gray-500">No foods found matching "{searchText}".</p>
                )}
            </div>
        </div>
    );
};

export default AllFoods;