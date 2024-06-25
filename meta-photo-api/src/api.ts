import axios from 'axios';

interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
      lat: string;
      lng: string;
    };
  };
  phone: string;
  website: string;
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
}

interface Album {
  id: number;
  title: string;
  userId: number;
  user: User;
}

interface Photo {
  id: number;
  title: string;
  url: string;
  thumbnailUrl: string;
  albumId: number;
  album: Album;
}

interface FilterParams {
  title?: string;
  albumTitle?: string;
  email?: string;
  limit: number;
  offset: number;
}

export async function getEnrichedPhoto(id: number): Promise<Photo> {
  const photo = await axios.get(`https://jsonplaceholder.typicode.com/photos/${id}`).then(res => res.data as Photo);
  const album = await axios.get(`https://jsonplaceholder.typicode.com/albums/${photo.albumId}`).then(res => res.data as Album);
  const user = await axios.get(`https://jsonplaceholder.typicode.com/users/${album.userId}`).then(res => res.data as User);

  return {
    ...photo,
    album: {
      ...album,
      user
    }
  };
}

export async function getFilteredPhotos({ title, albumTitle, email, limit, offset }: FilterParams): Promise<Photo[]> {
  const photos = await axios.get('https://jsonplaceholder.typicode.com/photos').then(res => res.data as Photo[]);
  const albums = await axios.get('https://jsonplaceholder.typicode.com/albums').then(res => res.data as Album[]);
  const users = await axios.get('https://jsonplaceholder.typicode.com/users').then(res => res.data as User[]);

  let filteredPhotos = photos;

  if (title) {
    filteredPhotos = filteredPhotos.filter(photo => photo.title.includes(title));
  }

  if (albumTitle) {
    const filteredAlbums = albums.filter(album => album.title.includes(albumTitle));
    filteredPhotos = filteredPhotos.filter(photo => filteredAlbums.some(album => album.id === photo.albumId));
  }

  if (email) {
    const filteredUsers = users.filter(user => user.email === email);
    const filteredAlbums = albums.filter(album => filteredUsers.some(user => user.id === album.userId));
    filteredPhotos = filteredPhotos.filter(photo => filteredAlbums.some(album => album.id === photo.albumId));
  }

  const start = offset;
  const end = offset + limit;
  const paginatedPhotos = filteredPhotos.slice(start, end);

  const enrichedPhotos = await Promise.all(paginatedPhotos.map(async (photo: Photo) => {
    const album = albums.find(album => album.id === photo.albumId) as Album;
    const user = users.find(user => user.id === album.userId) as User;
    return {
      ...photo,
      album: {
        ...album,
        user
      }
    };
  }));

  return enrichedPhotos;
}
