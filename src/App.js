
function App() {
  return (
    <div className="wrapper clear">
      <header className="header d-flex justify-between align-center p-45">
        <div className="d-flex align-center">
          <img className="mr-15" width={40} height={40} src="/img/logo.png" />
          <div>
            <h2 className="text-uppercase">react sneakers</h2>
            <p>Магазин лучших кроссовок</p>
          </div>
        </div>
        <ul className="header-right d-flex">
          <li>
            <div className="d-flex">
              <img className="mr-10" width={18} height={18} src="/img/cart.svg" />
              <span>1205 руб.</span>
            </div>
          </li>
          <li>
            <img width={18} height={18} src="/img/like.svg" />
          </li>
          <li>
            <img width={18} height={18} src="/img/user.svg" />
          </li>
        </ul>
      </header>
      <main>
        <section className="p-40">
          <h1 className="pb-30">Все кроссовки</h1>
          <ul className="d-flex justify-between pt-10">
            <li className="card">
              <img width={132} height={112} src="/img/sneakers/1.jpg" alt="" />
              <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
              <div className="d-flex justify-between align-center pt-15">
                <div className="d-flex flex-column">
                  <span>Цена:</span>
                  <b>12 999 руб.</b>
                </div>
                <button className="button">
                  <img width={11} height={11} src="/img/plus.svg" alt="Plus" />
                </button>
              </div>
            </li>
            <li className="card">
              <img width={132} height={112} src="/img/sneakers/2.jpg" alt="" />
              <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
              <div className="d-flex justify-between align-center pt-15">
                <div className="d-flex flex-column">
                  <span>Цена:</span>
                  <b>12 999 руб.</b>
                </div>
                <button className="button">
                  <img width={11} height={11} src="/img/plus.svg" alt="Plus" />
                </button>
              </div>
            </li>
            <li className="card">
              <img width={132} height={112} src="/img/sneakers/3.jpg" alt="" />
              <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
              <div className="d-flex justify-between align-center pt-15">
                <div className="d-flex flex-column">
                  <span>Цена:</span>
                  <b>12 999 руб.</b>
                </div>
                <button className="button">
                  <img width={11} height={11} src="/img/plus.svg" alt="Plus" />
                </button>
              </div>
            </li>
            <li className="card">
              <img width={132} height={112} src="/img/sneakers/4.jpg" alt="" />
              <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
              <div className="d-flex justify-between align-center pt-15">
                <div className="d-flex flex-column">
                  <span>Цена:</span>
                  <b>12 999 руб.</b>
                </div>
                <button className="button">
                  <img width={11} height={11} src="/img/plus.svg" alt="Plus" />
                </button>
              </div>
            </li>
          </ul>
        </section>
      </main>
    </div>
  );
}

export default App;
