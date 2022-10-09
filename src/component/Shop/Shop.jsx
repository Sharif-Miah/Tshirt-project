import React from 'react';

const Shop = ({ tshirt }) => {
    const { picture, gender, name, price } = tshirt;
    return (
        <div>
            <div>
                <img src={picture} alt="" />
            </div>
            <h4>{name}</h4>
            <p>Price: ${price}</p>
            <p>{gender}</p>
        </div>
    );
};

export default Shop;