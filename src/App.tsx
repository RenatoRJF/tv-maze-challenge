import React, { useEffect, useState } from 'react';

import CardList from './components/CardList';
import Header from './components/Header';
import Modal from './components/Modal';
import Routes from './routes';

import { useAppState } from './components/AppProvider';

import './styles/app.scss';

const App = () => {
  const [{ shows: showsState }, dispatch] = useAppState();
  const [isModalOpen, setIsModalOpen] = useState<boolean>(
    Boolean(showsState?.selectedGenre),
  );

  useEffect(() => {
    setIsModalOpen(Boolean(showsState?.selectedGenre));
  }, [showsState.selectedGenre]);

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
