import { useContext } from 'react';
import { Link } from 'react-router-dom';
import AppContext from '../context';

export default function Header(props) {
  const { cartItems } = useContext(AppContext);
  const totalPrice = cartItems.reduce((sum, curr) => sum + curr.price, 0);

  return (
    <header className="header d-flex justify-between align-center ">
      <Link to="/">
        <div className="d-flex align-center">
          <img
            className="mr-15"
            width={40}
            height={40}
            src="/img/logo.png"
            alt="Logo"
          />
          <div>
            <h2 className="text-uppercase">react sneakers</h2>
            <p>Магазин лучших кроссовок</p>
          </div>
        </div>
      </Link>
      <ul className="headerRight d-flex">
        <li>
          <button className="cartButton" onClick={props.onClickCart}>
            <img
              className="mr-10"
              width={23}
              height={23}
              src="/img/cart.svg"
              alt="Cart"
            />
            {totalPrice ? <span>{totalPrice} руб.</span> : null}
          </button>
        </li>
        <li>
          <Link to="/favorites">
            <img width={23} height={23} src="/img/heart.svg" alt="Liked" />
          </Link>
        </li>
        <li>
          <Link to="/orders">
            <img width={23} height={23} src="/img/user.svg" alt="User" />
          </Link>
        </li>
      </ul>
    </header>
  );
}
