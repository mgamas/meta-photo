import React from 'react';
import '../styles/PhotoCard.css';

interface PhotoCardProps {
  photo: any;
}

const PhotoCard: React.FC<PhotoCardProps> = ({ photo }) => {
  return (
    <div className="photo-card">
      <img src={photo.url} alt={photo.title} className="photo-image" />
      <h2 className="photo-title">{photo.title}</h2>
      <p className="album-title">Album: {photo.album.title}</p>
      <p className="user-email">User: {photo.album.user.name} - {photo.album.user.email}</p>
    </div>
  );
};

export default PhotoCard;
