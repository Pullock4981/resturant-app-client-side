

// // import { useContext, useState } from "react";
// // import { AuthContext } from "../../Contexts/AuthContext";
// // import { Link, useLoaderData } from "react-router";


// // const AllFoods = () => {
// //     const { user } = useContext(AuthContext);
// //     const foods = useLoaderData();
// //     const [searchText, setSearchText] = useState('');

// //     const filteredFoods = foods.filter(food =>
// //         food.foodName.toLowerCase().includes(searchText.toLowerCase())
// //     );

// //     return (
// //         <div>
// //             {/* Title Section */}
// //             <div className="bg-[#37324C] text-white py-10 flex justify-center items-center text-center">
// //                 <h1 className="md:text-4xl text-2xl font-bold">All Foods</h1>
// //             </div>

// //             {/* Search Bar */}
// //             <div className="mx-4 md:mx-16 my-10">
// //                 {/* <h1 className="text-2xl md:text-4xl font-bold text-center mb-6">All Foods</h1> */}
// //                 <div className="form-control mb-6 flex justify-center">
// //                     <input
// //                         type="text"
// //                         placeholder="Search by food name..."
// //                         className="input input-bordered w-full max-w-xs border-[#8A4771]"
// //                         value={searchText}
// //                         onChange={(e) => setSearchText(e.target.value)}
// //                     />
// //                 </div>
// //             </div>

// //             {/* Display Foods */}
// //             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mx-4 md:mx-16 my-10">
// //                 {filteredFoods.length > 0 ? (
// //                     filteredFoods.map((food) => {
// //                         const quantity = Number(food.quantity?.$numberInt || food.quantity);
// //                         const isOutOfStock = quantity === 0;
// //                         const isOwnItem = food.email === user?.email;

// //                         return (
// //                             <div key={food._id?.$oid || food._id} className="card bg-base-100 shadow-xl">
// //                                 <figure>
// //                                     <img src={food.foodImage} alt={food.foodName} className="w-full h-48 object-cover" />
// //                                 </figure>
// //                                 <div className="card-body">
// //                                     <h2 className="card-title text-lg font-bold">{food.foodName}</h2>
// //                                     <p>{food.description}</p>
// //                                     <p><strong>Quantity:</strong> {quantity}</p>
// //                                     <p><strong>Price:</strong> ${food.price?.$numberInt || food.price}</p>
// //                                     <p><strong>Origin:</strong> {food.foodOrigin}</p>
// //                                     <p><strong>Added By:</strong> {food.name} ({food.email})</p>

// //                                     {isOutOfStock && (
// //                                         <div className="badge badge-error text-white mt-2">Out of Stock</div>
// //                                     )}
// //                                     {isOwnItem && (
// //                                         <div className="badge badge-warning text-white mt-2">Your Item</div>
// //                                     )}

// //                                     <div className="card-actions justify-end">
// //                                         {(isOutOfStock || isOwnItem) ? (
// //                                             <button
// //                                                 className="btn btn-disabled bg-gray-400 text-white cursor-not-allowed"
// //                                                 disabled
// //                                             >
// //                                                 Not Available
// //                                             </button>
// //                                         ) : (
// //                                             <Link
// //                                                 to={`/foodDetails/${food._id?.$oid || food._id}`}
// //                                                 className="btn btn-outline hover:bg-[#8D4974] hover:text-white"
// //                                             >
// //                                                 View Details
// //                                             </Link>
// //                                         )}
// //                                     </div>
// //                                 </div>
// //                             </div>
// //                         );
// //                     })
// //                 ) : (
// //                     <p className="text-center col-span-full text-gray-500">
// //                         No foods found matching "{searchText}".
// //                     </p>
// //                 )}
// //             </div>
// //         </div>
// //     );
// // };

// // export default AllFoods;

// import { useContext, useState } from "react";
// import { AuthContext } from "../../Contexts/AuthContext";
// import { Link, useLoaderData } from "react-router";

