import React from 'react';
import { Link, useLoaderData } from 'react-router';
// import { Link, useLoaderData } from 'react-router-dom'; // ✅ Correct package

const FoodDetails = () => {
    const foodDetails = useLoaderData();

    return (
        <div className="mx-4 md:mx-16 my-10">
            <h1 className="text-2xl md:text-4xl font-bold text-center text-[#37324C] mt-6">
                {foodDetails.foodName}
            </h1>

            <div className="card bg-base-100 shadow-xl mt-6">
                <figure>
                    <img
                        src={foodDetails.foodImage}
                        alt={foodDetails.foodName}
                        className="w-full h-60 object-cover"
                    />
                </figure>

                <div className="card-body space-y-2">
                    <p><strong>Category:</strong> {foodDetails.category || foodDetails.foodCategory}</p>
                    <p><strong>Quantity:</strong> {foodDetails.quantity?.$numberInt || foodDetails.quantity}</p>
                    <p><strong>Price:</strong> ${foodDetails.price?.$numberDouble || foodDetails.price}</p>
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
