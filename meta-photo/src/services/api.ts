export const fetchPhotos = async (query: string = '') => {
    try {
      const response = await fetch(`https://meta-photo-api-oagy5xzvxa-vp.a.run.app/externalapi/photos${query}`);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      return response.json();
    } catch (error) {
      console.error('Error fetching photos:', error);
      return [];
    }
  };
  