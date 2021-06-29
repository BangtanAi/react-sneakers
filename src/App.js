import Card from "./components/Card/Card";
import Header from "./components/Header";
import Drawer from "./components/Drawer";
import React from "react";
import axios from "axios";
import './index.scss';


function App() {
  const [items, setItems] = React.useState([]);
  const [cartOpened, setCartOpened] = React.useState(false);

  React.useEffect(() => {
    axios.get('https://60d9d1c65f7bf1001754778d.mockapi.io/items').then((res) =>{
      setItems(res.data);
    });
  }, []);
  return (
    <div className="wrapper">
      {cartOpened && <Drawer onCloseCart={()=>setCartOpened(false)}/>}
      <Header onClickCart={()=>setCartOpened(true)} />
      <div className="content">
        <div className="content-header">
          <h1>Все кроссовки</h1>
          <div className="search-block">
            <img src="./img/search.svg" alt="search" />
            <input placeholder="Поиск..." />
          </div>
        </div>

        <div className="sneakers">
          {items.map((obj) => (
            <Card
            title={obj.title}
            price={obj.price}
            imageUrl={obj.imageUrl}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
