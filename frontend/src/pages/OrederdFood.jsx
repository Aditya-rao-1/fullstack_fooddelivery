import React, { useEffect, useState } from 'react';
import axiosInstance from '../axiosConfig.js'; // Adjust the path as needed
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const OrderedFood = () => {
    const [orders, setOrders] = useState([]);
    const [error, setError] = useState(null);

    const fetchOrders = async () => {
        try {
            const response = await axiosInstance.get('/myorderData');
            console.log('Fetched Orders:', response.data);
            setOrders(response.data);
        } catch (error) {
            setError('Failed to fetch orders. Please try again later.');
            console.error('Error fetching orders:', error);
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
            <Navbar />
            <div className="container mx-auto py-10 px-4 bg-gray-900 min-h-screen">
                <h2 className="font-extrabold text-5xl mb-10 pt-[100px] text-center text-white">
                    Your <span className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-red-600">Orders</span>
                </h2>
                {orders.length === 0 ? (
                    <p className="text-center text-white text-lg">You have no orders yet.</p>
                ) : (
                    <div className="space-y-8">
                        {orders.map((order, orderIndex) => (
                            <div key={order._id} className="bg-gray-800 shadow-lg p-6 rounded-lg">
                                <h3 className="font-bold text-xl text-white mb-4">Order {orderIndex + 1}</h3>
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
                                <div className="mt-4">
                                    <p className="text-white">Order Status: <span className="font-bold">{order.orderStatus}</span></p>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
            <Footer />
        </>
    );
};

export default OrderedFood;
