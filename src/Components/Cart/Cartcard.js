import React from 'react';
import styles from './Cartcard.module.css';

export default function Cartcard({title,quentity ,price, onIncQty , onDecQty, index,  itemindex}) {
 
  return (
    <div className={styles.cartcard}>
      <div className={styles.itemdetails}>
        <h2>{title}</h2>
        <div className={styles.price}>
          <h4>${price}</h4>
          <div>
            <span>x{quentity}</span>
          </div>
        </div>
      </div>
      <div className={styles.incdec}>
        <button onClick={() => onDecQty(index, itemindex)}>-</button>
        <button onClick={()=> onIncQty(index,  itemindex)}>+</button>
      </div>
    </div>
  );
}
