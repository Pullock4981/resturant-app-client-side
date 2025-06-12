// import React, { useContext } from 'react';
// import { AuthContext } from '../../Contexts/AuthContext';
// import { useLoaderData } from 'react-router';

import { useContext } from "react";
import { AuthContext } from "../../Contexts/AuthContext";
import { Navigate, useLoaderData, useNavigate,  } from "react-router";
import toast from "react-hot-toast";

// const PurchaseFood = () => {
//     const { user } = useContext(AuthContext);

//     // food details can be passed as props or fetched from an API
//     const foodDetails = useLoaderData();

//     const handlePurchase = (e) => {
//         e.preventDefault();
//         const form = e.target;
//         const foodName = form.foodName.value;
//         const price = form.price.value;
//         const quantity = form.quantity.value;
//         const buyerName = user?.displayName || '';
//         const buyerEmail = user?.email || '';
//         const buyingDate = Date.now();

//         const purchaseInfo = {
//             foodName,
//             price,
//             quantity,
//             buyerName,
//             buyerEmail,
//             buyingDate
//         };

//         // TODO: Submit this data to your server/database
//         console.log('Purchase Info:', purchaseInfo);
//         form.reset();
//     };

//     return (
//         <div className='mx-4 md:mx-16'>
//             <h1 className='text-2xl md:text-4xl font-bold text-center text-[#37324C] mt-6'>Purchase Food</h1>
//             <form onSubmit={handlePurchase} className='my-10'>
//                 <div className='grid md:grid-cols-2 gap-4 mb-6'>

//                     <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
//                         <label className="label text-base text-[#37324C]">Food Name</label>
//                         <input type="text" defaultValue={foodDetails?.foodName} name='foodName' className="input w-full border border-[#8A4771]" placeholder="Enter food name" required />
//                     </fieldset>

//                     <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
//                         <label className="label text-base text-[#37324C]">Price ($)</label>
//                         <input type="number" defaultValue={foodDetails?.price} name='price' className="input w-full border border-[#8A4771]" placeholder="Enter price" required />
//                     </fieldset>

//                     <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
//                         <label className="label text-base text-[#37324C]">Quantity</label>
//                         <input type="number" defaultValue={foodDetails?.quantity} name='quantity' className="input w-full border border-[#8A4771]" placeholder="Enter quantity" required />
//                     </fieldset>

//                     <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
//                         <label className="label text-base text-[#37324C]">Buyer Name</label>
//                         <input type="text" name='buyerName' className="input w-full border border-[#8A4771]" value={user?.displayName || ''} readOnly />
//                     </fieldset>

//                     <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
//                         <label className="label text-base text-[#37324C]">Buyer Email</label>
//                         <input type="email" name='buyerEmail' className="input w-full border border-[#8A4771]" value={user?.email || ''} readOnly />
//                     </fieldset>

//                 </div>

//                 <div className="form-control">
//                     <input type="submit" className="btn bg-[#8D4974] text-white font-bold w-full" value="Purchase" />
//                 </div>
//             </form>
//         </div>
//     );
// };

// export default PurchaseFood;


// import React, { useContext } from 'react';
// import { useLoaderData, useNavigate } from 'react-router-dom';
// import { AuthContext } from '../../Contexts/AuthContext';
// import toast from 'react-hot-toast';

const PurchaseFood = () => {
    const { user } = useContext(AuthContext);
    const foodDetails = useLoaderData();
    const navigate = useNavigate();

    const handlePurchase = async (e) => {
        e.preventDefault();

        const form = e.target;
        const foodName = form.foodName.value;
        const price = parseFloat(form.price.value);
        const quantity = parseInt(form.quantity.value);
        const buyerName = user?.displayName || '';
        const buyerEmail = user?.email || '';
        const buyingDate = Date.now();

        const purchaseInfo = {
            foodId: foodDetails._id,
            foodName,
            foodImage: foodDetails.foodImage,
            price,
            quantity,
            buyerName,
            buyerEmail,
            buyingDate,
            sellerEmail: foodDetails.email,
        };

        try {
            const res = await fetch('http://localhost:3000/orders', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(purchaseInfo),
            });

            if (res.ok) {
                toast.success('Purchase successful!');
                navigate('/myOrders');
            } else {
                toast.error('Purchase failed. Please try again.');
            }
        } catch (err) {
            console.error('Error:', err);
            toast.error('Something went wrong.');
        }
    };

    return (
        <div className="mx-4 md:mx-16">
            <h1 className="text-2xl md:text-4xl font-bold text-center text-[#37324C] mt-6">
                Purchase Food
            </h1>

            <form onSubmit={handlePurchase} className="my-10 space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                    <fieldset className="bg-base-200 p-4 border rounded-lg">
                        <label className="block text-[#37324C] mb-1">Food Name</label>
                        <input
                            type="text"
                            name="foodName"
                            defaultValue={foodDetails.foodName}
                            className="input w-full border border-[#8A4771]"
                            required
                        />
                    </fieldset>

                    <fieldset className="bg-base-200 p-4 border rounded-lg">
                        <label className="block text-[#37324C] mb-1">Price ($)</label>
                        <input
                            type="number"
                            name="price"
                            defaultValue={foodDetails.price}
                            className="input w-full border border-[#8A4771]"
                            required
                        />
                    </fieldset>

                    <fieldset className="bg-base-200 p-4 border rounded-lg">
                        <label className="block text-[#37324C] mb-1">Quantity</label>
                        <input
                            type="number"
                            name="quantity"
                            defaultValue={foodDetails.quantity}
                            className="input w-full border border-[#8A4771]"
                            required
                        />
                    </fieldset>

                    <fieldset className="bg-base-200 p-4 border rounded-lg">
                        <label className="block text-[#37324C] mb-1">Buyer Name</label>
                        <input
                            type="text"
                            name="buyerName"
                            value={user?.displayName || ''}
                            className="input w-full border border-[#8A4771]"
                            readOnly
                        />
                    </fieldset>

                    <fieldset className="bg-base-200 p-4 border rounded-lg">
                        <label className="block text-[#37324C] mb-1">Buyer Email</label>
                        <input
                            type="email"
                            name="buyerEmail"
                            value={user?.email || ''}
                            className="input w-full border border-[#8A4771]"
                            readOnly
                        />
                    </fieldset>
                </div>

                <div className="form-control">
                    <input
                        type="submit"
                        value="Purchase"
                        className="btn bg-[#8D4974] text-white font-bold w-full"
                    />
                </div>
            </form>
        </div>
    );
};

export default PurchaseFood;
