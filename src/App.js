import Card from './components/Card';
import Header from './components/Header';
import Drawer from './components/Drawer';

const cards = [
  {
    title: 'Мужские Кроссовки Nike Blazer Mid Suede',
    price: '12 999',
    imageUrl: '/img/sneakers/1.jpg',
  },
  {
    title: 'Мужские Кроссовки Nike Air Max 270',
    price: '15 999',
    imageUrl: '/img/sneakers/2.jpg',
  },
  {
    title: 'Мужские Кроссовки Nike Blazer Mid Suede',
    price: '8 499 руб.',
    imageUrl: '/img/sneakers/3.jpg',
  },
  {
    title: 'Кроссовки Puma X Aka Boku Future Rider',
    price: '8 999',
    imageUrl: '/img/sneakers/4.jpg',
  },
];

function App() {
  return (
    <div className="wrapper clear">
      <Drawer />
      <Header />
      <main>
        <section className="p-40">
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
                onClick={() => console.log(card)}
              />
            ))}
          </ul>
        </section>
      </main>
    </div>
  );
}

export default App;
