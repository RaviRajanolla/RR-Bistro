import React, { useState, useEffect } from 'react';
import { menuAPI } from '../services/api';
import { useAuth } from '../context/AuthContext';
import LoadingSpinner from '../components/LoadingSpinner';
import { Plus, Trash2 } from 'lucide-react';

interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  category: string;
  subcategory?: string;
  imageUrl?: string;
}

const Admin = () => {
  const { user, isAuthenticated } = useAuth();
  const [menuItems, setMenuItems] = useState<MenuItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [showAddForm, setShowAddForm] = useState(false);

  const [formData, setFormData] = useState({
    name: '',
    description: '',
    price: 0,
    category: 'food',
    subcategory: '',
    imageUrl: '',
    menuId: 1,
  });

  useEffect(() => {
    if (isAuthenticated) {
      fetchMenuItems();
    }
  }, [isAuthenticated]);

  const fetchMenuItems = async () => {
    try {
      setLoading(true);
      const response = await menuAPI.getAllItems();
      setMenuItems(response.data);
    } catch (err) {
      setError('Failed to fetch menu items.');
      console.error('Error fetching menu items:', err);
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      setSubmitting(true);
      setError(null);
      await menuAPI.addItem(formData);
      setFormData({
        name: '',
        description: '',
        price: 0,
        category: 'food',
        subcategory: '',
        imageUrl: '',
        menuId: 1,
      });
      setShowAddForm(false);
      fetchMenuItems();
      alert('Menu item added successfully!');
    } catch (err) {
      setError('Failed to add menu item. Please try again.');
      console.error('Error adding menu item:', err);
    } finally {
      setSubmitting(false);
    }
  };

  const handleDelete = async (id: string, name: string) => {
    if (!confirm(`Are you sure you want to delete "${name}"?`)) return;
    try {
      await menuAPI.deleteItem(id);
      fetchMenuItems();
      alert('Menu item deleted successfully!');
    } catch (err) {
      setError('Failed to delete menu item. Please try again.');
      console.error('Error deleting menu item:', err);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData(prev => {
      if (name === 'category') {
        return {
          ...prev,
          category: value,
          menuId: value === 'food' ? 1 : 2,
          subcategory: '',
        };
      }
      return {
        ...prev,
        [name]: name === 'price' ? parseFloat(value) || 0 : value,
      };
    });
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-darkBackground py-8 flex items-center justify-center">
        <div className="text-center">
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            Please sign in to access the admin panel.
          </p>
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

  if (user?.role !== 'admin') {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-darkBackground py-8 flex items-center justify-center">
        <div className="text-center">
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            Access denied. Admin privileges required.
          </p>
          <a
            href="/"
            className="bg-primary text-white px-6 py-2 rounded-lg hover:bg-primary-dark transition-colors"
          >
            Go Home
          </a>
        </div>
      </div>
    );
  }

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center dark:bg-darkBackground">
        <LoadingSpinner size="lg" />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-darkBackground py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-heading font-bold text-gray-900 dark:text-darkText mb-4">
            Admin Panel
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Manage menu items and restaurant content
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 text-center">
            <h3 className="text-2xl font-bold text-primary">{menuItems.length}</h3>
            <p className="text-gray-600 dark:text-gray-300">Total Menu Items</p>
          </div>
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 text-center">
            <h3 className="text-2xl font-bold text-primary">
              {new Set(menuItems.map(item => item.category)).size}
            </h3>
            <p className="text-gray-600 dark:text-gray-300">Categories</p>
          </div>
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 text-center">
            <h3 className="text-2xl font-bold text-primary">
              $
              {menuItems.length > 0
                ? (menuItems.reduce((sum, item) => sum + item.price, 0) / menuItems.length).toFixed(2)
                : '0.00'}
            </h3>
            <p className="text-gray-600 dark:text-gray-300">Average Price</p>
          </div>
        </div>

        {/* Add Menu Item */}
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 mb-8">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-heading font-semibold dark:text-darkText">
              Menu Management
            </h2>
            <button
              onClick={() => setShowAddForm(!showAddForm)}
              className="bg-primary text-white px-4 py-2 rounded-lg hover:bg-primary-dark transition-colors flex items-center"
            >
              <Plus className="h-4 w-4 mr-2" /> Add New Item
            </button>
          </div>

          {showAddForm && (
            <form
              onSubmit={handleSubmit}
              className="grid grid-cols-1 md:grid-cols-3 gap-6 border-t pt-6 dark:border-gray-700"
            >
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-darkText rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                />
              </div>

              <div>
                <label htmlFor="price" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Price ($)
                </label>
                <input
                  type="number"
                  id="price"
                  name="price"
                  value={formData.price}
                  onChange={handleChange}
                  min="0"
                  step="0.01"
                  required
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-darkText rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                />
              </div>

              <div>
                <label htmlFor="category" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Main Category
                </label>
                <select
                  id="category"
                  name="category"
                  value={formData.category}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-darkText rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                >
                  <option value="food">Food Menu</option>
                  <option value="bar">Bar Menu</option>
                </select>
              </div>

              <div>
                <label htmlFor="subcategory" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Subcategory
                </label>
                <select
                  id="subcategory"
                  name="subcategory"
                  value={formData.subcategory || ''}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-darkText rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                >
                  <option value="">Select Subcategory</option>
                  {formData.category === 'food' ? (
                    <>
                      <option value="starters">Starters</option>
                      <option value="soups">Soups & Salads</option>
                      <option value="mains">Main Courses</option>
                      <option value="rice">Rice & Biryani</option>
                      <option value="breads">Breads</option>
                      <option value="desserts">Desserts</option>
                    </>
                  ) : (
                    <>
                      <option value="cocktails">Cocktails</option>
                      <option value="mocktails">Mocktails</option>
                      <option value="wines">Wines</option>
                      <option value="beers">Beers</option>
                      <option value="spirits">Spirits</option>
                      <option value="hot-beverages">Hot Beverages</option>
                      <option value="fresh-juices">Fresh Juices</option>
                    </>
                  )}
                </select>
              </div>

              <div>
                <label htmlFor="imageUrl" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Image URL (Optional)
                </label>
                <input
                  type="url"
                  id="imageUrl"
                  name="imageUrl"
                  value={formData.imageUrl}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-darkText rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                />
              </div>

              <div className="md:col-span-3">
                <label htmlFor="description" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Description
                </label>
                <textarea
                  id="description"
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  rows={3}
                  required
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-darkText rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                />
              </div>

              {error && (
                <div className="md:col-span-3 text-red-600 dark:text-red-400 text-center bg-red-50 dark:bg-red-900/30 p-3 rounded-lg">
                  {error}
                </div>
              )}

              <div className="md:col-span-3 flex gap-4">
                <button
                  type="submit"
                  disabled={submitting}
                  className="bg-primary text-white px-6 py-3 rounded-lg hover:bg-primary-dark transition-colors disabled:opacity-50 flex items-center"
                >
                  {submitting ? <LoadingSpinner size="sm" /> : 'Add Menu Item'}
                </button>
                <button
                  type="button"
                  onClick={() => setShowAddForm(false)}
                  className="bg-gray-300 dark:bg-gray-600 dark:text-darkText text-gray-700 px-6 py-3 rounded-lg hover:bg-gray-400 dark:hover:bg-gray-500 transition-colors"
                >
                  Cancel
                </button>
              </div>
            </form>
          )}
        </div>

        {/* Menu Items */}
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
          <h3 className="text-xl font-semibold mb-6 dark:text-darkText">Current Menu Items</h3>
          {menuItems.length === 0 ? (
            <div className="text-center py-8">
              <p className="text-gray-600 dark:text-gray-300">No menu items found.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {menuItems.map(item => (
                <div
                  key={item.id}
                  className="border border-gray-200 dark:border-gray-700 rounded-lg p-4 bg-white dark:bg-gray-700"
                >
                  {item.imageUrl ? (
                    <img
                      src={item.imageUrl}
                      alt={item.name}
                      className="w-full h-40 object-cover rounded-lg mb-3"
                      onError={(e) => {
                        e.currentTarget.src = '/placeholder-food.jpg';
                      }}
                    />
                  ) : (
                    <img
                      src="/placeholder-food.jpg"
                      alt="No image available"
                      className="w-full h-40 object-cover rounded-lg mb-3"
                    />
                  )}
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="font-semibold text-gray-900 dark:text-darkText">{item.name}</h4>
                    <button
                      onClick={() => handleDelete(item.id, item.name)}
                      className="text-red-600 hover:text-red-800 transition-colors"
                      title="Delete item"
                    >
                      <Trash2 className="h-4 w-4" />
                    </button>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300 text-sm mb-2 line-clamp-2">
                    {item.description}
                  </p>
                  <div className="flex justify-between items-center">
                    <div className="flex flex-col">
                      <span className="bg-primary/10 text-primary px-2 py-1 rounded text-xs font-medium capitalize mb-1">
                        {item.category}
                      </span>
                      {item.subcategory && (
                        <span className="bg-gray-100 dark:bg-gray-600 dark:text-darkText text-gray-600 px-2 py-1 rounded text-xs capitalize">
                          {item.subcategory}
                        </span>
                      )}
                    </div>
                    <span className="font-bold text-primary">${item.price.toFixed(2)}</span>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Admin;
