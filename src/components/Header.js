
function Header(){
    return (
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
    )
}
export default Header;