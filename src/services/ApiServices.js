import axios from 'axios';

const API_URL = 'https://data.cityofnewyork.us/resource/gkne-dk5s.json';

export const fetchTripData = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    console.error('Error fetching trip data:', error);
    return [];
  }
};
