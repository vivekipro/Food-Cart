import React, { useState } from 'react';
import styles from './MyOrders.module.css'; 
import { connect } from 'react-redux';

function MyOrders({ cartItems, handleGotoHome }) {
  console.log(cartItems);
  const [orders, setOrders] = useState(cartItems);
  const currentDate = new Date();
  const formattedDate = currentDate.toLocaleString();
  let totalPrice = 0;
  const orderShippedMessage = "Your order has been delivered, please check your email";

  return (
    <div className={styles.container}>
      <h1 className={styles.centered}>Orders Details:</h1>
      <div className={styles.centered}>
        <h3 className={styles.centered}>Your Order on:- {formattedDate}</h3>
        <table>
          <thead>
            <tr>
              <th>Title</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Total</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((product) => {
              totalPrice += product.price * product.quentity;
              return (
                <tr key={product.id}>
                  <td>{product.title}</td>
                  <td>{product.price}</td>
                  <td>{product.quentity}</td>
                  <td>{product.price * product.quentity}</td>
                </tr>
              );
            })
            }
          </tbody>
          <tr>
            <td colSpan={3} className={styles.bold}>Total Amount:</td>
            <td className={styles.bold}>$ {totalPrice}</td>
          </tr>
        </table>
        <p className={styles.newpara}>{orderShippedMessage}</p> 
        <button className={styles.btnhome} onClick={handleGotoHome}>Go to Home</button>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => ({
  cartItems: state.cartItems,
});
export default connect(mapStateToProps)(MyOrders);
