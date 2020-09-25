import React, { useState } from 'react';

import FavouriteButton from './components/FavouriteButton';
import Header from './components/Header';
import Modal from "./components/Modal";

import './styles/app.scss';

const App = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  return (
    <main>
      <Header />

      <FavouriteButton onClick={() => { console.log('test') }} text="Add to Favourites" isFavourited={false} />

      <Modal open={isModalOpen} title="Action" onClose={() => setIsModalOpen(false)}>
        Modal content
      </Modal>
    </main>
  );
};

export default App;
