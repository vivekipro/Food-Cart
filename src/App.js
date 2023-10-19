import Cart from "./Components/Cart/Cart";
import Itemlist from "./Components/ItemList/Itemlist";
import Navbar from "./Components/Navbar/Navbar";
import './App.css'
import { Provider } from "react-redux";
import { store } from "./store";
import { useState } from "react";
import ImgContainer from "./Components/ImgContainer/ImgContainer";
import Card from "./Components/Card/Card";
import MyOrders from "./Components/MyOrders/MyOrders";
import Loader from "./Components/Loader/Loader";


function App() {
  const [show, setShow] = useState(false);
  const [cartItemQty, setCartItemQty] = useState(0)
  const [isMyOrder, setIsMyOrder] = useState(false)
  const [isLoader, setIsLoader] = useState(true);

  const handleClose = () => {
    setShow(false);

  }
  const handleShow = () => {
    setShow(true);
  }

  const handleGotoHome = () => {
    setTimeout(() => {
      setIsMyOrder(false);
    }, 1500);
    
  }

  setTimeout(() => {
    setIsLoader(false)
  }, 1000);
  return (
    <>
      <Provider store={store}>
        <Navbar
          handleShow={handleShow}
          cartItemQty={cartItemQty}
          setIsLoader={setIsLoader}
        />
        {
          isLoader ? <Loader /> : <>
            {
              isMyOrder ? <MyOrders handleGotoHome={handleGotoHome} /> : null
            }
            {
              !isMyOrder ? <>
                <ImgContainer />
                <Card />
                <Itemlist />
              </> : null
            }

          </>
        }

        {
          isLoader ? <Loader /> : <Cart
            handleClose={handleClose}
            handleShow={handleShow}
            show={show}
            cartItemQty={cartItemQty}
            setCartItemQty={setCartItemQty}
            setIsMyOrder={setIsMyOrder}
          />
        }

      </Provider>

    </>
  );
}

export default App;
