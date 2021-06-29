import React from 'react';
import styles from './Card.module.scss';

function Card({ title, imageUrl, price, onPlusItem }){
const[isAdded, setIsAdded] = React.useState(false);
const onPlusCard =()=>{
  onPlusItem({title, imageUrl, price});
  setIsAdded(!isAdded);
}
    return (
        <div className={styles.card}>
            <div className={styles.favourite}>
              <img src="./img/heart-unliked.svg" alt="unlike" />
            </div>
            <img className={styles.mainImage} width={133} height={112} src={imageUrl} alt="" />
            <h5>{title}</h5>
            <div className={styles.cardInfo}>
              <div className={styles.cardPrice}>
                <span>Цена:</span>
                <b>{price} руб.</b>
              </div>       
                <img
                onClick={onPlusCard}
                src={isAdded ? './img/checked.svg' : './img/plus.svg'} alt="" />            
            </div>
          </div>
    )
}
export default Card;