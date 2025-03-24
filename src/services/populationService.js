import axios from 'axios';

const API_URL = 'https://countriesnow.space/api/v0.1/countries/population/cities';

export const getCityPopulation = async (city) => {
  try {
    const response = await axios.post(API_URL, { city });
    if (response.data && response.data.data) {
      return response.data.data;
    }
    throw new Error('No data found for this city');
  } catch (error) {
    throw new Error(error.response?.data?.msg || 'Error fetching data');
  }
}; 