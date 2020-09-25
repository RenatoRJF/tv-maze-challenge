import React, { useState } from 'react';
import FavouriteButton from './components/FavouriteButton';

import Header from './components/Header';
import Modal from './components/Modal';
import Rating from './components/Rating';

import './styles/app.scss';

const App = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  return (
    <main>
      <Header />

      <FavouriteButton text="Add to favourites" isFavourited />

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
