import React, { useState } from 'react';

import CardList from './components/CardList';
import Header from './components/Header';
import Modal from './components/Modal';
import Routes from './routes';

import './styles/app.scss';

const App = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  return (
    <main>
      <Header />

      <Routes />

      <Modal
        open={isModalOpen}
        title="Action"
        onClose={() => setIsModalOpen(false)}
      >
        <CardList items={[]} />
      </Modal>
    </main>
  );
};

export default App;
