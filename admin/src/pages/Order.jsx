import React, { useEffect, useState } from 'react';
import axiosInstance from '../../../backend/axiosConfig'; // Adjust the path as needed

const Order = () => {
    const [orders, setOrders] = useState([]);
    const [error, setError] = useState(null);
    const [statusUpdates, setStatusUpdates] = useState({}); // To store updated statuses before submission

    // Fetch all orders for admin
    const fetchOrders = async () => {
        try {
            const response = await axiosInstance.get('/adminorder');
            setOrders(response.data);
        } catch (error) {
            setError('Failed to fetch orders. Please try again later.');
        }
    };

    // Handle status change in select dropdown
    const handleStatusChange = (orderId, newStatus) => {
        setStatusUpdates(prev => ({ ...prev, [orderId]: newStatus }));
    };

    // Update the order status
    const updateOrderStatus = async (orderId) => {
        try {
            const newStatus = statusUpdates[orderId];
            await axiosInstance.put(`/adminorder/${orderId}`, { orderStatus: newStatus });
            fetchOrders(); // Refresh the orders list
        } catch (error) {
            console.error('Error updating order status:', error);
            setError('Failed to update order status. Please try again later.');
        }
    };

    useEffect(() => {
        fetchOrders();
    }, []);

    if (error) {
        return <p>{error}</p>;
    }

    return (
        <>
            <div className="container mx-auto py-10 px-4 bg-gray-900 min-h-screen">
                <h2 className="font-extrabold text-5xl mb-10 pt-[100px] text-center text-white">
                    Manage <span className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-red-600">Orders</span>
                </h2>
                {orders.length === 0 ? (
                    <p className="text-center text-white text-lg">No orders available.</p>
                ) : (
                    <div className="space-y-8">
                        {orders.map((order, orderIndex) => (
                            <div key={order._id} className="bg-gray-800 shadow-lg p-6 rounded-lg">
                                <h3 className="font-bold text-xl text-white mb-4">Order {orderIndex + 1}</h3>
                                <h4 className="text-white">USER: {order.email}</h4>
                                <div className="flex space-x-6 overflow-x-auto">
                                    {order.order_data[0].map((item, itemIndex) => (
                                        <div key={item._id} className="flex-shrink-0 bg-gray-700 p-4 rounded-lg">
                                            <img src={item.img} alt={item.name} className="w-32 h-32 rounded-lg object-cover mb-4" />
                                            <p className="text-white font-bold">{item.name}</p>
                                            <p className="text-gray-400">Size: {item.size}</p>
                                            <p className="text-gray-400">Quantity: {item.qty}</p>
                                            <p className="text-gray-400">Price: ${item.price}</p>
                                        </div>
                                    ))}
                                </div>
                                <div className="mt-4 flex items-center">
                                    <label className="text-white">Order Status:</label>
                                    <select
                                        className="ml-2 p-2 bg-gray-700 text-white rounded"
                                        value={statusUpdates[order._id] || order.orderStatus}
                                        onChange={(e) => handleStatusChange(order._id, e.target.value)}
                                    >
                                        <option value="Placed">Placed</option>
                                        <option value="Out for Delivery">Out for Delivery</option>
                                        <option value="Delivered">Delivered</option>
                                    </select>
                                    <button
                                        onClick={() => updateOrderStatus(order._id)}
                                        className="ml-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
                                    >
                                        Change
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </>
    );
};

export default Order;
