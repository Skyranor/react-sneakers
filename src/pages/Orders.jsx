import Card from '../components/Card';
import { useEffect, useContext, useState } from 'react';
import axios from 'axios';
import AppContext from '../context';
import Info from '../components/Info';

const Orders = () => {
  const [orders, setOrders] = useState([]);
  const { onAddToCart, onAddToFavorite } = useContext(AppContext);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    (async () => {
      try {
        const { data } = await axios.get(
          'https://62f46ea2535c0c50e75c3ed0.mockapi.io/orders',
        );
        setOrders(data.reduce((prev, cur) => [...prev, ...cur.items], []));
        setIsLoading(false);
      } catch (error) {
        alert('Ошибка при запросе заказов');
        console.error(error);
      }
    })();
  }, []);

  const renderOrders = () =>
    (isLoading ? new Array(8).fill('') : orders).map((card, index) => (
      <Card key={index} loading={isLoading} {...card} />
    ));

  return (
    <main>
      <section className="sneakers">
        {isLoading ? (
          <>
            <div className="pb-30 d-flex justify-between align-center">
              <h1>Мои заказы</h1>
            </div>
            <div className="d-flex flex-wrap">{renderOrders()}</div>
          </>
        ) : orders.length ? (
          <div className="d-flex flex-wrap">{renderOrders()}</div>
        ) : (
          <Info
            width={70}
            height={70}
            title={'У вас нет заказов'}
            description={'Вы нищеброд? Оформите хотя бы один заказ.'}
            img={'/img/sad-emoticon.svg'}
          />
        )}
      </section>
    </main>
  );
};

export default Orders;
