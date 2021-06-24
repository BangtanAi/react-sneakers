
function Card(){
    return (
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
    )
}
export default Card;