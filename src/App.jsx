// App.js
import React, { useState } from 'react';
import Navbar from './components/Navbar';
import ProductList from './components/ProductList';
import Cart from './components/Cart';
import products from './data/product.json';

function App() {
    const [cartItems, setCartItems] = useState([]);

    const addToCart = (product) => {
        setCartItems([...cartItems, product]);
    };

    return (
        <div>
            <Navbar cartItemsCount={cartItems.length} />
            <div className="container">
                <ProductList products={products} addToCart={addToCart} />
                <Cart cartItems={cartItems} />
            </div>
        </div>
    );
}

export default App;
