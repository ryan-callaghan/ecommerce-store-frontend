import React from 'react';
import './ProductContainer.css';

const ProductContainer = ({product}) => {
    return(
        <div className = 'productcontainer'>
            <h2>{product.name}</h2>
            <p className = 'price'>${product.price}</p>
            <img src={product.image} className = 'img' alt={product.name}/>
            <p className = 'stock'>Stock: {product.stock}</p>
            <div className = 'buttons'>
                <button className = 'details'>View Details</button>
                <button className = 'cart'>Add to cart</button>
            </div>
        </div>
    )
}

export default ProductContainer;