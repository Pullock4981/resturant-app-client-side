

// import { useContext, useEffect, useState } from "react";
// import { AuthContext } from "../../Contexts/AuthContext";
// import { Link } from "react-router";



// const MyFoods = () => {
//     const { user } = useContext(AuthContext);
//     const [myFoods, setMyFoods] = useState([]);
//     const [loading, setLoading] = useState(true);

//     useEffect(() => {
//         if (user?.email) {
//             fetch(`http://localhost:3000/foods?email=${user.email}`)
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
//                                     <td>{food.category}</td> {/* ✅ Corrected key name */}
//                                     <td>{food.quantity}</td>
//                                     <td>${food.price}</td>
//                                     <td>{food.origin}</td>
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

import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Contexts/AuthContext";
import { Link } from "react-router"; // ❗ Use 'react-router-dom' if using React Router DOM

const MyFoods = () => {
    const { user } = useContext(AuthContext);
    const [myFoods, setMyFoods] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (user?.email) {
            fetch(`http://localhost:3000/foods?email=${user.email}`)
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
                                    <td>{food.category}</td>
                                    <td>{food.quantity}</td>
                                    <td>${food.price}</td>
                                    <td>{food.foodOrigin}</td>
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
