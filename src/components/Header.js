export default function Header(props) {
  return (
    <header className="header d-flex justify-between align-center p-45">
      <div className="d-flex align-center">
        <img className="mr-15" width={40} height={40} src="/img/logo.png" alt="Logo" />
        <div>
          <h2 className="text-uppercase">react sneakers</h2>
          <p>Магазин лучших кроссовок</p>
        </div>
      </div>
      <ul className="header-right d-flex">
        <li>
          <button onClick={props.onClickCart} className="d-flex">
            <img className="mr-10" width={18} height={18} src="/img/cart.svg" alt="Cart" />
            <span>1205 руб.</span>
          </button>
        </li>
        <li>
          <img width={18} height={18} src="/img/like.svg" alt="Like" />
        </li>
        <li>
          <img width={18} height={18} src="/img/user.svg" alt="User" />
        </li>
      </ul>
    </header>
  );
}
