import React from 'react';
import CardList from '../../components/CardList';

import './home.scss';

const Home = () => (
  <div className="home">
    <CardList title="Most popular" items={[]} />

    <CardList title="Recent" items={[]} />

    <CardList title="Recent" items={[]} />
  </div>
);

export default Home;
