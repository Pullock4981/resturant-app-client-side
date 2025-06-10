import React, { useContext } from 'react';
import { AuthContext } from '../../Contexts/AuthContext';

const PurchaseFood = () => {
    const { user } = useContext(AuthContext);

    const handlePurchase = (e) => {
        e.preventDefault();
        const form = e.target;
        const foodName = form.foodName.value;
        const price = form.price.value;
        const quantity = form.quantity.value;
        const buyerName = user?.displayName || '';
        const buyerEmail = user?.email || '';
        const buyingDate = Date.now();

        const purchaseInfo = {
            foodName,
            price,
            quantity,
            buyerName,
            buyerEmail,
            buyingDate
        };

        // TODO: Submit this data to your server/database
        console.log('Purchase Info:', purchaseInfo);
        form.reset();
    };

    return (
        <div className='mx-4 md:mx-16'>
            <h1 className='text-2xl md:text-4xl font-bold text-center text-[#37324C] mt-6'>Purchase Food</h1>
            <form onSubmit={handlePurchase} className='my-10'>
                <div className='grid md:grid-cols-2 gap-4 mb-6'>

                    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
                        <label className="label text-base text-[#37324C]">Food Name</label>
                        <input type="text" name='foodName' className="input w-full border border-[#8A4771]" placeholder="Enter food name" required />
                    </fieldset>

                    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
                        <label className="label text-base text-[#37324C]">Price ($)</label>
                        <input type="number" name='price' className="input w-full border border-[#8A4771]" placeholder="Enter price" required />
                    </fieldset>

                    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
                        <label className="label text-base text-[#37324C]">Quantity</label>
                        <input type="number" name='quantity' className="input w-full border border-[#8A4771]" placeholder="Enter quantity" required />
                    </fieldset>

                    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
                        <label className="label text-base text-[#37324C]">Buyer Name</label>
                        <input type="text" name='buyerName' className="input w-full border border-[#8A4771]" value={user?.displayName || ''} readOnly />
                    </fieldset>

                    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
                        <label className="label text-base text-[#37324C]">Buyer Email</label>
                        <input type="email" name='buyerEmail' className="input w-full border border-[#8A4771]" value={user?.email || ''} readOnly />
                    </fieldset>

                </div>

                <div className="form-control">
                    <input type="submit" className="btn bg-[#8D4974] text-white font-bold w-full" value="Purchase" />
                </div>
            </form>
        </div>
    );
};

export default PurchaseFood;
