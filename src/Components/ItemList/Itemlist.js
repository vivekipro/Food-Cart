import React, { useState } from 'react'
import Itemcard from './Itemcard'
import styles from './Itemlist.module.css';
import { connect } from 'react-redux';
import { addItem, giveAction, itemQuentity } from '../../Redux/Meal/mealAction';

function Itemlist({ mealItem, giveActionFunc, itemQuentityFunc, handleAddItem }) {
  const handleQuantityChange = (itemId, newQuantity) => {
    itemQuentityFunc(itemId, newQuantity);
  };

  const handleAddItemInCart = (index) => {
    
    handleAddItem(index)
  }

  return (
    <>
      <div className={styles.itemlistcontainer}>
        <div className={styles.itemlist}>
          {mealItem.map((item, index) => (
            <Itemcard
              title={item.title}
              desc={item.desc}
              price={item.price}
              quentity={item.quentity}
              onQuantityChange={(newQuantity) =>
                handleQuantityChange(item.id, newQuantity)
              }
              onAddItem={(cartindex) =>
                handleAddItemInCart(cartindex)
              }
              index={index}
              
              key={item.id}
            />
          ))}
        </div>
      </div>
    </>
  )
}

const mapStateToProps = (state) => ({
  mealItem: state.mealItems,
});

const mapDispatchToProps = (dispatch) => ({
  giveActionFunc: () => dispatch(giveAction()),
  itemQuentityFunc: (itemId, newQuantity) => dispatch(itemQuentity(itemId, newQuantity)),
  handleAddItem: (index) => dispatch(addItem(index))
});


export default connect(mapStateToProps, mapDispatchToProps)(Itemlist);
