const API_BASE_URL = 'http://localhost:5000/api';

// Fetch all destinations with optional category/search filters
export const fetchDestinationsFromAPI = async (category = 'All', search = '') => {
  try {
    const params = new URLSearchParams();
    if (category && category !== 'All') params.append('category', category);
    if (search) params.append('search', search);

    const res = await fetch(`${API_BASE_URL}/destinations?${params.toString()}`);
    if (!res.ok) throw new Error('API server returned error');
    const data = await res.json();
    return data.data;
  } catch (err) {
    console.warn('⚠️ Backend API offline or unreachable, using local data fallback:', err.message);
    return null;
  }
};

// Post a new tour booking inquiry to backend database
export const createBookingInAPI = async (bookingData) => {
  try {
    const res = await fetch(`${API_BASE_URL}/bookings`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(bookingData)
    });
    if (!res.ok) throw new Error('Failed to post booking');
    return await res.json();
  } catch (err) {
    console.warn('⚠️ API submit warning:', err.message);
    return { success: true, offline: true };
  }
};

// Subscribe email to newsletter database
export const subscribeNewsletterInAPI = async (email) => {
  try {
    const res = await fetch(`${API_BASE_URL}/newsletter`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email })
    });
    return await res.json();
  } catch (err) {
    return { success: true, offline: true };
  }
};
