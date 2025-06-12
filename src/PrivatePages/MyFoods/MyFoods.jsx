// // import React, { useContext, useEffect, useState } from 'react';
// // // import { useLoaderData } from 'react-router';
// // import { AuthContext } from '../../Contexts/AuthContext';

import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Contexts/AuthContext";
import { Link } from "react-router";

// import { useContext, useEffect, useState } from "react";
// import { AuthContext } from "../../Contexts/AuthContext";
// import { Link } from "react-router";

// // const MyFoods = () => {
// //     // find current user
// //     const {user} = useContext(AuthContext);
// //     console.log(user);
// //     // state for myFoods
// //     const [myFoods, setMyFoods] = useState([]);

// //     // useEffect to fetch my foods from the api by user email
// //      useEffect(() => {
// //         if (user?.email) {
// //             fetch(`http://localhost:3000/foods?creatorEmail=${user.email}`)
// //                 .then(res => res.json())
// //                 .then(data => {
// //                     setMyFoods(data);
// //                     // setLoading(false);
// //                 })
// //                 .catch(err => {
// //                     console.error("Failed to load groups", err);
// //                     // setLoading(false);
// //                 });
// //         }
// //     }, [user]);
// //     return (
// //         <div>
// //             <h1>
// //                 this is my food page
// //             </h1>

// //         </div>
// //     );
// // };

// // export default MyFoods;

// // import React, { useContext, useEffect, useState } from 'react';
// // import { AuthContext } from '../../Contexts/AuthContext';
// // import { Link } from 'react-router-dom';

// const MyFoods = () => {
//     const { user } = useContext(AuthContext);
//     const [myFoods, setMyFoods] = useState([]);
//     const [loading, setLoading] = useState(true);

//     // email

//     useEffect(() => {
//         if (user?.email) {
//              fetch(`http://localhost:3000/foods?creatorEmail=${user.email}`)
//                 .then(res => res.json())
//                 .then(data => {
//                     setMyFoods(data);
//                     setLoading(false);
//                 })
//                 .catch(err => {
//                     console.error("Failed to load foods", err);
//                     setLoading(false);
//                 });
//         }
//     }, [user]);

//     if (loading) {
//         return (
//             <div className="text-center mt-10">
//                 <span className="loading loading-ball loading-xs"></span>
//                 <span className="loading loading-ball loading-sm"></span>
//                 <span className="loading loading-ball loading-md"></span>
//                 <span className="loading loading-ball loading-lg"></span>
//                 <span className="loading loading-ball loading-xl"></span>
//             </div>
//         );
//     }

//     return (
//         <div className="max-w-6xl mx-auto px-4 py-6">
//             <h2 className="text-3xl font-semibold mb-6">My Added Foods</h2>
//             {myFoods.length === 0 ? (
//                 <p className="text-gray-600">You haven’t added any foods yet.</p>
//             ) : (
//                 <div className="overflow-x-auto">
//                     <table className="table w-full">
//                         <thead className="bg-gray-100">
//                             <tr>
//                                 <th>#</th>
//                                 <th>Name</th>
//                                 <th>Category</th>
//                                 <th>Quantity</th>
//                                 <th>Price</th>
//                                 <th>Origin</th>
//                                 <th>Actions</th>
//                             </tr>
//                         </thead>
//                         <tbody>
//                             {myFoods.map((food, index) => (
//                                 <tr key={food._id}>
//                                     <td>{index + 1}</td>
//                                     <td>{food.foodName}</td>
//                                     <td>{food.foodCategory}</td>
//                                     <td>{food.quantity?.$numberInt || food.quantity}</td>
//                                     <td>${food.price?.$numberInt || food.price}</td>
//                                     <td>{food.foodOrigin}</td>
//                                     <td>
//                                         <Link to={`/updateFood/${food._id}`}>
//                                             <button className="btn btn-sm bg-[#2A9261] text-white">Update</button>
//                                         </Link>
//                                     </td>
//                                 </tr>
//                             ))}
//                         </tbody>
//                     </table>
//                 </div>
//             )}
//         </div>
//     );
// };

// export default MyFoods;

// import { useContext, useEffect, useState } from "react";
// import { AuthContext } from "../../Contexts/AuthContext";
// import { Link } from "react-router-dom"; // ✅ fix incorrect import

const MyFoods = () => {
    const { user } = useContext(AuthContext);
    const [myFoods, setMyFoods] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (user?.email) {
            fetch(`http://localhost:3000/foods?creatorEmail=${user.email}`)
                .then(res => res.json())
                .then(data => {
                    setMyFoods(data);
                    setLoading(false);
                })
                .catch(err => {
                    console.error("Failed to load foods", err);
                    setLoading(false);
                });
        }
    }, [user]);

    if (loading) {
        return (
            <div className="text-center mt-10">
                <span className="loading loading-ball loading-xs"></span>
                <span className="loading loading-ball loading-sm"></span>
                <span className="loading loading-ball loading-md"></span>
                <span className="loading loading-ball loading-lg"></span>
                <span className="loading loading-ball loading-xl"></span>
            </div>
        );
    }

    return (
        <div className="max-w-6xl mx-auto px-4 py-6">
            <h2 className="text-3xl font-semibold mb-6">My Added Foods</h2>
            {myFoods.length === 0 ? (
                <p className="text-gray-600">You haven’t added any foods yet.</p>
            ) : (
                <div className="overflow-x-auto">
                    <table className="table w-full">
                        <thead className="bg-gray-100">
                            <tr>
                                <th>#</th>
                                <th>Name</th>
                                <th>Category</th>
                                <th>Quantity</th>
                                <th>Price</th>
                                <th>Origin</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {myFoods.map((food, index) => (
                                <tr key={food._id}>
                                    <td>{index + 1}</td>
                                    <td>{food.foodName}</td>
                                    <td>{food.category}</td> {/* ✅ Corrected key name */}
                                    <td>{food.quantity}</td>
                                    <td>${food.price}</td>
                                    <td>{food.origin}</td>
                                    <td>
                                        <Link to={`/updateFood/${food._id}`}>
                                            <button className="btn btn-sm bg-[#2A9261] text-white">Update</button>
                                        </Link>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}
        </div>
    );
};

export default MyFoods;
