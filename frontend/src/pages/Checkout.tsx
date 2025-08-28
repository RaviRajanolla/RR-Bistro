import React, { useState } from 'react';
import { useCart } from '../context/CartContext';
import { useNavigate } from 'react-router-dom';
import { CreditCard } from 'lucide-react';

const Checkout = () => {
  const { cartItems, getTotalPrice, clearCart } = useCart();
  const navigate = useNavigate();

  const [paymentMethod, setPaymentMethod] = useState<'cod' | 'card'>('cod');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handlePlaceOrder = async () => {
    if (cartItems.length === 0) {
      alert('Your cart is empty!');
      return;
    }

    try {
      setLoading(true);
      setError(null);

      // Simulate API call
      await new Promise((res) => setTimeout(res, 1500));

      clearCart();
      navigate('/order-confirmation');
    } catch (err) {
      setError('Failed to place order. Please try again.');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 dark:bg-gray-900 p-6 transition-colors">
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg max-w-md w-full p-8 transition-colors">
        <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">
          Checkout
        </h2>

        {/* Payment Method */}
        <div className="mb-6">
          <h3 className="text-lg font-semibold mb-2 text-gray-800 dark:text-gray-200">
            Select Payment Method
          </h3>
          <div className="flex space-x-4">
            <label className="flex items-center space-x-2 cursor-pointer text-gray-700 dark:text-gray-300">
              <input
                type="radio"
                name="paymentMethod"
                value="cod"
                checked={paymentMethod === 'cod'}
                onChange={() => setPaymentMethod('cod')}
                className="form-radio text-primary focus:ring-primary"
              />
              <span>Cash on Delivery</span>
            </label>
            <label className="flex items-center space-x-2 cursor-pointer text-gray-700 dark:text-gray-300">
              <input
                type="radio"
                name="paymentMethod"
                value="card"
                checked={paymentMethod === 'card'}
                onChange={() => setPaymentMethod('card')}
                className="form-radio text-primary focus:ring-primary"
              />
              <span>Credit / Debit Card</span>
            </label>
          </div>
        </div>

        {/* Order Summary */}
        <div className="mb-6">
          <h3 className="text-lg font-semibold mb-2 text-gray-800 dark:text-gray-200">
            Order Summary
          </h3>
          <ul className="mb-2 max-h-48 overflow-y-auto border border-gray-200 dark:border-gray-700 rounded p-2">
            {cartItems.map((item) => (
              <li
                key={item.id}
                className="flex justify-between mb-1 text-gray-700 dark:text-gray-300"
              >
                <span>
                  {item.name} x {item.quantity}
                </span>
                <span>${(item.price * item.quantity).toFixed(2)}</span>
              </li>
            ))}
          </ul>
          <div className="flex justify-between font-bold text-lg text-gray-900 dark:text-white">
            <span>Total:</span>
            <span>${getTotalPrice().toFixed(2)}</span>
          </div>
        </div>

        {error && <p className="text-red-600 dark:text-red-400 mb-4">{error}</p>}

        {/* Place Order Button */}
        <button
          disabled={loading}
          onClick={handlePlaceOrder}
          className="w-full bg-primary text-white py-3 rounded-lg font-semibold hover:bg-primary-dark transition-colors flex items-center justify-center disabled:opacity-50"
        >
          <CreditCard className="h-5 w-5 mr-2" />
          {loading ? 'Placing Order...' : 'Place Order'}
        </button>
      </div>
    </div>
  );
};

export default Checkout;
