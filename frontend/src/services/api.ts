import axios from 'axios';

const API_BASE_URL = 'http://localhost:8080/api';

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Auth API
export const authAPI = {
  register: (userData: { name: string; email: string; password: string }) =>
    api.post('/users/register', userData),
};

// Menu API
export const menuAPI = {
  getAllItems: () => api.get('/menu'),
  getItemsByCategory: (category: string) => api.get(`/menu/category/${category}`),
  getItemsBySubcategory: (subcategory: string) => api.get(`/menu/subcategory/${subcategory}`),
  addItem: (itemData: any) => api.post('/menu', itemData),
  deleteItem: (id: string) => api.delete(`/menu/${id}`),
};

// Reservations API
export const reservationsAPI = {
  create: (reservationData: any) => api.post('/reservations', reservationData),
};

// Orders API
export const ordersAPI = {
  getUserOrders: (userId: string) => api.get(`/orders/user/${userId}`),
};

// Reviews API
export const reviewsAPI = {
  create: (reviewData: any) => api.post('/reviews', reviewData),
  getItemReviews: (itemId: string) => api.get(`/reviews/item/${itemId}`),
};

export default api;
