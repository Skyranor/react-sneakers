import React, { useEffect, useState } from 'react';
import Card from './components/Card';
import Header from './components/Header';
import Drawer from './components/Drawer';

function App() {
  const [cards, setCards] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [cartOpened, setCartOpened] = useState(false);

  useEffect(() => {
    fetch('https://60d62397943aa60017768e77.mockapi.io/items')
      .then((response) => response.json())
      .then((json) => setCards(json));
  }, []);

  const onAddToCart = (obj) => {
    setCartItems((prev) => [...prev, obj]);
  };

  return (
    <div className="wrapper clear">
      {cartOpened && <Drawer items={cartItems} onClose={() => setCartOpened(false)} />}
      <Header onClickCart={() => setCartOpened(true)} />
      <main>
        <section className="sneakers">
          <div className="pb-30 d-flex justify-between align-center">
            <h1>Все кроссовки</h1>
            <div className="search-block d-flex align-center">
              <img width={14} height={14} src="/img/search.svg" alt="Search" />
              <input placeholder="Поиск..." />
            </div>
          </div>

          <ul className="cards">
            {cards.map((card) => (
              <Card
                title={card.title}
                price={card.price}
                imageUrl={card.imageUrl}
                onPlus={onAddToCart}
              />
            ))}
          </ul>
        </section>
      </main>
    </div>
  );
}

export default App;
