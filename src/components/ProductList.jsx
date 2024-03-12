// ProductList.js
import React from 'react';

function ProductList({ products, addToCart }) {
    return (
        <div className="row">
            {products.map((product) => (
                <div className="col-md-4" key={product._id}>
                    <div className="card mb-4">
                        <img src={product.picture} className="card-img-top" alt={product.name} />
                        <div className="card-body">
                            <h5 className="card-title">{product.name}</h5>
                            <p className="card-text">{product.price}</p>
                            <button className="btn btn-primary" onClick={() => addToCart(product)}>
                                Buy
                            </button>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default ProductList;
