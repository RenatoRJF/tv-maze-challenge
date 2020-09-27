import React from 'react';
import FavouriteButton from '../../components/FavouriteButton';
import ShowCard from '../../components/ShowCard';
import Info from '../../components/Info';
import ArrowLeft from '../../assets/arrow-left.svg';

import './show.scss';

const Show = () => (
  <div className="show">
    <div className="show__top-section">
      <a href="#">
        <img src={ArrowLeft} alt="arrow left" />
        Home
      </a>

      <FavouriteButton text="Add to favourites" isFavourited={false} />
    </div>

    <div className="show__details">
      <ShowCard
        image="http://static.tvmaze.com/uploads/images/medium_portrait/81/202627.jpg"
        average={3.5}
        amount={15}
      />

      <div>
        <h1 className="show__title">Raised by wolves</h1>

        <Info label="Genre" value="Action" />

        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry’s standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </p>
      </div>
    </div>

    <div className="show__info">
      <div>
        <Info label="Genre" value="Action" />
        <Info label="Genre" value="Action" />
        <Info label="Genre" value="Action" />
        <Info label="Genre" value="Action" />
      </div>

      <div>
        <Info label="Genre" value="Action" />
        <Info label="Genre" value="Action" />
        <Info label="Genre" value="Action" />
        <Info label="Genre" value="Action" />
      </div>
    </div>
  </div>
);

export default Show;
