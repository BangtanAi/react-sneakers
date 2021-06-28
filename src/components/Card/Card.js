import React from 'react';
import styles from './Card.module.scss';

function Card(props){
const[isAdded, setIsAdded] = React.useState(false);
const onPlusCard =()=>{
  setIsAdded(!isAdded);
}
    return (
        <div className={styles.card}>
            <div className={styles.favourite}>
              <img src="./img/heart-unliked.svg" alt="unlike" />
            </div>
            <img width={133} height={112} src="./img/1.png" alt="" />
            <h5>{props.title}</h5>
            <div className={styles.cardInfo}>
              <div className={styles.cardPrice}>
                <span>Цена:</span>
                <b>{props.price} руб.</b>
              </div>       
                <img
                onClick={onPlusCard}
                src={isAdded ? './img/checked.svg' : './img/plus.svg'} alt="" />            
            </div>
          </div>
    )
}
export default Card;