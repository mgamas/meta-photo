export const fetchPhotos = async (query: string = '') => {
    try {
      const response = await fetch(`http://localhost:3000/externalapi/photos${query}`);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      return response.json();
    } catch (error) {
      console.error('Error fetching photos:', error);
      return [];
    }
  };
  