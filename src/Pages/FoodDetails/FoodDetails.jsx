3

import { useContext } from "react";
import { AuthContext } from "../../Contexts/AuthContext";
import { Link, useLoaderData } from "react-router";

// const FoodDetails = () => {
//     const foodDetails = useLoaderData();

//     return (
//         <div className="mx-4 md:mx-16 my-10">
//             <h1 className="text-2xl md:text-4xl font-bold text-center text-[#37324C] mt-6">
//                 {foodDetails.foodName}
//             </h1>

//             <div className="card bg-base-100 shadow-xl mt-6">
//                 <figure>
//                     <img
//                         src={foodDetails.foodImage}
//                         alt={foodDetails.foodName}
//                         className="w-full h-60 object-cover"
//                     />
//                 </figure>

//                 <div className="card-body space-y-2">
//                     <p><strong>Category:</strong> {foodDetails.category || foodDetails.foodCategory}</p>
//                     <p><strong>Quantity:</strong> {foodDetails.quantity?.$numberInt || foodDetails.quantity}</p>
//                     <p><strong>Price:</strong> ${foodDetails.price?.$numberDouble || foodDetails.price}</p>
//                     <p><strong>Origin:</strong> {foodDetails.foodOrigin}</p>
//                     <p><strong>Added By:</strong> {foodDetails.name} ({foodDetails.email})</p>
//                     <p><strong>Description:</strong> {foodDetails.description}</p>
//                     <p><strong>Purchase Count:</strong> {foodDetails.purchaseCount ?? 0}</p>

//                     <div className="card-actions justify-end mt-4">
//                         <Link
//                             to={`/purchaseFood/${foodDetails._id?.$oid || foodDetails._id}`}
//                             className="btn bg-[#8A4771] text-white hover:bg-[#6c375c]"
//                         >
//                             Purchase
//                         </Link>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default FoodDetails;


// import React, { useContext } from 'react';
// import { Link, useLoaderData } from 'react-router-dom'; // ✅ Correct import
// import { AuthContext } from '../../Contexts/AuthContext';

const FoodDetails = () => {
    const { user } = useContext(AuthContext);
    const foodDetails = useLoaderData();

    const quantity = Number(foodDetails.quantity?.$numberInt || foodDetails.quantity || 0);
    const isOutOfStock = quantity === 0;
    const isOwnItem = foodDetails.email === user?.email;
    const isPurchasable = !isOutOfStock && !isOwnItem;

    return (
        <div className="mx-4 md:mx-16 my-10">
            <h1 className="text-2xl md:text-4xl font-bold text-center mt-6">
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
                    <p><strong>Quantity:</strong> {quantity}</p>
                    <p><strong>Price:</strong> ${foodDetails.price?.$numberDouble || foodDetails.price}</p>
                    <p><strong>Origin:</strong> {foodDetails.foodOrigin}</p>
                    <p><strong>Added By:</strong> {foodDetails.name} ({foodDetails.email})</p>
                    <p><strong>Description:</strong> {foodDetails.description}</p>
                    <p><strong>Purchase Count:</strong> {foodDetails.purchaseCount ?? 0}</p>

                    {isOutOfStock && (
                        <div className="text-red-600 font-semibold mt-2">
                            ⚠️ This item is currently out of stock.
                        </div>
                    )}

                    {isOwnItem && (
                        <div className="text-yellow-600 font-semibold mt-2">
                            ⚠️ You cannot purchase your own item.
                        </div>
                    )}

                    <div className="card-actions justify-end mt-4">
                        {isPurchasable ? (
                            <Link
                                to={`/purchaseFood/${foodDetails._id?.$oid || foodDetails._id}`}
                                className="btn btn-large bg-[#8A4771] text-white hover:bg-[#6c375c]"
                            >
                                Purchase
                            </Link>
                        ) : (
                            <button className="btn bg-gray-400 text-white cursor-not-allowed" disabled>
                                Purchase Unavailable
                            </button>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FoodDetails;
