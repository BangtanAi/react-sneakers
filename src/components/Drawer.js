function Drawer(props){
    return (
        <div className="overlay">
        <div className="drawer"> 
        <h2>Корзина <img className="removeBtn" onClick={props.onCloseCart} src="./img/btn-remove.svg" alt="removeBtn" /></h2>        
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
    )
}
export default Drawer;