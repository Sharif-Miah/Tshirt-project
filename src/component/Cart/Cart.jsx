import React from 'react';

const Cart = ({ cart }) => {
    return (
        <div>
            <h1>Cart Summary</h1>
            <h4>Order quentity: {cart.length}</h4>
        </div>
    );
};

export default Cart;