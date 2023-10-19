import React, { useState } from 'react';
import styles from './Itemlist.module.css';


export default function Itemcard({ title, desc, price,onQuantityChange, quentity,  onAddItem , index}) {
    
    const handleQuantityChange = (event) => {
        const newQuantity = parseInt(event.target.value, 10); 
        onQuantityChange(newQuantity);
      };
    return (
        <>
        <div className={styles.itemcard}>
            <div className={styles.itemdetails}>
                <h1>{title}</h1>
                <p>{desc}</p>
                <h2>${price}</h2>
            </div>
            <div className={styles.itemamount}>
                <div className="amount">
                    <label htmlFor="amount">Quantity</label>
                    <input
                     type="number" 
                     value={quentity} 
                     min="1"
                     onChange={handleQuantityChange}
                     />
                </div>
                <div className={styles.addbtn}>
                    <button onClick={() =>  onAddItem(index)}>+Add</button>
                </div>
            </div>
        </div>
        </>
    );
}
