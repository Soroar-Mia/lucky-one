import React from 'react';

const Cart = ({product}) => {
    const {name} = product
    return (
        <div>
            <h5>{name}</h5>
        </div>
    );
};

export default Cart;