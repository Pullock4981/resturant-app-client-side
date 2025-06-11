import React from 'react';
import { useLoaderData } from 'react-router';

const AllFoods = () => {
    // load data from an API or context provider
    const foods = useLoaderData();
    console.log('All Foods:', foods);
    // distract data if needed
    // const { foodName, foodImage, category, quantity, price, origin, addedByName, addedByEmail, description } = foods;

    return (
        <div>
            <div className="bg-[#8A4771] text-white py-16 flex justify-center items-center text-center">
                <h1 className="text-5xl font-bold">Find All The Foods</h1>
            </div>
            {/* show data */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mx-4 md:mx-16 my-10">
                {foods.map((food) => (
                    <div key={food._id?.$oid || food._id} className="card bg-base-100 shadow-xl">
                        <figure>
                            <img src={food.foodImage} alt={food.foodName} className="w-full h-48 object-cover" />
                        </figure>
                        <div className="card-body">
                            <h2 className="card-title text-lg font-bold">{food.foodName}</h2>
                            <p>{food.description}</p>
                            <p><strong>Category:</strong> {food.foodCategory}</p>
                            <p><strong>Quantity:</strong> {food.quantity?.$numberInt || food.quantity}</p>
                            <p><strong>Price:</strong> ${food.price?.$numberInt || food.price}</p>
                            <p><strong>Origin:</strong> {food.foodOrigin}</p>
                            <p><strong>Added By:</strong> {food.addedBy?.name} ({food.addedBy?.email})</p>
                            <div className="card-actions justify-end">
                                <button className="btn btn-primary">View Details</button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default AllFoods;