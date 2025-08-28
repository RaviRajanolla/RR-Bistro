import React, { useState, useEffect } from 'react';
import { reviewsAPI, menuAPI } from '../services/api';
import { useAuth } from '../context/AuthContext';
import LoadingSpinner from '../components/LoadingSpinner';
import { Star, MessageSquare, User } from 'lucide-react';

interface MenuItem {
  id: string;
  name: string;
}

interface Review {
  id: string;
  rating: number;
  comment: string;
  customerName: string;
  createdAt: string;
}

const Reviews = () => {
  const { user, isAuthenticated } = useAuth();
  const [menuItems, setMenuItems] = useState<MenuItem[]>([]);
  const [reviews, setReviews] = useState<Review[]>([]);
  const [selectedItemId, setSelectedItemId] = useState('');
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const [formData, setFormData] = useState({
    itemId: '',
    rating: 5,
    comment: '',
  });

  useEffect(() => {
    fetchMenuItems();
  }, []);

  useEffect(() => {
    if (selectedItemId) {
      fetchReviews(selectedItemId);
    }
  }, [selectedItemId]);

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

  const fetchReviews = async (itemId: string) => {
    try {
      const response = await reviewsAPI.getItemReviews(itemId);
      // sort latest first
      const sorted = response.data.sort(
        (a: Review, b: Review) =>
          new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
      );
      setReviews(sorted);
    } catch (err) {
      console.error('Error fetching reviews:', err);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!isAuthenticated) {
      setError('Please sign in to submit a review.');
      return;
    }

    try {
      setSubmitting(true);
      setError(null);

      const reviewData = {
        ...formData,
        userId: user?.id,
        customerName: user?.name,
      };

      await reviewsAPI.create(reviewData);
      setFormData({ itemId: '', rating: 5, comment: '' });

      if (formData.itemId) {
        fetchReviews(formData.itemId);
      }

      alert('Review submitted successfully!');
    } catch (err) {
      setError('Failed to submit review. Please try again.');
      console.error('Error submitting review:', err);
    } finally {
      setSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: name === 'rating' ? parseInt(value) : value,
    }));
  };

  const renderStars = (
    rating: number,
    interactive = false,
    onRate?: (rating: number) => void
  ) => {
    return (
      <div className="flex">
        {[1, 2, 3, 4, 5].map((star) => (
          <Star
            key={star}
            className={`h-5 w-5 ${
              star <= rating
                ? 'text-yellow-400 fill-current'
                : 'text-gray-300 dark:text-gray-600'
            } ${
              interactive ? 'cursor-pointer hover:text-yellow-400' : ''
            }`}
            onClick={interactive && onRate ? () => onRate(star) : undefined}
          />
        ))}
      </div>
    );
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <LoadingSpinner size="lg" />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-8 transition-colors">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-heading font-bold text-gray-900 dark:text-white mb-4">
            Reviews & Ratings
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400">
            Share your experience and read what others say about our dishes
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Submit Review Form */}
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 transition-colors">
            <h2 className="text-2xl font-heading font-semibold mb-6 text-gray-900 dark:text-white">
              Write a Review
            </h2>

            {!isAuthenticated && (
              <div className="bg-yellow-50 dark:bg-yellow-900 border border-yellow-200 dark:border-yellow-700 rounded-lg p-4 mb-6">
                <p className="text-yellow-800 dark:text-yellow-200">
                  Please{' '}
                  <a href="/signin" className="text-primary underline">
                    sign in
                  </a>{' '}
                  to submit a review.
                </p>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="itemId"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                >
                  Select Menu Item
                </label>
                <select
                  id="itemId"
                  name="itemId"
                  value={formData.itemId}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 
                             rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent 
                             bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100"
                >
                  <option value="">Choose a menu item</option>
                  {menuItems.map((item) => (
                    <option key={item.id} value={item.id}>
                      {item.name}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Rating
                </label>
                {renderStars(formData.rating, true, (rating) =>
                  setFormData((prev) => ({ ...prev, rating }))
                )}
              </div>

              <div>
                <label
                  htmlFor="comment"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                >
                  Your Review
                </label>
                <textarea
                  id="comment"
                  name="comment"
                  value={formData.comment}
                  onChange={handleChange}
                  rows={4}
                  required
                  placeholder="Share your experience with this dish..."
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 
                             rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent 
                             bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100"
                />
              </div>

              {error && (
                <div className="text-red-600 dark:text-red-400 text-center bg-red-50 dark:bg-red-900 p-3 rounded-lg">
                  {error}
                </div>
              )}

              <button
                type="submit"
                disabled={submitting || !isAuthenticated}
                className="w-full bg-primary text-white py-3 rounded-lg font-semibold 
                           hover:bg-primary-dark transition-colors disabled:opacity-50 
                           disabled:cursor-not-allowed flex items-center justify-center"
              >
                {submitting ? (
                  <LoadingSpinner size="sm" />
                ) : (
                  <>
                    <MessageSquare className="h-5 w-5 mr-2" />
                    Submit Review
                  </>
                )}
              </button>
            </form>
          </div>

          {/* View Reviews */}
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 transition-colors">
            <h2 className="text-2xl font-heading font-semibold mb-6 text-gray-900 dark:text-white">
              Recent Reviews
            </h2>

            <div className="mb-6">
              <label
                htmlFor="reviewItemSelect"
                className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
              >
                View Reviews For
              </label>
              <select
                id="reviewItemSelect"
                value={selectedItemId}
                onChange={(e) => setSelectedItemId(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600
                           bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100
                           rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
              >
                <option value="">Select a menu item</option>
                {menuItems.map((item) => (
                  <option key={item.id} value={item.id}>
                    {item.name}
                  </option>
                ))}
              </select>
            </div>

            {selectedItemId ? (
              reviews.length === 0 ? (
                <div className="text-center py-8">
                  <MessageSquare className="h-12 w-12 text-gray-400 dark:text-gray-600 mx-auto mb-4" />
                  <p className="text-gray-600 dark:text-gray-400">
                    No reviews yet for this item.
                  </p>
                  <p className="text-gray-500 dark:text-gray-500 text-sm">
                    Be the first to write a review!
                  </p>
                </div>
              ) : (
                <div className="space-y-6 max-h-[28rem] overflow-y-auto pr-2">
                  {reviews.map((review) => (
                    <div
                      key={review.id}
                      className="border-b border-gray-200 dark:border-gray-700 pb-4 last:border-b-0"
                    >
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center">
                          <User className="h-4 w-4 text-gray-400 dark:text-gray-500 mr-2" />
                          <span className="font-medium text-gray-900 dark:text-gray-100">
                            {review.customerName}
                          </span>
                        </div>
                        {renderStars(review.rating)}
                      </div>
                      <p className="text-gray-700 dark:text-gray-300 mb-2">{review.comment}</p>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        {new Date(review.createdAt).toLocaleDateString()} •{' '}
                        {new Date(review.createdAt).toLocaleTimeString([], {
                          hour: '2-digit',
                          minute: '2-digit',
                        })}
                      </p>
                    </div>
                  ))}
                </div>
              )
            ) : (
              <div className="text-center py-8">
                <MessageSquare className="h-12 w-12 text-gray-400 dark:text-gray-600 mx-auto mb-4" />
                <p className="text-gray-600 dark:text-gray-400">
                  Select a menu item to view reviews
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reviews;
