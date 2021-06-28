import Card from "./components/Card/Card";
import Header from "./components/Header";
import Drawer from "./components/Drawer";
import React from "react";


const arr = [];
function App() {
  const[cartOpened, setCartOpened] = React.useState(false);
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
          {arr.map((obj) => (
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
