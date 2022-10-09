import React from 'react';
import './Cart.css'

const Cart = ({ cart, removeClicked }) => {
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
            </div>
        </div >
    );
};

export default Cart;