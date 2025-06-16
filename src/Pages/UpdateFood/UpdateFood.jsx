import React, { useContext } from 'react';
import { AuthContext } from '../../Contexts/AuthContext';
import { useLoaderData } from 'react-router';
import Swal from 'sweetalert2';

const UpdateFood = () => {
    const { user } = useContext(AuthContext);
    const foodItem = useLoaderData();
    console.log(foodItem);

    // function for update food item
    // const handleUpdateFood = (e) => {
    //     e.preventDefault();
    //     const form = e.target;
    //     const foodName = form.foodName.value;
    //     const foodImage = form.foodImage.value;
    //     const category = form.category.value;
    //     const quantity = form.quantity.value;
    //     const price = form.price.value;
    //     const foodOrigin = form.origin.value;
    //     const description = form.description.value;

    //     // Create an updated food item object
    //     const updatedFoodItem = {
    //         foodName,
    //         foodImage,
    //         category,
    //         quantity,
    //         price,
    //         foodOrigin,
    //         description,
    //         name: user?.displayName || '',
    //         email: user?.email || ''
    //     };

    //     // Send a PUT request to update the food item
    //     fetch(`http://localhost:3000/foods/${foodItem._id}`, {
    //         method: 'PUT',
    //         headers: {
    //             'Content-Type': 'application/json'
    //         },
    //         body: JSON.stringify(updatedFoodItem)
    //     })
    //         .then(response => response.json())
    //         .then(data => {
    //             console.log('Food item updated:', data);
    //             // show success alert
    //             Swal.fire({
    //                 title: 'Success!',
    //                 text: 'Food item updated successfully.',
    //                 icon: 'success',
    //                 confirmButtonColor: '#8D4974',
    //                 confirmButtonText: 'Go to My added foods!!!',
    //                 timer: 1500
    //             }).then((result) => {
    //                 if (result.isConfirmed) {
    //                     window.location.reload(); // reload the page to see the updated item
    //                 }
    //             });
    //         })
    //         .catch(error => {
    //             console.error('Error updating food item:', error);
    //             Swal.fire({
    //                 title: 'Error!',
    //                 text: 'Failed to update food item.',
    //                 icon: 'error',
    //                 confirmButtonColor: '#8D4974'
    //             });
    //         });
    // };
    const handleUpdateFood = async (e) => {
        e.preventDefault();
        const form = e.target;
        const foodName = form.foodName.value;
        const foodImage = form.foodImage.value;
        const category = form.category.value;
        const quantity = form.quantity.value;
        const price = form.price.value;
        const foodOrigin = form.origin.value;
        const description = form.description.value;

        const updatedFoodItem = {
            foodName,
            foodImage,
            category,
            quantity,
            price,
            foodOrigin,
            description,
            name: user?.displayName || '',
            email: user?.email || ''
        };

        try {
            // Get Firebase token
            const token = await user.getIdToken();

            const response = await fetch(`http://localhost:3000/foods/${foodItem._id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${token}`
                },
                body: JSON.stringify(updatedFoodItem)
            });

            const data = await response.json();

            if (data.modifiedCount > 0) {
                Swal.fire({
                    title: 'Success!',
                    text: 'Food item updated successfully.',
                    icon: 'success',
                    confirmButtonColor: '#8D4974',
                    confirmButtonText: 'Go to My added foods!!!',
                    timer: 1500
                }).then((result) => {
                    if (result.isConfirmed) {
                        window.location.reload(); // or navigate if using router
                    }
                });
            } else {
                Swal.fire({
                    title: 'No Changes Made',
                    text: 'The food item was not modified.',
                    icon: 'info',
                    confirmButtonColor: '#8D4974'
                });
            }
        } catch (error) {
            console.error('Error updating food item:', error);
            Swal.fire({
                title: 'Error!',
                text: 'Failed to update food item.',
                icon: 'error',
                confirmButtonColor: '#8D4974'
            });
        }
    };

    return (
        <div>
            <div className='mx-4 md:mx-16'>
                <h1 className='text-2xl md:text-3xl font-bold text-center mt-3'>Update This Food Item</h1>
                <form className='my-5' onSubmit={handleUpdateFood}>
                    <div className='grid md:grid-cols-2 gap-4 mb-6'>

                        <fieldset>
                            <label className="label text-base">Food Name</label>
                            <input type="text" defaultValue={foodItem.foodName} name='foodName' className="input w-full border border-[#8A4771]" placeholder="Enter food name" required />
                        </fieldset>

                        <fieldset>
                            <label className="label text-base">Food Image</label>
                            <input type="text" defaultValue={foodItem.foodImage} name='foodImage' className="input w-full border border-[#8A4771]" placeholder="Image URL" required />
                        </fieldset>

                        <fieldset>
                            <label className="label text-base">Food Category</label>
                            <input type="text" defaultValue={foodItem.category} name='category' className="input w-full border border-[#8A4771]" placeholder="e.g., Dessert, Main Course" required />
                        </fieldset>

                        <fieldset>
                            <label className="label text-base">Quantity</label>
                            <input type="number" defaultValue={foodItem.quantity} name='quantity' className="input w-full border border-[#8A4771]" placeholder="e.g., 5 Plates" required />
                        </fieldset>

                        <fieldset>
                            <label className="label text-base">Price ($)</label>
                            <input type="number" defaultValue={foodItem.price} name='price' className="input w-full border border-[#8A4771]" placeholder="e.g., 10" required />
                        </fieldset>

                        <fieldset>
                            <label className="label text-base">Food Origin (Country)</label>
                            <input type="text" defaultValue={foodItem.foodOrigin} name='origin' className="input w-full border border-[#8A4771]" placeholder="e.g., Italy, Japan" required />
                        </fieldset>

                        <fieldset>
                            <label className="label text-base">Added By (Name)</label>
                            <input type="text" name='addedByName' className="input w-full border border-[#8A4771]" value={user?.displayName || ''} readOnly />
                        </fieldset>

                        <fieldset>
                            <label className="label text-base">Added By (Email)</label>
                            <input type="email" name='addedByEmail' className="input w-full border border-[#8A4771]" value={user?.email || ''} readOnly />
                        </fieldset>
                    </div>

                    <fieldset>
                        <label className="label text-base">Food Description</label>
                        <textarea name='description' defaultValue={foodItem.description} rows="3" className="textarea w-full border border-[#8A4771]" placeholder="Include ingredients, preparation method, etc." required></textarea>
                    </fieldset>

                    <div className="form-control mt-3">
                        <input type="submit" className="btn bg-[#8D4974] text-white font-bold w-full" value="Update Item" />
                    </div>
                </form>
            </div>
        </div>
    );
};

export default UpdateFood;