import mockData from  './mockData.json'
// const API_URL = 'UR URL'; // Please check mockData.json for json structure;

const fetchData = async () => {
  // try {
  //   const response = await fetch(API_URL);
  //   return await response.json();
  // } catch (error) {
  //   console.error('Failed to fetch data:', error);
  // }
  return mockData;
};

export default fetchData;
