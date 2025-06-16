import React, { useContext } from 'react';
import { AuthContext } from '../../Contexts/AuthContext';
import { useNavigate } from 'react-router';
import Swal from 'sweetalert2';

const AddFood = () => {
    const { user } = useContext(AuthContext);

    // add navication
    const navigate = useNavigate();

    // add functionality to handle form submission and store it in the database
    // const handleAddFood = (e) => {
    //     e.preventDefault();
    //     const form = e.target;
    //     const foodName = form.foodName.value;
    //     const foodImage = form.foodImage.value;
    //     const category = form.category.value;
    //     const quantity = form.quantity.value;
    //     const price = form.price.value;
    //     const foodOrigin = form.foodOrigin.value;
    //     const description = form.description.value;
    //     const name = user?.displayName || '';
    //     const email = user?.email || '';

    //     // Create a food item object
    //     const newFoodItem = {
    //         foodName,
    //         foodImage,
    //         category,
    //         quantity,
    //         price,
    //         foodOrigin,
    //         description,
    //         name,
    //         email
    //     };

    //     // jwt token in useEffect

    //     // Send a POST request to add the new food item
    //     fetch('https://resturent-management-system-server.vercel.app/foods', {
    //         method: 'POST',
    //         headers: {
    //             'Content-Type': 'application/json'
    //         },
    //         body: JSON.stringify(newFoodItem)
    //     })
    //         .then(response => response.json())
    //         .then(data => {
    //             console.log('Food item added:', data);
    //             // show success alert
    //             Swal.fire({
    //                 title: 'Success!',
    //                 text: 'Food item added successfully.',
    //                 icon: 'success',
    //                 confirmButtonColor: '#8D4974',
    //                 confirmButtonText: 'Go to My added foods!!!',
    //                 timer: 1500
    //             }).then((result) => {
    //                 if (result.isConfirmed) {
    //                     navigate('/myOrders'); // redirect to My food page
    //                 }
    //             });
    //         })
    //         .catch(error => {
    //             console.error('Error adding food item:', error);
    //             // show error alert
    //             Swal.fire({
    //                 title: 'Error!',
    //                 text: 'Failed to add food item.',
    //                 icon: 'error',
    //                 confirmButtonColor: '#8D4974',
    //                 // timer: 1500
    //             });
    //         });
    // };
    const handleAddFood = async (e) => {
        e.preventDefault();
        const form = e.target;
        const foodName = form.foodName.value;
        const foodImage = form.foodImage.value;
        const category = form.category.value;
        const quantity = form.quantity.value;
        const price = form.price.value;
        const foodOrigin = form.foodOrigin.value;
        const description = form.description.value;
        const name = user?.displayName || '';
        const email = user?.email || '';

        const newFoodItem = {
            foodName,
            foodImage,
            category,
            quantity,
            price,
            foodOrigin,
            description,
            name,
            email
        };

        try {
            // ✅ Get Firebase ID token from user
            const token = await user.getIdToken();

            const response = await fetch('https://resturent-management-system-server.vercel.app/foods', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${token}` // ✅ Send token in header
                },
                body: JSON.stringify(newFoodItem)
            });

            const data = await response.json();

            if (response.ok) {
                Swal.fire({
                    title: 'Success!',
                    text: 'Food item added successfully.',
                    icon: 'success',
                    confirmButtonColor: '#8D4974',
                    confirmButtonText: 'Go to My added foods!!!',
                    timer: 1500
                }).then((result) => {
                    if (result.isConfirmed) {
                        navigate('/allFoods');
                    }
                });
            } else {
                throw new Error(data.message || 'Failed to add food item');
            }
        } catch (error) {
            console.error('Error adding food item:', error);
            Swal.fire({
                title: 'Error!',
                text: error.message || 'Failed to add food item.',
                icon: 'error',
                confirmButtonColor: '#8D4974'
            });
        }
    };


    return (
        <div className='mx-4 md:mx-16'>
            <h1 className='text-2xl md:text-4xl font-bold text-center mt-4'>Add New Food Item</h1>
            <form className='my-5' onSubmit={handleAddFood}>
                <div className='grid md:grid-cols-2 gap-4 mb-6'>

                    <fieldset>
                        <label className="label text-base">Food Name</label>
                        <input type="text" name='foodName' className="input w-full border border-[#8A4771]" placeholder="Enter food name" required />
                    </fieldset>

                    <fieldset>
                        <label className="label text-base">Food Image</label>
                        <input type="text" name='foodImage' className="input w-full border border-[#8A4771]" placeholder="Image URL" required />
                    </fieldset>

                    <fieldset>
                        <label className="label text-base">Food Category</label>
                        <input type="text" name='category' className="input w-full border border-[#8A4771]" placeholder="e.g., Dessert, Main Course" required />
                    </fieldset>

                    <fieldset>
                        <label className="label text-base">Quantity</label>
                        <input type="number" name='quantity' className="input w-full border border-[#8A4771]" placeholder="e.g., 5 Plates" required />
                    </fieldset>

                    <fieldset>
                        <label className="label text-base">Price ($)</label>
                        <input type="number" name='price' className="input w-full border border-[#8A4771]" placeholder="e.g., 10" required />
                    </fieldset>

                    <fieldset>
                        <label className="label text-base">Food Origin (Country)</label>
                        <input type="text" name='foodOrigin' className="input w-full border border-[#8A4771]" placeholder="e.g., Italy, Japan" required />
                    </fieldset>

                    <fieldset>
                        <label className="label text-base">Added By (Name)</label>
                        <input type="text" name='name' className="input w-full border border-[#8A4771]" value={user?.displayName || ''} readOnly />
                    </fieldset>

                    <fieldset>
                        <label className="label text-base">Added By (Email)</label>
                        <input type="email" name='email' className="input w-full border border-[#8A4771]" value={user?.email || ''} readOnly />
                    </fieldset>
                </div>

                <fieldset>
                    <label className="label text-base">Food Description</label>
                    <textarea name='description' rows="3" className="textarea w-full border border-[#8A4771]" placeholder="Include ingredients, preparation method, etc." required></textarea>
                </fieldset>

                <div className="form-control mt-3">
                    <input type="submit" className="btn bg-[#8D4974] text-white font-bold w-full" value="Add Item" />
                </div>
            </form>
        </div>
    );
};

export default AddFood;
