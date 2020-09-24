import React, { FC, useState } from 'react';
import cn from 'classnames';

import ArrowLeftIcon from '../../assets/arrow-left.svg';

import './genres-list.scss';

interface GenresListProps {
  genres: string[];
}

const GenresList: FC<GenresListProps> = ({ genres }) => {
  const [activeGenre, setActiveGenre] = useState<string>('');

  const handleActiveGenre = (genre: string): void => {
    setActiveGenre(genre === activeGenre ? '' : genre);
  };

  return (
    <div className="genres-list" data-testid="genres-list">
      <div className="arrow-left">
        <img src={ArrowLeftIcon} alt="arrow left" />
      </div>

      <ul>
        {genres.map(genre => (
          <li
            className={cn({ 'genre-active': activeGenre === genre })}
            key={genre}
            onClick={() => handleActiveGenre(genre)}
          >
            {genre}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default GenresList;
