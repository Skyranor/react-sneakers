import React, { useContext } from 'react';
import axios from 'axios';
import { useState } from 'react';
import { Link } from 'react-router-dom';

import Info from '../Info';
import AppContext from '../../context';

import styles from './Drawer.module.scss';

export default function Drawer({
  items = [],
  onClose,
  onRemove,
  cartOpened
  // visible,
  // setVisible
}) {
  const { cartItems, setCartItems } = useContext(AppContext);
  const [orderId, setOrderId] = useState(null);
  const [isOrderComplete, setIsOrderComplete] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const totalPrice = cartItems.reduce((sum, curr) => sum + curr.price, 0);
  const onClickOrder = async () => {
    try {
      setIsLoading(true);
      const { data } = await axios.post(
        'https://62f46ea2535c0c50e75c3ed0.mockapi.io/orders',
        {
          items: cartItems
        }
      );
      setOrderId(data.id);
      setIsOrderComplete(true);
      setCartItems([]);
      for await (let item of cartItems) {
        axios.delete(
          'https://62f46ea2535c0c50e75c3ed0.mockapi.io/cartItems/' + item.id
        );
      }
    } catch (error) {
      alert('Не удалось создать заказ :(');
    }
    setIsLoading(false);
  };

  return (
    <div
      onClick={onClose}
      className={`${styles.overlay} ${
        cartOpened ? styles.overlayVisible : ''
      }`}>
      <div onClick={e => e.stopPropagation()} className={styles.drawer}>
        <div className={styles.drawerHeader}>
          <h2 className={styles.drawerTitle}>Корзина</h2>
          <Link to="/">
            <button className={styles.removeBtn} onClick={onClose}>
              <img
                width={32}
                height={32}
                src="img/btn-remove.svg"
                alt="Remove"
              />
            </button>
          </Link>
        </div>
        {items.length > 0 ? (
          <>
            <div className={styles.cartItems}>
              {items.map(item => (
                <div key={item.id} className={styles.cartItem}>
                  <div
                    style={{ backgroundImage: `url(${item.imageUrl})` }}
                    className={styles.cartItemImg}></div>
                  <div className="flex">
                    <p className="mb-5">{item.title}</p>
                    <b>{item.price} руб.</b>
                  </div>
                  <button
                    className={styles.removeBtn}
                    onClick={() => onRemove(item.id)}>
                    <img
                      width={32}
                      height={32}
                      src="img/btn-remove.svg"
                      alt="Remove"
                    />
                  </button>
                </div>
              ))}
            </div>
            <div className={styles.cartTotalBlock}>
              <ul>
                <li>
                  <span>Итого: </span>
                  <div></div>
                  <b>{totalPrice}руб. </b>
                </li>
                <li>
                  <span>Налог 5%:</span>
                  <div></div>
                  <b>{Math.round(totalPrice * 0.05)} руб. </b>
                </li>
              </ul>
              <button
                disabled={isLoading}
                onClick={onClickOrder}
                className={`greenButton ${styles.greenButton}`}>
                Оформить заказ
                <img src="/img/arrow.svg" alt="Arrow" />
              </button>
            </div>
          </>
        ) : (
          <Info
            title={isOrderComplete ? 'Заказ оформлен!' : 'Корзина пустая'}
            description={
              isOrderComplete
                ? `Ваш заказ #${orderId} скоро будет передан курьерской доставке`
                : 'Добавьте хотя бы одну пару кроссовок, чтобы сделать заказ.'
            }
            img={isOrderComplete ? '/img/completed-order.jpg' : '/img/box.jpg'}
            width={120}
            height={120}
          />
        )}
      </div>
    </div>
  );
}
