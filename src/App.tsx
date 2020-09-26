import React, { useState } from 'react';
import CardList from './components/CardList';

import Header from './components/Header';
import Modal from './components/Modal';

import './styles/app.scss';

let id = 0;

const shows = [...Array(20)].reduce((acc, cur) => {
  id += 1;

  return [
    ...acc,
    {
      id: `${id}`,
      image:
        'http://static.tvmaze.com/uploads/images/medium_portrait/81/202627.jpg',
      average: 6.5,
      amount: 3,
    },
  ];
}, []);

const App = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  return (
    <main>
      <Header />

      <CardList title="Most popular" items={shows} />

      <CardList title="Recent" items={shows} />

      <CardList title="Recent" items={shows} />

      <Modal
        open={isModalOpen}
        title="Action"
        onClose={() => setIsModalOpen(false)}
      >
        Modal content
      </Modal>
    </main>
  );
};

export default App;
