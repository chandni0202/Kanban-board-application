const API_URL = 'https://api.quicksell.co/v1/internal/frontend-assignment';

const fetchData = async () => {
  try {
    const response = await fetch(API_URL);
    return await response.json();
  } catch (error) {
    console.error('Failed to fetch data:', error);
  }
};

export default fetchData;
