import React, { useContext } from 'react';
import { AuthContext } from '../../Contexts/AuthContext';
import { useLoaderData } from 'react-router';

const UpdateFood = () => {
    const { user } = useContext(AuthContext);
    const foodItem = useLoaderData();
    console.log(foodItem);
    return (
        <div>
            <div className='mx-4 md:mx-16'>
                <h1 className='text-2xl md:text-4xl font-bold text-center text-[#37324C] mt-6'>Update This Food Item</h1>
                <form className='my-10'>
                    <div className='grid md:grid-cols-2 gap-4 mb-6'>

                        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
                            <label className="label text-base text-[#37324C]">Food Name</label>
                            <input type="text" name='foodName' className="input w-full border border-[#8A4771]" placeholder="Enter food name" required />
                        </fieldset>

                        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
                            <label className="label text-base text-[#37324C]">Food Image</label>
                            <input type="text" name='foodImage' className="input w-full border border-[#8A4771]" placeholder="Image URL" required />
                        </fieldset>

                        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
                            <label className="label text-base text-[#37324C]">Food Category</label>
                            <input type="text" name='category' className="input w-full border border-[#8A4771]" placeholder="e.g., Dessert, Main Course" required />
                        </fieldset>

                        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
                            <label className="label text-base text-[#37324C]">Quantity</label>
                            <input type="number" name='quantity' className="input w-full border border-[#8A4771]" placeholder="e.g., 5 Plates" required />
                        </fieldset>

                        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
                            <label className="label text-base text-[#37324C]">Price ($)</label>
                            <input type="number" name='price' className="input w-full border border-[#8A4771]" placeholder="e.g., 10" required />
                        </fieldset>

                        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
                            <label className="label text-base text-[#37324C]">Food Origin (Country)</label>
                            <input type="text" name='origin' className="input w-full border border-[#8A4771]" placeholder="e.g., Italy, Japan" required />
                        </fieldset>

                        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
                            <label className="label text-base text-[#37324C]">Added By (Name)</label>
                            <input type="text" name='addedByName' className="input w-full border border-[#8A4771]" value={user?.displayName || ''} readOnly />
                        </fieldset>

                        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
                            <label className="label text-base text-[#37324C]">Added By (Email)</label>
                            <input type="email" name='addedByEmail' className="input w-full border border-[#8A4771]" value={user?.email || ''} readOnly />
                        </fieldset>
                    </div>

                    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4 mb-6">
                        <label className="label text-base text-[#37324C]">Food Description</label>
                        <textarea name='description' rows="4" className="textarea w-full border border-[#8A4771]" placeholder="Include ingredients, preparation method, etc." required></textarea>
                    </fieldset>

                    <div className="form-control">
                        <input type="submit" className="btn bg-[#8D4974] text-white font-bold w-full" value="Update Item" />
                    </div>
                </form>
            </div>
        </div>
    );
};

export default UpdateFood;