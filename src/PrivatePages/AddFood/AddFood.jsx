import React, { useContext } from 'react';
import { AuthContext } from '../../Contexts/AuthContext';
import { useNavigate } from 'react-router';
import Swal from 'sweetalert2';

const AddFood = () => {
    const { user } = useContext(AuthContext);

    // add navication
    const navigate = useNavigate();

    // add functionality to handle form submission and store it in the database
    const handleAddFood = (e) => {
        e.preventDefault();
        const form = e.target;
        const foodName = form.foodName.value;
        const foodImage = form.foodImage.value;
        const category = form.category.value;
        const quantity = form.quantity.value;
        const price = form.price.value;
        const foodOrigin = form.foodOrigin.value;
        const description = form.description.value;
        const addedByName = user?.displayName || '';
        const addedByEmail = user?.email || '';

        // Create a food item object
        const newFoodItem = {
            foodName,
            foodImage,
            category,
            quantity,
            price,
            foodOrigin,
            description,
            addedBy: {
                name: addedByName,
                email: addedByEmail
            }
        };

        // Send a POST request to add the new food item
        fetch('http://localhost:3000/foods', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newFoodItem)
        })
            .then(response => response.json())
            .then(data => {
                console.log('Food item added:', data);
                // show success alert
                Swal.fire({
                    title: 'Success!',
                    text: 'Food item added successfully.',
                    icon: 'success',
                    confirmButtonColor: '#8D4974',
                    confirmButtonText: 'Go to My added foods!!!',
                    timer: 1500
                }).then((result) => {
                    if (result.isConfirmed) {
                        navigate('/myOrders'); // redirect to My food page
                    }
                });
            })
            .catch(error => {
                console.error('Error adding food item:', error);
                // show error alert
                Swal.fire({
                    title: 'Error!',
                    text: 'Failed to add food item.',
                    icon: 'error',
                    confirmButtonColor: '#8D4974',
                    // timer: 1500
                });
            });
    };

    return (
        <div className='mx-4 md:mx-16'>
            <h1 className='text-2xl md:text-4xl font-bold text-center text-[#37324C] mt-6'>Add New Food Item</h1>
            <form className='my-10' onSubmit={handleAddFood}>
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
                        <input type="text" name='foodOrigin' className="input w-full border border-[#8A4771]" placeholder="e.g., Italy, Japan" required />
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
                    <input type="submit" className="btn bg-[#8D4974] text-white font-bold w-full" value="Add Item" />
                </div>
            </form>
        </div>
    );
};

export default AddFood;
