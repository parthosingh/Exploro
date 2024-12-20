import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:5000/api', // Replace with your backend URL
});

export const fetchTrips = () => api.get('/trips');
export const fetchTripDetails = (id) => api.get(`/trips/${id}`);
export const loginUser = (data) => api.post('/auth/login', data);
export const signupUser = (data) => api.post('/auth/signup', data);
export const bookTrip = (data) => api.post('/bookings', data);

export default api;
