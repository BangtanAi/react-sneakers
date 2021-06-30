function Drawer({ onCloseCart, items = [], onRemove }) {
  return (
    <div className="overlay">
      {items.length > 0 ? <div className="drawer">
        <h2>
          Корзина
          <img
            className="removeBtn"
            onClick={onCloseCart}
            src="./img/btn-remove.svg"
            alt="removeBtn"
          />
        </h2>
        <div className="items">
          {items.map((obj) => (
            <div className="cartItem">
              <img width={70} height={70} src={obj.imageUrl} alt="sneakersPhoto" />
              <div className="cartInfo">
                <p>{obj.title}</p>
                <b>{obj.price} руб.</b>
              </div>
              <img
                className="removeBtn"
                onClick={() => onRemove(obj.id)}
                src="./img/btn-remove.svg"
                alt="removeBtn"
              />
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
          <button className="greenButton">
            Оформить заказ <img src="./img/arrow.svg" alt="Arrow" />
          </button>
        </div>
        
      </div> : (
        <div className="drawer">
        <h2>
          Корзина
          <img
            className="removeBtn"
            onClick={onCloseCart}
            src="./img/btn-remove.svg"
            alt="removeBtn"
          />
        </h2>
          <div className="cartEmpty">
            <img className="cartEmpty-image" src="/img/cartempty.png" alt="Empty" />
            <h2>Корзина пустая</h2>
            <p class="opacity-6">Добавьте хотя бы одну пару кроссовок, чтобы сделать заказ.</p>
            <button onClick={onCloseCart} className="greenButton">
              <img src="/img/arrow.svg" alt="Arrow" />
              Вернуться назад
            </button>
          </div>
          </div>
        )}
      
    </div>
  );
}
export default Drawer;
