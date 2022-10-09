import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Cart from '../Cart/Cart';
import Shop from '../Shop/Shop';
import './Home.css'

const Home = () => {
    const tshirts = useLoaderData();

    return (
        <div className='main-container'>
            <div className="shop-container">
                {
                    tshirts.map(tshirt => <Shop key={tshirt._id} tshirt={tshirt} />)
                }
            </div>
            <div className="cart">
                <div>
                    <Cart />
                </div>
            </div>
        </div>
    );
};

export default Home;