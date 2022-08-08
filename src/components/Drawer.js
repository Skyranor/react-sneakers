export default function Drawer() {
  return (
    <div style={{ display: 'none' }} className="overlay">
      <div className="drawer">
        <div className="d-flex pb-30 justify-between">
          <h2 className="drawer-title">Корзина</h2>
          <button className="removeBtn">
            <img width={32} height={32} src="img/btn-remove.svg" alt="Remove" />
          </button>
        </div>

        <div className="cartItems">
          <div className="cartItem d-flex al ign-center">
            <div
              style={{ backgroundImage: 'url(/img/sneakers/2.jpg)' }}
              className="cartItemImg"></div>
            <div className="flex">
              <p className="mb-5">Мужские Кроссовки Nike Air Max 270</p>
              <b>12 999 руб.</b>
            </div>
            <button className="removeBtn">
              <img width={32} height={32} src="img/btn-remove.svg" alt="Remove" />
            </button>
          </div>
          <div className="cartItem d-flex align-center">
            <div
              style={{ backgroundImage: 'url(/img/sneakers/2.jpg)' }}
              className="cartItemImg"></div>
            <div className="flex">
              <p className="mb-5">Мужские Кроссовки Nike Air Max 270</p>
              <b>12 999 руб.</b>
            </div>
            <button className="removeBtn">
              <img width={32} height={32} src="img/btn-remove.svg" alt="Remove" />
            </button>
          </div>
        </div>
        <div className="cartTotalBlock">
          <ul>
            <li>
              <span>Итого: </span>
              <div></div>
              <b>21 498 руб. </b>
            </li>
            <li>
              <span>Налог 5%:</span>
              <div></div>
              <b>1074 руб. </b>
            </li>
          </ul>
          <button className="greenButton">
            Оформить заказ
            <img src="/img/arrow.svg" alt="Arrow" />
          </button>
        </div>
      </div>
    </div>
  );
}
