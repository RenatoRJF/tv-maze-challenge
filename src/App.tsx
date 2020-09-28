import React, { useEffect, useState } from 'react';
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

const App = () => {
  const history = useHistory();
  const [{ shows: showsState }, dispatch] = useAppState();
  const [showsByGenre, setShowsByGenre] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(
    Boolean(showsState?.selectedGenre),
  );
  const loadShowsService = new LoadShowsService();
  const { allShows, selectedGenre } = showsState;

  const loadShows = async () => {
    const shows = await loadShowsService
      .execute()
      .then(({ data }) => data.map((show: any) => formatShowData(show)));

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
  }, []);

  useEffect(() => {
    const isGenreSelected = Boolean(selectedGenre);

    setIsModalOpen(isGenreSelected);

    if (isGenreSelected) {
      setShowsByGenre(
        allShows.filter((show: Show) => show.genres.includes(selectedGenre)),
      );
    }
  }, [showsState.selectedGenre]);

  const handleCloseModal = () => {
    setIsModalOpen(false);

    dispatch({
      type: SHOWS_TYPES.SET_GENRE,
      payload: '',
    });
  };

  const handleCardClick = (id: number) => {
    history.push(`/shows/${id}`);

    dispatch({
      type: SHOWS_TYPES.SET_GENRE,
      payload: '',
    });
  };

  return (
    <>
      <Header />

      <Modal
        open={isModalOpen}
        title={showsState.selectedGenre}
        onClose={handleCloseModal}
      >
        <CardList items={showsByGenre} onCardClicked={handleCardClick} />
      </Modal>
    </>
  );
};

export default App;
