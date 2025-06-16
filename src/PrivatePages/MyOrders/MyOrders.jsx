import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Contexts/AuthContext";
import toast from "react-hot-toast";
import moment from "moment";

const MyOrders = () => {
    const { user } = useContext(AuthContext);
    const [orders, setOrders] = useState([]);

    // Fetch orders for logged-in user
    // useEffect(() => {
    //     if (user?.email) {
    //         fetch(`https://resturent-management-system-server.vercel.app/orders?email=${user.email}`), {
    //             headers: {
    //                 authorization: `Bearer ${user?.accessToken}`
    //             }
    //         }
    //             .then(res => res.json())
    //             .then(data => setOrders(data))
    //             .catch(err => console.error('Failed to fetch orders:', err));
    //     }
    // }, [user?.email, user?.accessToken]);

    useEffect(() => {
        const fetchOrders = async () => {
            if (!user?.email) return;

            try {
                const token = await user.getIdToken(); // Get Firebase ID token
                const res = await fetch(`https://resturent-management-system-server.vercel.app/orders?email=${user.email}`, {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                });

                if (!res.ok) {
                    throw new Error("Unauthorized or error fetching orders");
                }

                const data = await res.json();
                setOrders(data);
            } catch (err) {
                console.error("Failed to fetch orders:", err);
                toast.error("Could not fetch your orders");
            }
        };

        fetchOrders();
    }, [user]);


    // Handle delete order
    const handleDelete = (id) => {
        const confirm = window.confirm("Are you sure you want to delete this order?");
        if (!confirm) return;

        fetch(`https://resturent-management-system-server.vercel.app/orders/${id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(result => {
                if (result.deletedCount > 0) {
                    toast.success('Order deleted successfully');
                    setOrders(prev => prev.filter(order => order._id !== id));
                }
            });
    };

    return (
        <div className="mx-4 md:mx-16 my-10">
            <h1 className="text-2xl font-bold text-center mb-6">My Orders</h1>

            {orders.length === 0 ? (
                <p className="text-center">No orders found.</p>
            ) : (
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {orders.map(order => (
                        <div key={order._id} className="card bg-base-100 shadow-lg p-4 rounded-lg">
                            <img
                                src={order.foodImage}
                                alt={order.foodName}
                                className="w-full h-40 object-cover rounded"
                            />
                            <div className="mt-4 space-y-1">
                                <h2 className="text-xl font-semibold">{order.foodName}</h2>
                                <p><strong>Price:</strong> ${order.price}</p>
                                <p><strong>Quantity:</strong> {order.quantity}</p>
                                {/* <p><strong>Owner:</strong> {order.ownerName || 'Unknown'}</p> */}
                                <p><strong>Ordered At:</strong> {moment(order.buyingDate).format('LLL')}</p>
                            </div>
                            <button
                                onClick={() => handleDelete(order._id)}
                                className="mt-4 btn btn-sm bg-red-400 text-white hover:bg-red-700"
                            >
                                Delete Order
                            </button>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default MyOrders;
