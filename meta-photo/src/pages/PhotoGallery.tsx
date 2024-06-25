import React, { useEffect, useState, useCallback } from 'react';
import { fetchPhotos } from '../services/api';
import PhotoCard from '../components/PhotoCard';
import '../styles/PhotoGallery.css';

const PhotoGallery: React.FC = () => {
  const [photos, setPhotos] = useState<any[]>([]);
  const [title, setTitle] = useState<string>('');
  const [albumTitle, setAlbumTitle] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [limit, setLimit] = useState<number>(25);
  const [offset, setOffset] = useState<number>(0);
  const [error, setError] = useState<string | null>(null);

  const buildQuery = useCallback(() => {
    let query = `?limit=${limit}&offset=${offset}`;
    if (title) query += `&title=${title}`;
    if (albumTitle) query += `&albumTitle=${albumTitle}`;
    if (email) query += `&email=${email}`;
    return query;
  }, [title, albumTitle, email, limit, offset]);

  useEffect(() => {
    const loadPhotos = async () => {
      try {
        const data = await fetchPhotos(buildQuery());
        setPhotos(data);
        setError(null);
      } catch (error) {
        setError('Failed to fetch photos.');
      }
    };
    loadPhotos();
  }, [buildQuery]);

  const currentPage = Math.floor(offset / limit) + 1;

  return (
    <div className="photo-gallery">
      <div className="filters">
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          type="text"
          placeholder="Album Title"
          value={albumTitle}
          onChange={(e) => setAlbumTitle(e.target.value)}
        />
        <input
          type="text"
          placeholder="User Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <select onChange={(e) => setLimit(Number(e.target.value))} value={limit}>
          <option value={10}>10</option>
          <option value={25}>25</option>
          <option value={50}>50</option>
          <option value={100}>100</option>
        </select>
      </div>
      <div className="pagination">
        <button onClick={() => setOffset(prev => Math.max(prev - limit, 0))}>Previous</button>
        <span>Page {currentPage}</span>
        <button onClick={() => setOffset(prev => prev + limit)}>Next</button>
        <div>Offset: {offset}</div>
      </div>
      {error && <div className="error">{error}</div>}
      <div className="photo-list">
        {photos.map(photo => <PhotoCard key={photo.id} photo={photo} />)}
      </div>
    </div>
  );
};

export default PhotoGallery;
