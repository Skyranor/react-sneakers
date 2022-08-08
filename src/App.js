import Card from './components/Card';
import Header from './components/Header';
import Drawer from './components/Drawer';

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
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
          </ul>
        </section>
      </main>
    </div>
  );
}

export default App;
