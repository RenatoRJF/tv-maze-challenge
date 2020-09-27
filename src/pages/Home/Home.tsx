import React from 'react';

import CardList from '../../components/CardList';
import { useAppState } from '../../components/AppProvider';

import './home.scss';

const Home = () => {
  const [{ shows: showsState }] = useAppState();

  return (
    <div className="home">
      <CardList title="Most popular" items={showsState?.mostRated} />

      <CardList title="Recent" items={showsState?.recent} />

      <CardList title="Favourites" items={showsState?.favourites} />
    </div>
  );
};

export default Home;
