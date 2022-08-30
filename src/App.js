import React, { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import axios from 'axios';
import Header from './components/Header';
import Home from './pages/Home';
import Favorites from './pages/Favorites';
import Drawer from './components/Drawer';
import AppContext from './context';
import Orders from './pages/Orders';

function App() {
  const [cards, setCards] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const [searchValue, setSearchValue] = useState('');
  const [cartOpened, setCartOpened] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  // const [drawer, setDrawer] = useState(false);

  useEffect(() => {
    try {
      (async () => {
        const [cardResponse, cartItemsResponse, favoritesResponse] =
          await Promise.all([
            axios.get('https://62f46ea2535c0c50e75c3ed0.mockapi.io/items'),
            axios.get('https://62f46ea2535c0c50e75c3ed0.mockapi.io/cartItems'),
            axios.get('https://62f46ea2535c0c50e75c3ed0.mockapi.io/favorites')
          ]);

        setIsLoading(false);

        setCartItems(cartItemsResponse.data);
        setFavorites(favoritesResponse.data);
        setCards(cardResponse.data);
      })();
    } catch (error) {
      alert('Ошибка при запросе данных ;(');
      console.error(error);
    }
  }, []);

  const findItem = (arr, obj) =>
    arr.find(item => Number(item.parentId) === Number(obj.parentId));

  const onAddToCart = async obj => {
    try {
      const found = findItem(cartItems, obj);
      if (found) {
        setCartItems(prev =>
          prev.filter(item => Number(item.parentId) !== Number(obj.parentId))
        );
        await axios.delete(
          `https://62f46ea2535c0c50e75c3ed0.mockapi.io/cartItems/${found.id}`
        );
      } else {
        setCartItems(prev => [...prev, obj]);
        const { data } = await axios.post(
          'https://62f46ea2535c0c50e75c3ed0.mockapi.io/cartItems',
          obj
        );
        setCartItems(prev =>
          prev.map(item => {
            if (item.parentId === data.parentId) {
              return {
                ...item,
                id: data.id
              };
            }
            return item;
          })
        );
      }
    } catch (error) {
      alert('Ошибка при добавлении в корзину');
      console.error(error);
    }
  };

  const onRemoveItem = async id => {
    console.log(id);
    try {
      setCartItems(prev => prev.filter(item => Number(item.id) !== Number(id)));
      await axios.delete(
        `https://62f46ea2535c0c50e75c3ed0.mockapi.io/cartItems/${id}`
      );
    } catch (error) {
      alert('Ошибка при удалении из корзины ');
      console.error(error);
    }
  };

  const onAddToFavorite = async obj => {
    try {
      const found = findItem(favorites, obj);
      if (found) {
        axios.delete(
          `https://62f46ea2535c0c50e75c3ed0.mockapi.io/favorites/${found.id}`
        );
        setFavorites(prev =>
          prev.filter(item => Number(item.parentId) !== Number(obj.parentId))
        );
      } else {
        setFavorites(prev => [...prev, obj]);
        const { data } = await axios.post(
          `https://62f46ea2535c0c50e75c3ed0.mockapi.io/favorites`,
          obj
        );
        setFavorites(prev =>
          prev.map(item => {
            if (item.parentId === data.parentId) {
              return {
                ...item,
                id: data.id
              };
            }
            return item;
          })
        );
      }
    } catch (error) {
      alert('Не удалось добавить в избранное');
      console.error(error);
    }
  };

  const isItemAdded = id =>
    cartItems.some(obj => Number(obj.parentId) === Number(id));
  const isCardFavorite = id =>
    favorites.some(obj => Number(obj.parentId) === Number(id));

  return (
    <AppContext.Provider
      value={{
        cards,
        cartItems,
        favorites,
        isItemAdded,
        onAddToFavorite,
        onAddToCart,
        setCartOpened,
        setCartItems,
        isCardFavorite
      }}>
      <div className="wrapper clear">
        <Drawer
          items={cartItems}
          onClose={() => setCartOpened(false)}
          onRemove={onRemoveItem}
          cartOpened={cartOpened}
          // visible={drawer}
          // setVisible={setDrawer}
        />
        <Header onClickCart={() => setCartOpened(true)} />
        <Routes>
          <Route
            path="*"
            element={
              <Home
                cards={cards}
                cartItems={cartItems}
                searchValue={searchValue}
                setSearchValue={setSearchValue}
                onAddToCart={onAddToCart}
                onAddToFavorite={onAddToFavorite}
                isLoading={isLoading}
              />
            }></Route>
          <Route path="/favorites" element={<Favorites />}></Route>
          <Route path="/orders" element={<Orders />}></Route>
        </Routes>
      </div>
    </AppContext.Provider>
  );
}

export default App;
