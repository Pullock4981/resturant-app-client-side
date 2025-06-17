
// import { useContext, useEffect, useState } from "react";
// import { AuthContext } from "../../Contexts/AuthContext";
// import { useLoaderData, useNavigate } from "react-router";
// import toast from "react-hot-toast";

import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Contexts/AuthContext";
import { useLoaderData, useNavigate } from "react-router";
import toast from "react-hot-toast";
import { purchaseProduct } from "../../service/purchaseFood";

// const PurchaseFood = () => {
//     const { user } = useContext(AuthContext);
//     const foodDetails = useLoaderData();
//     const navigate = useNavigate();

//     const [quantity, setQuantity] = useState(1);
//     const [error, setError] = useState("");
//     const [isSubmitting, setIsSubmitting] = useState(false);
//     const [purchaseCount, setPurchaseCount] = useState(0);

//     const isOwnItem = foodDetails.email === user?.email;
//     const isOutOfStock = foodDetails.quantity === 0;
//     const exceedsStock = quantity > foodDetails.quantity;
//     const isDisabled = isOwnItem || isOutOfStock || exceedsStock || isSubmitting;

//     // ✅ Fetch purchase count
//     useEffect(() => {
//         const fetchPurchaseCount = async () => {
//             try {
//                 const res = await fetch(
//                     `https://resturent-management-system-server.vercel.app/orders/count?foodId=${foodDetails._id}`
//                 );
//                 const data = await res.json();
//                 setPurchaseCount(data.count || 0);
//             } catch (err) {
//                 console.error("Failed to fetch purchase count", err);
//             }
//         };
//         fetchPurchaseCount();
//     }, [foodDetails._id]);


//     const handleQuantityChange = (e) => {
//         let val = parseInt(e.target.value);
//         if (isNaN(val) || val < 1) val = 1;

//         if (val > foodDetails.quantity) {
//             setError(`Only ${foodDetails.quantity} items available.`);
//         } else {
//             setError("");
//         }

//         setQuantity(val);
//     };

//     const handlePurchase = async (e) => {
//         e.preventDefault();
//         if (isDisabled) return;

//         const form = e.target;
//         const foodName = form.foodName.value;
//         const price = parseFloat(form.price.value);

//         const purchaseInfo = {
//             foodId: foodDetails._id,
//             foodName,
//             foodImage: foodDetails.foodImage,
//             price,
//             quantity,
//             buyerName: user?.displayName || '',
//             buyerEmail: user?.email || '',
//             buyingDate: Date.now(),
//             sellerEmail: foodDetails.email,
//         };

//         try {
//             setIsSubmitting(true);
//             const res = await fetch('https://resturent-management-system-server.vercel.app/orders', {
//                 method: 'POST',
//                 headers: {
//                     'Content-Type': 'application/json',
//                 },
//                 body: JSON.stringify(purchaseInfo),
//             });

//             const data = await res.json();

//             if (res.ok) {
//                 toast.success('Purchase successful!');
//                 navigate('/myOrders');
//             } else {
//                 toast.error(data.message || 'Purchase failed. Please try again.');
//             }
//         } catch (err) {
//             console.error('Error:', err);
//             toast.error('Something went wrong.');
//         } finally {
//             setIsSubmitting(false);
//         }
//     };

//     return (
//         <div className="mx-4 md:mx-16">
//             <h1 className="text-2xl md:text-4xl font-bold text-center mt-6">
//                 Purchase Food
//             </h1>

//             {isOwnItem && (
//                 <p className="text-red-600 font-semibold mt-4">
//                     ⚠ You cannot purchase your own added food.
//                 </p>
//             )}

//             {isOutOfStock && (
//                 <p className="text-red-600 font-semibold mt-2">
//                     ❌ This food item is currently out of stock.
//                 </p>
//             )}

