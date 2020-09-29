import React, { FC } from 'react';
import { useHistory } from 'react-router-dom';

import CardList from '../../components/CardList';
import { useAppState } from '../../components/AppProvider';

import './home.scss';

const Home: FC = () => {
  const history = useHistory();
  const [{ shows: showsState }] = useAppState();
  const { searched, loading } = showsState;

  const handleCardClick = (id: number): void => {
    history.push(`/shows/${id}`);
  };

  return (
    <div className="home">
      {searched.length === 0 && !loading.search && (
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
            title=""
            items={showsState?.favourites}
            onCardClicked={handleCardClick}
          />
        </>
      )}
    </div>
  );
};

export default Home;
