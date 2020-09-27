import React from 'react';
import { useHistory } from 'react-router-dom';

import CardList from '../../components/CardList';
import { useAppState } from '../../components/AppProvider';

import './home.scss';

const Home = () => {
  const history = useHistory();
  const [{ shows: showsState }] = useAppState();

  const handleCardClick = (id: number): void => {
    history.push(`/shows/${id}`);
  };

  return (
    <div className="home">
      {showsState.searched.length === 0 ? (
        <>
          <CardList
            title="Most rated"
            items={showsState?.mostRated}
            onCardClicked={handleCardClick}
          />

          <CardList
            title="Most recent"
            items={showsState?.recent}
            onCardClicked={handleCardClick}
          />

          <CardList
            title="Favourites"
            items={showsState?.favourites}
            onCardClicked={handleCardClick}
          />
        </>
      ) : (
        <CardList
          orientation="vertical"
          items={showsState?.searched}
          onCardClicked={handleCardClick}
        />
      )}
    </div>
  );
};

export default Home;
