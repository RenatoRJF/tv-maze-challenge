import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import parse from 'html-react-parser';

import FavouriteButton from '../../components/FavouriteButton';
import ShowCard from '../../components/ShowCard';
import Info from '../../components/Info';
import { useAppState } from '../../components/AppProvider';
import LoadShowByIdService from '../../services/LoadShowByIdService';

import ArrowLeft from '../../assets/arrow-left.svg';

import './show.scss';
import { Show } from '../../types/shows';
import formatShowData from '../../utils/formatShowData';

const Show = () => {
  const params = useParams<{ id: string }>();
  const loadShowByIdService = new LoadShowByIdService();
  const [show, setShow] = useState<Omit<Show, 'id'>>({
    name: '',
    year: '',
    summary: '',
    image: '',
    type: '',
    genres: [],
    language: '',
    runtime: 0,
    officialSite: '',
    rating: {
      average: 0,
    },
    network: {
      name: '',
      country: {
        name: '',
        code: '',
      },
    },
    schedule: {
      time: '',
      days: [],
    },
    status: '',
  });

  useEffect(() => {
    if (params?.id) {
      loadShowByIdService.execute(Number(params.id)).then(({ data }) => {
        setShow(formatShowData(data));
      });
    }
  }, []);

  return (
    <div className="show">
      <div className="show__top-section">
        <Link to="/">
          <img src={ArrowLeft} alt="arrow left" />
          Home
        </Link>

        <FavouriteButton text="Add to favourites" isFavourited={false} />
      </div>

      <div className="show__details">
        <ShowCard image={show.image} average={show?.rating.average} />

        <div>
          <h1 className="show__title">{show.name}</h1>

          <Info label="Status" value={show.status} />

          {parse(show.summary)}
        </div>
      </div>

      <div className="show__info">
        <div>
          <Info label="Language" value={show.language} />
          <Info label="Year" value={show.year} />
          <Info label="Network" value={show.language} />
          <Info label="Schedule" value={show.language} />
        </div>

        <div>
          <Info label="Genres" value={show.genres.join(', ')} />
          <Info label="Status" value={show.status} />
          <Info label="Show type" value={show.type} />
          <Info label="Official site" value={show.officialSite} />
        </div>
      </div>
    </div>
  );
};

export default Show;
