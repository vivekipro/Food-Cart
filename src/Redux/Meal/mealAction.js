import { ITEM_QUENTITY, MEAL_ITEM , ADD_ITEM, INC_QTY, DEC_QTY, EMPTY_QTY} from "./mealType";


export const  giveAction = (payloadData) => {
    return {
      type: MEAL_ITEM,
      payload: payloadData,
    };
  };

  export const itemQuentity = (itemId, newQuantity) => {
    
    return {
      type: ITEM_QUENTITY,
      itemId,
      newQuantity
    }
  }

  export const addItem = (index) => {
    return {
      type: ADD_ITEM,
      payload: index
    }
  }

  export const incQty = (index, cartIndex) => {
    console.log(cartIndex)
    return {
      type : INC_QTY,
      payload : index,
      newindex: cartIndex
    }
  }

  export const decQty = (index, cartIndex) => {
    return {
      type : DEC_QTY,
      payload : index,
      newindex : cartIndex
    }
  }

  export const emptyQty = () =>{
    return{
      type: EMPTY_QTY
    }
  }
  
