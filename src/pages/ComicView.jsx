import React from 'react';
import { useParams } from 'react-router-dom';
import './ComicView.css'; // Custom styling

const comics = [
  { id: 1, title: 'The Brave Hero', genre: 'Action', description: 'An epic adventure of a hero fighting for justice.', image: 'https://via.placeholder.com/500x750' },
  { id: 2, title: 'Galaxy Tales', genre: 'Sci-Fi', description: 'A thrilling journey through the stars, where space adventures never end.', image: 'https://via.placeholder.com/500x750' },
  { id: 3, title: 'The Lost City', genre: 'Adventure', description: 'A group of explorers uncover the mysteries of a hidden city.', image: 'https://via.placeholder.com/500x750' },
  { id: 4, title: 'Mystery Mansion', genre: 'Mystery', description: 'Unravel the secrets hidden within an old mansion.', image: 'https://via.placeholder.com/500x750' },
  { id: 5, title: 'Dragon Slayer', genre: 'Fantasy', description: 'A brave knight sets out to defeat a terrifying dragon.', image: 'https://via.placeholder.com/500x750' }
];

function ComicView() {
  const { id } = useParams();
  const comic = comics.find(comic => comic.id === parseInt(id));

  if (!comic) {
    return <h2>Comic not found!</h2>;
  }

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-6">
          <img src={comic.image} alt={comic.title} className="img-fluid comic-image" />
        </div>
        <div className="col-md-6">
          <h2>{comic.title}</h2>
          <p className="text-muted">{comic.genre}</p>
          <p>{comic.description}</p>
          <button className="btn btn-warning animate__animated animate__fadeInUp">Get Your Copy</button>
        </div>
      </div>
    </div>
  );
}

export default ComicView;
