export const fetchPhotos = async (query: string = '') => {
    try {
      const response = await fetch(`https://tonal-depth-427415-s0.uc.r.appspot.com/externalapi/photos${query}`);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      return response.json();
    } catch (error) {
      console.error('Error fetching photos:', error);
      return [];
    }
  };
  