import { useState, useContext } from 'react';
import ContentLoader from 'react-content-loader';
import styles from './Card.module.scss';
import AppContext from '../../context';

export default function Card({
  title,
  price,
  imageUrl,
  onPlus,
  onFavorite,
  id,
  parentId,
  // favorite = false,
  loading = false
}) {
  const obj = { title, price, imageUrl, id, parentId };
  const { isItemAdded, isCardFavorite } = useContext(AppContext);
  // const [isFavorite, setIsFavorite] = useState(favorite)
  const onClickPlus = () => {
    onPlus(obj);
  };

  const onClickToFavorite = () => {
    onFavorite(obj);
  };

  return (
    <li className={styles.card}>
      {loading ? (
        <ContentLoader
          speed={1}
          width={155}
          height={220}
          viewBox="0 0 155 220"
          backgroundColor="#f3f3f3"
          foregroundColor="#ecebeb">
          <rect x="0" y="20" rx="10" ry="10" width="150" height="90" />
          <rect x="0" y="125" rx="3" ry="3" width="150" height="15" />
          <rect x="0" y="145" rx="3" ry="3" width="93" height="15" />
          <rect x="0" y="182" rx="8" ry="8" width="80" height="24" />
          <rect x="116" y="174" rx="8" ry="8" width="32" height="32" />
        </ContentLoader>
      ) : (
        <>
          {onFavorite && (
            <button className={styles.favorite} onClick={onClickToFavorite}>
              <img
                width={32}
                height={32}
                src={
                  isCardFavorite(parentId) ? '/img/like.svg' : '/img/unlike.svg'
                }
                alt={isCardFavorite(parentId) ? 'Like' : 'Unlike'}
              />
            </button>
          )}
          <img width="100%" height={135} src={imageUrl} alt="Sneakers" />
          <h5>{title}</h5>
          <div className="d-flex justify-between align-center pt-15">
            <div className="d-flex flex-column">
              <span>Цена:</span>
              <b>{price} руб.</b>
            </div>
            {onPlus && (
              <button className="button" onClick={onClickPlus}>
                <img
                  width={32}
                  height={32}
                  src={isItemAdded(id) ? '/img/btn-added.svg' : '/img/plus.svg'}
                  alt={isItemAdded(id) ? 'Added' : 'Plus'}
                />
              </button>
            )}
          </div>
        </>
      )}
    </li>
  );
}
