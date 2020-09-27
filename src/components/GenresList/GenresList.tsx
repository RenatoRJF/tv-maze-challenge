import React, { FC, useState } from 'react';
import cn from 'classnames';

import ArrowLeftIcon from '../../assets/arrow-left.svg';

import './genres-list.scss';

interface GenresListProps {
  /* Specifies the list of genres */
  genres: string[];
  /* Function fired when a genre is selected */
  onSelect?: (genre: string) => void;
  /* Specificies the selected genre */
  selected?: string;
}

const GenresList: FC<GenresListProps> = ({ genres, onSelect, selected }) => (
  <div className="genres-list" data-testid="genres-list">
    <div className="arrow-left">
      <img src={ArrowLeftIcon} alt="arrow left" />
    </div>

    <ul>
      {genres.map(genre => (
        <li
          className={cn({ 'genre-active': selected === genre })}
          key={genre}
          onClick={() => {
            if (onSelect) {
              onSelect(genre);
            }
          }}
        >
          <span>{genre}</span>
        </li>
      ))}
    </ul>
  </div>
);

export default GenresList;