//             <form onSubmit={handlePurchase} className="my-10 space-y-6">
//                 <div className="grid md:grid-cols-2 gap-4">
//                     <fieldset>
//                         <label className="block mb-1">Food Name</label>
//                         <input
//                             type="text"
//                             name="foodName"
//                             defaultValue={foodDetails.foodName}
//                             className="input w-full border border-[#8A4771]"
//                             readOnly
//                         />
//                     </fieldset>

//                     <fieldset>
//                         <label className="block mb-1">Price ($)</label>
//                         <input
//                             type="number"
//                             name="price"
//                             defaultValue={foodDetails.price}
//                             className="input w-full border border-[#8A4771]"
//                             readOnly
//                         />
//                     </fieldset>

//                     <fieldset>
//                         <label className="block mb-1">
//                             Quantity (Available: {foodDetails.quantity})
//                         </label>
//                         <input
//                             type="number"
//                             name="quantity"
//                             value={quantity}
//                             min={1}
//                             max={foodDetails.quantity}
//                             onChange={handleQuantityChange}
//                             className="input w-full border border-[#8A4771]"
//                             disabled={isOutOfStock || isOwnItem}
//                             required
//                         />
//                         {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
//                     </fieldset>

//                     <fieldset>
//                         <label className="block mb-1">Buyer Name</label>
//                         <input
//                             type="text"
//                             name="buyerName"
//                             value={user?.displayName || ''}
//                             className="input w-full border border-[#8A4771]"
//                             readOnly
//                         />
//                     </fieldset>

//                     <fieldset>
//                         <label className="block mb-1">Buyer Email</label>
//                         <input
//                             type="email"
//                             name="buyerEmail"
//                             value={user?.email || ''}
//                             className="input w-full border border-[#8A4771]"
//                             readOnly
//                         />
//                     </fieldset>
//                 </div>

//                 <div className="form-control">
//                     <input
//                         type="submit"
//                         value={isSubmitting ? "Processing..." : "Purchase"}
//                         disabled={isDisabled}
//                         className={`btn font-bold w-full ${isDisabled
//                             ? "bg-gray-400 text-white cursor-not-allowed"
//                             : "bg-[#8D4974] text-white"
//                             }`}
//                     />
//                 </div>
//             </form>
//         </div>
//     );
// };

// export default PurchaseFood;

// import { useContext, useEffect, useState } from "react";
// import { AuthContext } from "../../Contexts/AuthContext";
// import { useLoaderData, useNavigate } from "react-router";
// import toast from "react-hot-toast";

