import React from 'react';
import styles from './Navbar.module.css';
import mealsimg from '../../Assests/meals.jpg'
function Navbar({ handleShow, cartItemQty, setIsLoader }) {
    const handleIsLoader = ()=>{
        setIsLoader(true)
    }
    return (
        <>
            <div className={styles.navbar}>
                <div className={styles.leftnavbar}>
                    <h1>Food CART</h1>
                </div>
                <div className={styles.rightnavbar} onClick={() => { handleShow(); handleIsLoader();
}}>
                    <i className="fa-solid fa-cart-shopping"></i>
                    <h1>Your Cart <span>{cartItemQty}</span></h1>
                </div>
            </div>
           
        </>
    )
}

export default Navbar;
