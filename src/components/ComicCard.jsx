import React from 'react';
import { Link } from 'react-router-dom';
import './ComicCard.css'; // custom styles

function ComicCard({ comic }) {
  return (
    <div className="col-md-4 mb-4">
      <div className="card comic-card h-100 shadow-sm">
        <img src={comic.image} className="card-img-top comic-image" alt={comic.title} />
        <div className="card-body text-center">
          <h5 className="card-title">{comic.title}</h5>
          <p className="card-text text-muted">{comic.genre}</p>
          <p className="card-text comic-description">{comic.description}</p>
          <Link to={`/comic/${comic.id}`} className="btn btn-warning">
            Read More
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ComicCard;
