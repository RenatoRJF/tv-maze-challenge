import React, { FC, HTMLAttributes } from 'react';
import Heart from '../../assets/heart.svg';
import HeartShape from '../../assets/heart-shape.svg';

import './favourite-button.scss';

interface FavouriteButtonProps extends HTMLAttributes<HTMLButtonElement> {
  /* Function fired when button is clicked */
  onClick?: () => void;
  /* Defines the text of the input */
  text: string;
  /* If it is true, changes the state of the button */
  isFavourited: boolean;
}

const FavouriteButton: FC<FavouriteButtonProps> = ({ isFavourited, onClick, text }) => (
  <button onClick={onClick}>
    <img src={isFavourited ? HeartShape : Heart} alt="heart" />
    <span>{text}</span>
  </button>
)

export default FavouriteButton;
