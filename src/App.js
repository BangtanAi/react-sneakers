import Card from "./components/Card/Card";
import Header from "./components/Header";
import Drawer from "./components/Drawer";
import React from "react";
import axios from "axios";
import './index.scss';


function App() {
  const [items, setItems] = React.useState([]);
  const [cartOpened, setCartOpened] = React.useState(false);
  const [cartItems, setCartItems] = React.useState([]);
  const [searchValue, setSearchValue] = React.useState('');

  React.useEffect(() => {
    axios.get('https://60d9d1c65f7bf1001754778d.mockapi.io/items').then((res) =>{
      setItems(res.data);
    });
    axios.get('https://60d9d1c65f7bf1001754778d.mockapi.io/cart').then((res) =>{
      setCartItems(res.data);
    });
  }, []);

  const onAddToCart = (obj) => {
    axios.post('https://60d9d1c65f7bf1001754778d.mockapi.io/cart', obj);
    setCartItems((prev) => [...prev, obj]);
  }

  const onChangeSearchInput = (event) => {
    setSearchValue(event.target.value);
  }

  const onRemoveItem = (id) => {
    axios.delete(`https://60d9d1c65f7bf1001754778d.mockapi.io/cart/${id}`);
    setCartItems((prev) =>prev.filter((item) => item.id !== id))
  }

  return (
    <div className="wrapper">
      {cartOpened && <Drawer items={cartItems} onRemove={onRemoveItem} onCloseCart={()=>setCartOpened(false)}/>}
      <Header onClickCart={()=>setCartOpened(true)} />
      <div className="content">
        <div className="content-header">
          <h1>{searchValue ? `Поиск по запросу: "${searchValue}"` : 'Все кроссовки'}</h1>
          <div className="search-block">
            <img src="./img/search.svg" alt="search" />
            <input onChange={onChangeSearchInput} value={searchValue} placeholder="Поиск..." />
            <img onClick={()=>setSearchValue('')} className="removeBtn" src="./img/btn-remove.svg" alt="removeBtn" />
          </div>
        </div>

        <div className="sneakers">
          {items
          .filter((item) => item.title.toLowerCase().includes(searchValue.toLowerCase()))
          .map((item, index) => (
            <Card
            key={index}
            title={item.title}
            price={item.price}
            imageUrl={item.imageUrl}
            onPlusItem ={(obj)=>onAddToCart(obj)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
