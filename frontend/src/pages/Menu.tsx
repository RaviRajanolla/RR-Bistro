import React, { useState, useEffect } from 'react';
import { menuAPI } from '../services/api';
import { useCart } from '../context/CartContext';
import LoadingSpinner from '../components/LoadingSpinner';
import { ShoppingCart, Filter } from 'lucide-react';



interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  category: string;
  subcategory?: string;
  image?: string;
}

const Menu = () => {
  const [menuItems, setMenuItems] = useState<MenuItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedSubcategory, setSelectedSubcategory] = useState<string>('all');
  const { addToCart } = useCart();

  // Main categories
  const mainCategories = [
    { value: 'all', label: 'All Items' },
    { value: 'food', label: 'Food Menu' },
    { value: 'bar', label: 'Bar Menu' },
  ];

  // Food subcategories
  const foodSubcategories = [
    { value: 'all', label: 'All Food Items' },
    { value: 'starters', label: 'Starters' },
    { value: 'soups', label: 'Soups & Salads' },
    { value: 'mains', label: 'Main Courses' },
    { value: 'rice', label: 'Rice & Biryani' },
    { value: 'breads', label: 'Breads' },
    { value: 'desserts', label: 'Desserts' },
  ];

  // Bar subcategories
  const barSubcategories = [
    { value: 'all', label: 'All Beverages' },
    { value: 'cocktails', label: 'Cocktails' },
    { value: 'mocktails', label: 'Mocktails' },
    { value: 'wines', label: 'Wines' },
    { value: 'beers', label: 'Beers' },
    { value: 'spirits', label: 'Spirits' },
    { value: 'hot-beverages', label: 'Hot Beverages' },
    { value: 'fresh-juices', label: 'Fresh Juices' },
  ];

  useEffect(() => {
    fetchMenuItems();
  }, [selectedCategory, selectedSubcategory]);

  const fetchMenuItems = async () => {
    try {
      setLoading(true);
      setError(null);

      let response;

      if (selectedCategory === 'all') {
        response = await menuAPI.getAllItems();
      } else {
        response = await menuAPI.getItemsByCategory(selectedCategory);
      }

      let items: MenuItem[] = response.data.map((item: any) => ({
        id: item.id,
        name: item.name,
        description: item.description,
        price: item.price,
        category: item.category?.toLowerCase() || '',
        subcategory: item.subcategory?.toLowerCase() || '',
        image: item.imageUrl || '',
      }));

      if (selectedCategory !== 'all' && selectedSubcategory !== 'all') {
        items = items.filter(
          (item) => item.subcategory === selectedSubcategory.toLowerCase()
        );
      }

      setMenuItems(items);
    } catch (err) {
      setError('Failed to fetch menu items. Please try again later.');
      console.error('Error fetching menu:', err);
    } finally {
      setLoading(false);
    }
  };

  const getAvailableSubcategories = () => {
    if (selectedCategory === 'food') return foodSubcategories;
    if (selectedCategory === 'bar') return barSubcategories;
    return [];
  };

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
    setSelectedSubcategory('all');
  };

  const showSubcategoryFilter =
    selectedCategory === 'food' || selectedCategory === 'bar';

  const handleAddToCart = (item: MenuItem) => {
    addToCart(item);

    const button = document.activeElement as HTMLButtonElement;
    if (!button) return;
    const originalText = button.innerHTML;
    button.innerHTML =
      '<span class="flex items-center"><svg class="h-4 w-4 mr-1" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>Added!</span>';
    button.disabled = true;

    setTimeout(() => {
      button.innerHTML = originalText;
      button.disabled = false;
    }, 1500);
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background dark:bg-darkBackground">
        <LoadingSpinner size="lg" />
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background dark:bg-darkBackground">
        <div className="text-center">
          <p className="text-red-600 dark:text-red-400 mb-4">{error}</p>
          <button
            onClick={fetchMenuItems}
            className="bg-primary text-white px-6 py-2 rounded-lg hover:bg-primary-dark transition-colors"
          >
            Try Again
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background dark:bg-darkBackground py-8 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-heading font-bold text-gray-900 dark:text-darkText mb-4">
            Our Menu
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Discover our carefully crafted dishes made with the finest ingredients
          </p>
        </div>

        {/* Category Filter */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 mb-8 transition-colors">
          <div className="flex items-center mb-4">
            <Filter className="h-5 w-5 text-primary mr-2" />
            <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200">
              Filter Menu
            </h3>
          </div>

          {/* Main Category Filter */}
          <div className="mb-4">
            <h4 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Main Category
            </h4>
            <div className="flex flex-wrap gap-2">
              {mainCategories.map((category) => (
                <button
                  key={category.value}
                  onClick={() => handleCategoryChange(category.value)}
                  className={`px-4 py-2 rounded-full transition-colors ${
                    selectedCategory === category.value
                      ? 'bg-primary text-white'
                      : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600'
                  }`}
                >
                  {category.label}
                </button>
              ))}
            </div>
          </div>

          {/* Subcategory Filter */}
          {showSubcategoryFilter && (
            <div>
              <h4 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                {selectedCategory === 'food' ? 'Food Categories' : 'Beverage Categories'}
              </h4>
              <div className="flex flex-wrap gap-2">
                {getAvailableSubcategories().map((subcategory) => (
                  <button
                    key={subcategory.value}
                    onClick={() => setSelectedSubcategory(subcategory.value)}
                    className={`px-3 py-1 rounded-full text-sm transition-colors ${
                      selectedSubcategory === subcategory.value
                        ? 'bg-primary/20 text-primary border border-primary'
                        : 'bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
                    }`}
                  >
                    {subcategory.label}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Active Filters */}
        {(selectedCategory !== 'all' || selectedSubcategory !== 'all') && (
          <div className="bg-blue-50 dark:bg-blue-900/30 border border-blue-200 dark:border-blue-700 rounded-lg p-4 mb-6 transition-colors">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <span className="text-sm font-medium text-blue-800 dark:text-blue-300">
                  Active Filters:
                </span>
                {selectedCategory !== 'all' && (
                  <span className="bg-blue-100 dark:bg-blue-800 text-blue-800 dark:text-blue-200 px-2 py-1 rounded text-xs">
                    {mainCategories.find((c) => c.value === selectedCategory)?.label}
                  </span>
                )}
                {selectedSubcategory !== 'all' && (
                  <span className="bg-blue-100 dark:bg-blue-800 text-blue-800 dark:text-blue-200 px-2 py-1 rounded text-xs">
                    {getAvailableSubcategories().find((s) => s.value === selectedSubcategory)?.label}
                  </span>
                )}
              </div>
              <button
                onClick={() => {
                  setSelectedCategory('all');
                  setSelectedSubcategory('all');
                }}
                className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-200 text-sm font-medium"
              >
                Clear All
              </button>
            </div>
          </div>
        )}

        {/* Results Summary */}
        <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-4 mb-6 transition-colors">
          <p className="text-gray-700 dark:text-gray-300">
            <span className="font-semibold">{menuItems.length}</span> items found
            {selectedCategory !== 'all' && (
              <span>
                {' '}in {mainCategories.find((c) => c.value === selectedCategory)?.label}
              </span>
            )}
            {selectedSubcategory !== 'all' && (
              <span>
                {' '}→ {getAvailableSubcategories().find((s) => s.value === selectedSubcategory)?.label}
              </span>
            )}
          </p>
        </div>

        {/* Menu Items */}
        {menuItems.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-gray-600 dark:text-gray-300 text-lg">
              No menu items found for the selected filters.
            </p>
            <button
              onClick={() => {
                setSelectedCategory('all');
                setSelectedSubcategory('all');
              }}
              className="mt-4 text-primary hover:text-primary-dark font-medium"
            >
              View All Items
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {menuItems.map((item) => (
              <div
                key={item.id}
                className="bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group"
              >
                {/* Image */}
                <div className="h-50 md:h-65 lg:h-80 bg-gray-200 dark:bg-gray-700 flex items-center justify-center overflow-hidden">
                  {item.image ? (
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  ) : (
                    <div className="text-gray-400 dark:text-gray-500 text-center">
                      <div className="text-4xl mb-2">
                        {item.category === 'food' ? '🍽️' : '🍹'}
                      </div>
                      <p>No image available</p>
                    </div>
                  )}
                </div>

                <div className="p-6">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-heading font-semibold text-gray-900 dark:text-darkText">
                      {item.name}
                    </h3>
                    <span className="text-2xl font-bold text-primary">
                      ${item.price.toFixed(2)}
                    </span>
                  </div>

                  <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">
                    {item.description}
                  </p>

                  <div className="flex justify-between items-center">
                    <div className="flex flex-col">
                      <span className="bg-primary/10 text-primary px-2 py-1 rounded text-xs font-medium capitalize mb-1">
                        {item.category === 'food' ? 'Food' : 'Bar'}
                      </span>
                      {item.subcategory && (
                        <span className="bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 px-2 py-1 rounded text-xs capitalize">
                          {item.subcategory}
                        </span>
                      )}
                    </div>
                    <button
                      onClick={() => handleAddToCart(item)}
                      className="bg-primary text-white px-4 py-2 rounded-lg hover:bg-primary-dark transition-colors flex items-center"
                    >
                      <ShoppingCart className="h-4 w-4 mr-1" />
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Menu;
