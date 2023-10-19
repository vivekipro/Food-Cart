import { toast } from "react-toastify";
import { MEAL_ITEM, ITEM_QUENTITY, ADD_ITEM, DEC_QTY, INC_QTY, EMPTY_QTY } from "./mealType";


const initialState = {
  mealItems: [

    {
      "id": 1,
      "title": "Butter Chicken",
      "desc": "A creamy tomato-based curry with tender chicken pieces.",
      "price": "10.99",
      'quentity': 1
    },
    {
      "id": 2,
      "title": "Paneer Tikka",
      "desc": "Grilled cottage cheese marinated in spices.",
      "price": "8.99",
      'quentity': 1
    },
    {
      "id": 3,
      "title": "Chicken Biryani",
      "desc": "Fragrant rice dish with succulent chicken pieces and aromatic spices.",
      "price": "12.99",
      'quentity': 1
    },
    {
      "id": 4,
      "title": "Dal Makhani",
      "desc": "Creamy lentil curry cooked with butter and spices.",
      "price": "7.99",
      'quentity': 1
    },
    {
      "id": 5,
      "title": "Aloo Paratha",
      "desc": "Stuffed Indian flatbread with spiced potato filling.",
      "price": "6.99",
      'quentity': 1
    },
    {
      "id": 6,
      "title": "Samosas",
      "desc": "Crispy pastry filled with spiced potatoes and peas.",
      "price": "3.99",
      'quentity': 1
    },
    {
      "id": 7,
      "title": "Tandoori Chicken",
      "desc": "Marinated chicken cooked in a tandoor, a clay oven.",
      "price": "9.99",
      'quentity': 1
    },
    {
      "id": 8,
      "title": "Palak Paneer",
      "desc": "Spinach and cottage cheese cooked in a flavorful gravy.",
      "price": "8.99",
      'quentity': 1
    },
    {
      "id": 9,
      "title": "Mutton Rogan Josh",
      "desc": "Tender mutton in a rich and aromatic curry sauce.",
      "price": "13.99",
      'quentity': 1
    },
    {
      "id": 10,
      "title": "Chole Bhature",
      "desc": "Spicy chickpea curry served with deep-fried bread.",
      "price": "7.49",
      'quentity': 1
    }


  ],
  cartItems: []
};

const mealReducer = (state = initialState, action) => {
  switch (action.type) {
    case MEAL_ITEM:
      return {
        ...state,
        mealItems: [...state.mealItems, action.payload],
      };

    case ITEM_QUENTITY:
      const { itemId, newQuantity } = action;
      const updatedMealItems = state.mealItems.map((item) => {
        if (item.id === itemId) {
          return {
            ...item,
            quentity: newQuantity,
          };
        }
        return item;
      });

      return {
        ...state,
        mealItems: updatedMealItems,
      };

    case ADD_ITEM:
      const index = action.payload;
      const selectedMealItem = state.mealItems[index];
      if (isNaN(selectedMealItem.quentity)) {
        toast.error('Quentity Cannot Be Empty!');
        return;
      }      
      const existingCartItem = state.cartItems.find((item) => item.id === selectedMealItem.id);

      toast.success(`${selectedMealItem.title} Added`);
      if (existingCartItem) {
        const updatedCartItems = state.cartItems.map((item) => {
          const itemQuentity = selectedMealItem.quentity
          if (item.id === selectedMealItem.id) {
            const finalQuentity = item.quentity + itemQuentity
            return {
              ...item,
              quentity: finalQuentity,
            };
          }
          return item;
        });

        const updatedMealItems = state.mealItems.map((item) => {
          if (item.id === selectedMealItem.id) {
            return {
              ...item,
              quentity: item.quentity + selectedMealItem.quentity,
            };
          }
          return item;
        });

        return {
          ...state,
          cartItems: updatedCartItems,
          mealItems: updatedMealItems,
        };
      } else {
        
        return {
          ...state,
          cartItems: [...state.cartItems, selectedMealItem],
        };
      }

    case INC_QTY:
      const incId = action.payload - 1;
      const cartIndex = action.newindex;
      const mealItemArray = [...state.mealItems];
      const newQty = mealItemArray[incId].quentity + 1;

      mealItemArray[incId] = {
        ...mealItemArray[incId],
        quentity: newQty,
      };

      const cartItemArray = [...state.cartItems];
      const cartNewQty = cartItemArray[cartIndex].quentity + 1;

      cartItemArray[cartIndex] = {
        ...cartItemArray[cartIndex],
        quentity: cartNewQty
      }

      return {
        ...state,
        mealItems: mealItemArray,
        cartItems: cartItemArray,
      };

    case DEC_QTY:
      const decId = action.payload - 1;
      const decCartIndex = action.newindex;
      const incMealArray = [...state.mealItems];
      let decNetQty = incMealArray[decId].quentity
      if (decNetQty >= 2) {
        decNetQty = decNetQty - 1;
      }
      incMealArray[decId] = {
        ...incMealArray[decId],
        quentity: decNetQty,
      };

      const decCartArray = [...state.cartItems];
      let decCartQty = decCartArray[decCartIndex].quentity
      if (decCartQty >= 2) {
        decCartQty = decCartQty - 1;
      }

      decCartArray[decCartIndex] = {
        ...decCartArray[decCartIndex],
        quentity: decCartQty
      }

      return {
        ...state,
        mealItems: incMealArray,
        cartItems: decCartArray,
      };

      case EMPTY_QTY:
      
      const updatedMealItemsNew = state.mealItems.map((item) => ({
        ...item,
        quantity: 1,
      }));
  
          const updatedCartItems = []
  
          return {
            ...state,
            mealItems: updatedMealItemsNew,
            cartItems: updatedCartItems,
          };
        
  
        return state; 
  


    default:
      return state;
  }
};


export default mealReducer;


