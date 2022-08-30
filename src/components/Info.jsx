import React from 'react';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import AppContext from '../context';

const Info = ({ width, height, img, title, description }) => {
  const { setCartOpened } = useContext(AppContext);
  return (
    <div className="empty-cart">
      <img width={width} height={height} src={img} alt="Box" />
      <h3>{title}</h3>
      <p>{description}</p>
      <Link to="/">
        <button className="greenButton" onClick={() => setCartOpened(false)}>
          <img src="/img/arrow.svg" alt="Arrow" />
          Вернуться назад
        </button>
      </Link>
    </div>
  );
};

export default Info;
