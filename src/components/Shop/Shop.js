import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css';
//import ReactDOM from 'react-dom';
import Modal from 'react-modal';

const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      width: '400px',
      height: '460px',
    },
  };

  Modal.setAppElement('#root');
const Shop = () => {
    const [products, setproducts] = useState([]);
    const [cart, setCart] = useState([]);
    const [modalIsOpen, setIsOpen] = React.useState(false);
    const [random, setRandom] = useState([])

    function openModal() {
        setIsOpen(true);
    }

    function closeModal() {
        setIsOpen(false);
      }

    const handleAddToCart = (product) => {
        if(cart.length < 4){
            const newCart = [...cart, product];
            setCart(newCart)
        } else{
            alert('You cannot add more than 4 itms!')
        }
        
    }

    const handleRandom = () => {
        const index = parseInt(Math.random() * 4);
        setRandom(cart[index])
    }

    useEffect( () => {
        fetch('products.json')
        .then(res=>res.json())
        .then(data => setproducts(data))
    }, []);

    const handleReset = () => {
        setCart([]);
    }

//console.log(random)
const {name,img,price,stock} = random;
    return (
        <div className='shop-container'>
            <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <button onClick={closeModal}>X</button>
        <h2>Go and Buy this one</h2>
        <div className='modal-container'>
            <h3>{name}</h3>
            <h3>Price: ${price}</h3>
            <img src={img} alt="" />
            
        </div>
      </Modal>
            <div className="products-container">
               {
                   products.map(product=><Product
                     key={product.id}
                     product={product}
                     handleAddToCart={handleAddToCart}
                     ></Product>)
               }
            </div>
            <div className="cart-container">
                <h3 className='Selected-Books'>Selected Books</h3>
                {
                    cart.map(product => <Cart product={product} key={product.id}></Cart>)
                }
                <div className='button-area'>
                    <button onClick={() => {handleRandom(); openModal()}}>Choose 1 For Me</button> <br />
                    <button onClick={handleReset}>Reset</button>
                </div>
            </div>
        </div>
    );
};

export default Shop;