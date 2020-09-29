import React, { FC, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';

import CardList from './components/CardList';
import Header from './components/Header';
import Modal from './components/Modal';

import { useAppState } from './components/AppProvider';
import LoadShowsService from './services/LoadShowsService';
import formatShowData from './utils/formatShowData';
import { SHOWS_TYPES } from './store/shows/shows.actions';

import './styles/app.scss';
import { Show } from './types/shows';

const App: FC = () => {
  const history = useHistory();
  const [{ shows: showsState }, dispatch] = useAppState();
  const [showsByGenre, setShowsByGenre] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(
    Boolean(showsState?.selectedGenre),
  );
  const loadShowsService = new LoadShowsService();
  const { allShows, selectedGenre, searched, loading } = showsState;

  const loadShows = async () => {
    const shows = await loadShowsService
      .execute()
      .then(({ data }) => data.map((show: Show) => formatShowData(show)));

    dispatch({
      type: SHOWS_TYPES.LOAD_SHOWS,
      payload: shows,
    });

    return shows;
  };

  useEffect(() => {
    if (allShows && allShows.length === 0) {
      loadShows();
    }
  });

  useEffect(() => {
    const isGenreSelected = Boolean(selectedGenre);

    setIsModalOpen(isGenreSelected);

    if (isGenreSelected) {
      setShowsByGenre(
        allShows.filter((show: Show) => show.genres.includes(selectedGenre)),
      );
    }
  }, [selectedGenre, allShows]);

  const handleCloseModal = () => {
    setIsModalOpen(false);

    dispatch({
      type: SHOWS_TYPES.SET_GENRE,
      payload: '',
    });
  };

  const handleCardClick = (id: number) => {
    dispatch({
      type: SHOWS_TYPES.SET_GENRE,
      payload: '',
    });

    handleRedirect(id);
  };

  const handleRedirect = (id: number) => {
    history.push(`/shows/${id}`);
  };

  return (
    <>
      <Header />

      {searched.length === 0 && !loading.search ? (
        <Modal
          open={isModalOpen}
          title={showsState.selectedGenre}
          onClose={handleCloseModal}
        >
          <CardList items={showsByGenre} onCardClicked={handleCardClick} />
        </Modal>
      ) : (
        <CardList
          isLoading={showsState.loading.search}
          orientation="vertical"
          items={showsState?.searched}
          onCardClicked={handleRedirect}
        />
      )}
    </>
  );
};

export default App;
