import { Link } from 'react-router-dom';

function Header(props) {
  return (
    <header>
      <Link to='/' >
      <div className="headerLeft">
        <img width={40} height={40} src="./img/logoo.png" alt="logo" />
        <div className="headerInfo">
          <h3>REACT SNEAKERS</h3>
          <p>Магазин лучших кроссовок</p>
        </div>
      </div>
      </Link>
      <ul className="headerRight">
        <li className="cartInfo" onClick={props.onClickCart}>
          <img width={18} height={18} src="./img/card.svg" alt="card" />
          <span>1205 руб.</span>
        </li>
        <li>
          <Link to='/favorites' >
            <img width={18} height={18} src="./img/heart.svg" alt="heart" />
          </Link>
        </li>
      </ul>
    </header>
  );
}
export default Header;
