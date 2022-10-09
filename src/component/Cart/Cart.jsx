import React from 'react';
import './Cart.css'

const Cart = ({ cart, removeClicked }) => {
    let massage;
    if (cart.length === 0) {
        massage = <p>Please Buy One Item!!!</p>
    } else if (cart.length === 1) {
        massage = <div>
            <h4>Amar Jonno Ekta Nao.</h4>
            <h5>Tomar Jonn Ekta Nao.</h5>
        </div>
    }
    else {
        massage = <div>Thanks for Bye Item!!</div>
    }
    return (
        <div>
            <h1>Cart Summary</h1>
            <h4>Order quentity: {cart.length}</h4>
            <div>
                {
                    cart.map(tshirt => <p
                        key={tshirt._id}
                    >{tshirt.name}
                        <button onClick={() => removeClicked(tshirt)} className='remove'> X</button>
                    </p>
                    )

                }
                {
                    massage
                }
            </div>
        </div >
    );
};

export default Cart;