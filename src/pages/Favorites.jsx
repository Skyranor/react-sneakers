import Card from '../components/Card';
import AppContext from '../context';
import { useContext } from 'react';
import Info from '../components/Info';
import { useState } from 'react';

const Favorites = () => {
  const { favorites, onAddToFavorite, onAddToCart } = useContext(AppContext);
  return (
    <main>
      <section className="favorites">
        {favorites.length ? (
          <>
            <div className="pb-30 d-flex justify-between align-center">
              <h1>Мои закладки</h1>
            </div>
            <div className="favoriteItems">
              {favorites.map(item => (
                <Card
                  key={item.parentId}
                  // favorited={true}
                  onFavorite={onAddToFavorite}
                  onPlus={onAddToCart}
                  {...item}
                />
              ))}
            </div>
          </>
        ) : (
          <Info
            width={70}
            height={70}
            title={'Закладок нет :('}
            description={'Вы ничего не добавляли в закладки'}
            img={'/img/crying-emoticon.svg'}
          />
        )}
      </section>
    </main>
  );
};

export default Favorites;