const PurchaseFood = () => {
    const { user } = useContext(AuthContext);
    const foodDetails = useLoaderData();
    const navigate = useNavigate();

    const [quantity, setQuantity] = useState(1);
    const [error, setError] = useState("");
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [totalPurchased, setTotalPurchased] = useState(0);

    const isOwnItem = foodDetails.email === user?.email;
    const isOutOfStock = foodDetails.quantity === 0;
    const exceedsStock = quantity > foodDetails.quantity;
    const isDisabled = isOwnItem || isOutOfStock || exceedsStock || isSubmitting;

    useEffect(() => {
        const fetchPurchaseCount = async () => {
            try {
                const res = await fetch(`https://resturent-management-system-server.vercel.app/orders/count/${foodDetails._id}`);
                const data = await res.json();
                if (res.ok) {
                    setTotalPurchased(data.count || 0);
                }
            } catch (err) {
                console.error("Failed to fetch purchase count:", err);
            }
        };

        fetchPurchaseCount();
    }, [foodDetails._id]);

    const handleQuantityChange = (e) => {
        let val = parseInt(e.target.value);
        if (isNaN(val) || val < 1) val = 1;

        if (val > foodDetails.quantity) {
            setError(`Only ${foodDetails.quantity} items available.`);
        } else {
            setError("");
        }

        setQuantity(val);
    };

    const handlePurchase = async (e) => {
        e.preventDefault();
        const result = await purchaseProduct(`https://resturent-management-system-server.vercel.app/purchaseFood`, { name: foodDetails?.foodName, email: user?.email, quantity });
        if (result) {
            navigate('/myOrders');
        }
        
        // if (isDisabled) return;

        // const form = e.target;
        // const foodName = form.foodName.value;
        // const price = parseFloat(form.price.value);

        // const purchaseInfo = {
        //     foodId: foodDetails._id,
        //     foodName,
        //     foodImage: foodDetails.foodImage,
        //     price,
        //     quantity,
        //     buyerName: user?.displayName || '',
        //     buyerEmail: user?.email || '',
        //     buyingDate: Date.now(),
        //     sellerEmail: foodDetails.email,
        // };

        // try {
        //     setIsSubmitting(true);
        //     const res = await fetch('https://resturent-management-system-server.vercel.app/orders', {
        //         method: 'POST',
        //         headers: {
        //             'Content-Type': 'application/json',
        //         },
        //         body: JSON.stringify(purchaseInfo),
        //     });

        //     const data = await res.json();

        //     if (res.ok) {
        //         toast.success('Purchase successful!');
        //         navigate('/myOrders');
        //     } else {
        //         toast.error(data.message || 'Purchase failed. Please try again.');
        //     }
        // } catch (err) {
        //     console.error('Error:', err);
        //     toast.error('Something went wrong.');
        // } finally {
        //     setIsSubmitting(false);
        // }
    };

    return (
        <div className="mx-4 md:mx-16">
            <h1 className="text-2xl md:text-4xl font-bold text-center mt-6">
                Purchase Food
            </h1>

            {isOwnItem && (
                <p className="text-red-600 font-semibold mt-4">
                    ⚠ You cannot purchase your own added food.
                </p>
            )}

            {isOutOfStock && (
                <p className="text-red-600 font-semibold mt-2">
                    ❌ This food item is currently out of stock.
                </p>
            )}

            <form onSubmit={handlePurchase} className="my-10 space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                    <fieldset>
                        <label className="block mb-1">Food Name</label>
                        <input
                            type="text"
                            name="foodName"
                            defaultValue={foodDetails.foodName}
                            className="input w-full border border-[#8A4771]"
                            readOnly
                        />
                    </fieldset>

                    <fieldset>
                        <label className="block mb-1">Price ($)</label>
                        <input
                            type="number"
                            name="price"
                            defaultValue={foodDetails.price}
                            className="input w-full border border-[#8A4771]"
                            readOnly
                        />
                    </fieldset>

                    <fieldset>
                        <label className="block mb-1">
                            Quantity (Available: {foodDetails.quantity})
                        </label>
                        <input
                            type="number"
                            name="quantity"
                            value={quantity}
                            min={1}
                            max={foodDetails.quantity}
                            onChange={handleQuantityChange}
                            className="input w-full border border-[#8A4771]"
                            disabled={isOutOfStock || isOwnItem}
                            required
                        />
                        {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
                        <p className="text-sm text-green-700 mt-1">
                            ✅ Total Purchased: {totalPurchased}
                        </p>
                    </fieldset>

                    <fieldset>
                        <label className="block mb-1">Buyer Name</label>
                        <input
                            type="text"
                            name="buyerName"
                            value={user?.displayName || ''}
                            className="input w-full border border-[#8A4771]"
                            readOnly
                        />
                    </fieldset>

                    <fieldset>
                        <label className="block mb-1">Buyer Email</label>
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
                        // onClick={async () => {

                        // }}
                        value={isSubmitting ? "Processing..." : "Purchase"}
                        disabled={isDisabled}
                        className={`btn font-bold w-full ${isDisabled
                            ? "bg-gray-400 text-white cursor-not-allowed"
                            : "bg-[#8D4974] text-white"
                            }`}
                    />
                </div>
            </form>
        </div>
    );
};

export default PurchaseFood;