// const AllFoods = () => {
//     const { user } = useContext(AuthContext);
//     const foods = useLoaderData();
//     const [searchText, setSearchText] = useState('');

//     // ✅ Filter by name, category, or origin
//     const filteredFoods = foods.filter(food => {
//         const search = searchText.toLowerCase();
//         return (
//             food.foodName.toLowerCase().includes(search) ||
//             food.category.toLowerCase().includes(search) ||
//             food.foodOrigin.toLowerCase().includes(search)
//         );
//     });

//     return (
//         <div>
//             {/* Title Section */}
//             <div className="bg-[#37324C] text-white py-10 flex justify-center items-center text-center">
//                 <h1 className="md:text-4xl text-2xl font-bold">All Foods</h1>
//             </div>

//             {/* Search Bar */}
//             <div className="mx-4 md:mx-16 my-10">
//                 <div className="form-control mb-6 flex justify-center">
//                     <input
//                         type="text"
//                         placeholder="Search by name, category, or origin..."
//                         className="input input-bordered w-full max-w-xs border-[#8A4771]"
//                         value={searchText}
//                         onChange={(e) => setSearchText(e.target.value)}
//                     />
//                 </div>
//             </div>

//             {/* Display Foods */}
//             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mx-4 md:mx-16 my-10">
//                 {filteredFoods.length > 0 ? (
//                     filteredFoods.map((food) => {
//                         const quantity = Number(food.quantity?.$numberInt || food.quantity);
//                         const isOutOfStock = quantity === 0;
//                         const isOwnItem = food.email === user?.email;

//                         return (
//                             <div key={food._id?.$oid || food._id} className="card bg-base-100 shadow-xl">
//                                 <figure>
//                                     <img src={food.foodImage} alt={food.foodName} className="w-full h-48 object-cover" />
//                                 </figure>
//                                 <div className="card-body">
//                                     <h2 className="card-title text-lg font-bold">{food.foodName}</h2>
//                                     <p>{food.description}</p>
//                                     <p><strong>Quantity:</strong> {quantity}</p>
//                                     <p><strong>Price:</strong> ${food.price?.$numberInt || food.price}</p>
//                                     <p><strong>Origin:</strong> {food.foodOrigin}</p>
//                                     <p><strong>Added By:</strong> {food.name} ({food.email})</p>

//                                     {isOutOfStock && (
//                                         <div className="badge badge-error text-white mt-2">Out of Stock</div>
//                                     )}
//                                     {isOwnItem && (
//                                         <div className="badge badge-warning text-white mt-2">Your Item</div>
//                                     )}

//                                     <div className="card-actions justify-end">
//                                         {(isOutOfStock || isOwnItem) ? (
//                                             <button
//                                                 className="btn btn-disabled bg-gray-400 text-white cursor-not-allowed"
//                                                 disabled
//                                             >
//                                                 Not Available
//                                             </button>
//                                         ) : (
//                                             <Link
//                                                 to={`/foodDetails/${food._id?.$oid || food._id}`}
//                                                 className="btn btn-outline hover:bg-[#8D4974] hover:text-white"
//                                             >
//                                                 View Details
//                                             </Link>
//                                         )}
//                                     </div>
//                                 </div>
//                             </div>
//                         );
//                     })
//                 ) : (
//                     <p className="text-center col-span-full text-gray-500">
//                         No foods found matching "{searchText}".
//                     </p>
//                 )}
//             </div>
//         </div>
//     );
// };

// export default AllFoods;
import { useContext, useState } from "react";
import { AuthContext } from "../../Contexts/AuthContext";
import { Link, useLoaderData } from "react-router";

