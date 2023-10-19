import { useEffect, useState } from 'react';
import { Modal } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Cartcard from './Cartcard';
import { connect } from 'react-redux';
import { decQty, incQty } from '../../Redux/Meal/mealAction';


function Cart({ cartItems, decreaseQty, increaseQty, handleClose,  show, setCartItemQty ,  setIsMyOrder}) {
    const [totalAmt, setTotalAmt] = useState(10)

    useEffect(() => {
        handleTotalAmt();
        handleCartItemQty();
    }, [cartItems])

    const handleTotalAmt = () => {
        let totalPrice = 0;
        cartItems.map((item) => (
            totalPrice += parseFloat(item.quentity * item.price)
        ))
        setTotalAmt(totalPrice)
    }

    const handleMyOrder = ()=>{
        setIsMyOrder(true)
    }
    const handleCartItemQty = () =>{
        let totalQty = 0;
        cartItems.map((item) => (
            totalQty += item.quentity 
        ))
        setCartItemQty(totalQty)
    }
    return (
        <>
            <div className='cartmodal'>
                <Modal show={show} onHide={handleClose} >
                    <Modal.Header closeButton>
                        <Modal.Title>Your Cart Details:</Modal.Title>
                    </Modal.Header>
                    <Modal.Body >
                        {
                            cartItems.length > 0 ?
                                cartItems.map((item, index) => (
                                    <Cartcard
                                        title={item.title}
                                        quentity={item.quentity}
                                        price={item.price}
                                        onIncQty={(incIndex, incCartIndex) =>
                                            increaseQty(incIndex, incCartIndex)
                                        }
                                        onDecQty={(decIndex, decCartIndex) =>
                                            decreaseQty(decIndex, decCartIndex)
                                        }
                                        itemindex={index}
                                        index={item.id}
                                        key={item.id}
                                    />
                                )) : <h1 className='emptyHeading'>Your Cart Is Empty!!!</h1>
                        }

                    </Modal.Body>
                    <div className="totalamt">
                        {
                            cartItems.length > 0 ? <> <h2>Total Amount:</h2>
                                <h3>$ {totalAmt}</h3> </> : ''
                        }

                    </div>

                    <Modal.Footer>

                        <Button variant="secondary" onClick={handleClose}>
                            Close
                        </Button>
                        {
                            cartItems.length > 0 ? <Button variant="primary" onClick={() => { handleClose(); handleMyOrder(); }}>
                                Order Now
                            </Button> : ''
                        }

                    </Modal.Footer>
                </Modal>
            </div>
        </>
    );
}

const mapStateToProps = (state) => ({
    cartItems: state.cartItems,
});

const mapDispatchToProps = (dispatch) => ({
    increaseQty: (index, cartIndex) => dispatch(incQty(index, cartIndex)),
    decreaseQty: (index, cartIndex) => dispatch(decQty(index, cartIndex))
});

export default connect(mapStateToProps, mapDispatchToProps)(Cart)