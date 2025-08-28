import React, { useState } from 'react';
import { reservationsAPI } from '../services/api';
import { useAuth } from '../context/AuthContext';
import { Calendar, Clock, Users, MessageSquare } from 'lucide-react';
import LoadingSpinner from '../components/LoadingSpinner';

const Reservations = () => {
  const { user, isAuthenticated } = useAuth();
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const [formData, setFormData] = useState({
    date: '',
    time: '',
    guests: 2,
    note: '',
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: name === 'guests' ? parseInt(value) : value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!isAuthenticated) {
      setError('Please sign in to make a reservation.');
      return;
    }

    try {
      setLoading(true);
      setError(null);

      const reservationData = {
        ...formData,
        userId: user?.id,
        customerName: user?.name,
        customerEmail: user?.email,
      };

      await reservationsAPI.create(reservationData);
      setSuccess(true);
      setFormData({ date: '', time: '', guests: 2, note: '' });
    } catch (err) {
      setError('Failed to create reservation. Please try again.');
      console.error('Error creating reservation:', err);
    } finally {
      setLoading(false);
    }
  };

  if (success) {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-8 flex items-center justify-center transition-colors duration-300">
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 max-w-md w-full mx-4 text-center transition-colors duration-300">
          <div className="text-green-500 text-6xl mb-4">✓</div>
          <h2 className="text-2xl font-heading font-bold text-gray-900 dark:text-white mb-4">
            Reservation Confirmed!
          </h2>
          <p className="text-gray-600 dark:text-gray-300 mb-6">
            Thank you for your reservation. We'll send you a confirmation email shortly.
          </p>
          <button
            onClick={() => setSuccess(false)}
            className="bg-primary text-white px-6 py-2 rounded-lg hover:bg-primary-dark transition-colors"
          >
            Make Another Reservation
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-8 transition-colors duration-300">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-heading font-bold text-gray-900 dark:text-white mb-4">
            Make a Reservation
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Reserve your table for an unforgettable dining experience
          </p>
        </div>

        {!isAuthenticated && (
          <div className="bg-yellow-50 dark:bg-yellow-900/40 border border-yellow-200 dark:border-yellow-700 rounded-lg p-4 mb-6 transition-colors duration-300">
            <p className="text-yellow-800 dark:text-yellow-200">
              Please{' '}
              <a href="/signin" className="text-primary underline">
                sign in
              </a>{' '}
              to make a reservation.
            </p>
          </div>
        )}

        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 transition-colors duration-300">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label
                  htmlFor="date"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                >
                  <Calendar className="h-4 w-4 inline mr-1" />
                  Date
                </label>
                <input
                  type="date"
                  id="date"
                  name="date"
                  value={formData.date}
                  onChange={handleChange}
                  min={new Date().toISOString().split('T')[0]}
                  required
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"
                />
              </div>

              <div>
                <label
                  htmlFor="time"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                >
                  <Clock className="h-4 w-4 inline mr-1" />
                  Time
                </label>
                <select
                  id="time"
                  name="time"
                  value={formData.time}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"
                >
                  <option value="">Select time</option>
                  <option value="17:00">5:00 PM</option>
                  <option value="17:30">5:30 PM</option>
                  <option value="18:00">6:00 PM</option>
                  <option value="18:30">6:30 PM</option>
                  <option value="19:00">7:00 PM</option>
                  <option value="19:30">7:30 PM</option>
                  <option value="20:00">8:00 PM</option>
                  <option value="20:30">8:30 PM</option>
                  <option value="21:00">9:00 PM</option>
                </select>
              </div>
            </div>

            <div>
              <label
                htmlFor="guests"
                className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
              >
                <Users className="h-4 w-4 inline mr-1" />
                Number of Guests
              </label>
              <select
                id="guests"
                name="guests"
                value={formData.guests}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"
              >
                {[1, 2, 3, 4, 5, 6, 7, 8].map(num => (
                  <option key={num} value={num}>
                    {num} {num === 1 ? 'Guest' : 'Guests'}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label
                htmlFor="note"
                className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
              >
                <MessageSquare className="h-4 w-4 inline mr-1" />
                Special Requests (Optional)
              </label>
              <textarea
                id="note"
                name="note"
                value={formData.note}
                onChange={handleChange}
                rows={4}
                placeholder="Any special dietary requirements, occasion details, or seating preferences..."
                className="w-full px-4 py-3 border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"
              />
            </div>

            {error && (
              <div className="text-red-600 dark:text-red-400 text-center bg-red-50 dark:bg-red-900/40 p-3 rounded-lg transition-colors">
                {error}
              </div>
            )}

            <button
              type="submit"
              disabled={loading || !isAuthenticated}
              className="w-full bg-primary text-white py-4 rounded-lg font-semibold hover:bg-primary-dark transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
            >
              {loading ? (
                <LoadingSpinner size="sm" />
              ) : (
                <>
                  <Calendar className="h-5 w-5 mr-2" />
                  Confirm Reservation
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Reservations;
