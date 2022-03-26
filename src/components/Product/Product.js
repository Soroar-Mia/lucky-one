import React from 'react';
import './Product.css';

const Product = ({product, handleAddToCart}) => {
    const {name,img,price,stock} = product;
    return (
        <div className='product'>
        <img src={img} alt=""></img>
            <div className='product-info'>
            <p className='product-name'>{name}</p>
            <p>Price : {price}</p>
            <p>Stock : {stock}</p>
            </div>
            <button onClick={() => handleAddToCart(product)} className='btn-cart'>
                <p className='btn-text'><b>Add to Cart</b></p>
            </button>
        </div>
    );
};

export default Product;