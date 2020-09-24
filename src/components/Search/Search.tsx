import React, { FC, FormEvent, useRef, useState } from 'react';
import cn from 'classnames';

import searchIcon from '../../assets/search.svg';
import closeIcon from '../../assets/close.svg';

import './search.scss';

interface SearchProps {
  /* Defines own classes to the search component */
  className?: string;
  /* Function fired when inputs value change */
  onSearch?: (value: string) => void;
}

const Search: FC<SearchProps> = ({ className, onSearch }) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [isActive, setIsActive] = useState<boolean>(false);
  const classes = cn('search', className, {
    active: isActive,
  });

  const handleActivateSearch = (): void => {
    setIsActive(true);

    if (inputRef?.current) {
      inputRef.current.focus();
    }
  };

  const handleSearch = (e: FormEvent<HTMLInputElement>): void => {
    if (onSearch) {
      onSearch(e.currentTarget.value);
    }
  };

  return (
    <div className={classes} data-testid="search">
      <img src={searchIcon} alt="search" onClick={handleActivateSearch} />

      <input ref={inputRef} placeholder="Search here" onChange={handleSearch} />

      <img src={closeIcon} alt="close" onClick={() => setIsActive(false)} />
    </div>
  );
};

export default Search;
