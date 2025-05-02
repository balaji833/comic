import React from 'react';
import ComicCard from '../components/ComicCard';

import hero from '../assets/the brave hero.jpg';
import galaxy from '../assets/galaxy.jpg';
import lost from '../assets/lost.jpg';
import house from '../assets/house.jpg';
import slayer from '../assets/sla.jpg';
import punch from '../assets/punch.jpg';
import zombie from '../assets/zombie.webp';
import cyber from '../assets/cyber1.jpg';
import time from '../assets/time.png';
import max from '../assets/max.jpg';
import banana from '../assets/banana.jpg';
import shadow from '../assets/sha.jpg';

const comics = [
  { id: 1, title: 'The Brave Hero', genre: 'Action', image: hero, description: 'An epic adventure of a hero fighting for justice.' },
  { id: 2, title: 'Galaxy Tales', genre: 'Sci-Fi', image: galaxy, description: 'A thrilling journey through the stars, where space adventures never end.' },
  { id: 3, title: 'The Lost City', genre: 'Adventure', image: lost, description: 'A group of explorers uncover the mysteries of a hidden city.' },
  { id: 4, title: 'Mystery Mansion', genre: 'Mystery', image: house, description: 'Unravel the secrets hidden within an old mansion.' },
  { id: 5, title: 'Dragon Slayer', genre: 'Fantasy', image: slayer, description: 'A brave knight sets out to defeat a terrifying dragon.' },
  { id: 6, title: 'Mega Punch Man', genre: 'Comedy', image: punch, description: 'A superhero who defeats villains with one punch—and lots of jokes.' },
  { id: 7, title: 'Zombie High', genre: 'Horror', image: zombie, description: 'Students fight zombies while trying to pass math exams.' },
  { id: 8, title: 'Cyber City', genre: 'Sci-Fi', image: cyber, description: 'A futuristic city controlled by AI—until the robots go rogue.' },
  { id: 9, title: 'Time Twisters', genre: 'Adventure', image: time, description: 'Teenagers with a broken time machine explore different eras.' },
  { id: 10, title: 'Kitty Crusaders', genre: 'Fantasy', image: max, description: 'Cats with swords, armor, and magical whiskers—need we say more?' },
  { id: 11, title: 'The Invisible Banana', genre: 'Comedy', image: banana, description: 'A banana that becomes invisible and causes total chaos in the kitchen.' },
  { id: 12, title: 'Shadow Circuit', genre: 'Thriller', image: shadow, description: 'A hacker is pulled into a web of espionage and neon-lit danger.' }
];

function Comics() {
  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4 text-primary">📚 All Comics</h2>
      <div className="row">
        {comics.map(comic => (
          <ComicCard key={comic.id} comic={comic} />
        ))}
      </div>
    </div>
  );
}

export default Comics;
