import axios from 'axios';
axios.defaults.baseURL = 'https://pixabay.com/api/';
const API_KEY = '44993602-d27a6bb35adbaddc31f5b3355';

export const getImages = async (query, page) => {
  try {
    const response = await axios.get(
      `?q=${query}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`
    );
    console.log('Response from Pixabay API:', response.data);
    return normalizeImages(response.data.hits);
  } catch (error) {
    console.log('Error fetching images from Pixabay', error);
    throw error;
  }
};

const normalizeImages = images => {
  const uniqueImages = new Map();
  images.forEach(image => {
    if (!uniqueImages.has(image.id)) {
      uniqueImages.set(image.id, image);
    }
  });
  return Array.from(uniqueImages.values());
};