const AllFoods = () => {
    const { user } = useContext(AuthContext);
    const foods = useLoaderData();
    const [searchText, setSearchText] = useState('');
    const [sortOption, setSortOption] = useState('');

    // Filter by name, category, or origin
    let filteredFoods = foods.filter(food => {
        const search = searchText.toLowerCase();
        return (
            food.foodName.toLowerCase().includes(search) ||
            food.category.toLowerCase().includes(search) ||
            food.foodOrigin.toLowerCase().includes(search)
        );
    });

    // Sort logic
    if (sortOption === 'name') {
        filteredFoods.sort((a, b) => a.foodName.localeCompare(b.foodName));
    } else if (sortOption === 'priceLow') {
        filteredFoods.sort((a, b) => (a.price - b.price));
    } else if (sortOption === 'priceHigh') {
        filteredFoods.sort((a, b) => (b.price - a.price));
    } else if (sortOption === 'qtyLow') {
        filteredFoods.sort((a, b) => (a.quantity - b.quantity));
    } else if (sortOption === 'qtyHigh') {
        filteredFoods.sort((a, b) => (b.quantity - a.quantity));
    }

    return (
        <div>
            {/* Title Section */}
            <div className="bg-[#37324C] text-white py-10 flex justify-center items-center text-center">
                <h1 className="md:text-4xl text-2xl font-bold">All Foods</h1>
            </div>

            {/* Search & Sort Bar */}
            <div className="mx-4 md:mx-16 my-10 flex flex-col md:flex-row gap-4 justify-between items-center">
                <input
                    type="text"
                    placeholder="Search by name, category, or origin..."
                    className="input input-bordered w-full max-w-xs border-[#8A4771]"
                    value={searchText}
                    onChange={(e) => setSearchText(e.target.value)}
                />
                <select
                    className="select select-bordered border-[#8A4771] w-full max-w-xs"
                    value={sortOption}
                    onChange={(e) => setSortOption(e.target.value)}
                >
                    <option value="">Sort by</option>
                    <option value="name">Name (A-Z)</option>
                    <option value="priceLow">Price (Low to High)</option>
                    <option value="priceHigh">Price (High to Low)</option>
                    <option value="qtyLow">Quantity (Low to High)</option>
                    <option value="qtyHigh">Quantity (High to Low)</option>
                </select>
            </div>

            {/* Display Foods */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mx-4 md:mx-16 my-10">
                {filteredFoods.length > 0 ? (
                    filteredFoods.map((food) => {
                        const quantity = Number(food.quantity?.$numberInt || food.quantity);
                        const isOutOfStock = quantity === 0;
                        const isOwnItem = food.email === user?.email;

                        return (
                            <div key={food._id?.$oid || food._id} className="card bg-base-100 shadow-xl">
                                <figure>
                                    <img src={food.foodImage} alt={food.foodName} className="w-full h-48 object-cover" />
                                </figure>
                                <div className="card-body">
                                    <h2 className="card-title text-lg font-bold">{food.foodName}</h2>
                                    <p>{food.description}</p>
                                    <p><strong>Quantity:</strong> {quantity}</p>
                                    <p><strong>Price:</strong> ${food.price?.$numberInt || food.price}</p>
                                    <p><strong>Origin:</strong> {food.foodOrigin}</p>
                                    <p><strong>Added By:</strong> {food.name} ({food.email})</p>

                                    {isOutOfStock && (
                                        <div className="badge badge-error text-white mt-2">Out of Stock</div>
                                    )}
                                    {isOwnItem && (
                                        <div className="badge badge-warning text-white mt-2">Your Item</div>
                                    )}

                                    <div className="card-actions justify-end">
                                        {(isOutOfStock || isOwnItem) ? (
                                            <button
                                                className="btn btn-disabled bg-gray-400 text-white cursor-not-allowed"
                                                disabled
                                            >
                                                Not Available
                                            </button>
                                        ) : (
                                            <Link
                                                to={`/foodDetails/${food._id?.$oid || food._id}`}
                                                className="btn btn-outline hover:bg-[#8D4974] hover:text-white"
                                            >
                                                View Details
                                            </Link>
                                        )}
                                    </div>
                                </div>
                            </div>
                        );
                    })
                ) : (
                    <p className="text-center col-span-full text-gray-500">
                        No foods found matching "{searchText}".
                    </p>
                )}
            </div>
        </div>
    );
};

export default AllFoods;
