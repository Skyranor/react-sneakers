export default function Drawer({ items = [], onClose }) {
  console.log(items.imageUrl);
  return (
    <div className="overlay">
      <div className="drawer">
        <div className="d-flex pb-30 justify-between">
          <h2 className="drawer-title">Корзина</h2>
          <button className="removeBtn" onClick={onClose}>
            <img width={32} height={32} src="img/btn-remove.svg" alt="Remove" />
          </button>
        </div>

        <div className="cartItems">
          {items.map((item) => (
            <div className="cartItem d-flex align-center">
              <div
                style={{ backgroundImage: `url(${item.imageUrl})` }}
                className="cartItemImg"></div>
              <div className="flex">
                <p className="mb-5">{item.title}</p>
                <b>{item.price} руб.</b>
              </div>
              <button className="removeBtn">
                <img width={32} height={32} src="img/btn-remove.svg" alt="Remove" />
              </button>
            </div>
          ))}
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
