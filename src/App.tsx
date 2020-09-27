import React, { useEffect, useState } from 'react';

import CardList from './components/CardList';
import Header from './components/Header';
import Modal from './components/Modal';
import Routes from './routes';

import { useAppState } from './components/AppProvider';
import LoadShowsService from './services/LoadShowsService';
import formatShowData from './utils/formatShowData';
import { SHOWS_TYPES } from './store/shows/shows.actions';
import { Show } from './types/shows';

import './styles/app.scss';

const App = () => {
  const [{ shows: showsState }, dispatch] = useAppState();
  const [isModalOpen, setIsModalOpen] = useState<boolean>(
    Boolean(showsState?.selectedGenre),
  );
  const loadShowsService = new LoadShowsService();

  useEffect(() => {
    const { allShows, currentPage } = showsState;

    if (allShows && allShows.length === 0) {
      loadShowsService.execute(currentPage).then(({ data }) => {
        const shows = data.map((show: any) => formatShowData(show));

        dispatch({
          type: SHOWS_TYPES.LOAD_SHOWS,
          payload: shows,
        });

        dispatch({
          type: SHOWS_TYPES.LOAD_MOST_RATED,
          payload: shows.sort(
            (a: Show, b: Show) => b?.rating.average - a?.rating.average,
          ),
        });

        dispatch({
          type: SHOWS_TYPES.LOAD_RECENT,
          payload: shows.sort(
            (a: Show, b: Show) =>
              new Date(b.year).getTime() - new Date(a.year).getTime(),
          ),
        });
      });
    }
  }, []);

  useEffect(() => {
    const { selectedGenre, allShows } = showsState;
    const isGenreSelected = Boolean(selectedGenre);

    setIsModalOpen(isGenreSelected);

    if (isGenreSelected) {
      dispatch({
        type: SHOWS_TYPES.LOAD_BY_GENRE,
        payload: allShows.filter((show: Show) =>
          show.genres.includes(selectedGenre),
        ),
      });
    }
  }, [showsState.selectedGenre]);

  return (
    <Routes>
      <Header />

      <Modal
        open={isModalOpen}
        title={showsState.selectedGenre}
        onClose={() => setIsModalOpen(false)}
      >
        <CardList items={showsState?.showsByGenre || []} />
      </Modal>
    </Routes>
  );
};

export default App;
