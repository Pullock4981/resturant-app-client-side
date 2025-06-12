import React from 'react';
import { Link, useLoaderData } from 'react-router';

const FoodDetails = () => {
    // load data from an API or context provider
    const foodDetails = useLoaderData();
    // console.log(singleFood)
    console.log(foodDetails)
    return (
        <div>
            <h1 className="text-2xl md:text-4xl font-bold text-center text-[#37324C] mt-6">
                {foodDetails.foodName}
            </h1>
            {/* <pre>{JSON.stringify(foodDetails, null, 2)}</pre> */}
            {/* food details section */}
            <div className="card bg-base-100 md:px-16 px-4 shadow-xl mt-6">
                <figure>
                    <img
                        src={foodDetails.foodImage}
                        alt={foodDetails.foodName}
                        className="w-full h-60 object-cover"
                    />
                </figure>

                <div className="card-body space-y-2">
                    <p><strong>Category:</strong> {foodDetails.foodCategory}</p>
                    <p><strong>Quantity:</strong> {foodDetails.quantity?.$numberInt || foodDetails.quantity}</p>
                    <p><strong>Price:</strong> ${foodDetails.price?.$numberInt || foodDetails.price}</p>
                    <p><strong>Origin:</strong> {foodDetails.foodOrigin}</p>
                    <p><strong>Added By:</strong> {foodDetails.name} ({foodDetails.email})</p>
                    <p><strong>Description:</strong> {foodDetails.description}</p>
                    <p><strong>Purchase Count:</strong> {foodDetails.purchaseCount ?? 0}</p>

                    <div className="card-actions justify-end mt-4">
                        <Link
                            to={`/purchaseFood/${foodDetails._id?.$oid || foodDetails._id}`}
                            className="btn bg-[#8A4771] text-white hover:bg-[#6c375c]"
                        >
                            Purchase
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FoodDetails;