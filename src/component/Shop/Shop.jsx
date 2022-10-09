import React from 'react';
import './Shop.css';

const Shop = ({ tshirt, handleClick }) => {
    const { picture, gender, name, price } = tshirt;
    return (
        <div className='product-text'>
            <img className='tshirt-img' src={picture} alt="" />
            <p>{name}</p>
            <p>Price: ${price}</p>
            <p>{gender}</p>
            <button onClick={() => handleClick(tshirt)} className='product-btn'>Bye Now</button>
        </div>
    );
};

export default Shop;