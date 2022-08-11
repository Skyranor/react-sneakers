import { useState } from 'react';
import styles from './Card.module.scss';

export default function Card({ title, price, imageUrl, onPlus }) {
  const [isAdded, setIsAdded] = useState(false);
  const onClickPlus = () => {
    onPlus({ title, price, imageUrl });
    setIsAdded(!isAdded);
  };
  return (
    <li className={styles.card}>
      <img width={133} height={112} src={imageUrl} alt="" />
      <h5>{title}</h5>
      <div className="d-flex justify-between align-center pt-15">
        <div className="d-flex flex-column">
          <span>Цена:</span>
          <b>{price} руб.</b>
        </div>
        <button className="button" onClick={onClickPlus}>
          <img
            width={32}
            height={32}
            src={isAdded ? '/img/btn-added.svg' : '/img/plus.svg'}
            alt={isAdded ? 'Added' : 'Plus'}
          />
        </button>
      </div>
    </li>
  );
}
