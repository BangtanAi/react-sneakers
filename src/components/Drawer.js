function Drawer({ onCloseCart, items = [] }){
    return (
        <div className="overlay">
        <div className="drawer"> 
        <h2>Корзина <img className="removeBtn" onClick={onCloseCart} src="./img/btn-remove.svg" alt="removeBtn" /></h2>        
          <div className="items">
            {items.map((obj) => (
              <div className="cartItem">
              <img width={70} height={70} src={obj.imageUrl} alt="sneakersPhoto" />
              <div className="cartInfo">
                <p>{obj.title}</p>
                <b>{obj.price} руб.</b>
              </div>
              <img className="removeBtn" src="./img/btn-remove.svg" alt="removeBtn" />
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