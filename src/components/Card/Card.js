import React from 'react';
import styles from './Card.module.scss';

function Card({ title, imageUrl, price, id, onPlusItem, onFavoriteItem, favorited = false }){
const[isAdded, setIsAdded] = React.useState(false);
const[isFavorite, setIsFavorite] = React.useState(favorited);
const onPlusCard =()=>{
  onPlusItem({id, title, imageUrl, price});
  setIsAdded(!isAdded);
}
const onClickFavorite =()=>{
  onFavoriteItem({id, title, imageUrl, price})
  setIsFavorite(!isFavorite);
}

    return (
        <div className={styles.card}>
            <div className={styles.favourite}>
              <img onClick={onClickFavorite} src={isFavorite ? './img/heart-liked.svg' : './img/heart-unliked.svg'} alt="unlike" />
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