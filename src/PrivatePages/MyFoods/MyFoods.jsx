

import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Contexts/AuthContext";
import { Link } from "react-router";

const MyFoods = () => {
    const { user } = useContext(AuthContext);
    const [myFoods, setMyFoods] = useState([]);
    const [loading, setLoading] = useState(true);

    // user token find
    console.log("token:", user?.accessToken);

    useEffect(() => {
        if (!user?.email) return;

        console.log("Fetching foods for:", user.email);
        console.log("User token:", user?.accessToken);

        fetch(`https://resturent-management-system-server.vercel.app/foodsEmail/?email=${user.email}`, {
            headers: {
                authorization: `Bearer ${user?.accessToken}`
            }
        })
            .then(res => res.json())
            .then(data => {
                setMyFoods(data);
                setLoading(false);
            })
            .catch(err => {
                console.error("Failed to load foods", err);
                setLoading(false);
            });
    }, [user]);

    if (loading) {
        return <div className="text-center mt-10">Loading...</div>;
    }

    return (
        <div>
            {/* Title Section */}
            <div className="bg-[#37324C] text-white py-10 flex justify-center items-center text-center">
                <h1 className="md:text-4xl text-2xl font-bold">My Added Food</h1>
            </div>
            <div className="max-w-6xl mx-auto px-4 py-6">

                {myFoods.length === 0 ? (
                    <p className="text-gray-600">You haven’t added any foods yet.</p>
                ) : (
                    <div className="overflow-x-auto">
                        <table className="table w-full">
                            <thead className="border">
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
                                                <button className="btn btn-sm bg-[#8A4771] text-white">Update</button>
                                            </Link>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                )}
            </div>
        </div>
    );
};

export default MyFoods;
