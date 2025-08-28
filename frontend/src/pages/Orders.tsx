import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ordersAPI } from '../services/api';
import { useAuth } from '../context/AuthContext';
import { useCart } from '../context/CartContext';
import LoadingSpinner from '../components/LoadingSpinner';
import { Package, Calendar, ShoppingCart, Plus, Minus, Trash2, CreditCard } from 'lucide-react';

interface OrderItem {
  name: string;
  quantity: number;
  price: number;
}

interface Order {
  id: string | number;
  orderDate: string;
  items: OrderItem[];
  total: number;
  status: string;
}

const Orders = () => {
  const navigate = useNavigate();

  const { user, isAuthenticated } = useAuth();
  const { cartItems, updateQuantity, removeFromCart, clearCart, getTotalPrice } = useCart();

  const [orders, setOrders] = useState<Order[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState<'cart' | 'orders'>('cart');

  useEffect(() => {
    if (isAuthenticated && user?.id) {
      fetchOrders();
    } else {
      setOrders([]);
      setLoading(false);
    }
  }, [isAuthenticated, user?.id]);

  const fetchOrders = async () => {
    try {
      setLoading(true);
      setError(null);
      const response = await ordersAPI.getUserOrders(user!.id);

      const transformedOrders: Order[] = response.data.map((order: any) => ({
        id: order.id,
        orderDate: order.orderTime,
        items: order.items.map((item: any) => ({
          name: item.menuItem?.name ?? 'Unknown Item',
          quantity: item.quantity,
          price: item.price,
        })),
        total: order.totalAmount,
        status: order.status,
      }));

      setOrders(transformedOrders);
    } catch (err) {
      setError('Failed to fetch orders. Please try again later.');
      console.error('Error fetching orders:', err);
    } finally {
      setLoading(false);
    }
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-8 flex items-center justify-center">
        <div className="text-center">
          <p className="text-gray-600 dark:text-gray-300 mb-4">Please sign in to view your orders.</p>
          <a
            href="/signin"
            className="bg-primary text-white px-6 py-2 rounded-lg hover:bg-primary-dark transition-colors"
          >
            Sign In
          </a>
        </div>
      </div>
    );
  }

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900">
        <LoadingSpinner size="lg" />
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900">
        <div className="text-center">
          <p className="text-red-600 dark:text-red-400 mb-4">{error}</p>
          <button
            onClick={fetchOrders}
            className="bg-primary text-white px-6 py-2 rounded-lg hover:bg-primary-dark transition-colors"
          >
            Try Again
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-heading font-bold text-gray-900 dark:text-white mb-4">
            Cart & Orders
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Manage your cart and view order history
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg mb-8">
          <div className="flex border-b dark:border-gray-700">
            <button
              onClick={() => setActiveTab('cart')}
              className={`flex-1 py-4 px-6 text-center font-semibold transition-colors ${
                activeTab === 'cart'
                  ? 'text-primary border-b-2 border-primary bg-primary/5 dark:bg-primary/10'
                  : 'text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-white'
              }`}
            >
              <ShoppingCart className="h-5 w-5 inline mr-2" />
              Cart ({cartItems.length})
            </button>
            <button
              onClick={() => setActiveTab('orders')}
              className={`flex-1 py-4 px-6 text-center font-semibold transition-colors ${
                activeTab === 'orders'
                  ? 'text-primary border-b-2 border-primary bg-primary/5 dark:bg-primary/10'
                  : 'text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-white'
              }`}
            >
              <Package className="h-5 w-5 inline mr-2" />
              Order History ({orders.length})
            </button>
          </div>
        </div>

        {/* Cart Tab */}
        {activeTab === 'cart' && (
          <div className="space-y-6">
            {cartItems.length === 0 ? (
              <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-12 text-center">
                <ShoppingCart className="h-16 w-16 text-gray-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  Your Cart is Empty
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  Add some delicious items from our menu to get started!
                </p>
                <a
                  href="/menu"
                  className="bg-primary text-white px-6 py-3 rounded-lg hover:bg-primary-dark transition-colors"
                >
                  Browse Menu
                </a>
              </div>
            ) : (
              <>
                <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
                  <div className="flex justify-between items-center mb-6">
                    <h2 className="text-2xl font-heading font-semibold dark:text-white">Cart Items</h2>
                    <button
                      onClick={clearCart}
                      className="text-red-600 dark:text-red-400 hover:text-red-800 transition-colors flex items-center"
                    >
                      <Trash2 className="h-4 w-4 mr-1" />
                      Clear Cart
                    </button>
                  </div>

                  <div className="space-y-4">
                    {cartItems.map((item) => (
                      <div
                        key={item.id}
                        className="flex items-center space-x-4 p-4 border border-gray-200 dark:border-gray-700 rounded-lg"
                      >
                        <div className="w-16 h-16 bg-gray-200 dark:bg-gray-700 rounded-lg flex items-center justify-center flex-shrink-0">
                          {item.image ? (
                            <img
                              src={item.image}
                              alt={item.name}
                              className="w-full h-full object-cover rounded-lg"
                            />
                          ) : (
                            <span className="text-2xl">🍽️</span>
                          )}
                        </div>

                        <div className="flex-1">
                          <h3 className="font-semibold text-gray-900 dark:text-white">{item.name}</h3>
                          <p className="text-gray-600 dark:text-gray-400 text-sm line-clamp-1">{item.description}</p>
                          <p className="text-primary font-bold">${item.price.toFixed(2)}</p>
                        </div>

                        <div className="flex items-center space-x-2">
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            className="w-8 h-8 rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 flex items-center justify-center transition-colors"
                          >
                            <Minus className="h-4 w-4" />
                          </button>
                          <span className="w-8 text-center font-semibold dark:text-white">{item.quantity}</span>
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            className="w-8 h-8 rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 flex items-center justify-center transition-colors"
                          >
                            <Plus className="h-4 w-4" />
                          </button>
                        </div>

                        <div className="text-right">
                          <p className="font-bold text-gray-900 dark:text-white">
                            ${(item.price * item.quantity).toFixed(2)}
                          </p>
                          <button
                            onClick={() => removeFromCart(item.id)}
                            className="text-red-600 dark:text-red-400 hover:text-red-800 dark:hover:text-red-500 transition-colors text-sm"
                          >
                            Remove
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-xl font-semibold dark:text-white">Total:</span>
                    <span className="text-2xl font-bold text-primary">
                      ${getTotalPrice().toFixed(2)}
                    </span>
                  </div>
                  <button
                    onClick={() => navigate('/checkout')}
                    className="w-full bg-primary text-white py-3 rounded-lg font-semibold hover:bg-primary-dark transition-colors flex items-center justify-center"
                  >
                    <CreditCard className="h-5 w-5 mr-2" />
                    Proceed to Checkout
                  </button>
                </div>
              </>
            )}
          </div>
        )}

        {/* Orders Tab */}
        {activeTab === 'orders' && (
          <>
            {orders.length === 0 ? (
              <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-12 text-center">
                <Package className="h-16 w-16 text-gray-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  No Orders Yet
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  You haven't placed any orders yet. Start browsing our menu!
                </p>
                <a
                  href="/menu"
                  className="bg-primary text-white px-6 py-3 rounded-lg hover:bg-primary-dark transition-colors"
                >
                  Browse Menu
                </a>
              </div>
            ) : (
              <div className="space-y-6">
                {orders.map((order) => (
                  <div key={order.id} className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
                    <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                      <div>
                        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                          Order #{order.id}
                        </h3>
                        <div className="flex items-center text-gray-600 dark:text-gray-400 mb-2">
                          <Calendar className="h-4 w-4 mr-2" />
                          {new Date(order.orderDate).toLocaleDateString('en-US', {
                            year: 'numeric',
                            month: 'long',
                            day: 'numeric',
                            hour: '2-digit',
                            minute: '2-digit',
                          })}
                        </div>
                        <div className="flex items-center">
                          <span
                            className={`px-3 py-1 rounded-full text-sm font-medium ${
                              order.status === 'completed'
                                ? 'bg-green-100 text-green-800 dark:bg-green-800/30 dark:text-green-300'
                                : order.status === 'preparing'
                                ? 'bg-yellow-100 text-yellow-800 dark:bg-yellow-800/30 dark:text-yellow-300'
                                : 'bg-blue-100 text-blue-800 dark:bg-blue-800/30 dark:text-blue-300'
                            }`}
                          >
                            {order.status.charAt(0).toUpperCase() + order.status.slice(1)}
                          </span>
                        </div>
                      </div>
                      <div className="text-right mt-4 md:mt-0">
                        <p className="text-2xl font-bold text-primary">${order.total.toFixed(2)}</p>
                      </div>
                    </div>

                    <div className="border-t dark:border-gray-700 pt-4">
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-3">Order Items:</h4>
                      <div className="space-y-2">
                        {order.items.map((item, index) => (
                          <div key={index} className="flex justify-between items-center">
                            <div className="flex-1">
                              <span className="text-gray-900 dark:text-white">{item.name}</span>
                              <span className="text-gray-500 dark:text-gray-400 ml-2">×{item.quantity}</span>
                            </div>
                            <span className="text-gray-900 dark:text-white font-medium">
                              ${(item.price * item.quantity).toFixed(2)}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default Orders;
