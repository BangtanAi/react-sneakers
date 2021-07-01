import Header from './components/Header';
import Drawer from './components/Drawer';
import Home from './pages/Home';
import Favorite from './pages/Favorite';
import React from 'react';
import axios from 'axios';
import { Route } from 'react-router-dom';
import './index.scss';

function App() {
  const [items, setItems] = React.useState([]);
  const [cartOpened, setCartOpened] = React.useState(false);
  const [cartItems, setCartItems] = React.useState([]);
  const [favorites, setFavorites] = React.useState([]);
  const [searchValue, setSearchValue] = React.useState('');

  React.useEffect(() => {
    axios.get('https://60d9d1c65f7bf1001754778d.mockapi.io/items').then((res) => {
      setItems(res.data);
    });
    axios.get('https://60d9d1c65f7bf1001754778d.mockapi.io/cart').then((res) => {
      setCartItems(res.data);
    });
    axios.get('https://60d9d1c65f7bf1001754778d.mockapi.io/favorites').then((res) => {
      setFavorites(res.data);
    });
  }, []);

  const onAddToCart = (obj) => {
    axios.post('https://60d9d1c65f7bf1001754778d.mockapi.io/cart', obj);
    setCartItems((prev) => [...prev, obj]);
  };

  const onAddToFavorite = async (obj) => {
    try {
      if (favorites.find((favObj) => favObj.id === obj.id)) {
        axios.delete(`https://60d9d1c65f7bf1001754778d.mockapi.io/favorites/${obj.id}`);
      } else {
        const { data } = await axios.post('https://60d9d1c65f7bf1001754778d.mockapi.io/favorites', obj);
        setFavorites((prev) => [...prev, data]);
      }
    } catch(error){
      alert('Не удалось добавить закладку')
    }
    
  };

  const onChangeSearchInput = (event) => {
    setSearchValue(event.target.value);
  };

  const onRemoveItem = (id) => {
    axios.delete(`https://60d9d1c65f7bf1001754778d.mockapi.io/cart/${id}`);
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  return (
    <div className="wrapper">
      {cartOpened && (
        <Drawer
          items={cartItems}
          onRemove={onRemoveItem}
          onCloseCart={() => setCartOpened(false)}
        />
      )}
      <Header onClickCart={() => setCartOpened(true)} />
      <Route path="/" exact>
        <Home
          items={items}
          searchValue={searchValue}
          onChangeSearchInput={onChangeSearchInput}
          setSearchValue={setSearchValue}
          onAddToCart={onAddToCart}
          onAddToFavorite={onAddToFavorite}
        />
      </Route>
      <Route path="/favorites" exact>
        <Favorite
          items={favorites}
          searchValue={searchValue}
          onChangeSearchInput={onChangeSearchInput}
          setSearchValue={setSearchValue}
          onAddToCart={onAddToCart}
          onAddToFavorite={onAddToFavorite}
        />
      </Route>
    </div>
  );
}

export default App;
