import axios from 'axios';

const fetcher = async (url: string, token : string) => {
  try {
    const response = await axios.get(url, {
      headers: {
        'Authorization' : `Bearer ${token}`,
        // Add any other required headers here
      },
    });
    return response.data;
  } catch (error) {
    // Handle any error that might occur during the request
    throw new Error('Failed to fetch data');
  }
};

export default fetcher;
