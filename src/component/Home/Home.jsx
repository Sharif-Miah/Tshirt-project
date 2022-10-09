import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Cart from '../Cart/Cart';
import Shop from '../Shop/Shop';
import './Home.css';


const Home = () => {
    const tshirts = useLoaderData();
    const [cart, setCart] = useState([]);

    const handleClick = tshirt => {
        const exits = cart.find(ts => ts._id === tshirt._id);
        if (exits) {
            alert('Alredt Buy This products...')
        } else {
            const newCart = [...cart, tshirt];
            setCart(newCart);
        }

    }

    const removeClicked = tshirt => {
        const remaing = cart.filter(ts => ts._id !== tshirt._id);
        setCart(remaing)
    }

    return (
        <div className='main-container'>
            <div className="shop-container">
                {
                    tshirts.map(tshirt => <Shop key={tshirt._id} tshirt={tshirt} handleClick={handleClick} />)
                }
            </div>
            <div className="cart">
                <Cart cart={cart} removeClicked={removeClicked} />
            </div>
        </div>
    );
};

export default Home;