import { useContext } from 'react';
import Card from '../components/Card';
// import AppContext from '../context';

const Home = ({
  searchValue,
  setSearchValue,
  cards,
  onAddToCart,
  onAddToFavorite,
  isLoading
}) => {
  const renderCards = () => {
    const filtredCards = cards.filter(card =>
      card.title.toLowerCase().includes(searchValue.toLowerCase())
    );
    return (isLoading ? new Array(7).fill(true) : filtredCards).map(
      (card, index) => (
        <Card
          key={card.parentId || index}
          onPlus={onAddToCart}
          onFavorite={onAddToFavorite}
          loading={isLoading}
          {...card}
        />
      )
    );
  };

  return (
    <main>
      <section className="sneakers">
        <div className="pb-30 d-flex justify-between align-center">
          <h1>
            {searchValue ? `Поиск по запросу: ${searchValue}` : 'Все кроссовки'}
          </h1>
          <div className="search-block d-flex align-center ">
            <img width={14} height={14} src="/img/search.svg" alt="Search" />
            <input
              placeholder="Поиск..."
              value={searchValue}
              onChange={e => setSearchValue(e.target.value)}
            />
            {searchValue && (
              <button className="clear" onClick={() => setSearchValue('')}>
                <img
                  width={18}
                  height={18}
                  src="img/btn-remove.svg"
                  alt="Clear"
                />
              </button>
            )}
          </div>
        </div>
        <ul className="cards">{renderCards()}</ul>
      </section>
    </main>
  );
};

export default Home;
