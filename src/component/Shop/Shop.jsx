import React from 'react';
import './Shop.css'

const Shop = ({ tshirt }) => {
    const { picture, gender, name, price } = tshirt;
    return (
        <div className='product-text'>
            <img className='tshirt-img' src={picture} alt="" />
            <p>{name}</p>
            <p>Price: ${price}</p>
            <p>{gender}</p>
            <button className='product-btn'>Bye Now</button>
        </div>
    );
};

export default Shop;