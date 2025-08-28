import React from 'react';
import { CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const OrderConfirmation = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 dark:bg-gray-900 px-4 transition-colors">
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-12 max-w-md text-center transition-colors">
        <CheckCircle className="mx-auto mb-6 text-green-500" size={72} />
        <h1 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">
          Order Confirmed!
        </h1>
        <p className="text-gray-700 dark:text-gray-300 mb-6">
          Thank you for your purchase. Your order has been successfully placed.
        </p>
        <Link
          to="/menu"
          className="inline-block bg-primary text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary-dark transition-colors"
        >
          Back to Menu
        </Link>
      </div>
    </div>
  );
};

export default OrderConfirmation;
