function App() {
  return (
    <div className="wrapper">
      <div className="overlay">
        <div className="drawer"> 
        <h2>Корзина <img className="removeBtn" src="./img/btn-remove.svg" alt="removeBtn" /></h2>        
          <div className="items">
            <div className="cartItem">
              <img width={70} height={70} src="./img/1.png" alt="sneakersPhoto" />
              <div className="cartInfo">
                <p>Мужские Кроссовки Nike Air Max 270</p>
                <b>12 999 руб.</b>
              </div>
              <img className="removeBtn" src="./img/btn-remove.svg" alt="removeBtn" />
            </div>
            <div className="cartItem">
              <img width={70} height={70} src="./img/2.png" alt="sneakersPhoto" />
              <div className="cartInfo">
                <p>Мужские Кроссовки Nike Air Max 270</p>
                <b>12 999 руб.</b>
              </div>
              <img className="removeBtn" src="./img/btn-remove.svg" alt="removeBtn" />
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
                <span>Налог 5%: </span>
                <div></div>
                <b>1074 руб. </b>
              </li>
            </ul>
            <button className="greenButton">Оформить заказ <img src="./img/arrow.svg" alt="Arrow" /></button>
          </div>
        </div>
      </div>
      <header>
        <div className="headerLeft">
          <img width={40} height={40} src="./img/logoo.png" alt="logo" />
          <div className="headerInfo">
            <h3>REACT SNEAKERS</h3>
            <p>Магазин лучших кроссовок</p>
          </div>
        </div>
        <ul className="headerRight">
          <li className="cardInfo">
            <img width={18} height={18} src="./img/card.svg" alt="card" />
            <span>1205 руб.</span>
          </li>
          <li>
            <img width={18} height={18} src="./img/heart.svg" alt="heart" />
          </li>
        </ul>
      </header>
      <div className="content">
        <div className="content-header">
          <h1>Все кроссовки</h1>
          <div className="search-block">
            <img src="./img/search.svg" alt="search" />
            <input placeholder="Поиск..." />
          </div>
        </div>

        <div className="sneakers">
          <div className="card">
            <div className="favourite">
              <img src="./img/heart-unliked.svg" alt="unlike" />
            </div>
            <img width={133} height={112} src="./img/1.png" alt="" />
            <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
            <div className="cardInfo">
              <div className="cardPrice">
                <span>Цена:</span>
                <b>12 999 руб.</b>
              </div>
              <button className="button">
                <img width={11} height={11} src="./img/plus.svg" alt="" />
              </button>
            </div>
          </div>
          <div className="card">
            <img width={133} height={112} src="./img/2.png" alt="" />
            <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
            <div className="cardInfo">
              <div className="cardPrice">
                <span>Цена:</span>
                <b>12 999 руб.</b>
              </div>
              <button className="button">
                <img width={11} height={11} src="./img/plus.svg" alt="" />
              </button>
            </div>
          </div>
          <div className="card">
            <img width={133} height={112} src="./img/3.png" alt="" />
            <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
            <div className="cardInfo">
              <div className="cardPrice">
                <span>Цена:</span>
                <b>12 999 руб.</b>
              </div>
              <button className="button">
                <img width={11} height={11} src="./img/plus.svg" alt="" />
              </button>
            </div>
          </div>
          <div className="card">
            <img width={133} height={112} src="./img/4.png" alt="" />
            <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
            <div className="cardInfo">
              <div className="cardPrice">
                <span>Цена:</span>
                <b>12 999 руб.</b>
              </div>
              <button className="button">
                <img width={11} height={11} src="./img/plus.svg" alt="" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
