import React, { useEffect } from 'react';

import CardList from '../../components/CardList';
import { useAppState } from '../../components/AppProvider';

import LoadShowsService from '../../services/LoadShowsService';
import formatShowData from '../../utils/formatShowData';
import { SHOWS_TYPES } from '../../store/shows/shows.actions';

import './home.scss';
import { Show } from '../../types/shows';

const Home = () => {
  const [{ shows: showsState }, dispatch] = useAppState();
  const loadShowsService = new LoadShowsService();

  useEffect(() => {
    if (showsState?.mostRated && showsState?.mostRated.length === 0) {
      loadShowsService.execute(1).then(({ data }) => {
        const shows = data.map((show: any) => formatShowData(show));

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

  return (
    <div className="home">
      <CardList title="Most popular" items={showsState?.mostRated} />

      <CardList title="Recent" items={showsState?.recent} />

      <CardList title="Favourites" items={showsState?.favourites} />
    </div>
  );
};

export default Home;
