// Navbar.js
import React from 'react';

function Navbar({ cartItemsCount }) {
    return (
        <nav className="navbar navbar-dark bg-dark">
            <div className="container-fluid">
                <span className="navbar-brand mb-0 h1">My Shop</span>
                <span className="text-white">Cart: {cartItemsCount}</span>
            </div>
        </nav>
    );
}

export default Navbar;
