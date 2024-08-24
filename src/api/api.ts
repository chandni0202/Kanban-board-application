// import mockData from  './mockData.json'
// Please check mockData.json for json structure;
const API_URL = 'https://api.quicksell.co/v1/internal/frontend-assignment'; 

const fetchData = async () => {
  try {
    const response = await fetch(API_URL);
    return await response.json();
  } catch (error) {
    console.error('Failed to fetch data:', error);
  }
  // return mockData;
};

export default fetchData;
